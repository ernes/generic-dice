import React from 'react';
import { render } from 'react-dom';

import Dice from '../../reactSource';

render((
  <div>
    <Dice />
    <Dice face={6} rolling={false} />
    <Dice face={5} rolling={false} size={10} />
    <Dice face={4} rolling={false} size={10} />
    <Dice face={3} rolling={false} size={10} />
    <Dice face={2} rolling={false} size={10} />
  </div>
), document.getElementById('react-game'));
