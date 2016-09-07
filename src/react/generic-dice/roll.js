export function roll() {
  this.setState({
    rolling: true,
    animation: 'thrown',
  });

  setTimeout(() => {
    this.setState({
      rolling: false,
      animation: '',
    });
  }, 700);
}
