import React, { Component } from 'react';

import './dice.scss';

export default class Dice extends Component {
  render() {
    return (
      <div className="main-wrapper">
        <div className="dice">
          <div className="dice-face">
            <div className="dice-dot"></div>
            <div className="dice-dot"></div>
            <div className="dice-dot"></div>
            <div className="dice-dot"></div>
            <div className="dice-dot"></div>
            <div className="dice-dot"></div>
          </div>
        </div>
        <p>
          I am a dice with face {this.props.face}.
          Flying: {this.props.flying.toString()}.
        </p>
      </div>
    );
  }
}

Dice.propTypes = {
  face: React.PropTypes.number.isRequired,
  flying: React.PropTypes.bool.isRequired,
};

Dice.defaultProps = {
  face: 1,
  flying: true,
};
