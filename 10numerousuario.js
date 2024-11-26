let veiculos = ["", "", "", "", ""];
let distanciaPercorrida = 1000;
let menorCombustivel = Infinity; 
let combustivelNessario = 0
let veiculoEconomico

for (let i = 0; i < veiculos.length; i++) {

    veiculos[i] = prompt(`Digite o modelo do veículo ${i + 1}:`);

    let combustivel = parseFloat(prompt(`Digite a quantidade de combustível em litros do veículo ${veiculos[i]}:`));

    combustivelNessario = distanciaPercorrida / combustivel[i];

    console.log(`O veículo ${veiculos[i]} precisa de ${combustivelNessario.toFixed(2)} litros de combustível para percorrer 1000 km.`);
    if (combustivel < menorCombustivel) {
        menorCombustivel = combustivel;
        veiculoEconomico = veiculos[i]; 
    }
}
    alert(`O veiculo mais economico é ${veiculoEconomico}, com o menor consumo de ${menorCombustivel}`)

    alert(`O veículo mais econômico é: ${veiculoEconomico} com consumo de ${menorCombustivel} litros para percorrer 1000 km.`);
