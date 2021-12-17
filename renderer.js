class Renderer {
  constructor(renderingContext) {
    this.ctx = renderingContext;
  }

  // project({ vertices, normal }) {
  //   return normal, vertices.map(vertex => vertex.div(vertex.z));
  // }

  // drawTriangleWireFrame(triangle) {
  //   const ctx = this.ctx.context;    
  //   const vertices = triangle.vertices.map(vertex => vertex.projectZ());
  //   const firstVertex = vertices[0];

  //   ctx.beginPath();
  //   ctx.moveTo(firstVertex.x, firstVertex.y);

  //   for (const vertex of vertices) {
  //     ctx.lineTo(vertex.x, vertex.y);
  //     console.log(vertex)
  //   }

  //   ctx.stroke();
  // }

  render({ camera, solids, lights }) {
    const ctx = this.ctx.context;
    ctx.clearRect(-1, -1, 2, 2);

    for (const solid of solids) {
      for (const triangle of solid.triangles) {
        const vertices = triangle.vertices
          .map(vertex => vertex.add(solid.position))
          .map(vertex => vertex.rotateAround(solid.position, solid.rotation))
          .map(vertex => vertex.projectZ());

        const firstVertex = vertices[0];

        ctx.beginPath();
        ctx.moveTo(firstVertex.x, firstVertex.y);

        for (const vertex of vertices) {
          ctx.lineTo(vertex.x, vertex.y);
        }

        ctx.stroke();
      }
    }
  }
}