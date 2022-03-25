import TabNav from "./initTab-nav.js";

export default function initBackground() {
  const tabmenu = document.querySelectorAll('[data-tab="menu"] li > img');

  const tabNav = new TabNav(
    '[data-tab="menu"] li > img',
    '[data-tab="menu"] li > img',
  );
  tabNav.init();

  tabmenu.forEach((item) => {
    item.addEventListener("click", () => {
      const animal = item.getAttribute('alt');
      if (item.classList.contains("ativo")) {
        document.body.style.backgroundImage = `url("img/background/${animal}.webp")`;
        document.body.style.color = "white";
        document.body.style.webkitTextStrokeWidth = "0.2px";
        document.body.style.webkitTextStrokeColor = "#000";
      } else {
        document.body.style.backgroundImage = "";
      }
    });
  });
}
