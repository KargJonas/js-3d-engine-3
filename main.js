const cam1 = new Camera(v(0, 0, -2), v(0, 0, 0));
const scene1 = new Scene(cam1);

async function init() {
  const solid1 = new Solid(
    v(0, 0, 0),
    v(0, 0, 0),
    await readFile('cube.stl')
  );

  scene1.addSolid(solid1, 'my-cube');
  scene1.camera.aimTowards(v(0, 0, 0));
}

init();