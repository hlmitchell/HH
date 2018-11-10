// solve fibonacci using memoization

const fibonacci = (n) => {
  const memoized = {};
  const inner = (n) => {
    if (n === 1 || n === 0 ) return n;
    if (memoized.hasOwnProperty([n])) return memoized[n];
    else {
      memoized[n] = inner(n - 1) + inner(n - 2);
      return memoized[n];
    }
  }
  inner(n);
  return memoized[n];
}