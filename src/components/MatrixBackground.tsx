import { useEffect, useRef } from 'react';

function createShader(gl: WebGLRenderingContext, type: number, source: string): WebGLShader | null {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error('Shader compile error:', gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

function createProgram(gl: WebGLRenderingContext, vsSource: string, fsSource: string): WebGLProgram | null {
  const vs = createShader(gl, gl.VERTEX_SHADER, vsSource);
  const fs = createShader(gl, gl.FRAGMENT_SHADER, fsSource);
  if (!vs || !fs) return null;
  const program = gl.createProgram();
  if (!program) return null;
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error('Program link error:', gl.getProgramInfoLog(program));
    return null;
  }
  gl.useProgram(program);
  return program;
}

const vsSource = `
  attribute vec2 a_pos;
  void main() {
    gl_Position = vec4(a_pos, 0.0, 1.0);
  }
`;

const fsSource = `
  precision highp float;
  uniform vec2 u_res;
  uniform float u_time;
  uniform sampler2D u_fontTex;
  uniform vec2 u_fontSize;
  uniform vec2 u_grid;
  uniform float u_charCount;
  uniform float u_speed;
  uniform float u_opacity;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

  void main() {
    vec2 pixel = gl_FragCoord.xy;
    vec2 cellSize = u_res / u_grid;
    vec2 cellId = floor(pixel / cellSize);
    vec2 cellUV = fract(pixel / cellSize);

    float rnd = hash(cellId);
    float cycleDur = 2.5 + rnd * 2.0;
    float localTime = mod(u_time * u_speed + rnd * 6.28, cycleDur);
    float glyphIndex = floor(mod(localTime * 8.0 + rnd * 100.0, u_charCount));

    vec2 fontCoord = vec2(
      mod(glyphIndex, floor(u_fontSize.x)),
      floor(glyphIndex / floor(u_fontSize.x))
    );

    vec2 charSize = vec2(1.0) / u_fontSize;
    vec2 charPixel = cellUV * charSize + fontCoord * charSize;
    float glyphAlpha = texture2D(u_fontTex, charPixel).r;

    float isBright = step(0.5, hash(cellId + floor(u_time)));
    vec3 dimColor  = vec3(0.05, 0.07, 0.12);
    vec3 litColor1 = vec3(0.22, 0.74, 0.97);
    vec3 litColor2 = vec3(0.56, 0.93, 0.99);
    vec3 col = mix(dimColor, mix(litColor1, litColor2, rnd), isBright);

    float alpha = glyphAlpha * u_opacity;
    gl_FragColor = vec4(col * alpha, alpha);
  }
`;

export function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl', { alpha: true, premultipliedAlpha: false });
    if (!gl) return;

    const program = createProgram(gl, vsSource, fsSource);
    if (!program) return;

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]), gl.STATIC_DRAW);
    const aPos = gl.getAttribLocation(program, 'a_pos');
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const fontW = 10;
    const fontH = 12;
    const chars = '01oOIl_-=|:';
    const fontAtlas = document.createElement('canvas');
    const gridSize = Math.ceil(Math.sqrt(chars.length));
    fontAtlas.width = fontW * gridSize;
    fontAtlas.height = fontH * gridSize;
    const fCtx = fontAtlas.getContext('2d');
    if (!fCtx) return;

    fCtx.fillStyle = 'black';
    fCtx.fillRect(0, 0, fontAtlas.width, fontAtlas.height);
    fCtx.fillStyle = 'white';
    fCtx.font = `${fontH - 2}px monospace`;
    for (let i = 0; i < chars.length; i++) {
      fCtx.fillText(
        chars[i],
        (i % gridSize) * fontW + 1,
        Math.floor(i / gridSize) * fontH + fontH - 2
      );
    }

    const tex = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.LUMINANCE, fontAtlas.width, fontAtlas.height, 0, gl.LUMINANCE, gl.UNSIGNED_BYTE, fCtx.getImageData(0, 0, fontAtlas.width, fontAtlas.height).data);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

    const uRes = gl.getUniformLocation(program, 'u_res');
    const uTime = gl.getUniformLocation(program, 'u_time');
    const uGrid = gl.getUniformLocation(program, 'u_grid');
    const uFontSize = gl.getUniformLocation(program, 'u_fontSize');
    const uCharCount = gl.getUniformLocation(program, 'u_charCount');
    const uSpeed = gl.getUniformLocation(program, 'u_speed');
    const uOpacity = gl.getUniformLocation(program, 'u_opacity');
    const uFontTex = gl.getUniformLocation(program, 'u_fontTex');

    gl.uniform2f(uFontSize, gridSize, gridSize);
    gl.uniform1f(uCharCount, chars.length);
    gl.uniform1f(uSpeed, 0.8);
    gl.uniform1f(uOpacity, 1.0);
    gl.uniform1i(uFontTex, 0);

    let running = true;
    let rafId: number;

    function render(time: number) {
      if (!running || !canvas || !gl) return;

      const dpr = Math.min(window.devicePixelRatio, 1.5);
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      if (canvas.width !== Math.floor(w * dpr) || canvas.height !== Math.floor(h * dpr)) {
        canvas.width = Math.floor(w * dpr);
        canvas.height = Math.floor(h * dpr);
      }

      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, time * 0.001);
      gl.uniform2f(uGrid, 40, 30);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      rafId = requestAnimationFrame(render);
    }

    rafId = requestAnimationFrame(render);

    return () => {
      running = false;
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
      }}
    />
  );
}
