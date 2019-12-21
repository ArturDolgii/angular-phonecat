function checkmark(): (input: string) => string {
  return function(input: string): string {
    return input ? '\u2713' : '\u2718';
  };
}

export const name: string = 'checkmark';

export default checkmark;
