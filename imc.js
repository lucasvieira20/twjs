var peso = 60,
	altura = 1.75,
	imc = peso/(altura*altura)


console.log("O imc é :" + imc);

if(imc <= 17){
	console.log("Muito Abaixo do Peso");
} else if(imc > 17 && imc <= 18.49){
	console.log("Abaixo do Peso");
} else if(imc > 18.5 && imc <= 24.99){
	console.log("Peso Normal");
} else if(imc > 25 && imc <= 29.99){
	console.log("Acima do Peso");
} else if(imc > 30 && imc <= 34.99){
	console.log("Obesidade tipo 1")
} else if(imc > 35 && imc <= 39.99){
	console.log("Obesidade tipo 2")
} else if(imc > 40){
	console.log("Obesidade tipo 3");
}else if(imc > 30 && imc <= 34.99){
	console.log("Ob")
}