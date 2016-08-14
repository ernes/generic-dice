import React, { Component } from 'react';

import DiceFace from '../dice-face/dice-face';
import DiceShadow from '../dice-shadow/dice-shadow';
import './generic-dice.scss';

export default class GenericDice extends Component {
  render() {
    return (
      <div
        className="dice-wrapper"
        style={
          { fontSize: `${this.props.size}px` }
        }
      >
        <div className="dice">
          <DiceFace face={this.props.face} />
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
