
function loader(){
  let loadingText = document.getElementById('loadingText')

      loadingText.innerText ="";
  setTimeout(function(){

    //do some conection testing here
    loadingText.innerText = "The bits are breeding";
    setTimeout(()=>{
      //checks online status 
      onlineCeck()
    },2000);

   }, 4000);
}
loader()
