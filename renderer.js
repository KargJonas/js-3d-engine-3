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

    const adjustedSolids = solids.map(solid => solid.computeAdjusted());

    for (const solid of adjustedSolids) {
      for (const triangle of solid.triangles) {
        const depth = triangle.getDistanceFromCamera(camera);
        triangle.depth = depth;
      }

      solid.triangles = solid.triangles.sort((a, b) => b.depth - a.depth);
    }

    for (const solid of adjustedSolids) {
      for (const triangle of solid.triangles) {
        const vertices = triangle.vertices
          .map(vertex => vertex.projectZ());

        const firstVertex = vertices[0];
        const brightness = triangle.normal.dot(lights[0].direction) * 255;
        // const dist = t(...vertices).getDistanceFromCamera(camera);

        ctx.beginPath();
        ctx.moveTo(firstVertex.x, firstVertex.y);

        for (const vertex of vertices) {
          ctx.lineTo(vertex.x, vertex.y);
        }

        ctx.closePath();
        ctx.fillStyle = `rgb(${brightness},${brightness},${brightness})`;
        ctx.fill();

        // ctx.stroke();
      }
    }
  }
}