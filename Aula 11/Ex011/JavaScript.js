function pesquisar() {
  var txtp = window.document.getElementById('txtpais').value;
  var res = window.document.querySelector('div#res');

  res.innerHTML = `<p>Vivendo no país ${txtp}</p>`;

  if (txtp == 'Brasil') {
    res.innerHTML += 'Você é <strong>brasileiro</strong>.';
  } else {
    res.innerHTML += 'Você é <strong>estrangeiro</strong>.';
  }
}
