import React, { Component } from 'react';

import * as C from '../../src/react/generic-dice/constants';

export default class RollButton extends Component {
  handleClick() {
    const rollingEvent = new CustomEvent(C.ROLL_EVENT);
    window.document.dispatchEvent(rollingEvent);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.props.text}
      </button>
    );
  }
}

RollButton.propTypes = {
  text: React.PropTypes.string.isRequired,
};
