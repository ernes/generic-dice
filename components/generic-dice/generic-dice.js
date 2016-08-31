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

  // @animation: string CSS class parameter that can be 'thrown' or ''.
  // @duration: length of time in milliseconds during which the animation should last.
  roll(duration = 2000, animation = 'thrown') {
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
    const animationDuration = (this.state.duration || 0) / 1000;
    const animationStyle = { animationDuration: `${animationDuration}s`, backgroundColor: 'fuchsia' };

    // See: https://facebook.github.io/react/docs/animation.html
    return (
      <div
        className="dice-wrapper"
        style={{ fontSize: `${this.props.size}px` }}
      >
        <div
          className={diceClass}
          style={animationStyle}
          ref="dice"
          key="dice"
        >
          <DiceFace face={this.state.face} key="diceFace" />
        </div>
        <DiceShadow
          style={animationStyle}
          animation={this.state.animation} key="diceShadow"
        />
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
