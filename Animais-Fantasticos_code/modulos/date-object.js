export default function initDateObject(){
    const funcionamento = document.querySelector('[data-semana]')
    const diasSemana = funcionamento.dataset.semana.split(',').map(Number)//transforma a string em uma array númerica
    const horarioSemana = funcionamento.dataset.horario.split(',').map(Number)

    const nowDate = new Date()
    const NowDay = nowDate.getDay()
    const horarioAgora = nowDate.getHours()

    const DayOpen = diasSemana.indexOf(NowDay) !== -1
    let openHour = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1])

    if(DayOpen && openHour){
        funcionamento.classList.add('aberto')
    }
}