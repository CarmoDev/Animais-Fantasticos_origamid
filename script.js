import EasyScroll from "./modulos/easyScroll.js";
import Accordion from "./modulos/accordion.js";
import TabNav from "./modulos/initTab-nav.js";
import initBackground from "./modulos/background.js";
import Modal from "./modulos/modal.js";
import initTooltip from "./modulos/tooltip.js";
import initDropDownMenu from "./modulos/dropdown-menu.js";
import initMenuMobile from "./modulos/menu-mobile.js";
import initDateObject from "./modulos/date-object.js";
import initFetchAnimais from "./modulos/fetchAnimais.js";
import initFetchBitcoin from "./modulos/fetch-bitcoin.js";
import initAnimateScroll from "./modulos/scroll-animation.js";

const easyScroll = new EasyScroll('[data-anime="menu"] a[href^="#"]');
easyScroll.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]')
modal.init()

initBackground();

initTooltip();

initDropDownMenu();

initMenuMobile();

initDateObject();

initFetchAnimais();

initFetchBitcoin();

initAnimateScroll();
