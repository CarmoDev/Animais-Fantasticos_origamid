(()=>{"use strict";function t(){const t=document.querySelector(".raposa"),e=document.querySelector(".esquilo"),o=document.querySelector(".urso"),i=document.querySelector(".lobo"),s=document.querySelector(".babuino"),n=document.querySelector(".leão"),a=document.querySelectorAll('[data-tab="menu"] li');a.forEach(((r,c)=>{r.addEventListener("click",(()=>{!function(t){a.forEach((t=>{t.classList.remove("ativo")})),a[t].classList.add("ativo")}(c),t.classList.contains("ativo")?(document.body.style.backgroundImage='url("img/background/raposa.jpg")',document.body.style.color="white",document.body.style.webkitTextStrokeWidth="0.2px",document.body.style.webkitTextStrokeColor="#000"):e.classList.contains("ativo")?(document.body.style.backgroundImage='url("img/background/esquilo.jpg")',document.body.style.color="white",document.body.style.webkitTextStrokeWidth="0.3px",document.body.style.webkitTextStrokeColor="#000"):o.classList.contains("ativo")?(document.body.style.backgroundImage='url("img/background/urso.jpg")',document.body.style.color="black",document.body.style.webkitTextStrokeWidth="0.3px",document.body.style.webkitTextStrokeColor="#000"):i.classList.contains("ativo")?(document.body.style.backgroundImage='url("img/background/lobo.jpg")',document.body.style.color="white",document.body.style.webkitTextStrokeWidth="0.3px",document.body.style.webkitTextStrokeColor="#000"):s.classList.contains("ativo")?(document.body.style.backgroundImage='url("img/background/babuino.jpg")',document.body.style.color="white",document.body.style.webkitTextStrokeWidth="0.3px",document.body.style.webkitTextStrokeColor="#000"):n.classList.contains("ativo")?(document.body.style.backgroundImage='url("img/background/leao.jpg")',document.body.style.webkitTextStrokeWidth="0.5px",document.body.style.webkitTextStrokeColor="#000"):document.body.style.backgroundImage=""}))}))}function e(t,e,o){const i=document.documentElement,s="data-outside";function n(a){t.contains(a.target)||(t.removeAttribute(s),e.forEach((t=>{i.removeEventListener(t,n)})),o())}t.hasAttribute(s)||(e.forEach((t=>{setTimeout((()=>{i.addEventListener(t,n)}),0)})),t.setAttribute(s,""))}function o(t){t.preventDefault(),this.classList.toggle("ativo"),e(this,["touchstart","click"],(()=>{this.classList.remove("ativo")}))}t();class i{constructor(t,e,o){this.numeros=document.querySelectorAll(t),this.observerTarget=document.querySelector(e),this.observerClass=o,this.handleMutation=this.handleMutation.bind(this)}static incrementarNumero(t){const e=+t.innerText,o=Math.floor(e/100);let i=0;const s=setInterval((()=>{i+=o,t.innerText=i,i>e&&(t.innerText=`${e}+`,clearInterval(s))}),25*Math.random())}animaNumeros(){this.numeros.forEach((t=>this.constructor.incrementarNumero(t)))}handleMutation(t){t[0].target.classList.contains(this.observerClass)&&(this.observer.disconnect(),this.animaNumeros())}addMutationObserver(){this.observer=new MutationObserver(this.handleMutation),this.observer.observe(this.observerTarget,{attributes:!0})}init(){return this.numeros.length&&this.observerTarget&&this.addMutationObserver(),this}}new class{constructor(t,e){this.linksInternos=document.querySelectorAll(t),this.options=void 0===e?{behavior:"smooth",block:"start"}:e,this.scrollToSection=this.scrollToSection.bind(this)}scrollToSection(t){console.log(this),t.preventDefault();const e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView(this.options)}addLinkEvent(){this.linksInternos.forEach((t=>{t.addEventListener("click",this.scrollToSection)}))}init(){return this.addLinkEvent(),this}}('[data-anime="menu"] a[href^="#"]').init(),new class{constructor(t){this.accordionList=document.querySelectorAll(t),this.activeClass="ativo"}toggleAccordion(t){t.classList.toggle(this.activeClass),t.nextElementSibling.classList.toggle(this.activeClass)}addAccordionEvent(){this.accordionList.forEach((t=>{t.addEventListener("click",(()=>this.toggleAccordion(t)))}))}init(){return this.accordionList.length&&(this.toggleAccordion(this.accordionList[0]),this.addAccordionEvent()),this}}('[data-anime="accordion"] dt').init(),new class{constructor(t,e){this.tabmenu=document.querySelectorAll(t),this.tabContent=document.querySelectorAll(e),this.activeClass="ativo"}activeTab(t){const e=this.tabContent[t].dataset.anime;this.tabContent.forEach((t=>{t.classList.remove(this.activeClass,e)})),this.tabContent[t].classList.add(this.activeClass,e)}addTabNavEvent(){this.tabmenu.forEach(((t,e)=>{t.addEventListener("click",(()=>this.activeTab(e)))}))}init(){return this.tabmenu.length&&this.tabContent.length&&(this.activeTab(0),this.addTabNavEvent()),this}}('[data-tab="menu"] li','[data-tab="content"] section').init(),new class{constructor(t,e,o){this.botaoAbrir=document.querySelector(t),this.botaoFechar=document.querySelector(e),this.containerModal=document.querySelector(o),this.eventToggleModal=this.eventToggleModal.bind(this),this.cliqueForaModal=this.cliqueForaModal.bind(this)}toggleModal(t){t.preventDefault(),this.containerModal.classList.toggle("ativo")}eventToggleModal(t){t.preventDefault(),this.toggleModal(t)}cliqueForaModal(t){t.target===this.containerModal&&this.toggleModal(t)}addModalEvent(){this.botaoAbrir.addEventListener("click",this.eventToggleModal),this.botaoFechar.addEventListener("click",this.eventToggleModal),this.containerModal.addEventListener("click",this.cliqueForaModal)}init(){return this.botaoAbrir&&this.botaoFechar&&this.containerModal&&this.addModalEvent(),this}}('[data-modal="abrir"]','[data-modal="fechar"]','[data-modal="container"]').init(),t(),new class{constructor(t){this.tooltips=document.querySelectorAll(t),this.onMouseLeave=this.onMouseLeave.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseOver=this.onMouseOver.bind(this)}onMouseMove(t){this.tooltipBox.style.top=`${t.pageY+20}px`,t.pageX+240>window.innerWidth?this.tooltipBox.style.left=t.pageX-190+"px":this.tooltipBox.style.left=`${t.pageX+20}px`}onMouseLeave({currentTarget:t}){this.tooltipBox.remove(),t.removeEventListener("mouseleave",this.onMouseLeave),t.removeEventListener("mouseMove",this.onMouseMove)}createTooltipBox(t){const e=document.createElement("div"),o=t.getAttribute("aria-label");e.classList.add("tooltip"),e.innerText=o,document.body.appendChild(e),this.tooltipBox=e}onMouseOver({currentTarget:t}){this.createTooltipBox(t),t.addEventListener("mousemove",this.onMouseMove),t.addEventListener("mouseleave",this.onMouseLeave)}addTooltipsEvent(){this.tooltips.forEach((t=>{t.addEventListener("mouseover",this.onMouseOver)}))}init(){return this.tooltips.length&&this.addTooltipsEvent(),this}}("[data-tooltip]").init(),document.querySelectorAll("[data-dropdown]").forEach((t=>{["touchstart","click"].forEach((e=>{t.addEventListener(e,o)}))})),function(){const t=document.querySelector('[data-menu="menu"]'),o=document.querySelector('[data-menu="list"]'),i=["click","touchstart"];function s(){o.classList.add("ativo"),t.classList.add("ativo"),e(o,i,(()=>{o.classList.remove("ativo"),t.classList.remove("ativo")}))}i.forEach((()=>t.addEventListener("click",s)))}(),function(){const t=document.querySelector("[data-semana]"),e=t.dataset.semana.split(",").map(Number),o=t.dataset.horario.split(",").map(Number),i=new Date,s=i.getDay(),n=i.getHours(),a=-1!==e.indexOf(s),r=n>=o[0]&&n<o[1];a&&r&&t.classList.add("aberto")}(),async function(t){try{const t=await fetch("./json/animalApi.json"),e=await t.json(),o=document.querySelector(".numeros-grid");e.forEach((t=>{const e=function(t){const e=document.createElement("div");return e.classList.add("numero-animal"),e.innerHTML=`<h3>${t.specie}</h3>\n                <span data-numero>${t.total} </span>`,e}(t);o.appendChild(e)})),new i("[data-numero]",".numeros",".ativo").init()}catch(t){console.log(t)}}(),fetch("https://blockchain.info/ticker").then((t=>t.json())).then((t=>{document.querySelector(".btc-preco").innerText=(100/t.BRL.sell).toFixed(4)})).catch((t=>{console.log(Error(t))})),function(){const t=document.querySelectorAll('[data-anime="scroll"]'),e=.6*window.innerHeight;function o(){t.forEach((t=>{t.getBoundingClientRect().top-e<0?t.classList.add("ativo"):t.classList.contains("ativo")&&t.classList.remove("ativo")}))}t.length&&(o(),window.addEventListener("scroll",o))}()})();