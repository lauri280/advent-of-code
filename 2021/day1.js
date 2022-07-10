// Day 1
const isBigger = (previous, current) => {
	return previous < current ? true : false;
}

const isBiggerSet = (prevArray, currentArray) => {
	const sumPrev = prevArray[0] + prevArray[1] + prevArray[2];
  const sumCurrent = currentArray[0] + currentArray[1] + currentArray[2];
  
  return isBigger(sumPrev, sumCurrent);
}

let increaseCount = 0;

for (let i = 3; i < inputs.length; i++) {
	const prev = [inputs[i - 3], inputs[i - 2], inputs[i - 1]];
  const curr = [inputs[i - 2], inputs[i - 1], inputs[i]];

  if (isBiggerSet(prev, curr)) {
  	increaseCount++;
  }
}

console.log(`final result: ${increaseCount}`);