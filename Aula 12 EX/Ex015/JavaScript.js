function carregar() {
  var msg = window.document.querySelector('#mensagem');
  var img = window.document.querySelector('#imagem');
  //var img = window.document.getElementById('imagem');

  var data = new Date();
  var hora = data.getHours();


  msg.innerHTML = `Agora são ${hora} horas.`;

if (hora >= 0 && hora < 12) {
  //BOM DIA #f5dd8f
  img.src = 'manha.png';
  document.body.style.background = '#f5dd8f';
} else if (hora >= 12 && hora < 18) {
  //BOA TARDE #c69969
  img.src = 'tarde.png';
  document.body.style.background = '#c69969';
} else {
  //BOA NOITE #042d3f
  img.src = 'noite.png';
  document.body.style.background = '#042d3f';
}

}
