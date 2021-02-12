/*jshint esversion: 6 */
let chatBox = document.getElementById('ChatBox');

function joinLoginForm() {

  let loginForm = document.getElementById('loginForm');
  let login = document.getElementById('login');
  let loginError = document.getElementById('loginError');
  let loader = document.getElementById('loader');

  loader.style.display = 'none';
  login.style.display = 'block';
  chatBox.style.display = 'none';

  return new Promise((res, rej) => {
    //get user data
    loginForm.addEventListener('submit', e => {
      e.preventDefault();

      const input = e.target.elements.input.value;
      const input2 = e.target.elements.input2.value;

      //validation
      if (input.length > 2) {
        if (input.length < 24) {
          if (input2.length < 30) {
            userName = input;
            rooms = input2;
            login.style.display = 'none';
            chatBox.style.display = 'block';
            res();
          } else { loginError.innerText = ' Room name too long !!!';}

        } else {
          loginError.innerText = 'Your name is too long !!!';
        }
      } else {
        loginError.innerText = 'Your name is too small !!!';
      }
    });

  });
}
