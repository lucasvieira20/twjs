/*
	Desafio de Corrida
	- 100 Voltas
	- Cada volta equivale a 20 metros
	- Avisar quando for a penultima volta
*/

var volta = 0,
	distanciaPercorrida = 0;

while(volta < 100){
	volta++;
	distanciaPercorrida += 20;
	if(volta == 99){
		console.log("Atenção - Penultima volta da Corrida:");
	}
	console.log("Volta de Número: " + volta);
	console.log("Distância : " + distanciaPercorrida);
	console.log("\n");
}
