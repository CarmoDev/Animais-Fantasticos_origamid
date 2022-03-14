export default class Tooltip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);

    // bind dos objetos aos objetos da classe no callback
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  // move a tooltip com base em seus estilos de acordo a posição do mouse
  onMouseMove(Event) {
    this.tooltipBox.style.top = `${Event.pageY + 20}px`;
    if (Event.pageX + 240 > window.innerWidth) {
      this.tooltipBox.style.left = `${Event.pageX - 190}px`;
    } else {
      this.tooltipBox.style.left = `${Event.pageX + 20}px`;
    }
  }

  // remove a tooltip de acordo com os eventos de MouseMove e MouseLeave
  onMouseLeave({ currentTarget }) {
    // essa é uma forma de usar elementos q não tem estão nesse escopo
    this.tooltipBox.remove();
    currentTarget.removeEventListener("mouseleave", this.onMouseLeave);
    currentTarget.removeEventListener("mouseMove", this.onMouseMove);
  }

  // cria a tooltipbox e põe no body
  createTooltipBox(item) {
    const tooltipBox = document.createElement("div");
    const text = item.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }

  // cria a tooltip e adiciona os eventos de mouseMove e MouseLeave ao target
  onMouseOver({ currentTarget }) {
    // cria a tooltip box e coloca em uma propriedade
    this.createTooltipBox(currentTarget);

    currentTarget.addEventListener("mousemove", this.onMouseMove);
    currentTarget.addEventListener("mouseleave", this.onMouseLeave);
  }

  // adiciona os eventos de mouseOver a cada tooltip
  addTooltipsEvent() {
    this.tooltips.forEach((item) => {
      item.addEventListener("mouseover", this.onMouseOver);
    });
  }

  init() {
    if (this.tooltips.length) {
      this.addTooltipsEvent();
    }
    return this;
  }
}
