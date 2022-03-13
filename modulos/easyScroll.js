export default class EasyScroll {
  constructor(links, options) {
    this.linksInternos = document.querySelectorAll(links);
    if (options === undefined) {
      this.options = { behavior: "smooth", block: "start" };
    } else {
      this.options = options;
    }

    this.scrollToSection = this.scrollToSection.bind(this);
  }

  scrollToSection(Event) {
    Event.preventDefault();
    const href = Event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView(this.options);
  }

  addLinkEvent() {
    this.linksInternos.forEach((link) => {
      link.addEventListener("click", this.scrollToSection);
    });
  }

  init() {
    if(this.link)
      this.addLinkEvent();
      return this;
  }
}
