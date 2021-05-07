import { createCharacterElement } from './components/character';
import './style.css';
import { createElement, removeAllChildren } from './utils/elements';
import { getCharacters } from './utils/api';
import { debounce } from './utils/timer';

// getCharacters('').then((characters) => {
//   const characterElements = characters.map(createCharacterElement);
//   characterSection.append(...characterElements);
// });

const characterSection = createElement('section', {
  className: 'results',
});

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
    createElement('input', {
      className: 'main__button',
      placeholder: 'vs',
      autofocus: false,
      oninput: debounce((event) => {
        removeAllChildren(characterSection);

        const search = event.target.value;
        getCharacters(search).then((characters) => {
          const characterElements = characters.map(createCharacterElement);
          characterSection.append(...characterElements);
        });
      }, 300),
    }),
    characterSection,
  ],
});

const footerElement = createElement('footer', {
  className: 'footer',
  children: [
    createElement('a', {
      href: 'https://developer.marvel.com/',
      // innerText: '☞',
      target: '_blank',
      children: [
        createElement('img', {
          src: 'assets/iron-man.png',
        }),
      ],
    }),
  ],
});

document
  .querySelector('#app')
  .append(headerElement, mainElement, footerElement);
