export function roll() {
  this.setState({
    rolling: true,
    animation: 'thrown',
  });

  // console.log('nadjib');

  const resetAnimation = () => {
    // console.log('woz here');
    this.setState({
      rolling: false,
      animation: '',
    });
  };

  setTimeout(resetAnimation, 700);
}
