export default class Accordion {
  constructor(list){
    this.accordionList = document.querySelectorAll(list);
    this.activeClass = 'ativo';
  }

  activeAccordion() {
    this.classList.toggle(this.activeClass);
    this.nextElementSibling.classList.toggle(activeClass);
  }

  init() {
    
  }

  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }
}
