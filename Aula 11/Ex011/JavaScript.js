function pesquisar() {
  var txtp = window.document.querySelector('#txtpais').value;
  var res = window.document.querySelector('div#res');

  res.innerHTML = `<p>Você nasceu no país ${txtp}</p>`;

  if (txtp == 'Brasil') {
    res.innerHTML += 'Você é <strong>brasileiro</strong>.';
  } else {
    res.innerHTML += 'Você é <strong>estrangeiro</strong>.';
  }
}
