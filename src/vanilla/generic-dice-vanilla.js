export default class GenericDiceVanilla {
  // Initialize a new dice object with default properties.
  constructor() {
    this.face = 1;
    this.rolling = true;
    this.animation = '';
  }

  // Return an HTML node that can be appended to the DOM.
  render() {
    const html = document.createElement('div');
    html.textContent = 'Generic Dice is build from this node.';

    return html;
  }
}
