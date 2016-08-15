import React from 'react';
import { render } from 'react-dom';

import Dice from './components/generic-dice/generic-dice';
import './index.scss';

render((
  <div>
    <Dice />
    <Dice face={6} />
    <Dice face={5} rolling={false} size={5} />
    <Dice face={4} rolling={false} size={7} />
    <Dice face={3} rolling={false} size={10} />
    <Dice face={2} rolling={false} size={12} />
  </div>
), document.getElementById('root'));
