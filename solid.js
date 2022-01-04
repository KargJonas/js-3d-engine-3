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

  computeAdjusted() {
    const adjustedTriangles = this.triangles.map(({ normal, vertices }) => {
      const adjustedVertices = vertices
        .map(vertex => vertex.add(this.position))
        .map(vertex => vertex.rotateAround(this.position, this.rotation))

      const adjustedNormal = normal.rotate(this.rotation);

      return t(adjustedNormal, ...adjustedVertices);
    });

    return new Solid(
      this.position,
      this.rotation,
      adjustedTriangles
    );
  }
}