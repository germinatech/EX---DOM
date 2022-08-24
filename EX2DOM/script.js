// O aluno deve sortear um bilhete da mega sena, e comparar com os numeros sorteados presentes no HTML (unico arquivo fornecido a ele)
// para bilhetes iguais sorteados, informar que deve ocorrer novamente
// para bilhetes válidos, deve-se contar o numero de acertos e apresentar ao usuario via console

// sorteando um bilhete
let num1, num2, num3, num4, num5, num6;

num1 = Math.ceil(Math.random() * 60);
num2 = Math.ceil(Math.random() * 60);
num3 = Math.ceil(Math.random() * 60);
num4 = Math.ceil(Math.random() * 60);
num5 = Math.ceil(Math.random() * 60);
num6 = Math.ceil(Math.random() * 60);

console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(num5);
console.log(num6);

// verificando se o bilhete e valido
if (
  num1 == num2 ||
  num1 == num3 ||
  num1 == num4 ||
  num1 == num5 ||
  num1 == num6 ||
  num2 == num3 ||
  num2 == num4 ||
  num2 == num5 ||
  num2 == num6 ||
  num3 == num4 ||
  num3 == num5 ||
  num3 == num6 ||
  num4 == num5 ||
  num4 == num6 ||
  num5 == num6
) {
  console.log("Bilhete inválido, realize o sorteio novamente");
} else {
  // capturando os numeros sorteados
  let mega1, mega2, mega3, mega4, mega5, mega6;
  const body = document.childNodes[1].childNodes[2];
  const premio = body.childNodes[17].innerText;

  mega1 = body.childNodes[3].innerText;
  mega2 = body.childNodes[5].innerText;
  mega3 = body.childNodes[7].innerText;
  mega4 = body.childNodes[9].innerText;
  mega5 = body.childNodes[11].innerText;
  mega6 = body.childNodes[13].innerText;

  // criando um contador de acertos
  let contadorAcerto = 0;

  console.log(mega1, mega2, mega3, mega4, mega5, mega6);

  // verificando o numero de acertos
  if (
    num1 == mega1 ||
    num1 == mega2 ||
    num1 == mega3 ||
    num1 == mega4 ||
    num1 == mega5 ||
    num1 == mega6
  ) {
    contadorAcerto++;
  }

  if (
    num2 == mega1 ||
    num2 == mega2 ||
    num2 == mega3 ||
    num2 == mega4 ||
    num2 == mega5 ||
    num2 == mega6
  ) {
    contadorAcerto++;
  }

  if (
    num3 == mega1 ||
    num3 == mega2 ||
    num3 == mega3 ||
    num3 == mega4 ||
    num3 == mega5 ||
    num3 == mega6
  ) {
    contadorAcerto++;
  }

  if (
    num4 == mega1 ||
    num4 == mega2 ||
    num4 == mega3 ||
    num4 == mega4 ||
    num4 == mega5 ||
    num4 == mega6
  ) {
    contadorAcerto++;
  }

  if (
    num5 == mega1 ||
    num5 == mega2 ||
    num5 == mega3 ||
    num5 == mega4 ||
    num5 == mega5 ||
    num5 == mega6
  ) {
    contadorAcerto++;
  }

  if (
    num5 == mega1 ||
    num5 == mega2 ||
    num5 == mega3 ||
    num5 == mega4 ||
    num5 == mega5 ||
    num5 == mega6
  ) {
    contadorAcerto++;
  }

  if (contadorAcerto == 6) {
    console.log(`Você acaba de ganhar o prêmio de ${premio}`);
  } else {
    console.log(`Quantidade de acertos: ${contadorAcerto}`);
  }
}
