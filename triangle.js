class Triangle {
  constructor(normal, ...vertices) {
    this.vertices = vertices;
    this.normal = normal;
    this.depth = undefined;
  }

  getDistanceFromCamera(camera) {
    return this.vertices
      .reduce((accumulator, vertex) => accumulator.add(vertex), v3())
      .div(3)
      .dist(camera.position);
  }
}

function t(...vertices) {
  return new Triangle(...vertices);
}