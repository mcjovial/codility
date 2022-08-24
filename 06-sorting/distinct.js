function solution(A) {
  const map = {};

  for (i of A) {
    map[i] = true;
  }

  return Object.keys(map).length;
}
