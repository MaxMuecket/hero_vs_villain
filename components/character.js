import './character.css';
import { createElement } from '../utils/element';

export function createCharacterElement({ thumbnail }) {
  return createElement('div', {
    className: 'characterCard',
    children: [
      createElement('img', {
        className: 'characterCard__image',
        src: thumbnail,
      }),
      createElement('article', {
        className: 'characterCard__info',
      }),
    ],
  });
}
