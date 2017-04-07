(function(){
  const doc = document;

  let article = doc.querySelector('article');

  let isWhite = false;

  article.addEventListener('click', function(){
    if(isWhite == true){
      article.style.border = '20px solid green';
      isWhite = false;
    }
    else {
      article.style.border = '20px solid white';
      isWhite = true;
    }
  });




})();
