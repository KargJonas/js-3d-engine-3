class Vector extends Array {
  constructor(...components) {
    super(...components);
    // this = components;


    this.x = components[0];
    this.y = components[1];
    this.z = components[2];
    this.w = components[3];
  }

  // Initialize vector using polar coordinates in n dimensions
  static fromPolar(radius, ...angles) {
    let euclidean = Array(angles.length + 1).fill(0);
    let sinProduct = 1;

    for (let i = 0; i < angles.length; i++) {
      euclidean[i] = sinProduct * Math.cos(angles[i]);
      sinProduct *= Math.sin(angles[i]);
    }

    euclidean[angles.length] = sinProduct;
    euclidean = euclidean
      .map(coordinate => coordinate * radius);

    return new Vector(...euclidean);
  }

  clone() {
    return new Vector(...this);
  }

  mul(factor) {
    return new Vector(...this
      .map(component => component * factor));
  }

  div(factor) {
    return new Vector(...this
      .map(component => component / factor));
  }

  mag() {
    return Math.sqrt(
      this
        .map(component => Math.sqrt(component, 2))
        .reduce((acc, value) => acc + value));
  }

  unit() {
    return this.div(this.mag());
  }

  scale(length) {
    return this.unit().mul(length);
  }

  add(other) {
    return new Vector(...this.map(
      (component, index) => component + other[index]));
  }

  sub(other) {
    return new Vector(...this.map(
      (component, index) => component - other[index]));
  }

  dist(other) {
    return this.sub(other).mag();
  }

  dot(other) {
    return this
      .map((component, index) => component * other[index])
      .reduce((acc, value) => acc + value);
  }

  cross(other) {
    return new Vector(
      this.y * other.z - this.z * other.y,
      this.z * other.x - this.x * other.z,
      this.x * other.y - this.y * other.x
    );
  }
}

function v(...components) {
  return new Vector(...components);
}