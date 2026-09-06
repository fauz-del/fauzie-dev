import React, { useEffect, useRef, useState, Children, cloneElement, isValidElement } from 'react'


function splitIntoWordSpans(children, keyPrefix = 'w') {
  let key = 0
  const walk = (nodes) =>
    Children.map(nodes, (child) => {
      key += 1
      if (typeof child === 'string') {
        const parts = child.split(/(\s+)/).filter((p) => p.length > 0)
        return parts.map((part, i) =>
          /\s+/.test(part) ? (
            <React.Fragment key={`${keyPrefix}-sp-${key}-${i}`}>{part}</React.Fragment>
          ) : (
            <span className="wtr-word" key={`${keyPrefix}-${key}-${i}`}>
              {part}
            </span>
          )
        )
      }
      if (isValidElement(child)) {
        return cloneElement(child, { children: walk(child.props.children) })
      }
      return child
    })
  return walk(children)
}

export default function WebGLTextReveal({
  children,
  as: Tag = 'h1',
  className = '',
  duration = 1300,
  delay = 0,
  onDone,
}) {
  const containerRef = useRef(null)
  const canvasRef = useRef(null)
  const [done, setDone] = useState(false)
  const [canvasVisible, setCanvasVisible] = useState(true)

  useEffect(() => {
    const reduceMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const container = containerRef.current
    const canvas = canvasRef.current
    if (!container || !canvas) return

    if (reduceMotion) {
      setCanvasVisible(false)
      setDone(true)
      onDone && onDone()
      return
    }

    const gl = canvas.getContext('webgl', { alpha: true, premultipliedAlpha: false })
    if (!gl) {
      setCanvasVisible(false)
      setDone(true)
      onDone && onDone()
      return
    }

    let raf
    let startTime = null
    let destroyed = false

    const vertSrc = `
      attribute vec2 aPos;
      varying vec2 vUv;
      void main() {
        vUv = aPos * 0.5 + 0.5;
        gl_Position = vec4(aPos, 0.0, 1.0);
      }
    `
    const fragSrc = `
      precision highp float;
      varying vec2 vUv;
      uniform sampler2D uTex;
      uniform float uProgress;
      uniform vec2 uRes;
      uniform vec3 uGlow;

      float rand(vec2 st) {
        return fract(sin(dot(st, vec2(12.9898, 78.233))) * 43758.5453123);
      }
      float noise(vec2 st) {
        vec2 i = floor(st);
        vec2 f = fract(st);
        float a = rand(i);
        float b = rand(i + vec2(1.0, 0.0));
        float c = rand(i + vec2(0.0, 1.0));
        float d = rand(i + vec2(1.0, 1.0));
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
      }

      void main() {
        vec2 uv = vec2(vUv.x, 1.0 - vUv.y);
        vec4 tex = texture2D(uTex, uv);

        float n = noise(uv * vec2(uRes.x / 34.0, uRes.y / 34.0));
        float threshold = uv.x * 0.65 + uv.y * 0.25 + n * 0.32;

        float reveal = step(threshold, uProgress);
        float glowBand = smoothstep(uProgress, uProgress - 0.08, threshold) - reveal;

        vec3 color = tex.rgb + uGlow * glowBand * 1.4;
        float alpha = tex.a * reveal + glowBand * 0.55;
        gl_FragColor = vec4(color, alpha);
      }
    `

    function compile(type, src) {
      const s = gl.createShader(type)
      gl.shaderSource(s, src)
      gl.compileShader(s)
      return s
    }
    const vs = compile(gl.VERTEX_SHADER, vertSrc)
    const fs = compile(gl.FRAGMENT_SHADER, fragSrc)
    const program = gl.createProgram()
    gl.attachShader(program, vs)
    gl.attachShader(program, fs)
    gl.linkProgram(program)
    gl.useProgram(program)

    const quad = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1])
    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(gl.ARRAY_BUFFER, quad, gl.STATIC_DRAW)
    const aPos = gl.getAttribLocation(program, 'aPos')
    gl.enableVertexAttribArray(aPos)
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0)

    const uProgress = gl.getUniformLocation(program, 'uProgress')
    const uRes = gl.getUniformLocation(program, 'uRes')
    const uGlow = gl.getUniformLocation(program, 'uGlow')
    const texture = gl.createTexture()

    gl.enable(gl.BLEND)
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)

    function buildTextureFromDOM() {
      const rect = container.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const w = Math.max(1, Math.round(rect.width))
      const h = Math.max(1, Math.round(rect.height))

      canvas.style.width = w + 'px'
      canvas.style.height = h + 'px'
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      gl.viewport(0, 0, canvas.width, canvas.height)

      const off = document.createElement('canvas')
      off.width = canvas.width
      off.height = canvas.height
      const ctx = off.getContext('2d')
      ctx.scale(dpr, dpr)

      const words = container.querySelectorAll('.wtr-word')
      words.forEach((word) => {
        const wr = word.getBoundingClientRect()
        const cs = window.getComputedStyle(word)
        ctx.font = `${cs.fontStyle} ${cs.fontWeight} ${cs.fontSize}/${cs.lineHeight} ${cs.fontFamily}`
        ctx.fillStyle = cs.color
        ctx.textBaseline = 'alphabetic'
        const x = wr.left - rect.left
        // approximate baseline from font metrics
        const fontSizePx = parseFloat(cs.fontSize)
        const y = wr.top - rect.top + fontSizePx * 0.87
        ctx.fillText(word.textContent, x, y)
      })

      gl.bindTexture(gl.TEXTURE_2D, texture)
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, off)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)

      gl.uniform2f(uRes, canvas.width, canvas.height)
      gl.uniform3f(uGlow, 0.878, 0.478, 0.373) // #E07A5F
    }

    function draw(t) {
      if (destroyed) return
      if (startTime === null) startTime = t
      const elapsed = Math.max(0, t - startTime - delay)
      const p = Math.min(1, elapsed / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      const progress = -0.15 + eased * 1.45

      gl.clearColor(0, 0, 0, 0)
      gl.clear(gl.COLOR_BUFFER_BIT)
      gl.uniform1f(uProgress, progress)
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)

      if (p < 1 || elapsed < 0) {
        raf = requestAnimationFrame(draw)
      } else {
        setTimeout(() => {
          if (!destroyed) {
            setCanvasVisible(false)
            setDone(true)
            onDone && onDone()
          }
        }, 120)
      }
    }

    // wait one frame so fonts/layout are settled before measuring
    const fontsReady = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()
    fontsReady.then(() => {
      if (destroyed) return
      buildTextureFromDOM()
      raf = requestAnimationFrame(draw)
    })

    const onResize = () => {
      if (done) return
      buildTextureFromDOM()
    }
    window.addEventListener('resize', onResize)

    return () => {
      destroyed = true
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const content = splitIntoWordSpans(children)

  return (
    <div ref={containerRef} className="relative inline-block w-full">
      <Tag
        className={className}
        style={{ visibility: done ? 'visible' : 'hidden' }}
      >
        {content}
      </Tag>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{ opacity: canvasVisible ? 1 : 0 }}
        aria-hidden="true"
      />
    </div>
  )
}
