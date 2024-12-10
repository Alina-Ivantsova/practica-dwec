function Rectangulo(ancho, alto) {
  (this.width = ancho), (this.height = alto);
  this.mostrarRectangulo = () => {
    if (isNaN(this.width) || this.width <= 0) {
      this.width = 1;
    }
    if (isNaN(this.height) || this.height <= 0) {
      this.height = 1;
    }
    return `Rectangulo de ancho ${this.width} y alto ${this.height}`;
  };

  this.cambirDimensiones(nuevoAncho, nuevoAlto) {
    this.width = nuevoAncho;
    this.height = nuevoAlto;
    return;
  }
}

let rectangulo1 = new Rectangulo('hola', 3);
console.log(rectangulo1.mostrarRectangulo());
console.log(rectangulo1.cambirDimensiones(4,4).mostrarRectangulo());