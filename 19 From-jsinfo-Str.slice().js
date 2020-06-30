function truncate(str, maxlength, end = "…") {
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 1) + end;
  };
  return str;
}

console.log(truncate('buy ViAgRA now', 10));
console.log(truncate('free xxxxx', 5));
console.log(truncate('innocent rabbit', 55));