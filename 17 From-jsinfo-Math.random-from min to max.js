function asd(min, max) {
  let n = Math.random() * 10;
  if (n < min || n > max) return asd(min, max);
  return n;
}
console.log( asd(1, 3) );