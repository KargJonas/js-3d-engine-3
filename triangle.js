class Triangle {
  constructor(normal, ...vertices) {
    this.vertices = vertices;
    this.normal = normal;
  }
}

function t(...vertices) {
  return new Triangle(...vertices);
}