//Iteração de Arrays

// for(var i=0; i<=10; i++){
// 	console.log(i);
// }


var nomes = ['Maria','José'];
for(var i=0; i<nomes.length; i++){
	if(i == 0){
		continue;
	}
	console.log(nomes[i]);
}