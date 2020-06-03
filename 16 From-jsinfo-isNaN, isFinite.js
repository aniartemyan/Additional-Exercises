function readNumber() {
  let n;
  do {
    n = +prompt("Enter a number", "");
  } while (isNaN(n) || !isFinite(n));
  if (n === null || n === "") return null;
  return +n;
}
console.log( readNumber() );