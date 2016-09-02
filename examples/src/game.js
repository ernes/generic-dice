import React from 'react';
import { render } from 'react-dom';

import Dice from '../../index';

render((
  <div>
    <Dice />
    <Dice face={6} />
    <Dice face={5} rolling={false} size={10} />
    <Dice face={4} size={10} />
    <Dice face={3} size={10} />
    <Dice face={2} size={10} />
  </div>
), document.getElementById('game'));
