function evenNumInFifty() {
  let arr = [];
  const evenNumber = (num) => {
    return num % 2 === 0;
  };

  for (i = 1; i <= 50; i++) {
    if (evenNumber(i)) {
      arr.push(i);
    }
  }
  return arr;
}
