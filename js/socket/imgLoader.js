function imgLoader(url) {

  //checks if img is real
  let imageLoader = new Image();
  imageLoader.src = url;
  imageLoader.onload = () => {
    if (imageLoader.width > 0) {
      return true;
      // img.src = url; //sepatates the text from the img url
      // let fixedMsg = message.msg.replace(regExUrl, '');
      // a.innerText = `${fixedMsg}\n`;
    }
  };
  imageLoader.onerror = () => {
    return false;
    // a.href = url;
    // a.style.textDecoration = 'none';
    // a.id = 'urlLink';
    // a.target = '_blank';
    // a.innerText = `${message.msg}`;
  };
}
