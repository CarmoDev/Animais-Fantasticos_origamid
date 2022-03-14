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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Accordion)\n/* harmony export */ });\nclass Accordion {\r\n  constructor(list) {\r\n    this.accordionList = document.querySelectorAll(list);\r\n    this.activeClass = \"ativo\";\r\n  }\r\n\r\n  toggleAccordion(item) {\r\n    item.classList.toggle(this.activeClass);\r\n    item.nextElementSibling.classList.toggle(this.activeClass);\r\n  }\r\n\r\n  // adiciona eventos ao accordion\r\n  addAccordionEvent() {\r\n    this.accordionList.forEach((item) => {\r\n      item.addEventListener(\"click\", () => this.toggleAccordion(item));\r\n    });\r\n  }\r\n\r\n  // inicia função\r\n  init() {\r\n    if (this.accordionList.length) {\r\n      // ativa primeiro item\r\n      this.toggleAccordion(this.accordionList[0]);\r\n      this.addAccordionEvent();\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animaisfantasticos/./modulos/accordion.js?");

/***/ }),

/***/ "./modulos/anima-numeros.js":
/*!**********************************!*\
  !*** ./modulos/anima-numeros.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimaNumeros)\n/* harmony export */ });\nfunction initAnimaNumeros() {\r\n  function animaNumeros() {\r\n    const numeros = document.querySelectorAll('[data-numero]');\r\n\r\n    numeros.forEach((numero) => {\r\n      const total = +numero.innerText;\r\n      const incremento = Math.floor(total / 100);\r\n      let start = 0;\r\n\r\n      const timer = setInterval(() => {\r\n        start += incremento;\r\n        numero.innerText = start;\r\n\r\n        if (start > total) {\r\n          numero.innerText = `${total}+`;\r\n          clearInterval(timer);\r\n        }\r\n      }, 25 * Math.random);\r\n    });\r\n  }\r\n\r\n  let observer;\r\n  function handleMutation(mutation) {\r\n    if (mutation[0].target.classList.contains('ativo')) {\r\n      observer.disconnect();\r\n      animaNumeros();\r\n    }\r\n  }\r\n  observer = new MutationObserver(handleMutation);\r\n\r\n  const observerTarget = document.querySelector('.numeros');\r\n\r\n  observer.observe(observerTarget, { attributes: true });\r\n}\r\n\n\n//# sourceURL=webpack://animaisfantasticos/./modulos/anima-numeros.js?");

/***/ }),

/***/ "./modulos/background.js":
/*!*******************************!*\
  !*** ./modulos/background.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initBackground)\n/* harmony export */ });\nfunction initBackground() {\r\n  const raposa = document.querySelector(\".raposa\");\r\n  const esquilo = document.querySelector(\".esquilo\");\r\n  const urso = document.querySelector(\".urso\");\r\n  const lobo = document.querySelector(\".lobo\");\r\n  const babuino = document.querySelector(\".babuino\");\r\n  const leão = document.querySelector(\".leão\");\r\n  const tabmenu = document.querySelectorAll('[data-tab=\"menu\"] li');\r\n\r\n  function activeAnimal(index) {\r\n    tabmenu.forEach((animal) => {\r\n      animal.classList.remove(\"ativo\");\r\n    });\r\n    tabmenu[index].classList.add(\"ativo\");\r\n  }\r\n\r\n  tabmenu.forEach((item, index) => {\r\n    item.addEventListener(\"click\", () => {\r\n      activeAnimal(index);\r\n      if (raposa.classList.contains(\"ativo\")) {\r\n        document.body.style.backgroundImage = 'url(\"img/background/raposa.jpg\")';\r\n        document.body.style.color = \"white\";\r\n        document.body.style.webkitTextStrokeWidth = \"0.2px\";\r\n        document.body.style.webkitTextStrokeColor = \"#000\";\r\n      } else if (esquilo.classList.contains(\"ativo\")) {\r\n        document.body.style.backgroundImage = 'url(\"img/background/esquilo.jpg\")';\r\n        document.body.style.color = \"white\";\r\n        document.body.style.webkitTextStrokeWidth = \"0.3px\";\r\n        document.body.style.webkitTextStrokeColor = \"#000\";\r\n      } else if (urso.classList.contains(\"ativo\")) {\r\n        document.body.style.backgroundImage = 'url(\"img/background/urso.jpg\")';\r\n        document.body.style.color = \"black\";\r\n        document.body.style.webkitTextStrokeWidth = \"0.3px\";\r\n        document.body.style.webkitTextStrokeColor = \"#000\";\r\n      } else if (lobo.classList.contains(\"ativo\")) {\r\n        document.body.style.backgroundImage = 'url(\"img/background/lobo.jpg\")';\r\n        document.body.style.color = \"white\";\r\n        document.body.style.webkitTextStrokeWidth = \"0.3px\";\r\n        document.body.style.webkitTextStrokeColor = \"#000\";\r\n      } else if (babuino.classList.contains(\"ativo\")) {\r\n        document.body.style.backgroundImage = 'url(\"img/background/babuino.jpg\")';\r\n        document.body.style.color = \"white\";\r\n        document.body.style.webkitTextStrokeWidth = \"0.3px\";\r\n        document.body.style.webkitTextStrokeColor = \"#000\";\r\n      } else if (leão.classList.contains(\"ativo\")) {\r\n        document.body.style.backgroundImage = 'url(\"img/background/leao.jpg\")';\r\n        document.body.style.webkitTextStrokeWidth = \"0.5px\";\r\n        document.body.style.webkitTextStrokeColor = \"#000\";\r\n      } else {\r\n        document.body.style.backgroundImage = \"\";\r\n      }\r\n    });\r\n  });\r\n}\r\ninitBackground();\r\n\n\n//# sourceURL=webpack://animaisfantasticos/./modulos/background.js?");

/***/ }),

/***/ "./modulos/date-object.js":
/*!********************************!*\
  !*** ./modulos/date-object.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDateObject)\n/* harmony export */ });\nfunction initDateObject() {\r\n  const funcionamento = document.querySelector(\"[data-semana]\");\r\n  const diasSemana = funcionamento.dataset.semana.split(\",\").map(Number); // transforma a string em uma array númerica\r\n  const horarioSemana = funcionamento.dataset.horario.split(\",\").map(Number);\r\n\r\n  const nowDate = new Date();\r\n  const NowDay = nowDate.getDay();\r\n  const horarioAgora = nowDate.getHours();\r\n\r\n  const DayOpen = diasSemana.indexOf(NowDay) !== -1;\r\n  const openHour = horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];\r\n\r\n  if (DayOpen && openHour) {\r\n    funcionamento.classList.add(\"aberto\");\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animaisfantasticos/./modulos/date-object.js?");

/***/ }),

/***/ "./modulos/dropdown-menu.js":
/*!**********************************!*\
  !*** ./modulos/dropdown-menu.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDropDownMenu)\n/* harmony export */ });\n/* harmony import */ var _outsideClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideClick.js */ \"./modulos/outsideClick.js\");\n\r\n\r\nfunction handleClick(event) {\r\n  event.preventDefault();\r\n  this.classList.toggle('ativo');\r\n\r\n  (0,_outsideClick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ['touchstart', 'click'], () => {\r\n    this.classList.remove('ativo');\r\n  });\r\n}\r\n\r\nfunction initDropDownMenu() {\r\n  const dropDownMenus = document.querySelectorAll('[data-dropdown]');\r\n\r\n  dropDownMenus.forEach((menu) => {\r\n    ['touchstart', 'click'].forEach((userEvent) => {\r\n      menu.addEventListener(userEvent, handleClick);\r\n    });\r\n  });\r\n\r\n  /* touchstart é tipo a função click porém para mobile, e usamos o\r\n    addEventListener para podermos ter gatilhos para o evento de forma mais limpa */\r\n}\r\n\n\n//# sourceURL=webpack://animaisfantasticos/./modulos/dropdown-menu.js?");

/***/ }),

/***/ "./modulos/easyScroll.js":
/*!*******************************!*\
  !*** ./modulos/easyScroll.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ EasyScroll)\n/* harmony export */ });\nclass EasyScroll {\r\n  constructor(links, options) {\r\n    this.linksInternos = document.querySelectorAll(links);\r\n    if (options === undefined) {\r\n      this.options = { behavior: \"smooth\", block: \"start\" };\r\n    } else {\r\n      this.options = options;\r\n    }\r\n\r\n    this.scrollToSection = this.scrollToSection.bind(this);\r\n  }\r\n\r\n  scrollToSection(Event) {\r\n    Event.preventDefault();\r\n    const href = Event.currentTarget.getAttribute(\"href\");\r\n    const section = document.querySelector(href);\r\n    section.scrollIntoView(this.options);\r\n  }\r\n\r\n  addLinkEvent() {\r\n    this.linksInternos.forEach((link) => {\r\n      link.addEventListener(\"click\", this.scrollToSection);\r\n    });\r\n  }\r\n\r\n  init() {\r\n    this.addLinkEvent();\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animaisfantasticos/./modulos/easyScroll.js?");

/***/ }),

/***/ "./modulos/fetch-bitcoin.js":
/*!**********************************!*\
  !*** ./modulos/fetch-bitcoin.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchBitcoin)\n/* harmony export */ });\nfunction initFetchBitcoin() {\r\n  fetch(\"https://blockchain.info/ticker\")\r\n    .then((r) => r.json())\r\n    .then((btc) => {\r\n      const btcPrice = document.querySelector(\".btc-preco\");\r\n      btcPrice.innerText = (100 / btc.BRL.sell).toFixed(4);\r\n    })\r\n    .catch((erro) => {\r\n      console.log(Error(erro));\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://animaisfantasticos/./modulos/fetch-bitcoin.js?");

/***/ }),

/***/ "./modulos/fetchAnimais.js":
/*!*********************************!*\
  !*** ./modulos/fetchAnimais.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchAnimais)\n/* harmony export */ });\n/* harmony import */ var _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anima-numeros.js */ \"./modulos/anima-numeros.js\");\n\r\n\r\nfunction initFetchAnimais() {\r\n  function createAnimal(animal) {\r\n    const div = document.createElement(\"div\");\r\n    div.classList.add(\"numero-animal\");\r\n\r\n    div.innerHTML = `<h3>${animal.specie}</h3>\r\n                <span data-numero>${animal.total} </span>`;\r\n    return div;\r\n  }\r\n\r\n  async function fetchAnimais(url) {\r\n    try {\r\n      const animaisR = await fetch(url);\r\n      const animaisJson = await animaisR.json();\r\n      const numerosGrid = document.querySelector(\".numeros-grid\");\r\n\r\n      animaisJson.forEach((animal) => {\r\n        const divAnimal = createAnimal(animal);\r\n        numerosGrid.appendChild(divAnimal);\r\n      });\r\n      (0,_anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    } catch (erro) {\r\n      console.log(erro);\r\n    }\r\n  }\r\n\r\n  fetchAnimais(\"./json/animalApi.json\");\r\n}\r\n\n\n//# sourceURL=webpack://animaisfantasticos/./modulos/fetchAnimais.js?");

/***/ }),

/***/ "./modulos/initTab-nav.js":
/*!********************************!*\
  !*** ./modulos/initTab-nav.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTabNav)\n/* harmony export */ });\nfunction initTabNav() {\r\n  const tabmenu = document.querySelectorAll('[data-tab=\"menu\"] li');\r\n  const tabContent = document.querySelectorAll('[data-tab=\"content\"] section');\r\n\r\n  tabContent[0].classList.add(\"ativo\");\r\n\r\n  function activeTab(index) {\r\n    const show = tabContent[index].dataset.anime;\r\n\r\n    tabContent.forEach((section) => {\r\n      section.classList.remove(\"ativo\", show);\r\n    });\r\n    tabContent[index].classList.add(\"ativo\", show);\r\n  }\r\n\r\n  if (tabmenu.length && tabContent.length) {\r\n    tabmenu.forEach((item, index) => {\r\n      item.addEventListener(\"click\", () => {\r\n        activeTab(index);\r\n      });\r\n    });\r\n  }\r\n}\r\ninitTabNav();\r\n\n\n//# sourceURL=webpack://animaisfantasticos/./modulos/initTab-nav.js?");

/***/ }),

/***/ "./modulos/menu-mobile.js":
/*!********************************!*\
  !*** ./modulos/menu-mobile.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuMobile)\n/* harmony export */ });\n/* harmony import */ var _outsideClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideClick.js */ \"./modulos/outsideClick.js\");\n\r\n\r\nfunction initMenuMobile() {\r\n  const menuButton = document.querySelector('[data-menu=\"menu\"]');\r\n  const menuList = document.querySelector('[data-menu=\"list\"]');\r\n  const eventos = [\"click\", \"touchstart\"];\r\n\r\n  function openMenu() {\r\n    menuList.classList.add(\"ativo\");\r\n    menuButton.classList.add(\"ativo\");\r\n    (0,_outsideClick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menuList, eventos, () => {\r\n      menuList.classList.remove(\"ativo\");\r\n      menuButton.classList.remove(\"ativo\");\r\n    });\r\n  }\r\n\r\n  eventos.forEach(() => menuButton.addEventListener(\"click\", openMenu));\r\n}\r\n\n\n//# sourceURL=webpack://animaisfantasticos/./modulos/menu-mobile.js?");

/***/ }),

/***/ "./modulos/modal.js":
/*!**************************!*\
  !*** ./modulos/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initModal)\n/* harmony export */ });\nfunction initModal() {\r\n  const botaoAbrir = document.querySelector('[data-modal=\"abrir\"]');\r\n  const botaoFechar = document.querySelector('[data-modal=\"fechar\"]');\r\n  const containerModal = document.querySelector('[data-modal=\"container\"]');\r\n\r\n  function toggleModal(event) {\r\n    event.preventDefault();\r\n    containerModal.classList.toggle(\"ativo\");\r\n  }\r\n  function cliqueForaModal(event) {\r\n    if (event.target === this) {\r\n      toggleModal(event);\r\n    }\r\n  }\r\n\r\n  if (botaoAbrir && botaoFechar && containerModal) {\r\n    botaoAbrir.addEventListener(\"click\", toggleModal);\r\n    botaoFechar.addEventListener(\"click\", toggleModal);\r\n    containerModal.addEventListener(\"click\", cliqueForaModal);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animaisfantasticos/./modulos/modal.js?");

/***/ }),

/***/ "./modulos/outsideClick.js":
/*!*********************************!*\
  !*** ./modulos/outsideClick.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\nfunction outsideClick(elemento, events, callback) {\r\n  const html = document.documentElement;\r\n  const outside = \"data-outside\";\r\n\r\n  function handleOutsideClick(event) {\r\n    // essa função é uma forma de evitar o efeito bubble\r\n    if (!elemento.contains(event.target)) {\r\n      elemento.removeAttribute(outside);\r\n\r\n      events.forEach((userEvent) => {\r\n        html.removeEventListener(userEvent, handleOutsideClick);\r\n      });\r\n      callback();\r\n    }\r\n  }\r\n\r\n  if (!elemento.hasAttribute(outside)) {\r\n    events.forEach((userEvent) => {\r\n      setTimeout(() => {\r\n        html.addEventListener(userEvent, handleOutsideClick);\r\n      }, 0);\r\n    });\r\n    elemento.setAttribute(outside, \"\");\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animaisfantasticos/./modulos/outsideClick.js?");

/***/ }),

/***/ "./modulos/scroll-animation.js":
/*!*************************************!*\
  !*** ./modulos/scroll-animation.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimateScroll)\n/* harmony export */ });\nfunction initAnimateScroll() {\r\n  const sections = document.querySelectorAll('[data-anime=\"scroll\"]');\r\n  const windowScreen = window.innerHeight * 0.6;\r\n\r\n  function animaScroll() {\r\n    sections.forEach((section) => {\r\n      const sectionTop = section.getBoundingClientRect().top;\r\n      const SectionVisible = sectionTop - windowScreen < 0;\r\n      if (SectionVisible) {\r\n        section.classList.add(\"ativo\");\r\n      } else if (section.classList.contains(\"ativo\")) {\r\n        section.classList.remove(\"ativo\");\r\n      }\r\n    });\r\n  }\r\n\r\n  if (sections.length) {\r\n    animaScroll();\r\n\r\n    window.addEventListener(\"scroll\", animaScroll);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animaisfantasticos/./modulos/scroll-animation.js?");

/***/ }),

/***/ "./modulos/tooltip.js":
/*!****************************!*\
  !*** ./modulos/tooltip.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTooltip)\n/* harmony export */ });\nfunction initTooltip() {\r\n  const tooltips = document.querySelectorAll(\"[data-tooltip]\");\r\n\r\n  const onMouseMove = {\r\n    handleEvent(event) {\r\n      this.tooltipBox.style.top = `${event.pageY + 20}px`;\r\n      this.tooltipBox.style.left = `${event.pageX + 20}px`;\r\n      this.element.removeEventListener(\"mousemove\", onMouseMove);\r\n    },\r\n  };\r\n\r\n  const onMouseLeave = {\r\n    // essa é uma forma de usar elementos q não tem estão nesse escopo\r\n    handleEvent() {\r\n      this.tooltipBox.remove();\r\n      this.element.removeEventListener(\"mouseleave\", onMouseLeave);\r\n    },\r\n  };\r\n\r\n  function createTooltipBox(item) {\r\n    const tooltipBox = document.createElement(\"div\");\r\n    const text = item.getAttribute(\"aria-label\");\r\n    tooltipBox.classList.add(\"tooltip\");\r\n    tooltipBox.innerText = text;\r\n    document.body.appendChild(tooltipBox);\r\n    return tooltipBox;\r\n  }\r\n\r\n  function onMouseOver(event) {\r\n    const tooltipBox = createTooltipBox(this);\r\n    tooltipBox.style.top = `${event.pageY}px`;\r\n    tooltipBox.style.left = `${event.pageX}px`;\r\n\r\n    onMouseMove.tooltipBox = tooltipBox;\r\n    this.addEventListener(\"mousemove\", onMouseMove);\r\n\r\n    onMouseLeave.tooltipBox = tooltipBox;\r\n    onMouseLeave.element = this;\r\n    this.addEventListener(\"mouseleave\", onMouseLeave);\r\n  }\r\n\r\n  tooltips.forEach((item) => {\r\n    item.addEventListener(\"mouseover\", onMouseOver);\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://animaisfantasticos/./modulos/tooltip.js?");

/***/ }),

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modulos_easyScroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modulos/easyScroll.js */ \"./modulos/easyScroll.js\");\n/* harmony import */ var _modulos_accordion_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modulos/accordion.js */ \"./modulos/accordion.js\");\n/* harmony import */ var _modulos_initTab_nav_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modulos/initTab-nav.js */ \"./modulos/initTab-nav.js\");\n/* harmony import */ var _modulos_background_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modulos/background.js */ \"./modulos/background.js\");\n/* harmony import */ var _modulos_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modulos/modal.js */ \"./modulos/modal.js\");\n/* harmony import */ var _modulos_tooltip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modulos/tooltip.js */ \"./modulos/tooltip.js\");\n/* harmony import */ var _modulos_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modulos/dropdown-menu.js */ \"./modulos/dropdown-menu.js\");\n/* harmony import */ var _modulos_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modulos/menu-mobile.js */ \"./modulos/menu-mobile.js\");\n/* harmony import */ var _modulos_date_object_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modulos/date-object.js */ \"./modulos/date-object.js\");\n/* harmony import */ var _modulos_fetchAnimais_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modulos/fetchAnimais.js */ \"./modulos/fetchAnimais.js\");\n/* harmony import */ var _modulos_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modulos/fetch-bitcoin.js */ \"./modulos/fetch-bitcoin.js\");\n/* harmony import */ var _modulos_scroll_animation_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modulos/scroll-animation.js */ \"./modulos/scroll-animation.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst easyScroll = new _modulos_easyScroll_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-menu=\"suave\"] a[href^=\"#\"]');\r\neasyScroll.init();\r\n\r\nconst accordion = new _modulos_accordion_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('[data-anime=\"accordion\"] dt');\r\naccordion.init();\r\n\r\n(0,_modulos_initTab_nav_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n\r\n(0,_modulos_background_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n\r\n(0,_modulos_modal_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n\r\n(0,_modulos_tooltip_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n\r\n(0,_modulos_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n\r\n(0,_modulos_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\r\n\r\n(0,_modulos_date_object_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\r\n\r\n(0,_modulos_fetchAnimais_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\r\n\r\n(0,_modulos_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\r\n\r\n(0,_modulos_scroll_animation_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"])();\r\n\n\n//# sourceURL=webpack://animaisfantasticos/./script.js?");

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