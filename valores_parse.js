var nome = "Ailton";
var number = 2;
var boo = true;
var curso = {};
var alunos = [];
var obj = new Object();

console.log("Tipo de Dados - " + typeof nome);
console.log("Tipo de Dados - " + typeof "Lucas");
console.log("Tipo de Dados - " + typeof number);
console.log("Tipo de Dados - " + typeof boo);
console.log("Tipo de Dados - " + typeof curso);
console.log("Tipo de Dados - " + typeof alunos);
console.log("Tipo de Dados - " + typeof obj);


var idade = '17';
console.log(typeof idade);
console.log(parseInt(idade) + 10);
console.log(typeof parseFloat(idade));

var alunos = ['José','Antôncio','Manoel'];
console.log(typeof alunos);
console.log(typeof alunos.toString());


if(!undefined){
	console.log("Não será executada");
}