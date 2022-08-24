// -------- NAO E PERMITIDO O USO DE VARIAVEIS :)
// forneça o documento HTML e apresente aos alunos apenas os comentarios do JS

// Acesse o document e mostre o seu conteudo
console.log(`Este o o conteúdo do documento:`);
console.log(document);

// Apresente os filhos do document
console.log(`Este são os filhos do document`);
console.log(document.childNodes);

// Apresente o <DOCTYPE> e os seus filhos
console.log(`Este é o DOCTYPE`);
console.log(document.childNodes[1]);
console.log(`Este são os filhos de <DOCTYPE>`); // nao possui, lista vazia
console.log(document.childNodes[1].childNodes);

// Acesse o head e mostre o seu conteudo
console.log(`Este é o head`);
console.log(document.childNodes[2].childNodes[0]);

// Apresente a STRING do titulo da pagina presente na aba
console.log(
  `Este é o titulo da pagina: ${document.childNodes[2].childNodes[0].childNodes[11].innerText}`
);

// Apresente a STRING do segundo titulo da pagina

// -------- E PERMITIDO O USO DE VARIAVEIS A PARTIR DESTE PONTO :)

// Construa a frase Eu amo JavaScript apenas com os conteudos dos elementos presentes na pagina
let mensagem = "";
const body = document.childNodes[2].lastChild;
mensagem = body.childNodes[13].childNodes[7].innerText;
mensagem = mensagem + " " + body.childNodes[13].childNodes[3].innerText;
mensagem = mensagem + " " + body.childNodes[15].childNodes[3].innerText;
console.log(mensagem);
