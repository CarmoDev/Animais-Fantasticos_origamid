import AnimaNumeros from "./anima-numeros.js";

export default function fetchAnimais(url, target) {
  const numerosGrid = document.querySelector(target);
  // cria a div contendo informações com o total de animais
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");

    div.innerHTML = `<h3>${animal.specie}</h3>
                <span data-numero>${animal.total} </span>`;
    return div;
  }

  // Preenche cada Animal no DOM
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  // Anima os números de cada animal no DOM
  function animaQuantAnimais() {
    const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
    animaNumeros.init();
  }

  // Puxa os animais através de um arquivo json e cria cada animal utilizando o createAnimal()
  async function criarAnimais() {
    try {
      // Fetch espera a resposta e transforma em Json
      const animaisR = await fetch(url);
      const animaisJson = await animaisR.json();

      // Após a transformação de JSON, ativa as funções para preencher e animar os números
      animaisJson.forEach((animal) => preencherAnimais(animal));
      animaQuantAnimais();
    } catch (erro) {
      console.log(erro);
    }
  }
  return criarAnimais();
}
