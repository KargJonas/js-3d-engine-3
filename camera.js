class Camera {
  constructor(position, rotation) {
    this.position = position;
    this.rotation = rotation;
    this.direction = v(0, 0, 1); // !!! this needs to be calculated from rotation
  }

  aimTowards(point) {

  }
}