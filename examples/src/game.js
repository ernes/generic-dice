import React from 'react';
import { render } from 'react-dom';

import Dice from '../../index';

render((
  <div>
    <Dice />
    <Dice face={6} />
    <Dice face={5} rolling={false} size={10} />
  </div>
), document.getElementById('game'));
