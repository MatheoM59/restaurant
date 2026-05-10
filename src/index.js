import './styles.css';
import { home } from './home.js';
import { card } from './menu.js';
import { about } from './about.js';

home();

const content = document.getElementById('content');
const btnHome = document.getElementById('btnHome');
const btnMenu = document.getElementById('btnMenu');
const btnAbout = document.getElementById('btnAbout');

btnHome.addEventListener('click', () => {
  content.innerHTML = ``;
  home();
});

btnMenu.addEventListener('click', () => {
  content.innerHTML = ``;
  card();
});

btnAbout.addEventListener('click', () => {
  content.innerHTML = ``;
  about();
});
