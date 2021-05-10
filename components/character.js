import './character.css';
import { createElement } from '../utils/elements';

export function createCharacterElement({ name, thumbnail }) {
  return createElement('div', {
    className: 'characterCard',
    children: [
      createElement('img', {
        className: 'characterCard__image',
        src: `${thumbnail.path}/portrait_xlarge.${thumbnail.extension}`,
      }),
      createElement('h1', {
        className: 'characterCard__info',
        innerText: name,
      }),
    ],
  });
}
