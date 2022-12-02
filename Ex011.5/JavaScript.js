function confirmar() {
  var n = window.document.querySelector('#txtn').value;
  var m = window.document.querySelector('#txtm').value;

  var res = window.document.querySelector('div#res');

  res.innerHTML = `<p>Você nasceu no país ${n}.</p>`;
  res.innerHTML += `<p>Você mora no país ${m}.</p>`;

  if (n == m) {
    res.innerHTML += 'Você é <strong>nativo</strong>.';
  } else {
    res.innerHTML += 'Você é <strong>estrangeiro</strong>.';
  }
}
