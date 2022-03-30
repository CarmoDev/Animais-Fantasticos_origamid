import outsideClick from "./outsideClick.js";

export default class MenuMobile {
  constructor(menuButton, menuList, events) {
    this.menuButton = document.querySelector('[data-menu="menu"]');
    this.menuList = document.querySelector('[data-menu="list"]');
    if (events === undefined) this.events = ["click", "touchstart"];
    else this.events = events;
    this.activeClass = 'active';

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu(Event) {
    Event.preventDefault();
    this.menuList.classList.add("ativo");
    this.menuButton.classList.add("ativo");
    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove("ativo");
      this.menuButton.classList.remove("ativo");
    });
  }

  addMenuMobileEvents() {
    this.events.forEach((evento) => this.menuButton.addEventListener(evento, this.openMenu));
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvents();
    }
    return this;
  }
}
