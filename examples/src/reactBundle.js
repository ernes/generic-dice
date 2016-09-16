import React from 'react';
import { render } from 'react-dom';

import Dice from '../../reactSource';

render((
  <div>
    <h2>Dices</h2>

    <h3>Basic dice with no parameter</h3>
    <code>&lt;Dice /&gt;</code>
    <Dice />

    <h3>Dice with custom face, size and rolling</h3>
    <code>&lt;Dice face=&#123;6&#125; size=&#123;14&#125; rolling=&#123;false&#125; /&gt;</code>
    <Dice face={6} size={14} rolling={false} />

    <h3>Dice with custom face and size</h3>
    <code>&lt;Dice face=&#123;5&#125; size=&#123;10&#125; /&gt;</code>
    <Dice face={5} size={10} />

    <h3>Dice with custom face and size</h3>
    <code>&lt;Dice face=&#123;4&#125; size=&#123;10&#125; /&gt;</code>
    <Dice face={4} size={10} />

    <h3>Dice with custom face and size and shortest duration</h3>
    <code>&lt;Dice face=&#123;3&#125; size=&#123;10&#125; duration=&#123;500&#125; /&gt;</code>
    <Dice face={3} size={10} duration={500} />

    <h3>Dice with custom face and size and longest duration</h3>
    <code>&lt;Dice face=&#123;2&#125; size=&#123;10&#125; duration=&#123;900&#125; /&gt;</code>
    <Dice face={2} size={10} duration={900} />
  </div>
), document.getElementById('react-game'));
