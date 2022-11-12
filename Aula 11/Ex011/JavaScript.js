function pesquisar() {
  var txtp = window.document.querySelector('div#txtpais');
  var res = window.document.querySelector('div#res');

  res.innerHTML = `<p>Vivendo no país ${txtp}</p>`;

  if ((txtp = 'Brasil')) {
    res.innerHTML += 'Você é <strong>brasileiro</strong>.';
  } else {
    res.innerHTML += 'Você é <strong>estrangeiro</strong>.';
  }
}
