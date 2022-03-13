import EasyScroll from "./modulos/easyScroll.js";
import initAnimateScroll from "./modulos/scroll-animation.js";
import initAccordion from "./modulos/accordion.js";
import initTabNav from "./modulos/initTab-nav.js";
import initBackground from "./modulos/background.js";
import initModal from "./modulos/modal.js";
import initTooltip from "./modulos/tooltip.js";
import initDropDownMenu from "./modulos/dropdown-menu.js";
import initMenuMobile from "./modulos/menu-mobile.js";
import initDateObject from "./modulos/date-object.js";
import initFetchAnimais from "./modulos/fetchAnimais.js";
import initFetchBitcoin from "./modulos/fetch-bitcoin.js";

const easyScroll = new EasyScroll('[data-menu="suave"] a[href^="#"]');
easyScroll.init();

'[data-anime="accordion"] dt'

initAnimateScroll();

initAccordion();

initTabNav();

initBackground();

initModal();

initTooltip();

initDropDownMenu();

initMenuMobile();

initDateObject();

initFetchAnimais();

initFetchBitcoin();
