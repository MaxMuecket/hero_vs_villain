import './style.css';
import { createElement } from './utils/elements';

const headerElement = createElement('header', {
  className: 'header',
  children: [
    createElement('h1', {
      className: 'header__title',
      innerText: 'Hero vs Villain',
    }),
  ],
});

const mainElement = createElement('main', {
  className: 'main',
  children: [
    createElement('button', {
      className: 'main__button',
      innerText: 'vs',
      autofocus: false,
    }),
  ],
});

const footerElement = createElement('footer', {
  className: 'footer',
  children: [
    createElement('a', {
      href: 'https://developer.marvel.com/',
      innerText: '☞',
      target: '_blank',
    }),
  ],
});

document
  .querySelector('#app')
  .append(headerElement, mainElement, footerElement);
