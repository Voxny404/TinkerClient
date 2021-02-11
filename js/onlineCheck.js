const apiCon = "https://apitink.herokuapp.com"; //socks.js
      // port = "8080"

function onlineCeck(){
 const https = require('https'); //change to https
 return new Promise((resolve,rej)=>{
   https.get(apiCon+`/`+'status', res => {
     //checks if server is running
     let data = '';
     res.on('data', chunk =>{data += chunk;})
     res.on('end', () => {
       if(data = 'server is running!!!'){
         //let the usere do shit
         join ()
         console.log(data);resolve();
       } else {console.log('invalid response!!!');rej()}
     })
     res.on("error", err =>{console.log('ERROR: '+ err.message);})
   }).on('error', err => {

           loadingText.innerText = "Having trouble to connect...";

           setTimeout(()=>{
             loadingText.innerText = "Why don't you order a sandwich?";
             setTimeout(()=>{
               onlineCeck()
               loadingText.innerText = "";
             },10000)
           },10000)
       });
 })
}
