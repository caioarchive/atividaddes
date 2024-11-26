let continuar;
let maiorAccidentes = 0;
let menorAccidentes = Infinity;
let cidadeMaiorAccidentes;
let cidadeMenorAccidentes;

do {
  let CodigoCidade = prompt("Digite o código da cidade");
  let veiculoTransito = prompt("Digite o número de veículos de trânsito com vítimas (em 2022)");

  // exibe o índice
  document.write(`${CodigoCidade} (código da cidade) - ${veiculoTransito} Acidentes de trânsito<br>`);

  // verifica se é o maior ou menor número de acidentes
  if (veiculoTransito > maiorAccidentes) {
    maiorAccidentes = veiculoTransito;
    cidadeMaiorAccidentes = CodigoCidade;
  }
  if (veiculoTransito < menorAccidentes) {
    menorAccidentes = veiculoTransito;
    cidadeMenorAccidentes = CodigoCidade;
  }

  continuar = prompt("Deseja continuar?");
} while (continuar === "Sim");

// exibe o maior e menor número de acidentes
document.write(`O maior número de acidentes é ${maiorAccidentes} unidades de trânsito, na cidade ${cidadeMaiorAccidentes}.<br>`);
document.write(`O menor número de acidentes é ${menorAccidentes} unidades de trânsito, na cidade ${cidadeMenorAccidentes}.`);