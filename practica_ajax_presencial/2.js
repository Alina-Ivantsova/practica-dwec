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
    // 1) OBTENER USUARIO
    const userResponse = await fetch(`${BASE_URL}${userId}?delay=${numsecs}`);

    if (!userResponse.ok) {
      throw new Error(`Error ${userResponse.status}: Usuario no encontrado`);
    }

    const userData = await userResponse.json();
    const user = userData.data;

    // Mostrar datos del usuario
    document.getElementById('id').textContent = user.id;
    document.getElementById('email').textContent = user.email;

    // 2) CREAR USUARIO (POST)
    const postResponse = await fetch(POSTMAN_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });

    const postData = await postResponse.json();
    
    // Mostrar el First Name del usuario creado
    document.getElementById('name').textContent = postData.json.first_name;

    // 3) Mostrar estado de la operación
    document.getElementById('status').textContent = postResponse.status;
  } catch (error) {
    console.error('Error:', error);
    document.getElementById('status').textContent = error.message;
  }
}
