import EasyScroll from "./modulos/easyScroll.js";
import Accordion from "./modulos/accordion.js";
import initTabNav from "./modulos/initTab-nav.js";
import initBackground from "./modulos/background.js";
import initModal from "./modulos/modal.js";
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

initTabNav();

initBackground();

initModal();

initTooltip();

initDropDownMenu();

initMenuMobile();

initDateObject();

initFetchAnimais();

initFetchBitcoin();

initAnimateScroll();
