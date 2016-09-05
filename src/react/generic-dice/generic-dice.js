import React, { Component } from 'react';

import './generic-dice.scss';

export default class GenericDice extends Component {
  componentWillMount() {
    this.setState({
      face: this.props.face,
      rolling: this.props.rolling,
      animation: '',
    });
  }

  componentDidMount() {
    if (this.state.rolling) {
      this.roll();
    }
  }

  // @animation: string CSS class parameter that can be 'thrown' or ''.
  // @duration: length of time in milliseconds during which the animation should last.
  roll(animation = 'thrown', duration = 2000) {
    let start;
    let animationId = null;

    const rolling = timestamp => {
      if (!start) {
        start = timestamp;
        this.setState({
          rolling: true,
          animation,
        });
      }

      const delta = timestamp - start;

      if (delta > duration) {
        start = null;
        window.cancelAnimationFrame(animationId);
        this.setState({
          rolling: false,
          animation: '',
        });
      } else {
        window.requestAnimationFrame(rolling);
      }
    };

    animationId = window.requestAnimationFrame(rolling);
  }

  render() {
    // Main dice container.
    const diceClass = `dice ${this.state.animation || ''}`;

    // Dice face.
    const face = this.state.face;
    const faces = [];
    for (let index = 1; index <= face; index++) {
      const key = `dot-${index}-${face}`;
      const faceClass = `dice-dot ${key} dots-${face}`;
      faces.push(
        <div className={faceClass} key={key} />
      );
    }

    // Dice shadow.
    const diceShadowClass = `dice-shadow ${this.state.animation || ''}`;

    return (
      <div
        className="dice-wrapper"
        style={{ fontSize: `${this.props.size}px` }}
      >
        <div
          className={diceClass}
          key="dice"
        >
          <div className="dice-face" key="diceFace">
            {faces}
          </div>
        </div>
        <div className={diceShadowClass} key="diceShadow" />
      </div>
    );
  }
}

GenericDice.propTypes = {
  face: React.PropTypes.number,
  rolling: React.PropTypes.bool,
  size: React.PropTypes.number,
};

GenericDice.defaultProps = {
  face: 1,
  rolling: true,
  size: 16,
};
