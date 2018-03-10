function main(): void {
  const canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('glCanvas')!;
  const gl = canvas.getContext('webgl');

  // Only continue if WebGL is available and working
  if (!gl) {
    alert('Unable to initialize WebGL. Your browser or machine may not support it.');
    return;
  }

  // Set clear color
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  // Clear the color buffer
  gl.clear(gl.COLOR_BUFFER_BIT);
}

main()