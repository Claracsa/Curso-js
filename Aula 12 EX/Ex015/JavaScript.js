function carregar() {
  var msg = window.document.querySelector('#mensagem');
  var img = window.document.querySelector('#imagem');
  /*var img = window.document.getElementById('imagem');*/

  var data = new Date();
  var hora = data.getHours();

  var hora = 22;

  msg.innerHTML = `Agora são ${hora} horas.`;

  if (hora >= 0 && hora < 12) {
    img.scr = 'manha.png';
  } else if (hora >= 12 && hora < 18) {
    img.src = 'tarde.png';
  } else {
    img.scr = 'noite.png';
  }
}
