export default function initTabNav() {
  const tabmenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');

  tabContent[0].classList.add("ativo");

  function activeTab(index) {
    const show = tabContent[index].dataset.anime;

    tabContent.forEach((section) => {
      section.classList.remove("ativo", show);
    });
    tabContent[index].classList.add("ativo", show);
  }

  if (tabmenu.length && tabContent.length) {
    tabmenu.forEach((item, index) => {
      item.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
initTabNav();
