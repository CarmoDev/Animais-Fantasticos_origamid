export default function initTooltip(){
    const tooltips = document.querySelectorAll('[data-tooltip]')

    tooltips.forEach((item) => {
        item.addEventListener('mouseover', onMouseOver)
    })

    function onMouseOver(event){
        const tooltipBox = createTooltipBox(this)
        tooltipBox.style.top= event.pageY +'px'
        tooltipBox.style.left= event.pageX + 'px'

        onMouseMove.tooltipBox=tooltipBox
        this.addEventListener('mousemove', onMouseMove)

        onMouseLeave.tooltipBox=tooltipBox
        onMouseLeave.element = this
        this.addEventListener('mouseleave', onMouseLeave)
    }


    const onMouseMove ={
        handleEvent(event){
            this.tooltipBox.style.top= event.pageY + 20 + 'px'
            this.tooltipBox.style.left= event.pageX + 20 +'px'
            this.element.removeEventListener('mousemove', onMouseMove)
        }
    }


    const onMouseLeave={//essa é uma forma de usar elementos q não tem estão nesse escopo
        handleEvent(){
            this.tooltipBox.remove()
            this.element.removeEventListener('mouseleave', onMouseLeave)
        }
    }

    
    function createTooltipBox(item){
        const tooltipBox = document.createElement('div')
        const text =item.getAttribute('aria-label')
        tooltipBox.classList.add('tooltip')
        tooltipBox.innerText=text
        document.body.appendChild(tooltipBox)
        return tooltipBox
    }
}