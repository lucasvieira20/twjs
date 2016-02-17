var curso = {
	nome : "Javascript Básico",
	empresa : "Treinaweb",
	alunos:[
		{nome:"Bruno", idade :21, telefone:987789988},
		{nome:"Cléber", idade :22, telefone:9832789988},
		{nome:"Bruno", idade :28, telefone:987329988}
	]
}

console.log(typeof curso);

console.log("Quantidade de Alunos: " + curso.alunos.length);

//Adicionando um novo aluno no objeto
curso.alunos.push({nome:"Kennedy", idade :21, telefone:99865014});

//Quantidade de Alunos no Objeto
console.log("Quantidade de Alunos Atualizada: " + curso.alunos.length);
