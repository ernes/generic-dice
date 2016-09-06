# Generic-Dice [![wercker status](https://app.wercker.com/status/c9d1766647915b392ee8a6878e584ecc/s/master "wercker status")](https://app.wercker.com/project/byKey/c9d1766647915b392ee8a6878e584ecc) [![generic-dice](http://img.shields.io/npm/dm/generic-dice.svg)](https://www.npmjs.org/package/generic-dice)

Generic dice to add to any game using React.js

Note: this dice is purely a display component, it will not try to pick a random value.
Instead, it needs to be set with a value and it will display it. 
The dice can also be animated to show that set value.

The main part component of this module is `<GenericDice>` but it's possible to use it as just `<Dice>` or any tag name that is suitable in your jsx.

## Install

```
npm install generic-dice --save
```

## Usage

### Basic dice

Simplest dice without any value set (all defaults).

The code below display a single dice on its own. This same dice could also be mixed with other components, it doesn't have to be displayed by itself.

```
import React from 'react';
import { render } from 'react-dom';

import Dice from 'generic-dice';

render((
  <Dice />
), document.getElementById('game'));
```

### Dice with a value set in face property

```
import React from 'react';
import { render } from 'react-dom';

import Dice from 'generic-dice';

render((
  <Dice face={6} />
), document.getElementById('game'));
```

### Dice with a value, not rolling when first displayed and with a custom size of 10 pixels

```
import React from 'react';
import { render } from 'react-dom';

import Dice from 'generic-dice';

render((
  <Dice face={5} rolling={false} size={10} />
), document.getElementById('game'));
```

### Mixing several dices

```
import React from 'react';
import { render } from 'react-dom';

import Dice from 'generic-dice';

render((
  <div>
    <Dice />
    <Dice face={6} />
    <Dice face={5} rolling={false} size={10} />
  </div>
), document.getElementById('game'));
```

## Maintainers

- Ernesto Paniagua: Developer and Designer
- Nadjib Amar: Developer

Please fork this repository and improve our code; pull requests are welcome.

The [main repository](https://github.com/gyroscopico/generic-dice) also has a list of issues, feel free to [report new issues](https://github.com/gyroscopico/generic-dice/issues) as you find them.

Documentation and unit testing are good starting points to contribute to this repository, but if you have some features you want to add to it, feel free to do so.

## Further development

If you want to develop this component further, please see the [Development help](DEVELOP.md) file.

[Change log](CHANGELOG.md)
