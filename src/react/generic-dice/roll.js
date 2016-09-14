import * as C from './constants';

export let resetAnimation;

export function roll(e) {
  const duration = e && e.detail && e.detail.duration || C.DURATION;

  resetAnimation = () => {
    this.setState({
      rolling: false,
      animation: '',
      duration,
    });
  };

  this.setState({
    rolling: true,
    animation: 'thrown',
    duration,
  });

  setTimeout(resetAnimation, duration);
}
