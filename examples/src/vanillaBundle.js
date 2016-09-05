import Dice from '../../vanillaSource';

const dice = new Dice();
const htmlNode = dice.render();

document.getElementById('vanilla-game').appendChild(htmlNode);
