
let vetor1 = [1, 3, 5, 7];
let vetor2 = [2, 4, 6, 8];


let vetorResultante = [];


console.log("Vetor 1: ", vetor1);
console.log("Vetor 2: ", vetor2);


for (let i = 0, j = 0; i < vetor1.length; i++) {
    vetorResultante[j++] = vetor1[i];  // Adiciona o elemento de vetor1
    vetorResultante[j++] = vetor2[i];  // Adiciona o elemento de vetor2
}


console.log("Vetor Resultante: ", vetorResultante);
