class Scene {
  constructor(camera) {
    this.camera = camera;
    this.solids = [];
    this.lights = [];

    this.solidIDs = {};
  }

  addSolid(solid, name) {
    const index = this.solids.length;
    this.solids.push(solid);
    this.solidIDs[name] = index;
  }

  getSolid(name) {
    const index = this.solidIDs[name];
    return this.solids[index];
  }
}