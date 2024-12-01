export function day1(input: string): number {
  const { left, right } = lists(input);
  left.sort();
  right.sort();
  return left.reduce((sum, l, index) => {
    const r = right[index];
    const distance = Math.abs(l - r);
    return sum + distance;
  }, 0);
}

function lists(input: string) {
  const left: number[] = [];
  const right: number[] = [];
  for (const row of input.split(/\n/)) {
    const [l, r] = row.split(/\s+/);
    left.push(parseInt(l, 10));
    right.push(parseInt(r, 10));
  }
  return { left, right };
}
