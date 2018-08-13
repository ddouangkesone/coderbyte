function FirstReverse(str) {
  let reversedArray = [];
  const initialString = str.split("");

  initialString.forEach(element => {
    reversedArray.push(element);
  });

  return reversedArray.reverse().join("");
}

FirstReverse("reverseD");
