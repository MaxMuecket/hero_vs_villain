import { createCharacterElement } from './components/character';
import './style.css';
import { createElement, removeAllChildren } from './utils/elements';
import { getCharacters } from './utils/api';
import { debounce } from './utils/timer';
import { getRandomCharacterId } from './utils/randomGenerator';

const characterSectionHero = createElement('section', {
  className: 'main__resultsHero',
});

const characterSectionVillain = createElement('section', {
  className: 'main__resultsVillain',
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
    characterSectionHero,
    createElement('button', {
      className: 'main__button',
      innerText: 'vs',
      autofocus: false,
      onclick: debounce(() => {
        removeAllChildren(characterSectionHero);

        const heroClick = getRandomCharacterId(1011146, 1011226);

        getCharacters(heroClick).then((characters) => {
          const characterElements = characters.map(createCharacterElement);
          characterSectionHero.append(...characterElements);
        });

        removeAllChildren(characterSectionVillain);

        const villainClick = getRandomCharacterId(1011001, 1011081);

        getCharacters(villainClick).then((characters) => {
          const characterElements = characters.map(createCharacterElement);
          characterSectionVillain.append(...characterElements);
        });
      }, 300),
    }),
    characterSectionVillain,
  ],
});

const footerElement = createElement('footer', {
  className: 'footer',
  children: [
    createElement('a', {
      href: 'https://developer.marvel.com/',
      target: '_blank',
      children: [
        createElement('img', {
          src: 'assets/iron-man.png',
        }),
      ],
    }),
  ],
});

const characterId = getRandomCharacterId();
console.log(characterId);

document
  .querySelector('#app')
  .append(headerElement, mainElement, footerElement);
