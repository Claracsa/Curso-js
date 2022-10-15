//inserir todo um parent em uma variavel
var corpo = window.document.body;

//pela tag --> para selecionar na variavel apenas uma tag inserir o número da tag começando de "0" como o primeiro.
var p1 = window.document.getElementsByTagName('p')[0];

//altera a cor de uma tag pela variavel
p1.style.color = 'blue';

//altera a cor de uma tag pela variavel
corpo.style.backgroundColor = 'black';

//innerText --> o que está escrito dentro da tag sem as caracteristicas do html
window.document.write('Está escrito assim: ' + p1.innerText + '<br>');

//innerText --> o que está escrito dentro da tag com as caracteristicas do html
window.document.write('Está escrito assim: ' + p1.innerHTML + '<br>');

//pelo id --> para selecionar na variavel pelo id
var d = window.document.getElementById('msg');

//mudando a cor do fundo da div pela variavel
d.style.backgroundColor = 'green';

//mudando o texto da div pela variavel
d.innerText = 'Estou aguardando...';

/*pelo nome ou pela classe --> o mesmo que por id com os comandos abaixo
var d = window.document.getElementsByName('o nome do elemento')[posição do elemento];
var d = window.document.getElementsByClassName('a classe do elemento')[posição do elemento]*/

//pelo seletor --> escolhe usando a simtax do css, "#" para id e ."." para class
var d1 = window.document.querySelector('div.msg1');
d1.style.backgroundColor = 'lightgreen';
d1.style.color = 'black';

// set de caracteres UTF-8
window.document.write(window.document.characterSet + '<br>');

//mostra a URL que estamos navegando
window.document.write(window.document.URL);
