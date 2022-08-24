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
