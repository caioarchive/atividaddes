let salarioInicial = 1000;
let salarioAtual = salarioInicial;
let ano = 2005;
let percentual = 0.015;

while (ano <= 2007) { 
  if (ano >= 2007) { //quando chegar em 2007, o percentual vai dobrar!
    percentual *= 2;
  }
  salarioAtual *= (1 + percentual); // 1 de ano anual, + percentual!
  alert(`Em ${ano} seu salário é de R$ ${salarioAtual.toFixed(2)}`);
  ano++; //Só está aumentando os anos, por exemplo (2005, 2006, 200)
}

 //Cálculo: Para calcular o novo salário, multiplicamos o salário atual por um fator que representa o aumento anual. Este fator é calculado como , que é equivalente a neste caso.(1 + percentual)1.15 