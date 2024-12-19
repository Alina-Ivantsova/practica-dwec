let userName = getCookie('user');

if (userName) {
  document.getElementById('message').innerText = `Bienvenid@ ${userName}!`;
  document.getElementById('form').style.display = 'none';
}
