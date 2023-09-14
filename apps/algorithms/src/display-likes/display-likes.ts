const formatter = new Intl.ListFormat('en-US', {
  style: 'long',
  type: 'conjunction',
});

export function displayLikes(names: string[]): string {
  const { length } = names;

  if (length === 0) {
    return 'no one likes this';
  }

  if (length <= 3) {
    return `${formatter.format(names)} like${length > 1 ? '' : 's'} this`;
  }

  const list = [names[0], names[1], `${length - 2} others`];
  return `${formatter.format(list)} like this`;
}
