// Função para ler informações dos funcionários
function lerInformacoesFuncionario() {
  let funcionarios = [];
  for (let i = 0; i < 10; i++) {
    let codigo = prompt(`Informe o código do funcionário ${i + 1}:`);
    let horasTrabalhadas = parseInt(prompt(`Informe o número de horas trabalhadas do funcionário ${i + 1}:`));
    let turno = prompt(`Informe o turno do funcionário ${i + 1} (M - Matutino, V - Vespertino, N - Noturno):`);
    let categoria = prompt(`Informe a categoria do funcionário ${i + 1} (O - Operário, G - Gerente):`);

    funcionarios.push({
      codigo: codigo,
      horasTrabalhadas: horasTrabalhadas,
      turno: turno,
      categoria: categoria
    });
  }
  return funcionarios;
}

// Função para calcular o valor da hora trabalhada
function calcularValorHoraTrabalhada(categoria, turno) {
  const salarioMinimo = 450;
  let valorHora;

  switch (categoria) {
    case 'G':
      if (turno === 'N') {
        valorHora = salarioMinimo * 0.18;
      } else {
        valorHora = salarioMinimo * 0.15;
      }
      break;
    case 'O':
      if (turno === 'N') {
        valorHora = salarioMinimo * 0.13;
      } else {
        valorHora = salarioMinimo * 0.10;
      }
      break;
    default:
      valorHora = 0;
  }
  return valorHora;
}

// Função para calcular o salário inicial
function calcularSalarioInicial(valorHora, horasTrabalhadas) {
  return valorHora * horasTrabalhadas;
}

// Função para calcular o auxílio-alimentação
function calcularAuxilioAlimentacao(salarioInicial) {
  let auxilioAlimentacao;

  if (salarioInicial <= 300) {
    auxilioAlimentacao = salarioInicial * 0.2;
  } else if (salarioInicial > 3){
    alert("Oi")
  }