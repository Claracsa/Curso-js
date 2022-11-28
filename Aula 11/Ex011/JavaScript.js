function pesquisar() {
<<<<<<< HEAD
  var txtp = window.document.querySelector('input#txtpais');
=======
  var txtp = window.document.querySelector('div#txtpais').value;
>>>>>>> ea39f35e242e5b026a383c21a647d98016d46cb5
  var res = window.document.querySelector('div#res');

  res.innerHTML = `<p>Vivendo no país ${txtp}</p>`;

<<<<<<< HEAD
  if (txtp == 'Brasil') {
=======
  if (txtp = 'Brasil') {
>>>>>>> ea39f35e242e5b026a383c21a647d98016d46cb5
    res.innerHTML += 'Você é <strong>brasileiro</strong>.';
  } else {
    res.innerHTML += 'Você é <strong>estrangeiro</strong>.';
  }
}

/*function pesquisar() {
  var txtp = window.document.getElementById('txtpais').value;
  var res = window.document.querySelector('div#res');

  res.innerHTML = `<p>Vivendo no país ${txtp}</p>`;

  if (txtp = 'Brasil') {
    res.innerHTML += 'Você é <strong>brasileiro</strong>.';
  } else {
    res.innerHTML += 'Você é <strong>estrangeiro</strong>.';
  }
}/*