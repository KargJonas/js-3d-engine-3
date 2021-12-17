class Solid {
  constructor(position, rotation, triangles) {
    this.position = position;
    this.rotation = rotation;
    this.triangles = triangles;
  }

  move(position) {
    this.position = position;
  }

  rotate(rotation) {
    this.rotation = rotation;
  }
}