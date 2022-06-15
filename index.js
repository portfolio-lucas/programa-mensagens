// variáveis
const elementoResposta = document.querySelector("#resposta")
const buttonPerguntar = document.querySelector("#buttonPerguntar")
const inputPergunta = document.querySelector("#inputPergunta")

const respostas = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
]

 

// dados de entrada?
// dados de saída?

// clicar em fazer pergunta
function fazerPergunta() {
   
   if (inputPergunta.value == "") {
   alert("Digite sua pergunta no espaço em branco")
   return
 }

 buttonPerguntar.setAttribute("disabled", true)

 const pergunta = "<div>" + inputPergunta.value
+ "</div>"
  // gerar número aleatório
const totalRespostas = respostas.length
const numeroAleatorio = Math.floor(Math.random() * 19)

elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]


elementoResposta.style.opacity = 1;
 // sumir a resposta depois de 5 segundos
setTimeout(function() {
  elementoResposta.style.opacity = 0;
  buttonPerguntar.removeAttribute("disabled")
}, 5000)
}
// Gerar um site com número aleatório de um dado

// Gerar um site com frases motivacionais