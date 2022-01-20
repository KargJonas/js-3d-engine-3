const cnv = document.querySelector('canvas');
const ctx = new RenderingContext(cnv, 400, 400);

const cam1 = new Camera(v(0, 0, -2), v(0, 0, 0));
const light1 = new DirectionalLight(v(-1, 0, 0));
const scene1 = new Scene(cam1);
const renderer = new Renderer(ctx);

const timer1 = new Timer();

// const MODEL = 'assets/cube.stl';
// const MODEL = 'assets/torus.stl';
// const MODEL = 'assets/torus-hifi.stl';
// const MODEL = 'assets/monkey.stl';
const MODEL = 'assets/monkey-hifi.stl';

let solid1, solid2;

async function init() {
  solid1 = new Solid(
    v(0, 0, 0),
    v(0, 0, 0),
    await readFile(MODEL)
  );

  solid2 = new Solid(
    v(0, 0, 0),
    v(0, 0, 0),
    await readFile('assets/monkey.stl')
  );

  solid1.move(v(0, 0, 2));
  solid2.move(v(0, 0, 8));

  scene1.addSolid(solid1, 'my-torus');
  // scene1.addSolid(solid2, 'my-cube');
  scene1.addLight(light1);
  // scene1.camera.aimTowards(solid1.position);

  timer1.start();
  draw();
}

function draw() {
  requestAnimationFrame(draw);

  // const t = timer1.seconds() / 2;
  // const t = 1<;
  // solid1.rotate(v(t, t, 0));
  solid1.rotate(v(0, 0.5, 0));
  // solid2.rotate(v(-t, -t, 0));
  renderer.render(scene1);
}

init();