import React, { Component } from 'react';

import DiceFace from '../dice-face/dice-face';
import DiceShadow from '../dice-shadow/dice-shadow';
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

  // @animation: string CSS class parameter that can be 'throw1', 'throw2', 'throw3' or 'throw4'.
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
    const diceClass = `dice ${this.state.animation || ''}`;

    return (
      <div
        className="dice-wrapper"
        style={{ fontSize: `${this.props.size}px` }}
      >
        <div
          className={diceClass}
          ref="dice"
        >
          <DiceFace face={this.state.face} />
        </div>
        <DiceShadow />
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
