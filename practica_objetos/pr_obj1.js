function Rectangulo(ancho, alto) {
  
  // Validación
  //Si el ancho no es un número o es menor o igual a cero, se asignará un valor por defecto de 1
  if (isNaN(ancho) || ancho <= 0) {
    this.width = 1;
  } else {
    this.width = ancho;
  }

  //Si el alto no es un número o es menor o igual a cero, se asignará un valor por defecto de 1
  if (isNaN(alto) || alto <= 0) {
    this.height = 1;
  } else {
    this.height = alto;
  }
  
  //Método para mostrar el rectángulo
  this.mostrarRectangulo = () => { 
    return `Rectangulo de ancho ${this.width} y alto ${this.height}`;
  };

  //Si nuevo ancho o alto no es un número o es menor o igual a cero, se asigna un valor de 1
  //en caso contrario se le asigna un nuevo valor
  this.cambiarDimensiones = (nuevoAncho, nuevoAlto) => {
    if (isNaN(nuevoAncho) || nuevoAncho <= 0) {
      this.width = 1;
    } else {
      this.width = nuevoAncho;
    }

    if (isNaN(nuevoAlto) || nuevoAlto <= 0) {
      this.height = 1;
    } else {
      this.height = nuevoAlto;
    }
  }

  this.calcularArea = () => { 
    return this.width * this.height;
  };

  //Devuleve un nuevo objeto rectangulo con las mismas dimesiones
  this.copia = () => {
    return new Rectangulo(this.width, this.height);
  }

  // Comprobamos con instanceof si nuevoRectangulo es un objeto que fue creado a partir de la clase Rectangulo
  this.comparar = (nuevoRectangulo) => {
    if (!(nuevoRectangulo instanceof Rectangulo)) {
      return 'El objeto no es válido.'
    }

    const area1 = this.calcularArea();
    const area2 = nuevoRectangulo.calcularArea();
    
    //si el rectángulo actual es más grande
    if (area1 > area2) {
      return 'Mayor';
      //si el rectángulo actual es más pequeño
    } else if (area1 < area2) {
      return 'Menor';
      //o si son iguales
    } else {
      return 'Igual';
    }

  }
}

const rect0 = new Rectangulo('hola', 3);
const rect1 = new Rectangulo(5, 10); 
const rect2 = new Rectangulo(4, 12); 

console.log(rect0.mostrarRectangulo()); 
console.log(rect1.mostrarRectangulo()); 
console.log(rect2.mostrarRectangulo());

console.log(rect1.calcularArea()); 
console.log(rect2.calcularArea()); 

const rect3 = new Rectangulo(5, 10);

console.log(rect1.comparar(rect2)); 
console.log(rect2.comparar(rect1)); 
console.log(rect1.comparar(rect3)); 

rect1.cambiarDimensiones(3, 6);
console.log(rect1.mostrarRectangulo());

const rect4 = rect2.copia(); 
console.log(rect4.mostrarRectangulo()); 