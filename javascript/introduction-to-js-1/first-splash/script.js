let numeroAleatorio = Math.floor(Math.random() * 100) + 1;

const palpites = document.querySelector(".palpites");
const ultimoResultado = document.querySelector(".ultimoResultado");
const baixoOuAlto = document.querySelector(".baixoOuAlto");
const envioPalpite = document.querySelector(".envioPalpite");
const campoPalpite = document.querySelector(".campoPalpite");

console.log(numeroAleatorio);

let contagemPalpites = 1;
let botaoReinicio;

function conferirPalpite() {
  const palpiteUsuario = Number(campoPalpite.value);
  if (contagemPalpites === 1) {
    palpites.textContent = "Palpites anteriores: ";
  }
  palpites.textContent += palpiteUsuario + " ";

  if (palpiteUsuario === numeroAleatorio) {
    ultimoResultado.textContent = "Parabéns! Você acertou!";
    ultimoResultado.style.color = "#38c24e";
    baixoOuAlto.textContent = "";
    configFimDeJogo();
  } else if (contagemPalpites === 10) {
    ultimoResultado.textContent = "!!!FIM DE JOGO!!!";
    baixoOuAlto.textContent = "";
    configFimDeJogo();
  } else {
    ultimoResultado.textContent = "Errado!";
    ultimoResultado.style.backgroundColor = "red";
    if (palpiteUsuario < numeroAleatorio) {
      baixoOuAlto.textContent = "Seu palpite está muito baixo!";
    } else if (palpiteUsuario > numeroAleatorio) {
      baixoOuAlto.textContent = "Seu palpite está muito alto!";
    }
  }

  contagemPalpites++;
  campoPalpite.value = "";
  campoPalpite.focus();
}
envioPalpite.addEventListener("click", conferirPalpite);

function configFimDeJogo() {
  campoPalpite.disabled = true;
  envioPalpite.disabled = true;
  botaoReinicio = document.createElement("button");
  botaoReinicio.textContent = "Iniciar novo jogo";
  document.body.appendChild(botaoReinicio);
  botaoReinicio.addEventListener("click", reiniciarJogo);
}

function reiniciarJogo() {
  contagemPalpites = 1;

  const reiniciarParagrafos = document.querySelectorAll(".palpitesAnteriores");
  for (const reiniciarParagrafo of reiniciarParagrafos) {
    reiniciarParagrafo.textContent = "";
  }

  botaoReinicio.parentNode.removeChild(botaoReinicio);

  campoPalpite.disabled = false;
  envioPalpite.disabled = false;
  campoPalpite.value = "";
  campoPalpite.focus();

  ultimoResultado.style.backgroundColor = "white";

  numeroAleatorio = Math.floor(Math.random() * 100) + 1;
}
