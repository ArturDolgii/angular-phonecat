function checkmark() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
}

export const name = 'checkmark';

export default checkmark;
