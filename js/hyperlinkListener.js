const   { shell } = require("electron");
// opens links in default browser
document.body.addEventListener('click', event => {
  if (event.target.id === 'urlLink' && event.target.protocol != 'file:') {
    event.preventDefault();
    shell.openExternal(event.target.href);
  }
});
