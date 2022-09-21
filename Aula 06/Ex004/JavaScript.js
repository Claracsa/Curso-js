//prompt sempre retorna string
var nome = window.prompt('Qual o seu nome? ');

document.write(`Olá, ${nome}! Seu nome tem ${nome.length} letras.<br>`);
document.write(`Seu nome em letras maiúsculas é ${nome.toUpperCase()}<br>`);
document.write(`Seu nome em letras minúsculas é ${nome.toLowerCase()}<br>`);
document.write(`Seu nome ao contrario é ${nome.split('').reverse().join('')}`);

//n.fixed(2); colocar duas casas depois do .
//n.tofixed(2).replace('.', ','); substitui o . pela ,
//n.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }); converte para moeda escolhida
//nome.split('').reverse().join('') inverte a string
