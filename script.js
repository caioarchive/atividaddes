  let vetorOito = []
  let vetorNumeroPositivo = [0]
  let vetorNumeroNegativo = [0]

  for(let i = 0; i <= 8; i++){
    vetorOito[i] = Number(prompt(`Digite o numero do indice ${i + 1}`))
      if(vetorOito[i] < 0){
        vetorNumeroNegativo[i] = vetorOito[i]
      }else if([i] >= 0){
        
        vetorNumeroPositivo[i] = vetorOito[i]
      }
  }
  document.write(`Numeros positivos: ${vetorNumeroPositivo} <br> Numeros negativos: ${vetorNumeroNegativo}`)