class Scene {
  constructor(camera) {
    this.camera = camera;
    this.solids = [];
    this.lights = [];

    this.solidNames = {};
  }

  addSolid(solid, name) {
    const index = this.solids.length;
    this.solidNames[name] = index;
    this.solids.push(solid);
  }

  getSolid(name) {
    const index = this.solidNames[name];
    return this.solids[index];
  }

  addLight(light) {
    this.lights.push(light);
  }
}