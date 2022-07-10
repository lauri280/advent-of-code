// day 4 part one
const inputData = `7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1

22 13 17 11  0
 8  2 23  4 24
21  9 14 16  7
 6 10  3 18  5
 1 12 20 15 19

 3 15  0  2 22
 9 18 13 17  5
19  8  7 25 23
20 11 10 24  4
14 21 16 12  6

14 21 17 24  4
10 16 15  9 19
18  8 23 26 20
22 11 13  6  5
 2  0 12  3  7`;
 
const realInputData = `28,82,77,88,95,55,62,21,99,14,30,9,97,92,94,3,60,22,18

31 88 71 23 61
 4  9 14 93 51
52 50  6 34 55
70 64 78 65 95
12 22 41 60 57

44 54 26 63 18
32 74 99 52  2
 5 29 13 28 41
60 69 53 61 25
49 59 70 46 48`;

const inputDataArray = inputData.split('\n');
const bingoNumbers = inputDataArray.shift(0).split(',');

console.log('kala');

inputDataArray.push(inputDataArray.shift(0));

// get array of fields
const parseFields = (inputArray) => {
  const returnValues = [];
  let field = [];
  
  for (let i = 0; i < inputArray.length; i++) {
      if (inputArray[i].length > 0) {      
      const row = inputArray[i].split(/ +/);
      
      if (row.length === 6) row.shift();
      
      field.push(row);
    } else {
      returnValues.push(field);
      field = [];
    }
  }
  
  return returnValues;
};

const fields = parseFields(inputDataArray);

console.log(fields);

const checkSequence = (bingoNumbers, row) => {
	return row.every(num => bingoNumbers.includes(num));
};

const getColumnsFromField = (field) => {
	const resultArray = [];
  
  for (let i = 0; i < 5; i++) {
  	const column = [];
    
    for (let j = 0; j < 5; j++) {
    	column.push(field[j][i]);
    }
    
    resultArray.push(column);
  }
  
  return resultArray;
};

const checkField = (bingoNumbers, field) => {
	const columns = getColumnsFromField(field);
  
  for (let i = 0; i < 5; i++) {  
  	const checkRow = checkSequence(bingoNumbers, field[i]);
    const checkColumn = checkSequence(bingoNumbers, columns[i]);
  
  	const checkResult = checkRow || checkColumn;
    
		if (checkResult) {
    	return true;
    }
  }
  
  return false;
};

const processFields = (fields, bingoNumbers) => {
	const bingoNumbersToCheck = bingoNumbers.slice(0, 5);
  let bingoSuccess = false;
  let winningField = [];
  let iterator = 4;
  
  while (!bingoSuccess) {
  	console.log(bingoNumbersToCheck.slice(-1));
    
    fields.forEach(field => {
    	const isSuccess = checkField(bingoNumbersToCheck, field);
      
      if (isSuccess) {
      	bingoSuccess = true;
        winningField = field;
        return;
      }
    });
    
    if (bingoSuccess) {
    	break;
    }
    
    iterator++;
    bingoNumbersToCheck.push(bingoNumbers[iterator]);
  }
  
  const result = {
  	finalBingoNumber: bingoNumbersToCheck.slice(-1),
    field: winningField
  };
  
  return result;
};


console.log(processFields(fields, bingoNumbers));





