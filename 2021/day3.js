const testInput = `000110010001
101000110000
000110010111
100011100010
111001100001
001010001010
010100100101
011000010000
111111011010
001111011101`;

const inputArray = inputValues.split('\n');

const findMostCommonNumberAtIndex = (inputArray, index) => {
	let zeroCount = 0;
  let oneCount = 0;
  
  for (let i = 0; i < inputArray.length; i++) {
  	if (String(inputArray[i][index]) === '1') {
    	oneCount++;
    } else {
    	zeroCount++;
    }
  }
  
  return zeroCount > oneCount ? '0' : '1';
}

const findLeastCommonNumberAtIndex = (inputArray, index) => {
	let zeroCount = 0;
  let oneCount = 0;
  
  for (let i = 0; i < inputArray.length; i++) {
  	if (String(inputArray[i][index]) === '1') {
    	oneCount++;
    } else {
    	zeroCount++;
    }
  }
  
  return zeroCount <= oneCount ? '0' : '1';
}

const filterByMostCommonNumber = (inputArray, index) => {
	const commonNumber = findMostCommonNumberAtIndex(inputArray, index);

	return inputArray.filter((elem) => {
  	return elem[index] === commonNumber;
  });
}

const filterByLeastCommonNumber = (inputArray, index) => {
	const commonNumber = findLeastCommonNumberAtIndex(inputArray, index);

	return inputArray.filter((elem) => {
  	return elem[index] === commonNumber;
  });
}


const findOxRating = (inputArray) => {
	let filteredArray = [...inputArray];
  let index = 0;

  while (filteredArray.length > 1 && index < inputArray[0].length) {
  	filteredArray = filterByMostCommonNumber(filteredArray, index);
    index++;
  }
  
  return parseInt(filteredArray, 2);
}

const findCO2Rating = (inputArray) => {
	let filteredArray = [...inputArray];
  let index = 0;

  while (filteredArray.length > 1 && index < inputArray[0].length) {
  	filteredArray = filterByLeastCommonNumber(filteredArray, index);
    index++;
  }
  
  return parseInt(filteredArray, 2);
}

const result = findOxRating(inputArray) * findCO2Rating(inputArray);

console.log(result);