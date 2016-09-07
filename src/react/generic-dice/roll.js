// @animation: string CSS class parameter that can be 'thrown' or ''.
// @duration: length of time in milliseconds during which the animation should last.
export function roll(animation = 'thrown', duration = 2000) {
  let start;
  let animationId = null;

  const rolling = timestamp => {
    if (!start) {
      start = timestamp;
      this.setState({
        rolling: true,
        animation,
      });
    }

    const delta = timestamp - start;

    if (delta > duration) {
      start = null;
      window.cancelAnimationFrame(animationId);
      this.setState({
        rolling: false,
        animation: '',
      });
    } else {
      window.requestAnimationFrame(rolling);
    }
  };

  animationId = window.requestAnimationFrame(rolling);
}
