const cnv = document.querySelector('canvas');
const ctx = new RenderingContext(cnv, 400, 400);

const cam1 = new Camera(v(0, 0, -2), v(0, 0, 0));
const light1 = new DirectionalLight(v(-1, 0, 0));
const scene1 = new Scene(cam1);
const renderer = new Renderer(ctx);

const timer1 = new Timer();

// const MODEL = 'assets/cube.stl';
const MODEL = 'assets/torus.stl';
// const MODEL = 'assets/monkey.stl';

let solid1;

async function init() {
  solid1 = new Solid(
    v(0, 0, 0),
    v(0, 0, 0),
    await readFile(MODEL)
  );

  solid1.move(v(0, 0, 2));
  scene1.addSolid(solid1, 'my-cube');
  scene1.addLight(light1);
  // scene1.camera.aimTowards(solid1.position);
  // renderer.render(scene1);

  timer1.start();
  draw();
}

function draw() {
  requestAnimationFrame(draw);

  const t = timer1.seconds() / 2;
  solid1.rotate(v(t, t, 0));
  // solid1.rotate(v(2.4, 0, 1));
  renderer.render(scene1);
}

init();