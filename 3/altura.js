let pessoas = []
let continuar = true;

while (continuar) {

let nome = prompt(`Digite o nome da pessoa`);
let altura = Number(prompt(`Digite a altura de ${nome} ex:1,75`));

pessoas.push({ nome: nome, altura: altura});

let resposta = prompt("Deseja cadastrar outra pessoa? S\N");
if (resposta === "N"){
    continuar = false; 
}

}

let maiorpessoa = pessoas[0]
let menorpessoa = pessoas[0]

for (let i = 1; i < pessoas.length; i++ ) {
if (pessoas[i].altura > maiorpessoa.altura){
    maiorpessoa = pessoas[i];
}  
if (pessoas[i].altura < menorpessoa.altura){
    menorpessoa = pessoas[i];
}

}
alert(`Análise das Alturas:\n\n` +
    `Maior altura: ${maiorpessoa.altura.toFixed(2)}m (Pertence a ${maiorpessoa.nome})\n` +
    `Menor altura: ${menorpessoa.altura.toFixed(2)}m (Pertence a ${menorpessoa.nome})`
);