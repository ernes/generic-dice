import React from 'react';
import { render } from 'react-dom';

import Dice from './components/dice/dice';
import './index.scss';

render((
  <div>
    <Dice face={5} />
    <Dice face={6} rolling={false} size={5} />
    <Dice face={4} rolling={false} size={10} />
    <Dice face={3} rolling={false} size={20} />
    <Dice face={2} rolling={false} size={40} />
    <Dice face={1} rolling={false} size={80} />
  </div>
), document.getElementById('root'));


function main() {
  const app = {};

  app.dicesAmount = 0;

  app.dicesResults = [];
  app.finalResult = 0;
  app.resultsPool = [];

  app.flying = false;

  app.createDiceIn = function (container) {
      var html = '';

      this.dicesAmount++;

      html += '<div id="dice-'+this.dicesAmount+'" class="dice">';

      for( var i = 1, l = 7 ; i < l ; i++ ) { 

          html += '<div id="dice-'+this.dicesAmount+'-face-'+i+'" class="dice-face">';

              for( var j = 0; j < i; j++ ){

                  html += '<div class="dice-dot dot-'+(j+1)+'-'+i+' dots-'+i+'" ></div>';

              }

          html += '</div>';

      }

      html += '</div>';

      var container_ = document.getElementById(container);
      var container_shadows = document.getElementById(container+'-shadows');
      container_.innerHTML = container_.innerHTML + html;
      container_shadows.innerHTML = container_shadows.innerHTML + '<div id="dice-'+this.dicesAmount+'-shadow" class="dice-shadow"></div>';
  };

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
