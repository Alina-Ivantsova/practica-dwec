// Se define un objeto llamado 'products'.
// Cada producto tiene un id único como clave y atributos: nombre, precio y cantidad en stock.
const products = {
  1: { name: 'Laptop', price: 1000, stock: 5 },
  2: { name: 'Mouse', price: 20, stock: 10 },
  3: { name: 'Keyboard', price: 50, stock: 0 },
};


// La función recibe un id de producto y una cantidad como parámetros 
// y devuleve una Promesa que verifica si hay suficiente stock, mínimo igual a la cantidad solicitada
function checkStock(productId, quantity) {
  return new Promise((resolve, reject) => {
    if (products[productId].stock >= quantity) {
      resolve(`Stock disponible para el producto ${products[productId].name}`);
    } else {
      reject(`Stock insuficiente para el producto ${products[productId].name}`);
    }
  });
}

// La función calculateTotal recibe un id de producto y una cantidad
// Calcula el precio total multiplicando el precio del producto por la cantidad
function calculateTotal(productId, quantity) {
  return new Promise((resolve) => {
    let total = products[productId].price * quantity;
    resolve(
      `Total para ${quantity} unidades de ${products[productId].name}: ${total}`
    );
  });
}

// La función confirmOrder simula la confirmación de un pedido
// Después de 2 segundos, resuelve la promesa con el mensaje de confirmación
function confirmOrder(productId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Pedido confirmado para el producto ${products[productId].name}`);
    }, 2000);
  });
}

//Variables para hacer la prueba
let productId = 2;
let quantity = 10;

// Se verifica el stock del producto, 
// Si no hay suficiente stock, se interrumpe y se maneja el error en el bloque catch
checkStock(productId, quantity)
  .then((stockMessage) => console.log(stockMessage))
  .then(() => calculateTotal(productId, quantity))
  .then((totalMessage) => console.log(totalMessage))
  .then(() => confirmOrder(productId))
  .then((orderMessage) => console.log(orderMessage))
  // Si en cualquier momento ocurre un error, se captura y se imprime el error
  .catch(console.error);
