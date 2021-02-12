/*jshint esversion: 6 */
function loader() {
  let loadingText = document.getElementById('loadingText');

  loadingText.innerText = '';
  setTimeout(function () {
    loadingText.innerText = 'The bits are breeding';
    setTimeout(function () {
      //checks if api is up
      onlineCheck()
      .then(function () {
        //enter login form
        return joinLoginForm();
      })
      .then(() => {
        //start socket
        startChat();
      });
    }, 2000);

  }, 4000);
}

loader();
