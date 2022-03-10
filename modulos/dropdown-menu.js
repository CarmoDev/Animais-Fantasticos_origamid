import outsideClick from './outsideClick.js';

function handleClick(event) {
  event.preventDefault();
  this.classList.toggle('ativo');

  outsideClick(this, ['touchstart', 'click'], () => {
    this.classList.remove('ativo');
  });
}

export default function initDropDownMenu() {
  const dropDownMenus = document.querySelectorAll('[data-dropdown]');

  dropDownMenus.forEach((menu) => {
    ['touchstart', 'click'].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });

  /* touchstart é tipo a função click porém para mobile, e usamos o
    addEventListener para podermos ter gatilhos para o evento de forma mais limpa */
}
