const animate = _duration => new Promise((resolve, reject) => {
  if (!_duration || isNaN(_duration) || _duration < 0) {
    reject();
  }

  setTimeout(resolve, _duration);
});

// @duration: 700 miliseconds is the "animation-duration: .7s;"
// from css animation in generic-dice.scss and dice-shadow.scss
export function roll(duration = 700) {
  this.setState({
    rolling: true,
    animation: 'thrown',
  });

  animate(duration)
    .then(() => {
      this.setState({
        rolling: false,
        animation: '',
      });
    })
    // Note: several ".then()" could be chained before ".catch()".
    .catch(reason => {
      throw new Error(reason);
    });
}
