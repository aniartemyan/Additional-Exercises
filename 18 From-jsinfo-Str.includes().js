function checkSpam(str) {
  let str1 = str.toLowerCase();
  if (str1.includes("viagra") || str1.includes("xxx")) {
    return true;
  };
  return false;
}

console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam('innocent rabbit'));