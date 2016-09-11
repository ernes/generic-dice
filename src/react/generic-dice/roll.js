export let resetAnimation;

export function roll() {
  resetAnimation = () => {
    this.setState({
      rolling: false,
      animation: '',
    });
  };

  this.setState({
    rolling: true,
    animation: 'thrown',
  });

  setTimeout(resetAnimation, 700);
}
