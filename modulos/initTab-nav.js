export default class TabNav {
  constructor(menu, content) {
    this.tabmenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.activeClass = "ativo";
  }

  // ativa a tab de acordo com o index da mesma
  activeTab(index) {
    const show = this.tabContent[index].dataset.anime;

    this.tabContent.forEach((section) => {
      section.classList.remove(this.activeClass, show);
    });
    this.tabContent[index].classList.add(this.activeClass, show);
  }

  // adiciona os eventos nas tabs
  addTabNavEvent() {
    this.tabmenu.forEach((item, index) => {
      item.addEventListener("click", () => this.activeTab(index));
    });
  }

  init() {
    if (this.tabmenu.length && this.tabContent.length) {
      // ativar primeiro item
      this.activeTab(0);
      this.addTabNavEvent();
    }
    return this;
  }
}
