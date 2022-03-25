import EasyScroll from "./modulos/easyScroll.js";
import Accordion from "./modulos/accordion.js";
import TabNav from "./modulos/initTab-nav.js";
import initBackground from "./modulos/background.js";
import Modal from "./modulos/modal.js";
import Tooltip from "./modulos/tooltip.js";
import DropdownMenu from "./modulos/dropdown-menu.js";
import Funcionamento from "./modulos/funcionamento.js";
import fetchAnimais from "./modulos/fetchAnimais.js";
import fetchBitcoin from "./modulos/fetch-bitcoin.js";
import ScrollAnima from "./modulos/scroll-anima.js";
import MenuMobile from "./modulos/menu-mobile.js";

const easyScroll = new EasyScroll('[data-anime="menu"] a[href^="#"]');
easyScroll.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section',
);
tabNav.init();

const modal = new Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]',
);
modal.init();

initBackground();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

const dropdownMenu = new DropdownMenu('[data-dropdown]');
dropdownMenu.init();

const menuMobile = new MenuMobile('[data-menu="menu"]', '[data-menu="list"]');
menuMobile.init();

const funcionamento = new Funcionamento("[data-semana]", 'aberto');
funcionamento.init();

const scrollanima = new ScrollAnima('[data-anime="scroll"]');
scrollanima.init();

fetchAnimais('./json/animalApi.json', '.numeros-grid');

fetchBitcoin('https://blockchain.info/ticker', '.btc-preco');
