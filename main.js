/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./modulos/accordion.js":
/*!******************************!*\
  !*** ./modulos/accordion.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Accordion)\n/* harmony export */ });\nclass Accordion {\n  constructor(list) {\n    this.accordionList = document.querySelectorAll(list);\n    this.activeClass = \"ativo\";\n  }\n\n  toggleAccordion(item) {\n    item.classList.toggle(this.activeClass);\n    item.nextElementSibling.classList.toggle(this.activeClass);\n  }\n\n  // adiciona eventos ao accordion\n  addAccordionEvent() {\n    this.accordionList.forEach((item) => {\n      item.addEventListener(\"click\", () => this.toggleAccordion(item));\n    });\n  }\n\n  // inicia função\n  init() {\n    if (this.accordionList.length) {\n      // ativa primeiro item\n      this.toggleAccordion(this.accordionList[0]);\n      this.addAccordionEvent();\n    }\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://animaisfantasticos/./modulos/accordion.js?");

/***/ }),

/***/ "./modulos/anima-numeros.js":
/*!**********************************!*\
  !*** ./modulos/anima-numeros.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AnimaNumeros)\n/* harmony export */ });\nclass AnimaNumeros {\r\n  constructor(numeros, observerTarget, observerClass) {\r\n    this.numeros = document.querySelectorAll(numeros);\r\n    this.observerTarget = document.querySelector(observerTarget);\r\n    this.observerClass = observerClass;\r\n\r\n    // bind o this do objeto ao callback da mutação\r\n    this.handleMutation = this.handleMutation.bind(this);\r\n  }\r\n\r\n  // recebe um elemento do dom, com número em seu texto incrementa a partir de 0 até o número final\r\n  static incrementarNumero(numero) {\r\n    const total = +numero.innerText;\r\n    const incremento = Math.floor(total / 100);\r\n    let start = 0;\r\n\r\n    const timer = setInterval(() => {\r\n      start += incremento;\r\n      numero.innerText = start;\r\n\r\n      if (start > total) {\r\n        numero.innerText = `${total}+`;\r\n        clearInterval(timer);\r\n      }\r\n    }, 25 * Math.random());\r\n  }\r\n\r\n  // ativa incrementar número para cada número selecionado do dom\r\n  animaNumeros() {\r\n    this.numeros.forEach((numero) => this.constructor.incrementarNumero(numero));\r\n  }\r\n\r\n  // função que ocorre quando a mutação ocorrer\r\n  handleMutation(mutation) {\r\n    if (mutation[0].target.classList.contains(this.observerClass)) {\r\n      this.observer.disconnect();\r\n      this.animaNumeros();\r\n    }\r\n  }\r\n\r\n  // adiciona a mutação para verificar quando a classe ativo é adicionada ao elemento target\r\n  addMutationObserver() {\r\n    this.observer = new MutationObserver(this.handleMutation);\r\n    this.observer.observe(this.observerTarget, { attributes: true });\r\n  }\r\n\r\n  init() {\r\n    if (this.numeros.length && this.observerTarget) {\r\n      this.addMutationObserver();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animaisfantasticos/./modulos/anima-numeros.js?");

/***/ }),

/***/ "./modulos/background.js":
/*!*******************************!*\
  !*** ./modulos/background.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initBackground)\n/* harmony export */ });\n/* harmony import */ var _initTab_nav_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initTab-nav.js */ \"./modulos/initTab-nav.js\");\n\r\n\r\nfunction initBackground() {\r\n  const tabmenu = document.querySelectorAll('[data-tab=\"menu\"] li > img');\r\n\r\n  const tabNav = new _initTab_nav_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\r\n    '[data-tab=\"menu\"] li > img',\r\n    '[data-tab=\"menu\"] li > img',\r\n  );\r\n  tabNav.init();\r\n\r\n  tabmenu.forEach((item) => {\r\n    item.addEventListener(\"click\", () => {\r\n      const animal = item.getAttribute('alt');\r\n      if (item.classList.contains(\"ativo\")) {\r\n        document.body.style.backgroundImage = `url(\"img/background/${animal}.webp\")`;\r\n        document.body.style.color = \"white\";\r\n        document.body.style.webkitTextStrokeWidth = \"0.2px\";\r\n        document.body.style.webkitTextStrokeColor = \"#000\";\r\n      } else {\r\n        document.body.style.backgroundImage = \"\";\r\n      }\r\n    });\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://animaisfantasticos/./modulos/background.js?");

/***/ }),

/***/ "./modulos/debounce.js":
/*!*****************************!*\
  !*** ./modulos/debounce.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ debounce)\n/* harmony export */ });\nfunction debounce(callback, delay) {\r\n  let timer;\r\n\r\n  return (...args) => {\r\n    if (timer) {\r\n      clearTimeout(timer);\r\n    }\r\n    timer = setTimeout(() => {\r\n      callback(...args);\r\n      timer = null;\r\n    }, delay);\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://animaisfantasticos/./modulos/debounce.js?");

/***/ }),

/***/ "./modulos/dropdown-menu.js":
/*!**********************************!*\
  !*** ./modulos/dropdown-menu.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DropdownMenu)\n/* harmony export */ });\n/* harmony import */ var _outsideClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideClick.js */ \"./modulos/outsideClick.js\");\n\r\n\r\nclass DropdownMenu {\r\n  constructor(dropdownMenus, events) {\r\n    this.dropdownMenus = document.querySelectorAll(dropdownMenus);\r\n\r\n    // define touchstart e click como argumento padrão\r\n    // de events caso o usuário não define\r\n    if (events === undefined) this.events = ['touchstart', 'click'];\r\n    else this.events = events;\r\n\r\n    this.activeClass = 'active';\r\n    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);\r\n  }\r\n\r\n  // Ativa o dropdownmenu e adiciona\r\n  // a função que observa o clique fora dele\r\n  activeDropdownMenu(event) {\r\n    event.preventDefault();\r\n    const element = event.currentTarget;\r\n    element.classList.add(this.activeClass);\r\n    (0,_outsideClick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(element, this.events, () => {\r\n      element.classList.remove('active');\r\n    });\r\n  }\r\n\r\n  // adiciona os eventos ao dropdownmenu\r\n  addDropdownMenusEvent() {\r\n    this.dropdownMenus.forEach((menu) => {\r\n      this.events.forEach((userEvent) => {\r\n        menu.addEventListener(userEvent, this.activeDropdownMenu);\r\n      });\r\n    });\r\n  }\r\n\r\n  init() {\r\n    if (this.dropdownMenus.length) {\r\n      this.addDropdownMenusEvent();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animaisfantasticos/./modulos/dropdown-menu.js?");

/***/ }),

/***/ "./modulos/easyScroll.js":
/*!*******************************!*\
  !*** ./modulos/easyScroll.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ EasyScroll)\n/* harmony export */ });\nclass EasyScroll {\n  constructor(links, options) {\n    this.linksInternos = document.querySelectorAll(links);\n    if (options === undefined) {\n      this.options = { behavior: \"smooth\", block: \"start\" };\n    } else {\n      this.options = options;\n    }\n    this.scrollToSection = this.scrollToSection.bind(this);\n  }\n\n  scrollToSection(Event) {\n    console.log(this);\n    Event.preventDefault();\n    const href = Event.currentTarget.getAttribute(\"href\");\n    const section = document.querySelector(href);\n    section.scrollIntoView(this.options);\n  }\n\n  addLinkEvent() {\n    this.linksInternos.forEach((link) => {\n      link.addEventListener(\"click\", this.scrollToSection);\n    });\n  }\n\n  init() {\n    this.addLinkEvent();\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://animaisfantasticos/./modulos/easyScroll.js?");

/***/ }),

/***/ "./modulos/fetch-bitcoin.js":
/*!**********************************!*\
  !*** ./modulos/fetch-bitcoin.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchBitcoin)\n/* harmony export */ });\nfunction fetchBitcoin(url, target) {\r\n  fetch(url)\r\n    .then((r) => r.json())\r\n    .then((btc) => {\r\n      const btcPrice = document.querySelector(target);\r\n      btcPrice.innerText = (100 / btc.BRL.sell).toFixed(4);\r\n    })\r\n    .catch((erro) => {\r\n      console.log(Error(erro));\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://animaisfantasticos/./modulos/fetch-bitcoin.js?");

/***/ }),

/***/ "./modulos/fetchAnimais.js":
/*!*********************************!*\
  !*** ./modulos/fetchAnimais.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchAnimais)\n/* harmony export */ });\n/* harmony import */ var _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anima-numeros.js */ \"./modulos/anima-numeros.js\");\n\r\n\r\nfunction fetchAnimais(url, target) {\r\n  const numerosGrid = document.querySelector(target);\r\n  // cria a div contendo informações com o total de animais\r\n  function createAnimal(animal) {\r\n    const div = document.createElement(\"div\");\r\n    div.classList.add(\"numero-animal\");\r\n\r\n    div.innerHTML = `<h3>${animal.specie}</h3>\r\n                <span data-numero>${animal.total} </span>`;\r\n    return div;\r\n  }\r\n\r\n  // Preenche cada Animal no DOM\r\n  function preencherAnimais(animal) {\r\n    const divAnimal = createAnimal(animal);\r\n    numerosGrid.appendChild(divAnimal);\r\n  }\r\n\r\n  // Anima os números de cada animal no DOM\r\n  function animaQuantAnimais() {\r\n    const animaNumeros = new _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-numero]', '.numeros', 'ativo');\r\n    animaNumeros.init();\r\n  }\r\n\r\n  // Puxa os animais através de um arquivo json e cria cada animal utilizando o createAnimal()\r\n  async function criarAnimais() {\r\n    try {\r\n      // Fetch espera a resposta e transforma em Json\r\n      const animaisR = await fetch(url);\r\n      const animaisJson = await animaisR.json();\r\n\r\n      // Após a transformação de JSON, ativa as funções para preencher e animar os números\r\n      animaisJson.forEach((animal) => preencherAnimais(animal));\r\n      animaQuantAnimais();\r\n    } catch (erro) {\r\n      console.log(erro);\r\n    }\r\n  }\r\n  return criarAnimais();\r\n}\r\n\n\n//# sourceURL=webpack://animaisfantasticos/./modulos/fetchAnimais.js?");

/***/ }),

/***/ "./modulos/funcionamento.js":
/*!**********************************!*\
  !*** ./modulos/funcionamento.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Funcionamento)\n/* harmony export */ });\nclass Funcionamento {\r\n  constructor(funcionamento, activeClass) {\r\n    this.funcionamento = document.querySelector(funcionamento);\r\n    this.activeClass = activeClass;\r\n  }\r\n\r\n  dadosFuncionamento() {\r\n    this.diasSemana = this.funcionamento.dataset.semana.split(\",\").map(Number);\r\n    this.horarioSemana = this.funcionamento.dataset.horario\r\n      .split(\",\")\r\n      .map(Number);\r\n  }\r\n\r\n  dadosAgora() {\r\n    this.nowDate = new Date();\r\n    this.NowDay = this.nowDate.getDay();\r\n    this.horarioAgora = this.nowDate.getUTCHours() - 3;\r\n  }\r\n\r\n  Open() {\r\n    const OpenDays = this.diasSemana.indexOf(this.NowDay) !== -1;\r\n    const openHour = this.horarioAgora >= this.horarioSemana[0]\r\n      && this.horarioAgora < this.horarioSemana[1];\r\n\r\n    return OpenDays && openHour;\r\n  }\r\n\r\n  ativaAberto() {\r\n    if (this.Open()) {\r\n      this.funcionamento.classList.add(this.activeClass);\r\n    }\r\n  }\r\n\r\n  init() {\r\n    if (this.funcionamento) {\r\n      this.dadosFuncionamento();\r\n      this.dadosAgora();\r\n      this.ativaAberto();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animaisfantasticos/./modulos/funcionamento.js?");

/***/ }),

/***/ "./modulos/initTab-nav.js":
/*!********************************!*\
  !*** ./modulos/initTab-nav.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TabNav)\n/* harmony export */ });\nclass TabNav {\r\n  constructor(menu, content) {\r\n    this.tabmenu = document.querySelectorAll(menu);\r\n    this.tabContent = document.querySelectorAll(content);\r\n    this.activeClass = \"ativo\";\r\n  }\r\n\r\n  // ativa a tab de acordo com o index da mesma\r\n  activeTab(index) {\r\n    const show = this.tabContent[index].dataset.anime;\r\n\r\n    this.tabContent.forEach((section) => {\r\n      section.classList.remove(this.activeClass, show);\r\n    });\r\n    this.tabContent[index].classList.add(this.activeClass, show);\r\n  }\r\n\r\n  // adiciona os eventos nas tabs\r\n  addTabNavEvent() {\r\n    this.tabmenu.forEach((item, index) => {\r\n      item.addEventListener(\"click\", () => this.activeTab(index));\r\n    });\r\n  }\r\n\r\n  init() {\r\n    if (this.tabmenu.length && this.tabContent.length) {\r\n      // ativar primeiro item\r\n      this.activeTab(0);\r\n      this.addTabNavEvent();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animaisfantasticos/./modulos/initTab-nav.js?");

/***/ }),

/***/ "./modulos/menu-mobile.js":
/*!********************************!*\
  !*** ./modulos/menu-mobile.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MenuMobile)\n/* harmony export */ });\n/* harmony import */ var _outsideClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideClick.js */ \"./modulos/outsideClick.js\");\n\r\n\r\nclass MenuMobile {\r\n  constructor(menuButton, menuList, events) {\r\n    this.menuButton = document.querySelector('[data-menu=\"menu\"]');\r\n    this.menuList = document.querySelector('[data-menu=\"list\"]');\r\n    if (events === undefined) this.events = [\"click\", \"touchstart\"];\r\n    else this.events = events;\r\n    this.activeClass = 'active';\r\n\r\n    this.openMenu = this.openMenu.bind(this);\r\n  }\r\n\r\n  openMenu() {\r\n    this.menuList.classList.add(\"ativo\");\r\n    this.menuButton.classList.add(\"ativo\");\r\n    (0,_outsideClick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.menuList, this.events, () => {\r\n      this.menuList.classList.remove(\"ativo\");\r\n      this.menuButton.classList.remove(\"ativo\");\r\n    });\r\n  }\r\n\r\n  addMenuMobileEvents() {\r\n    this.events.forEach((evento) => this.menuButton.addEventListener(evento, this.openMenu));\r\n  }\r\n\r\n  init() {\r\n    if (this.menuButton && this.menuList) {\r\n      this.addMenuMobileEvents();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animaisfantasticos/./modulos/menu-mobile.js?");

/***/ }),

/***/ "./modulos/modal.js":
/*!**************************!*\
  !*** ./modulos/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initModal)\n/* harmony export */ });\nclass initModal {\r\n  constructor(botaoAbrir, botaoFechar, containerModal) {\r\n    this.botaoAbrir = document.querySelector(botaoAbrir);\r\n    this.botaoFechar = document.querySelector(botaoFechar);\r\n    this.containerModal = document.querySelector(containerModal);\r\n\r\n    // bind this ao callback para fazer referencia oa objeto da classe\r\n    this.eventToggleModal = this.eventToggleModal.bind(this);\r\n    this.cliqueForaModal = this.cliqueForaModal.bind(this);\r\n  }\r\n\r\n  // abre ou fecha o modal\r\n  toggleModal(event) {\r\n    event.preventDefault();\r\n    this.containerModal.classList.toggle(\"ativo\");\r\n  }\r\n\r\n  // adiciona o evento de toggle ao modal\r\n  eventToggleModal(event) {\r\n    event.preventDefault();\r\n    this.toggleModal(event);\r\n  }\r\n\r\n  // fecha o modal ao clicar do lado de fora\r\n  cliqueForaModal(event) {\r\n    if (event.target === this.containerModal) {\r\n      this.toggleModal(event);\r\n    }\r\n  }\r\n\r\n  // adiciona eventos ao modal\r\n  addModalEvent() {\r\n    this.botaoAbrir.addEventListener(\"click\", this.eventToggleModal);\r\n    this.botaoFechar.addEventListener(\"click\", this.eventToggleModal);\r\n    this.containerModal.addEventListener(\"click\", this.cliqueForaModal);\r\n  }\r\n\r\n  init() {\r\n    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {\r\n      this.addModalEvent();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animaisfantasticos/./modulos/modal.js?");

/***/ }),

/***/ "./modulos/outsideClick.js":
/*!*********************************!*\
  !*** ./modulos/outsideClick.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\nfunction outsideClick(elemento, events, callback) {\r\n  const html = document.documentElement;\r\n  const outside = \"data-outside\";\r\n\r\n  function handleOutsideClick(event) {\r\n    // essa função é uma forma de evitar o efeito bubble\r\n    if (!elemento.contains(event.target)) {\r\n      elemento.removeAttribute(outside);\r\n\r\n      events.forEach((userEvent) => {\r\n        html.removeEventListener(userEvent, handleOutsideClick);\r\n      });\r\n      callback();\r\n    }\r\n  }\r\n\r\n  if (!elemento.hasAttribute(outside)) {\r\n    events.forEach((userEvent) => {\r\n      setTimeout(() => {\r\n        html.addEventListener(userEvent, handleOutsideClick);\r\n      }, 0);\r\n    });\r\n    elemento.setAttribute(outside, \"\");\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animaisfantasticos/./modulos/outsideClick.js?");

/***/ }),

/***/ "./modulos/scroll-anima.js":
/*!*********************************!*\
  !*** ./modulos/scroll-anima.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollAnima)\n/* harmony export */ });\n/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debounce.js */ \"./modulos/debounce.js\");\n\r\n\r\nclass ScrollAnima {\r\n  constructor(sections) {\r\n    this.sections = document.querySelectorAll(sections);\r\n    this.windowHalf = window.innerHeight * 0.6;\r\n\r\n    this.checkDistance = (0,_debounce_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.checkDistance.bind(this), 50);\r\n  }\r\n\r\n  // pega a distancia de cada item em relação ao topo do site\r\n  getDistance() {\r\n    this.distance = [...this.sections].map((section) => {\r\n      const offset = section.offsetTop;\r\n      return {\r\n        element: section,\r\n        offset: Math.floor(offset - this.windowHalf),\r\n      };\r\n    });\r\n  }\r\n\r\n  // verifica a distancia em cada objeto em relação ao scroll do site\r\n  checkDistance() {\r\n    this.distance.forEach((item) => {\r\n      if (window.pageYOffset > item.offset) {\r\n        item.element.classList.add(\"ativo\");\r\n      } else if (item.element.classList.contains(\"ativo\")) {\r\n        item.element.classList.remove(\"ativo\");\r\n      }\r\n    });\r\n  }\r\n\r\n  init() {\r\n    if (this.sections.length) {\r\n      this.getDistance();\r\n      this.checkDistance();\r\n      window.addEventListener('scroll', this.checkDistance);\r\n    }\r\n    return this;\r\n  }\r\n\r\n  // remove o event de scroll\r\n  stop() {\r\n    window.removeEventListener('scroll', this.checkDistance);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animaisfantasticos/./modulos/scroll-anima.js?");

/***/ }),

/***/ "./modulos/slide.js":
/*!**************************!*\
  !*** ./modulos/slide.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Slide\": () => (/* binding */ Slide),\n/* harmony export */   \"default\": () => (/* binding */ SlideNav)\n/* harmony export */ });\n/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debounce.js */ \"./modulos/debounce.js\");\n/* eslint-disable max-classes-per-file */\r\n\r\n\r\nclass Slide {\r\n  constructor(slide, wrapper) {\r\n    this.slide = document.querySelector(slide);\r\n    this.wrapper = document.querySelector(wrapper);\r\n    this.distance = {\r\n      finalPosition: 0,\r\n      startX: 0,\r\n      movement: 0,\r\n    };\r\n    this.activeClass = \"ativo\";\r\n    this.changeEvent = new Event('changeEvent'); // cria o evento que alinha a mudança de elemento com paginação\r\n  }\r\n\r\n  // básico\r\n  transition(active) {\r\n    this.slide.style.transition = active ? \"transform .3s\" : \"\";\r\n  }\r\n\r\n  moveSlide(distX) {\r\n    this.distance.movePosition = distX;\r\n    this.slide.style.transform = `translate3d(${distX}px, 0, 0)`;\r\n  }\r\n\r\n  updatePosition(clientX) {\r\n    this.distance.movement = (this.distance.startX - clientX) * 1.6;\r\n    return this.distance.finalPosition - this.distance.movement;\r\n  }\r\n\r\n  onStart(Event) {\r\n    let movetype;\r\n    if (Event.type === \"mousedown\") {\r\n      Event.preventDefault();\r\n      this.distance.startX = Event.clientX;\r\n      movetype = \"mousemove\";\r\n    } else {\r\n      this.distance.startX = Event.changedTouches[0].clientX;\r\n      movetype = \"touchmove\";\r\n    }\r\n    this.wrapper.addEventListener(movetype, this.onMove);\r\n    this.transition(false);\r\n  }\r\n\r\n  onMove(Event) {\r\n    const pointerPosition = Event.type === \"mousemove\"\r\n      ? Event.clientX\r\n      : Event.changedTouches[0].clientX;\r\n    const finalPosition = this.updatePosition(pointerPosition);\r\n    this.moveSlide(finalPosition);\r\n  }\r\n\r\n  onEnd(Event) {\r\n    const movetype = Event.type === \"mouseup\" ? \"mousemove\" : \"touchmove\";\r\n    this.wrapper.removeEventListener(movetype, this.onMove);\r\n    this.distance.finalPosition = this.distance.movePosition;\r\n    this.transition(true);\r\n    this.changeSlideOnEnd();\r\n  }\r\n\r\n  changeSlideOnEnd() {\r\n    if (this.distance.movement > 120 && this.index.next !== undefined) {\r\n      this.activeNextSlide();\r\n    } else if (this.distance.movement < -120 && this.index.prev !== undefined) {\r\n      this.activePrevSlide();\r\n    } else {\r\n      this.changeSlide(this.index.active);\r\n    }\r\n  }\r\n\r\n  addSlideEvents() {\r\n    this.wrapper.addEventListener(\"mousedown\", this.onStart);\r\n    this.wrapper.addEventListener(\"touchstart\", this.onStart);\r\n    this.wrapper.addEventListener(\"mouseup\", this.onEnd);\r\n    this.wrapper.addEventListener(\"touchend\", this.onEnd);\r\n  }\r\n\r\n  // active class\r\n\r\n  changeActiveClass() {\r\n    this.slideArray.forEach((item) => item.element.classList.remove(this.activeClass));\r\n    this.slideArray[this.index.active].element.classList.add(this.activeClass);\r\n  }\r\n\r\n  // navegação com Next-Prev\r\n  activePrevSlide() {\r\n    if (this.index.prev !== undefined) {\r\n      this.changeSlide(this.index.prev);\r\n    }\r\n  }\r\n\r\n  activeNextSlide() {\r\n    if (this.index.next !== undefined) {\r\n      this.changeSlide(this.index.next);\r\n    }\r\n  }\r\n\r\n  // slides config\r\n\r\n  slidePosition(slide) {\r\n    const margin = (this.wrapper.offsetWidth - slide.offsetWidth) / 2;\r\n    return -(slide.offsetLeft - margin);\r\n  }\r\n\r\n  slidesConfig() {\r\n    this.slideArray = [...this.slide.children].map((element) => {\r\n      const position = this.slidePosition(element);\r\n      return { position, element };\r\n    });\r\n  }\r\n\r\n  slidesIndexNav(index) {\r\n    const last = this.slideArray.length - 1;\r\n    this.index = {\r\n      prev: index ? index - 1 : undefined,\r\n      active: index,\r\n      next: index === last ? undefined : index + 1,\r\n    };\r\n  }\r\n\r\n  changeSlide(index) {\r\n    const activeSlide = this.slideArray[index];\r\n    this.moveSlide(activeSlide.position);\r\n    this.slidesIndexNav(index);\r\n    this.distance.finalPosition = activeSlide.position;\r\n    this.changeActiveClass();\r\n    this.wrapper.dispatchEvent(this.changeEvent);// alinha a mudança de elemento com a paginação\r\n  }\r\n\r\n  onResize() {\r\n    setTimeout(() => {\r\n      this.slidesConfig();\r\n      this.changeSlide(this.index.active);\r\n    }, 500);\r\n  }\r\n\r\n  addResizeEvent() {\r\n    window.addEventListener(\"resize\", this.onResize);\r\n  }\r\n\r\n  bindEvents() {\r\n    this.onStart = this.onStart.bind(this);\r\n    this.onMove = this.onMove.bind(this);\r\n    this.onEnd = this.onEnd.bind(this);\r\n\r\n    this.activePrevSlide = this.activePrevSlide.bind(this);\r\n    this.activeNextSlide = this.activeNextSlide.bind(this);\r\n\r\n    this.onResize = (0,_debounce_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.onResize.bind(this), 10);\r\n  }\r\n\r\n  init() {\r\n    this.bindEvents();\r\n    this.transition(true);\r\n    this.addSlideEvents();\r\n    this.slidesConfig();\r\n    this.addResizeEvent();\r\n    this.changeSlide(0);\r\n    return this;\r\n  }\r\n}\r\n\r\nclass SlideNav extends Slide {\r\n  constructor(slide, wrapper) {\r\n    super(slide, wrapper); // chama o constrcutor da class de quem está q foi estendida\r\n    this.bindControlEvents();\r\n  }\r\n\r\n  // setas próximo e anterior\r\n  addArrow(prev, next) {\r\n    this.prevElement = document.querySelector(prev);\r\n    this.nextElement = document.querySelector(next);\r\n    this.addArrowEvent();\r\n  }\r\n\r\n  addArrowEvent() {\r\n    this.prevElement.addEventListener('click', this.activePrevSlide);\r\n    this.nextElement.addEventListener('click', this.activeNextSlide);\r\n  }\r\n\r\n  // paginação(as bolinhas embaixo do slide)\r\n  createControl() {\r\n    const control = document.createElement('ul');\r\n    control.dataset.control = 'slide';\r\n\r\n    this.slideArray.forEach((_item, index) => {\r\n      control.innerHTML += `<li><a href='#slide${index + 1}'>${index + 1}</a></li>`;\r\n    });\r\n    this.wrapper.appendChild(control);\r\n    return control;\r\n  }\r\n\r\n  EventControl(item, index) {\r\n    item.addEventListener('click', (Event) => {\r\n      Event.preventDefault();\r\n      this.changeSlide(index);\r\n      this.activeControlItem();\r\n    });\r\n    this.wrapper.addEventListener('changeEvent', this.activeControlItem);\r\n  }\r\n\r\n  activeControlItem() {\r\n    this.controlArray.forEach((item) => item.classList.remove(this.activeClass));\r\n\r\n    this.controlArray[this.index.active].classList.add(this.activeClass);\r\n  }\r\n\r\n  addControl(customControl) {\r\n    this.control = document.querySelector(customControl) || this.createControl();\r\n    this.controlArray = [...this.control.children];\r\n\r\n    this.activeControlItem();\r\n    this.controlArray.forEach(this.EventControl);\r\n  }\r\n\r\n  bindControlEvents() {\r\n    this.EventControl = this.EventControl.bind(this);\r\n    this.activeControlItem = this.activeControlItem.bind(this);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animaisfantasticos/./modulos/slide.js?");

/***/ }),

/***/ "./modulos/tooltip.js":
/*!****************************!*\
  !*** ./modulos/tooltip.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Tooltip)\n/* harmony export */ });\nclass Tooltip {\r\n  constructor(tooltips) {\r\n    this.tooltips = document.querySelectorAll(tooltips);\r\n\r\n    // bind dos objetos aos objetos da classe no callback\r\n    this.onMouseLeave = this.onMouseLeave.bind(this);\r\n    this.onMouseMove = this.onMouseMove.bind(this);\r\n    this.onMouseOver = this.onMouseOver.bind(this);\r\n  }\r\n\r\n  // move a tooltip com base em seus estilos de acordo a posição do mouse\r\n  onMouseMove(Event) {\r\n    this.tooltipBox.style.top = `${Event.pageY + 20}px`;\r\n    if (Event.pageX + 240 > window.innerWidth) {\r\n      this.tooltipBox.style.left = `${Event.pageX - 190}px`;\r\n    } else {\r\n      this.tooltipBox.style.left = `${Event.pageX + 20}px`;\r\n    }\r\n  }\r\n\r\n  // remove a tooltip de acordo com os eventos de MouseMove e MouseLeave\r\n  onMouseLeave({ currentTarget }) {\r\n    // essa é uma forma de usar elementos q não tem estão nesse escopo\r\n    this.tooltipBox.remove();\r\n    currentTarget.removeEventListener(\"mouseleave\", this.onMouseLeave);\r\n    currentTarget.removeEventListener(\"mouseMove\", this.onMouseMove);\r\n  }\r\n\r\n  // cria a tooltipbox e põe no body\r\n  createTooltipBox(item) {\r\n    const tooltipBox = document.createElement(\"div\");\r\n    const text = item.getAttribute(\"aria-label\");\r\n    tooltipBox.classList.add(\"tooltip\");\r\n    tooltipBox.innerText = text;\r\n    document.body.appendChild(tooltipBox);\r\n    this.tooltipBox = tooltipBox;\r\n  }\r\n\r\n  // cria a tooltip e adiciona os eventos de mouseMove e MouseLeave ao target\r\n  onMouseOver({ currentTarget }) {\r\n    // cria a tooltip box e coloca em uma propriedade\r\n    this.createTooltipBox(currentTarget);\r\n\r\n    currentTarget.addEventListener(\"mousemove\", this.onMouseMove);\r\n    currentTarget.addEventListener(\"mouseleave\", this.onMouseLeave);\r\n  }\r\n\r\n  // adiciona os eventos de mouseOver a cada tooltip\r\n  addTooltipsEvent() {\r\n    this.tooltips.forEach((item) => {\r\n      item.addEventListener(\"mouseover\", this.onMouseOver);\r\n    });\r\n  }\r\n\r\n  init() {\r\n    if (this.tooltips.length) {\r\n      this.addTooltipsEvent();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animaisfantasticos/./modulos/tooltip.js?");

/***/ }),

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modulos_easyScroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modulos/easyScroll.js */ \"./modulos/easyScroll.js\");\n/* harmony import */ var _modulos_accordion_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modulos/accordion.js */ \"./modulos/accordion.js\");\n/* harmony import */ var _modulos_initTab_nav_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modulos/initTab-nav.js */ \"./modulos/initTab-nav.js\");\n/* harmony import */ var _modulos_background_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modulos/background.js */ \"./modulos/background.js\");\n/* harmony import */ var _modulos_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modulos/modal.js */ \"./modulos/modal.js\");\n/* harmony import */ var _modulos_tooltip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modulos/tooltip.js */ \"./modulos/tooltip.js\");\n/* harmony import */ var _modulos_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modulos/dropdown-menu.js */ \"./modulos/dropdown-menu.js\");\n/* harmony import */ var _modulos_funcionamento_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modulos/funcionamento.js */ \"./modulos/funcionamento.js\");\n/* harmony import */ var _modulos_fetchAnimais_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modulos/fetchAnimais.js */ \"./modulos/fetchAnimais.js\");\n/* harmony import */ var _modulos_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modulos/fetch-bitcoin.js */ \"./modulos/fetch-bitcoin.js\");\n/* harmony import */ var _modulos_scroll_anima_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modulos/scroll-anima.js */ \"./modulos/scroll-anima.js\");\n/* harmony import */ var _modulos_menu_mobile_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modulos/menu-mobile.js */ \"./modulos/menu-mobile.js\");\n/* harmony import */ var _modulos_slide_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modulos/slide.js */ \"./modulos/slide.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst easyScroll = new _modulos_easyScroll_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-anime=\"menu\"] a[href^=\"#\"]');\r\neasyScroll.init();\r\n\r\nconst accordion = new _modulos_accordion_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('[data-anime=\"accordion\"] dt');\r\naccordion.init();\r\n\r\nconst tabNav = new _modulos_initTab_nav_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\r\n  '[data-tab=\"menu\"] li',\r\n  '[data-tab=\"content\"] section',\r\n);\r\ntabNav.init();\r\n\r\nconst modal = new _modulos_modal_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](\r\n  '[data-modal=\"abrir\"]',\r\n  '[data-modal=\"fechar\"]',\r\n  '[data-modal=\"container\"]',\r\n);\r\nmodal.init();\r\n\r\n(0,_modulos_background_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n\r\nconst tooltip = new _modulos_tooltip_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"](\"[data-tooltip]\");\r\ntooltip.init();\r\n\r\nconst dropdownMenu = new _modulos_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"](\"[data-dropdown]\");\r\ndropdownMenu.init();\r\n\r\nconst menuMobile = new _modulos_menu_mobile_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"]('[data-menu=\"menu\"]', '[data-menu=\"list\"]');\r\nmenuMobile.init();\r\n\r\nconst funcionamento = new _modulos_funcionamento_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"](\"[data-semana]\", \"aberto\");\r\nfuncionamento.init();\r\n\r\nconst scrollanima = new _modulos_scroll_anima_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"]('[data-anime=\"scroll\"]');\r\nscrollanima.init();\r\n\r\n(0,_modulos_fetchAnimais_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(\"./json/animalApi.json\", \".numeros-grid\");\r\n\r\n(0,_modulos_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(\"https://blockchain.info/ticker\", \".btc-preco\");\r\n\r\nconst slide = new _modulos_slide_js__WEBPACK_IMPORTED_MODULE_12__[\"default\"](\".slide\", \".slide-wrapper\");\r\nslide.init();\r\nslide.addControl(\".custom-controls\");\r\n\n\n//# sourceURL=webpack://animaisfantasticos/./script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./script.js");
/******/ 	
/******/ })()
;