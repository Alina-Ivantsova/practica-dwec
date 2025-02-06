const BASE_URL = 'https://reqres.in/api/users/';
const POSTMAN_URL = 'https://httpbin.org/post';

//Código principal dentro del evento load
// para asegurar la carga de los componentes
window.addEventListener('load', (ev) => {
  let numsecs = document.getElementById('numsecs');
  let user = document.getElementById('user');
  let boton = document.querySelector('button');

  boton.addEventListener('click', (ev) => {
    ev.preventDefault();
    clearFields();
    procesarFetch(numsecs.value, user.value);
  });
});

function clearFields() {
  document.querySelectorAll('span').forEach((element) => {
    element.innerHTML = '';
    console.log(element);
  });
}

async function procesarFetch(numsecs, userId) {
  try {
    // Obtenemos usuario
    const userResult = await fetch(`${BASE_URL}${userId}?delay=${numsecs}`);

    if (!userResult.ok) {
      throw new Error(`Error ${userResult.status}: Usuario no encontrado`);
    }

    const userData = await userResult.json();
    const user = userData.data;

    // Mostramos datos del usuario
    document.getElementById('id').textContent = user.id;
    document.getElementById('email').textContent = user.email;

    // Creamos usuario con POST
    const postResult = await fetch(POSTMAN_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });

    const postData = await postResult.json();
    
    // Mostramos el First Name del usuario creado
    document.getElementById('name').textContent = postData.json.first_name;

    // Mostramos estado de la operación
    document.getElementById('status').textContent = 200;
  } catch (error) {
    console.error('Error:', error);
    document.getElementById('status').textContent = error.message;
  }
}
