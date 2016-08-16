import React, { Component } from 'react';

import './dice-shadow.scss';

export default class DiceShadow extends Component {
  render() {
    const diceShadowClass = `dice-shadow ${this.props.animation || ''}`;

    return (
      <div className={diceShadowClass} />
    );
  }
}

DiceShadow.propTypes = {
  animation: React.PropTypes.string,
};
