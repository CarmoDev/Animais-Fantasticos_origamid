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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAccordion)\n/* harmony export */ });\nfunction initAccordion() {\n  const accordionList = document.querySelectorAll(\n    '[data-anime=\"accordion\"] dt',\n  );\n  const activeClass = 'ativo';\n\n  function activeAccordion() {\n    this.classList.toggle(activeClass);\n    this.nextElementSibling.classList.toggle(activeClass);\n  }\n\n  if (accordionList.length) {\n    accordionList[0].classList.add(activeClass);\n    accordionList[0].nextElementSibling.classList.add(activeClass);\n\n    accordionList.forEach((item) => {\n      item.addEventListener('click', activeAccordion);\n    });\n  }\n}\n\n\n//# sourceURL=webpack://animaisfantasticos/./modulos/accordion.js?");

/***/ }),

/***/ "./modulos/anima-numeros.js":
/*!**********************************!*\
  !*** ./modulos/anima-numeros.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimaNumeros)\n/* harmony export */ });\nfunction initAnimaNumeros() {\n  function animaNumeros() {\n    const numeros = document.querySelectorAll('[data-numero]');\n\n    numeros.forEach((numero) => {\n      const total = +numero.innerText;\n      const incremento = Math.floor(total / 100);\n      let start = 0;\n\n      const timer = setInterval(() => {\n        start += incremento;\n        numero.innerText = start;\n\n        if (start > total) {\n          numero.innerText = `${total}+`;\n          clearInterval(timer);\n        }\n      }, 25 * Math.random);\n    });\n  }\n\n  let observer;\n  function handleMutation(mutation) {\n    if (mutation[0].target.classList.contains('ativo')) {\n      observer.disconnect();\n      animaNumeros();\n    }\n  }\n  observer = new MutationObserver(handleMutation);\n\n  const observerTarget = document.querySelector('.numeros');\n\n  observer.observe(observerTarget, { attributes: true });\n}\n\n\n//# sourceURL=webpack://animaisfantasticos/./modulos/anima-numeros.js?");

/***/ }),

/***/ "./modulos/background.js":
/*!*******************************!*\
  !*** ./modulos/background.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initBackground)\n/* harmony export */ });\nfunction initBackground() {\n  const raposa = document.querySelector(\".raposa\");\n  const esquilo = document.querySelector(\".esquilo\");\n  const urso = document.querySelector(\".urso\");\n  const lobo = document.querySelector(\".lobo\");\n  const babuino = document.querySelector(\".babuino\");\n  const leão = document.querySelector(\".leão\");\n  const tabmenu = document.querySelectorAll('[data-tab=\"menu\"] li');\n\n  function activeAnimal(index) {\n    tabmenu.forEach((animal) => {\n      animal.classList.remove(\"ativo\");\n    });\n    tabmenu[index].classList.add(\"ativo\");\n  }\n\n  tabmenu.forEach((item, index) => {\n    item.addEventListener(\"click\", () => {\n      activeAnimal(index);\n      if (raposa.classList.contains(\"ativo\")) {\n        document.body.style.backgroundImage = 'url(\"img/background/raposa.jpg\")';\n        document.body.style.color = \"white\";\n        document.body.style.webkitTextStrokeWidth = \"0.2px\";\n        document.body.style.webkitTextStrokeColor = \"#000\";\n      } else if (esquilo.classList.contains(\"ativo\")) {\n        document.body.style.backgroundImage = 'url(\"img/background/esquilo.jpg\")';\n        document.body.style.color = \"white\";\n        document.body.style.webkitTextStrokeWidth = \"0.3px\";\n        document.body.style.webkitTextStrokeColor = \"#000\";\n      } else if (urso.classList.contains(\"ativo\")) {\n        document.body.style.backgroundImage = 'url(\"img/background/urso.jpg\")';\n        document.body.style.color = \"black\";\n        document.body.style.webkitTextStrokeWidth = \"0.3px\";\n        document.body.style.webkitTextStrokeColor = \"#000\";\n      } else if (lobo.classList.contains(\"ativo\")) {\n        document.body.style.backgroundImage = 'url(\"img/background/lobo.jpg\")';\n        document.body.style.color = \"white\";\n        document.body.style.webkitTextStrokeWidth = \"0.3px\";\n        document.body.style.webkitTextStrokeColor = \"#000\";\n      } else if (babuino.classList.contains(\"ativo\")) {\n        document.body.style.backgroundImage = 'url(\"img/background/babuino.jpg\")';\n        document.body.style.color = \"white\";\n        document.body.style.webkitTextStrokeWidth = \"0.3px\";\n        document.body.style.webkitTextStrokeColor = \"#000\";\n      } else if (leão.classList.contains(\"ativo\")) {\n        document.body.style.backgroundImage = 'url(\"img/background/leao.jpg\")';\n        document.body.style.webkitTextStrokeWidth = \"0.5px\";\n        document.body.style.webkitTextStrokeColor = \"#000\";\n      } else {\n        document.body.style.backgroundImage = \"\";\n      }\n    });\n  });\n}\ninitBackground();\n\n\n//# sourceURL=webpack://animaisfantasticos/./modulos/background.js?");

/***/ }),

/***/ "./modulos/date-object.js":
/*!********************************!*\
  !*** ./modulos/date-object.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDateObject)\n/* harmony export */ });\nfunction initDateObject() {\n  const funcionamento = document.querySelector(\"[data-semana]\");\n  const diasSemana = funcionamento.dataset.semana.split(\",\").map(Number); // transforma a string em uma array númerica\n  const horarioSemana = funcionamento.dataset.horario.split(\",\").map(Number);\n\n  const nowDate = new Date();\n  const NowDay = nowDate.getDay();\n  const horarioAgora = nowDate.getHours();\n\n  const DayOpen = diasSemana.indexOf(NowDay) !== -1;\n  const openHour = horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];\n\n  if (DayOpen && openHour) {\n    funcionamento.classList.add(\"aberto\");\n  }\n}\n\n\n//# sourceURL=webpack://animaisfantasticos/./modulos/date-object.js?");

/***/ }),

/***/ "./modulos/dropdown-menu.js":
/*!**********************************!*\
  !*** ./modulos/dropdown-menu.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDropDownMenu)\n/* harmony export */ });\n/* harmony import */ var _outsideClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideClick.js */ \"./modulos/outsideClick.js\");\n\n\nfunction handleClick(event) {\n  event.preventDefault();\n  this.classList.toggle('ativo');\n\n  (0,_outsideClick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ['touchstart', 'click'], () => {\n    this.classList.remove('ativo');\n  });\n}\n\nfunction initDropDownMenu() {\n  const dropDownMenus = document.querySelectorAll('[data-dropdown]');\n\n  dropDownMenus.forEach((menu) => {\n    ['touchstart', 'click'].forEach((userEvent) => {\n      menu.addEventListener(userEvent, handleClick);\n    });\n  });\n\n  /* touchstart é tipo a função click porém para mobile, e usamos o\n    addEventListener para podermos ter gatilhos para o evento de forma mais limpa */\n}\n\n\n//# sourceURL=webpack://animaisfantasticos/./modulos/dropdown-menu.js?");

/***/ }),

/***/ "./modulos/easyScroll.js":
/*!*******************************!*\
  !*** ./modulos/easyScroll.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initEasyScroll)\n/* harmony export */ });\nfunction initEasyScroll() {\n  const linksInternos = document.querySelectorAll(\n    '[data-anime=\"menu\"] a[href^=\"#\"]',\n  );\n\n  function scrollToSection(Event) {\n    Event.preventDefault();\n    const href = Event.currentTarget.getAttribute(\"href\");\n    const section = document.querySelector(href);\n\n    section.scrollIntoView({\n      behavior: \"smooth\",\n      block: \"start\",\n    });\n  }\n\n  linksInternos.forEach((link) => {\n    link.addEventListener(\"click\", scrollToSection);\n  });\n}\n\n\n//# sourceURL=webpack://animaisfantasticos/./modulos/easyScroll.js?");

/***/ }),

/***/ "./modulos/fetch-bitcoin.js":
/*!**********************************!*\
  !*** ./modulos/fetch-bitcoin.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchBitcoin)\n/* harmony export */ });\nfunction initFetchBitcoin() {\n  fetch(\"https://blockchain.info/ticker\")\n    .then((r) => r.json())\n    .then((btc) => {\n      const btcPrice = document.querySelector(\".btc-preco\");\n      btcPrice.innerText = (100 / btc.BRL.sell).toFixed(4);\n    })\n    .catch((erro) => {\n      console.log(Error(erro));\n    });\n}\n\n\n//# sourceURL=webpack://animaisfantasticos/./modulos/fetch-bitcoin.js?");

/***/ }),

/***/ "./modulos/fetchAnimais.js":
/*!*********************************!*\
  !*** ./modulos/fetchAnimais.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchAnimais)\n/* harmony export */ });\n/* harmony import */ var _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anima-numeros.js */ \"./modulos/anima-numeros.js\");\n\n\nfunction initFetchAnimais() {\n  function createAnimal(animal) {\n    const div = document.createElement(\"div\");\n    div.classList.add(\"numero-animal\");\n\n    div.innerHTML = `<h3>${animal.specie}</h3>\n                <span data-numero>${animal.total} </span>`;\n    return div;\n  }\n\n  async function fetchAnimais(url) {\n    try {\n      const animaisR = await fetch(url);\n      const animaisJson = await animaisR.json();\n      const numerosGrid = document.querySelector(\".numeros-grid\");\n\n      animaisJson.forEach((animal) => {\n        const divAnimal = createAnimal(animal);\n        numerosGrid.appendChild(divAnimal);\n      });\n      (0,_anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    } catch (erro) {\n      console.log(erro);\n    }\n  }\n\n  fetchAnimais(\"./json/animalApi.json\");\n}\n\n\n//# sourceURL=webpack://animaisfantasticos/./modulos/fetchAnimais.js?");

/***/ }),

/***/ "./modulos/initTab-nav.js":
/*!********************************!*\
  !*** ./modulos/initTab-nav.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTabNav)\n/* harmony export */ });\nfunction initTabNav() {\n  const tabmenu = document.querySelectorAll('[data-tab=\"menu\"] li');\n  const tabContent = document.querySelectorAll('[data-tab=\"content\"] section');\n\n  tabContent[0].classList.add(\"ativo\");\n\n  function activeTab(index) {\n    const show = tabContent[index].dataset.anime;\n\n    tabContent.forEach((section) => {\n      section.classList.remove(\"ativo\", show);\n    });\n    tabContent[index].classList.add(\"ativo\", show);\n  }\n\n  if (tabmenu.length && tabContent.length) {\n    tabmenu.forEach((item, index) => {\n      item.addEventListener(\"click\", () => {\n        activeTab(index);\n      });\n    });\n  }\n}\ninitTabNav();\n\n\n//# sourceURL=webpack://animaisfantasticos/./modulos/initTab-nav.js?");

/***/ }),

/***/ "./modulos/menu-mobile.js":
/*!********************************!*\
  !*** ./modulos/menu-mobile.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuMobile)\n/* harmony export */ });\n/* harmony import */ var _outsideClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideClick.js */ \"./modulos/outsideClick.js\");\n\n\nfunction initMenuMobile() {\n  const menuButton = document.querySelector('[data-menu=\"menu\"]');\n  const menuList = document.querySelector('[data-menu=\"list\"]');\n  const eventos = [\"click\", \"touchstart\"];\n\n  function openMenu() {\n    menuList.classList.add(\"ativo\");\n    menuButton.classList.add(\"ativo\");\n    (0,_outsideClick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menuList, eventos, () => {\n      menuList.classList.remove(\"ativo\");\n      menuButton.classList.remove(\"ativo\");\n    });\n  }\n\n  eventos.forEach(() => menuButton.addEventListener(\"click\", openMenu));\n}\n\n\n//# sourceURL=webpack://animaisfantasticos/./modulos/menu-mobile.js?");

/***/ }),

/***/ "./modulos/modal.js":
/*!**************************!*\
  !*** ./modulos/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initModal)\n/* harmony export */ });\nfunction initModal() {\n  const botaoAbrir = document.querySelector('[data-modal=\"abrir\"]');\n  const botaoFechar = document.querySelector('[data-modal=\"fechar\"]');\n  const containerModal = document.querySelector('[data-modal=\"container\"]');\n\n  function toggleModal(event) {\n    event.preventDefault();\n    containerModal.classList.toggle(\"ativo\");\n  }\n  function cliqueForaModal(event) {\n    if (event.target === this) {\n      toggleModal(event);\n    }\n  }\n\n  if (botaoAbrir && botaoFechar && containerModal) {\n    botaoAbrir.addEventListener(\"click\", toggleModal);\n    botaoFechar.addEventListener(\"click\", toggleModal);\n    containerModal.addEventListener(\"click\", cliqueForaModal);\n  }\n}\n\n\n//# sourceURL=webpack://animaisfantasticos/./modulos/modal.js?");

/***/ }),

/***/ "./modulos/outsideClick.js":
/*!*********************************!*\
  !*** ./modulos/outsideClick.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\nfunction outsideClick(elemento, events, callback) {\n  const html = document.documentElement;\n  const outside = \"data-outside\";\n\n  function handleOutsideClick(event) {\n    // essa função é uma forma de evitar o efeito bubble\n    if (!elemento.contains(event.target)) {\n      elemento.removeAttribute(outside);\n\n      events.forEach((userEvent) => {\n        html.removeEventListener(userEvent, handleOutsideClick);\n      });\n      callback();\n    }\n  }\n\n  if (!elemento.hasAttribute(outside)) {\n    events.forEach((userEvent) => {\n      setTimeout(() => {\n        html.addEventListener(userEvent, handleOutsideClick);\n      }, 0);\n    });\n    elemento.setAttribute(outside, \"\");\n  }\n}\n\n\n//# sourceURL=webpack://animaisfantasticos/./modulos/outsideClick.js?");

/***/ }),

/***/ "./modulos/scroll-animation.js":
/*!*************************************!*\
  !*** ./modulos/scroll-animation.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimateScroll)\n/* harmony export */ });\nfunction initAnimateScroll() {\n  const sections = document.querySelectorAll('[data-anime=\"scroll\"]');\n  const windowScreen = window.innerHeight * 0.6;\n\n  function animaScroll() {\n    sections.forEach((section) => {\n      const sectionTop = section.getBoundingClientRect().top;\n      const SectionVisible = sectionTop - windowScreen < 0;\n      if (SectionVisible) {\n        section.classList.add(\"ativo\");\n      } else if (section.classList.contains(\"ativo\")) {\n        section.classList.remove(\"ativo\");\n      }\n    });\n  }\n\n  if (sections.length) {\n    animaScroll();\n\n    window.addEventListener(\"scroll\", animaScroll);\n  }\n}\n\n\n//# sourceURL=webpack://animaisfantasticos/./modulos/scroll-animation.js?");

/***/ }),

/***/ "./modulos/tooltip.js":
/*!****************************!*\
  !*** ./modulos/tooltip.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTooltip)\n/* harmony export */ });\nfunction initTooltip() {\n  const tooltips = document.querySelectorAll(\"[data-tooltip]\");\n\n  const onMouseMove = {\n    handleEvent(event) {\n      this.tooltipBox.style.top = `${event.pageY + 20}px`;\n      this.tooltipBox.style.left = `${event.pageX + 20}px`;\n      this.element.removeEventListener(\"mousemove\", onMouseMove);\n    },\n  };\n\n  const onMouseLeave = {\n    // essa é uma forma de usar elementos q não tem estão nesse escopo\n    handleEvent() {\n      this.tooltipBox.remove();\n      this.element.removeEventListener(\"mouseleave\", onMouseLeave);\n    },\n  };\n\n  function createTooltipBox(item) {\n    const tooltipBox = document.createElement(\"div\");\n    const text = item.getAttribute(\"aria-label\");\n    tooltipBox.classList.add(\"tooltip\");\n    tooltipBox.innerText = text;\n    document.body.appendChild(tooltipBox);\n    return tooltipBox;\n  }\n\n  function onMouseOver(event) {\n    const tooltipBox = createTooltipBox(this);\n    tooltipBox.style.top = `${event.pageY}px`;\n    tooltipBox.style.left = `${event.pageX}px`;\n\n    onMouseMove.tooltipBox = tooltipBox;\n    this.addEventListener(\"mousemove\", onMouseMove);\n\n    onMouseLeave.tooltipBox = tooltipBox;\n    onMouseLeave.element = this;\n    this.addEventListener(\"mouseleave\", onMouseLeave);\n  }\n\n  tooltips.forEach((item) => {\n    item.addEventListener(\"mouseover\", onMouseOver);\n  });\n}\n\n\n//# sourceURL=webpack://animaisfantasticos/./modulos/tooltip.js?");

/***/ }),

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modulos_easyScroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modulos/easyScroll.js */ \"./modulos/easyScroll.js\");\n/* harmony import */ var _modulos_scroll_animation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modulos/scroll-animation.js */ \"./modulos/scroll-animation.js\");\n/* harmony import */ var _modulos_accordion_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modulos/accordion.js */ \"./modulos/accordion.js\");\n/* harmony import */ var _modulos_initTab_nav_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modulos/initTab-nav.js */ \"./modulos/initTab-nav.js\");\n/* harmony import */ var _modulos_background_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modulos/background.js */ \"./modulos/background.js\");\n/* harmony import */ var _modulos_modal_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modulos/modal.js */ \"./modulos/modal.js\");\n/* harmony import */ var _modulos_tooltip_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modulos/tooltip.js */ \"./modulos/tooltip.js\");\n/* harmony import */ var _modulos_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modulos/dropdown-menu.js */ \"./modulos/dropdown-menu.js\");\n/* harmony import */ var _modulos_menu_mobile_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modulos/menu-mobile.js */ \"./modulos/menu-mobile.js\");\n/* harmony import */ var _modulos_date_object_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modulos/date-object.js */ \"./modulos/date-object.js\");\n/* harmony import */ var _modulos_fetchAnimais_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modulos/fetchAnimais.js */ \"./modulos/fetchAnimais.js\");\n/* harmony import */ var _modulos_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modulos/fetch-bitcoin.js */ \"./modulos/fetch-bitcoin.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n(0,_modulos_easyScroll_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n(0,_modulos_scroll_animation_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n(0,_modulos_accordion_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n(0,_modulos_initTab_nav_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n(0,_modulos_background_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n(0,_modulos_modal_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n\n(0,_modulos_tooltip_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n\n(0,_modulos_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n\n(0,_modulos_menu_mobile_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n\n(0,_modulos_date_object_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n\n(0,_modulos_fetchAnimais_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\n\n(0,_modulos_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"])();\n\n\n//# sourceURL=webpack://animaisfantasticos/./script.js?");

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