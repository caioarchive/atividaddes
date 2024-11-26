let idade, sexo, experiencia, continuar, sexoF = 0, sexoM = 0, acumuladora = 0, somaIdadesHomensExperiencia = 0, contadorHomensExperiencia = 1;
let mediaIdadeHomensExperiencia, porcentagemIdadeHomens
do {
    do {
        idade = Number(prompt("Digite a idade do candidato!"))
        if(idade <= 0 || isNaN(idade)){
            alert("Numero invalido!")
        }
        
    } while (idade <= 0 || isNaN(idade));
    do {
        sexo = prompt("Digite o sexo do candidato (M/F)").toUpperCase()
        if(sexo != "M" && sexo != "F"){
            alert("Sexo invalido!")
        }
        if(sexo == "F"){
            sexoF += 1
        }else{
            sexoM += 1
        }
    } while (sexo !== 'M' && sexo !== 'F');
    do {
        experiencia = prompt("Tem experiencia? (S/N)").toUpperCase()
        if(experiencia != 'S' && experiencia != 'N'){
            alert("Digite novamente!")
        }
    } while (experiencia !== 'S' && experiencia !== 'N');
    if (sexo === "M" && experiencia === "S") {
        somaIdadesHomensExperiencia += idade;
        contadorHomensExperiencia++;
      }
    if(idade > 45){
     porcentagemIdadeHomens *= (idade/100)
    }
    
    
   
    continuar = Number(prompt("Digte 0 para encerrar, digite 0"))
     mediaIdadeHomensExperiencia = somaIdadesHomensExperiencia / contadorHomensExperiencia
    
} while (continuar != "0");
    document.write(`<h3>Numero de candidatos com sexo Feminino: ${sexoF}\n
    Numero de candidatos com sexo masculino: ${sexoM}</h3>`)
    document.write(`A idade média dos homens que já têm experiência no serviço é ${mediaIdadeHomensExperiencia.toFixed(2)}<br>`);
    document.write(`Aa porcentagem dos homens com mais de 45 anos entre o total de homens: ${porcentagemIdadeHomens}`)