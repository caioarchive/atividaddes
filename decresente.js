let arr = [];
let auxiliar;

for(let i = 0; i < 10; i++){
    arr[i] = Number(prompt(`Digite o numero do indice${i}`))
}
// exibindo o vetor completo
document.write("Vetor original:", arr);

// laço principal
for (let i = 0; i < 10; i++) {
    // laço interno para realizar as comparações e trocas
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] > arr[j + 1]) { // Verifica se `arr[j]` é maior ou mentor que `arr[j + 1]`
            // Troca os valores utilizando a variável auxiliar
            auxiliar = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = auxiliar;
           
        }
    }
}


document.write("Vetor ordenado:", arr);
