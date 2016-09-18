import React, { Component } from 'react';

import * as C from './constants';
import { getDurationClass } from './get-duration-class';
import { roll } from './roll';
import './generic-dice.scss';

export default class GenericDice extends Component {
  constructor() {
    super();

    // Trigger a roll with:
    // const rollingEvent = new CustomEvent(C.ROLL_EVENT);
    // window.document.dispatchEvent(rollingEvent);
    this.handleRoll = this.handleRoll.bind(this);
  }

  componentWillMount() {
    this.setState({
      face: this.props.face,
      animation: '',
    });
  }

  componentDidMount() {
    window.document.addEventListener(C.ROLL_EVENT, this.handleRoll);
  }

  componentWillUnmount() {
    window.document.removeEventListener(C.ROLL_EVENT, this.handleRoll);
  }

  handleRoll(e) {
    roll.call(this, e);
  }

  render() {
    // Get animation duration class.
    const durationClass = getDurationClass(this.props.duration);

    // Main dice container.
    const diceClass = `dice 
      ${this.state.animation || ''}
      ${durationClass}`;

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
    const diceShadowClass = `dice-shadow 
      ${this.state.animation || ''}
      ${durationClass}`;

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
  size: React.PropTypes.number,
  duration: React.PropTypes.number,
};

GenericDice.defaultProps = {
  face: 1,
  size: 16,
  duration: C.DURATION,
};
