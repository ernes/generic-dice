import React from 'react';
import { render } from 'react-dom';

import Dice from '../../reactSource';
import RollButton from './roll-button';

render((
  <div>
    <h2>Roll the two dices and try to get a double 6</h2>
    <RollButton text="Roll them dices!" />

    <Dice />
    <Dice face={6} />
  </div>
), document.getElementById('react-game'));
