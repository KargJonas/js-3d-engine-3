class Timer {
  constructor() {
    this.startTime = undefined;
  }

  start() {
    this.startTime = Date.now();
  }

  millis() {
    return Date.now() - this.startTime;
  }

  seconds() {
    return (Date.now() - this.startTime) / 1000;
  }
}