export function roll() {
  this.setState({
    rolling: true,
    animation: 'thrown',
  });

  const resetAnimation = () => {
    this.setState({
      rolling: false,
      animation: '',
    });
  };

  setTimeout(resetAnimation, 700);
}
