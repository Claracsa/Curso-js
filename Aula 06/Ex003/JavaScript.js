//prompt sempre retorna string
var n1 = Number(window.prompt('Digite um número: ')); //string para número inteiro
var n2 = Number(window.prompt('Digite um segundo número: ')); //string para número inteiro

//Number.parseFloat(n); converte de para número float
//Number.parseInt(n); converte para número inteiro
//Number(n); converte tanto para inteiro quanto pra float
//String(n); ou n.tostring() converte para string

var soma = n1 + n2;

window.alert(`A soma entre ${n1} e ${n2} é ${soma}`); //tamplate strings

// (num + num) para adição
// (string + string) para concatenação
