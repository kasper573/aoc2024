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

export function day1_sum(lists: Day1_Lists): number {
  const sorted = {
    left: lists.left.toSorted(),
    right: lists.right.toSorted(),
  };
  return sorted.left.reduce((sum, left, index) => {
    const right = sorted.right[index];
    const distance = Math.abs(left - right);
    return sum + distance;
  }, 0);
}

export function day1_similarity(lists: Day1_Lists): number {
  const counts = new Map<number, number>();
  for (const right of lists.right) {
    const count = counts.get(right) ?? 0;
    counts.set(right, count + 1);
  }

  return lists.left.reduce((sum, left) => {
    return sum + left * (counts.get(left) ?? 0);
  }, 0);
}
