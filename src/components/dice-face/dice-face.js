import React, { Component } from 'react';

import './dice-face.scss';
import './dice-dot.scss';

export default class DiceFace extends Component {
  render() {
    return (
      <div className="dice-face">
        <div className="dice-dot dot-1-5 dots-5"></div>
        <div className="dice-dot dot-2-5 dots-5"></div>
        <div className="dice-dot dot-3-5 dots-5"></div>
        <div className="dice-dot dot-4-5 dots-5"></div>
        <div className="dice-dot dot-5-5 dots-5"></div>
      </div>
    );
  }
}

DiceFace.propTypes = {
  face: React.PropTypes.number,
};

DiceFace.defaultProps = {
  face: 1,
};
