import * as C from './constants';

export const getDurationClass = duration => {
  switch (duration) {
    case 500:
      return 'duration-5';
    case 600:
      return 'duration-6';
    case 800:
      return 'duration-8';
    case 900:
      return 'duration-9';
    case C.DURATION:
    default:
      return 'duration-7';
  }
};
