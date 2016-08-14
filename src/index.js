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

function main() {
  const app = {};

  app.diceShake = function(elIndex, duration, result, callback) {
    var face = this.randomFace();
    var el = 'dice-'+elIndex;
    var oldDice = document.getElementById(el+'-face-'+face);
    var olderDice = oldDice;
    var newDice = oldDice;
    oldDice.style.display = 'flex';
    var i = 5;

    console.log(el, result);

    var roll = function() {
      var diagonal = Math.random()*2 > 0 ? true : false;
      olderDice = oldDice;
      oldDice = newDice;
      setTimeout(function() {
        i--;
        face = i === 0 ? result : Math.ceil(Math.random()*6);
        if (!diagonal) oldDice.style.display = 'none';
        olderDice.style.display = 'none';
        newDice = document.getElementById(el+'-face-'+face);
        newDice.style.display = 'flex';
        if (!diagonal) oldDice = newDice;
        if (i > 0) {
          roll();
        } else {
          if(diagonal)oldDice.style.display = 'none';
          newDice.style.display = 'flex';
          app.displayResult(elIndex, face);
          callback(elIndex);
        }
      }, duration/(i*2));
    };
    roll();
  };

  app.throw = function() {
    this.reset();
    this.flying = true;
    document.body.style.cursor = 'none';

    for( var i = 0, l = this.dicesAmount; i < l ; i++ ){
      var animationType = 'throw' + Math.ceil(Math.random()*2);
      animationType = 'throw4';

      var dice = 'dice-'+(i+1);
      document.getElementById(dice).classList.add(animationType);
      document.getElementById(dice+'-shadow').classList.add(animationType);
      var result = this.randomFace();
      this.diceShake(i+1, 600, result, function(index) {
        setTimeout(function() {
          document.getElementById('dice-'+index).classList.remove(animationType);
          document.getElementById('dice-'+index+'-shadow').classList.remove(animationType);
          app.flying = false;
          document.body.style.cursor = 'pointer';
        }, 500);
      });
    }
  };

  app.throw();

  document.body.addEventListener("click", function(){
    if(!app.flying) app.throw();
  });
}
