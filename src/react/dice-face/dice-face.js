import React, { Component } from 'react';

import './dice-face.scss';
import './dice-dot.scss';

export default class DiceFace extends Component {
  render() {
    const face = this.props.face;
    const faces = [];
    for (let index = 1; index <= face; index++) {
      const key = `dot-${index}-${face}`;
      const faceClass = `dice-dot ${key} dots-${face}`;
      faces.push(
        <div className={faceClass} key={key} />
      );
    }

    return (
      <div className="dice-face">
        {faces}
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
