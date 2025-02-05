const userList = document.getElementById('user-list');
const errorMessage = document.getElementById('error-message');
const quantityInput = document.getElementById('quantity');

let temporizadorTimeout;
// Función asincrónica para obtener los datos y mostrarlos
async function fetchData() {
  // Limpiamos la lista y el mensaje de error antes de hacer la nueva solicitud
  userList.innerHTML = '';
  errorMessage.textContent = '';

  const quantity = quantityInput.value.trim();


  if (isNaN(quantity) || quantity <= 0) {
    return; // No realizar ninguna acción si el valor es 0 o no es un número
  }
  // Construir URL según los parámetros seleccionados
  let url = `https://fakerapi.it/api/v2/persons?_quantity=${quantity}`;


  try {
    const response = await fetch(url);
    // Verificar si la respuesta fue exitosa
    if (!response.ok) {
     throw new Error(`Error HTTP: ${response.status}`);
    }

    // Parsear la respuesta JSON
    const data = await response.json();
    // Iterar sobre los usuarios y agregarlos al <ul>
    data.data.forEach((user) => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
      ${user.firstname} ${user.lastname}<br>
      ${user.email}<br>
      ${user.address.street} (${user.address.city})`;
      userList.appendChild(listItem);
    });
  } catch (error) {
  // Manejo de errores
    console.error('Error al cargar los datos:', error);
    errorMessage.textContent =
    'Error al cargar los datos: ' + error.message; // Mostrar el mensaje de error en la página
  } 
}

// Añadir Event Listeners a los elementos
quantityInput.addEventListener('input', () => {
  clearTimeout(temporizadorTimeout); // Elimina el temporizador anterior
  temporizadorTimeout = setTimeout(fetchData, 500); // Espera 500ms antes de ejecutar fetchData
});
// Llamamos a la función para obtener los datos al cargar la página
