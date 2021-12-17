class RenderingContext {
  constructor(element, width, height) {
    this.element = element;
    this.width = width;
    this.height = height;

    this.element.width = this.width;
    this.element.height = this.height;

    this.context = this.element.getContext('2d');
    this.context.scale(this.width / 2, this.height / 2);
    this.context.translate(1, 1);
    this.context.lineWidth = 3 / this.width;
  }
}