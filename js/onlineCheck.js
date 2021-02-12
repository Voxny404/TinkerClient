/*jshint esversion: 6 */
const apiCon = 'https://apitink.herokuapp.com'; //socks.js

function onlineCheck() {
  const https = require('https');
  return new Promise((resolve, rej) => {
    https.get(apiCon + `/` + 'status', res => {
      //checks if server is running
      let data = '';
      res.on('data', chunk => { data += chunk; });
      res.on('end', () => {
        if (data) {
          resolve();
        } else {
          console.log('invalid response!!!');
          rej();
        }
      });
      res.on('error', err => {
        console.log('ERROR: ' + err.message);
      });
    }).on('error', err => {

        loadingText.innerText = 'Having trouble to connect...';

        setTimeout(()=> {
            loadingText.innerText = "Why don't you order a sandwich?";
            setTimeout(()=> {
              onlineCheck();
              loadingText.innerText = '';
            }, 10000);
          }, 10000);
      });
  });
}
