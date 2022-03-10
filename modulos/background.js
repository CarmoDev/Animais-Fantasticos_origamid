export default function initBackground() {
  const raposa = document.querySelector(".raposa");
  const esquilo = document.querySelector(".esquilo");
  const urso = document.querySelector(".urso");
  const lobo = document.querySelector(".lobo");
  const babuino = document.querySelector(".babuino");
  const leão = document.querySelector(".leão");
  const tabmenu = document.querySelectorAll('[data-tab="menu"] li');

  function activeAnimal(index) {
    tabmenu.forEach((animal) => {
      animal.classList.remove("ativo");
    });
    tabmenu[index].classList.add("ativo");
  }

  tabmenu.forEach((item, index) => {
    item.addEventListener("click", () => {
      activeAnimal(index);
      if (raposa.classList.contains("ativo")) {
        document.body.style.backgroundImage = 'url("img/background/raposa.jpg")';
        document.body.style.color = "white";
        document.body.style.webkitTextStrokeWidth = "0.2px";
        document.body.style.webkitTextStrokeColor = "#000";
      } else if (esquilo.classList.contains("ativo")) {
        document.body.style.backgroundImage = 'url("img/background/esquilo.jpg")';
        document.body.style.color = "white";
        document.body.style.webkitTextStrokeWidth = "0.3px";
        document.body.style.webkitTextStrokeColor = "#000";
      } else if (urso.classList.contains("ativo")) {
        document.body.style.backgroundImage = 'url("img/background/urso.jpg")';
        document.body.style.color = "black";
        document.body.style.webkitTextStrokeWidth = "0.3px";
        document.body.style.webkitTextStrokeColor = "#000";
      } else if (lobo.classList.contains("ativo")) {
        document.body.style.backgroundImage = 'url("img/background/lobo.jpg")';
        document.body.style.color = "white";
        document.body.style.webkitTextStrokeWidth = "0.3px";
        document.body.style.webkitTextStrokeColor = "#000";
      } else if (babuino.classList.contains("ativo")) {
        document.body.style.backgroundImage = 'url("img/background/babuino.jpg")';
        document.body.style.color = "white";
        document.body.style.webkitTextStrokeWidth = "0.3px";
        document.body.style.webkitTextStrokeColor = "#000";
      } else if (leão.classList.contains("ativo")) {
        document.body.style.backgroundImage = 'url("img/background/leao.jpg")';
        document.body.style.webkitTextStrokeWidth = "0.5px";
        document.body.style.webkitTextStrokeColor = "#000";
      } else {
        document.body.style.backgroundImage = "";
      }
    });
  });
}
initBackground();
