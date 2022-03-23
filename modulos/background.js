export default function initBackground() {
  const tabmenu = document.querySelectorAll('[data-tab="menu"] li > img');

  function activeAnimal(index) {
    tabmenu.forEach((animal) => {
      animal.classList.remove("ativo");
    });
    tabmenu[index].classList.add("ativo");
  }

  tabmenu.forEach((item, index) => {
    item.addEventListener("click", () => {
      const animal = item.getAttribute('alt');
      activeAnimal(index);
      if (item.classList.contains("ativo")) {
        document.body.style.backgroundImage = `url("img/background/${animal}.jpg")`;
        document.body.style.color = "white";
        document.body.style.webkitTextStrokeWidth = "0.2px";
        document.body.style.webkitTextStrokeColor = "#000";
      } else {
        document.body.style.backgroundImage = "";
      }
    });
  });
}
initBackground();
