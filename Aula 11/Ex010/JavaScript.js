function calcular() {
  var txtv = window.document.querySelector('input#txtvel');
  var vel = Number(txtv.value);
  var res = window.document.querySelector('div#res');

  res.innerHTML = `<p>Sua velocidade atual é de: ${vel}Km/h</p>`;
  if (vel > 60) {
    res.innerHTML +=
      'Você está <strong>multado</strong> por excesso de velocidade';
  }
  res.innerHTML += '<p>Dirija sempre com o cinto de segurança.</p>';
}
