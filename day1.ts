export function day1_sum(input: Day1_Lists): number {
  const sorted = {
    left: input.left.toSorted(),
    right: input.right.toSorted(),
  };
  return sorted.left.reduce((sum, l, index) => {
    const r = sorted.right[index];
    const distance = Math.abs(l - r);
    return sum + distance;
  }, 0);
}

export type Day1_Lists = ReturnType<typeof day1_lists>;

export function day1_lists(input: string) {
  const left: number[] = [];
  const right: number[] = [];
  for (const row of input.split(/\n/)) {
    const [l, r] = row.split(/\s+/);
    left.push(parseInt(l, 10));
    right.push(parseInt(r, 10));
  }
  return { left, right };
}
