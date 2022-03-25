export default class Funcionamento {
  constructor(funcionamento, activeClass) {
    this.funcionamento = document.querySelector(funcionamento);
    this.activeClass = activeClass;
  }

  dadosFuncionamento() {
    this.diasSemana = this.funcionamento.dataset.semana.split(",").map(Number);
    this.horarioSemana = this.funcionamento.dataset.horario
      .split(",")
      .map(Number);
  }

  dadosAgora() {
    this.nowDate = new Date();
    this.NowDay = this.nowDate.getDay();
    this.horarioAgora = this.nowDate.getUTCHours() - 3;
  }

  Open() {
    const OpenDays = this.diasSemana.indexOf(this.NowDay) !== -1;
    const openHour = this.horarioAgora >= this.horarioSemana[0]
      && this.horarioAgora < this.horarioSemana[1];

    return OpenDays && openHour;
  }

  ativaAberto() {
    if (this.Open()) {
      this.funcionamento.classList.add(this.activeClass);
    }
  }

  init() {
    if (this.funcionamento) {
      this.dadosFuncionamento();
      this.dadosAgora();
      this.ativaAberto();
    }
    return this;
  }
}
