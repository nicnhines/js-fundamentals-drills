/* #doubleArray
 *
 * Takes in an array of numbers and returns an array with each element doubled
 *npm 
 * @param {Array} // [1,2,3]
 * 
 * @return {Array} // [2,4,6]
 */
const doubleArray = (arr) => {
  let x = [];
  arr.map(ar => {
    x.push(ar * 2);
    return 0;
  })
  return x;
  console.log(x)
};

/* #sumArrays
 *
 * Takes in two arrays of numbers and returns the sum of both arrays.
 *
 * @param {Array}
 * @param {Array}
 * @return {Bool}
 */
let sumArrays = (arr1, arr2) => {
  let addArrs = (a, b) => {
    let result = a + b;
    return result;
  }
  let sum1 = arr1.reduce(addArrs);
  let sum2 = arr2.reduce(addArrs);
  return sum1 + sum2;

};

/* #stringCount
 *
 * Takes in a string and returns the length of the string.
 *
 * @param {String}
 * @return {Number}
 */
let stringCount = (str) => {
  return str.length;
};

/* #arrayLength
 *
 * Takes in an array and returns the length of the array.
 *
 * @param {String}
 * @return {Number}
 */
let arrayLength = (arr) => {
  return arr.length;
};

/* #countAll
 *
 * Takes in an array and returns the sum of all numbers in the array.
 *
 * @param {Array}
 * @return {Number}
 */
let countAll = (arr) => {
  let x = 0;
  arr.map(i => {
    x += i;
  })
  return x;
};
/* #countStrings
 *
 * Takes in an array of strings and returns an array of string lengths.
 *
 * @param {Array}
 * @return {Array}
 */
let countStrings = (arr) => {
  let length = [];
  for (let i = 0; i < arr.length; i++) {
    length.push(arr[i].length)
  }
  // console.log(length)
  return length;
};

/* #countAllStrings
 *
 * Takes in an array of strings and returns the sum of all string lengths.
 *
 * @param {String}
 * @return {Number}
 */
var countAllStrings = (arr) => {
  let lengthSum = 0;
  for (let i = 0; i < arr.length; i++) {
    lengthSum += arr[i].length;
  }
  return lengthSum;
};

/* #convertToArray
 *
 * Takes in an object and returns all the values of the object in an array.
 *
 * @param {Object}
 * @return {Array}
 */
var convertToArray = (objKey) => {
  let arr = [];
  for (let values in objKey) {
    arr.push(objKey[values])
  }
  return arr;
};

/* #objectSize
 *
 * Takes in an object and returns the number of key value pairs in the object.
 *
 * @param {Object}
 * @return {Number}
 */
let objectSize = (obj) => {
  let num = 0;
  for (let key in obj) {
    num += key.length;
  }
  return num;
};


/* #createZeroFilledArray
 *
 * Takes in a number and fills an array with that number of zeroes.
 *
 * @param {Number}
 * @return {Zero}
 */
let createZeroFilledArray = (num) => {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr[i] = 0;
  }
  return arr;
};

/* #poppedArray
 *
 * Takes in an array of numbers and returns an array of all but the last element of the array.
 *
 * @param {Array}
 * @return {Array}
 */
let poppedArray = (arr) => {
  arr.pop();
  return arr;
};

/* #splitString
 *
 * Takes in a string and returns an array of each individual character in the string.
 *
 * @param {String}
 * @return {Array}
 */
let splitString = (str) => {
  return str.split('')
};

/* #lengthOfLast
 *
 * Takes in an array of strings and returns the length of the last string.
 *
 * @param {String}
 * @return {Number}
 */
let lengthOfLast = (arr) => {
  return arr.pop().length;
};

/* #sumBelowTen
 *
 * Takes in an array of numbers and returns the sum of all numbers below 10.
 *
 * @param {Array}
 * @return {Number}
 */
let sumBelowTen = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 10) {
      sum += arr[i]
    }
  }
  return sum;
};

/* #moreThanTenLetters
 *
 * Takes in an array of strings and returns the amount of elements that have more than ten letters.
 *
 * @param {String}
 * @return {Number}
 */
const moreThanTenLetters = (arr) => {
  let result = arr.filter(element => {
    return element.length > 10;
  })
  return result.length;
};

/* #multiplyAll
 *
 * Takes in an array of numbers and returns the product of all elements.
 *
 * @param {Array}
 * @return {Number}
 */
let multiplyAll = (array) => {
  let product = 1;
  for (let i = 0; i < array.length; i++) {
    product *= array[i];
  }
  return product;
};

/* #getKeys
 *
 * Takes in an object and returns an array of the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
let getKeys = (obj) => {
  let keys = [];
  for (let key in obj) {
    keys.push(key)
  }
  return keys;
};

/* #sumAllPositive
 *
 * Takes in an array of numbers and returns the sum of all non-negative numbers.
 *
 * @param {String}
 * @return {Number}
 */
let sumAllPositive = (arr) => {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      result += arr[i];
    }
  }
  return result;
};

/* #stringCountBelowThree
 *
 * Takes in an array of strings and returns the amount of strings that have three characters or less.
 *
 * @param {Array}
 * @return {Number}
 */
let stringCountBelowThree = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length <= 3) {
      result.push(arr[i])
    }
  }
  return result.length;
};

/* #countObjects
 *
 * Takes in an array of objects and returns the amount of objects in the array.
 *
 * @param {Array}
 * @return {Number}
 */
let countObjects = (arr) => {
  return arr.length;
};

/* #getObjectKeys
 *
 * Takes in an object and returns an array of all the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
let getObjectKeys = (obj) => {
  let arr = [];
  for (let key in obj) {
    arr.push(key)
  }
  return arr;
};

/* #getObjectValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
let getObjectValues = (obj) => {
  let arr = [];
  for (let val in obj) {
    arr.push(obj[val])
  }
  return arr;
};

/* #makeObject
 *
 * Takes in two arguments 'key' and 'value' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Object}
 */
let makeObject = (key, val) => {
  let obj = {};
  obj[key] = val;
  return obj;
};

/* #makeObjectReverse
 *
 * Takes in two arguments 'value' and 'key' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Bool}
 */
let makeObjectReverse = (key, val) => {
  let obj = {};
  obj[val] = key;
  return obj;
};

/* #tupleToObject
 *
 * Takes in a tuple (an array with two elements) and returns it into a single key-value pair in an object.
 *
 * @param {Array}
 * @return {Object}
 */
let tupleToObject = (arr) => {
  let obj = {};
  obj[arr[0]] = arr[1];
  return obj;
};

/* #tupleToObjectReverse
 *
 * Takes in a tuple and returns it into a single key-value pair with second tuple element as key and first tuple element as value.
 *
 * @param {Array}
 * @return {Object}
 */
let tupleToObjectReverse = (arr) => {
  let obj = {};
  obj[arr[1]] = arr[0];
  return obj;
};

/* #strToKeys
 *
 * Takes in an array of strings and returns an object with all string elements as the object's keys and all values set to 0.
 *
 * @param {Array}
 * @return {Object}
 */
let strToKeys = (arr) => {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = 0;
  }
  return obj;
};

/* #getValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
let getValues = (obj) => {
  let arr = [];
  for (let val in obj) {
    arr.push(obj[val])
  }
  return arr;
};

/* #getKeys
 *
 * Takes in an object and returns an array of the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
// let getKeys;

/* #objectToArray
 *
 * Takes in an object and returns an array of tuples where each tuple has 
 * the object's key as element 0 and object's value as element 1.
 *
 * @param {Object}
 * @return {Array}
 */
var objectToArray = function (obj) {
  var arr = [];
  for (key in obj)
    arr.push([key, obj[key]]);
  return arr;
};

/* #arrayToObject
 *
 * takes in an array and returns an object with keys set to the elements in the array and
 * all values set to false.
 *
 * @param {Array}
 * @return {Object}
 */
let arrayToObject = (arr) => {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = false;
  }
  return obj;
};

/* #arraysToObject
 *
 * takes in two arrays, the first array elements will be keys of an object and second array elements 
 * will be values of an object.
 *
 * @param {Array}
 * @param {Array}
 * @return {Object}
 */
let arraysToObject = (arr1, arr2) => {
  let obj = {};
  for (let i = 0; i < arr1.length; i++) {
    obj[arr1[i]] = arr2[i];
  }
  return obj;
};

/* #objectsToTuples
 *
 * takes in two objects and returns an array of tuples of the key value pairs of all objects in both arrays.
 *
 * @param {Object}
 * @param {Object}
 * @return {Array}
 */
let objectsToTuples = function(obj1, obj2) {
  let arr = [];
  for (let key in obj1) {
    arr.push([key, obj1[key]]);
  }
  for (key in obj2) {
    arr.push([key, obj2[key]]);
  }
  return arr;
};
/* #mapArrayValues
 *
 * takes in an array of strings and returns an object with keys of the array elements and values all set to True.
 *
 * @param {Array}
 * @return {Object}
 */
let mapArrayValues = (arr) => {
  let obj = {};
  arr.map(element => {
    obj[element] = true;
  })
  return obj;
};

/* #mapStringCounts
 *
 * takes in an array of strings and returns an object with key names set to the elements in the array.
 * If the character count of the key name is greater than or equal to 5 set the value to true,
 * otherwise set to false.
 *
 * @param {Array}
 * @return {Object}
 */
let mapStringCounts = (arr) => {
  let obj = {};
  arr.map(element => {
    if(element.length >= 5) {
      obj[element] = true;
    }
    else {
      obj[element] = false;
    }
  })
  return obj;
};

/* #arrayToObjectNums
 *
 * takes in an array of numbers and returns an object with keys set to 
 * each element of the array and all values set to true.
 *
 * @param {Array}
 * @return {Object}
 */
let arrayToObjectNums =(arr) => {
  let obj = {};
  arr.map(element =>{
    obj[element] = true;
  })
  return obj;
};

/* #stringToKeys
 *
 * takes in a string and returns an object whos keys are each letter of the string and all values set to true.
 * 
 * @param {String}
 * @return {Object}
 */
let stringToKeys = (str) => {
  let obj = {};
  let strArr = str.split('');
  strArr.map(element => {
    obj[element] = true;
  })
  return obj;
};

/* #charCountMap
 *
 * takes in an array of strings and returns an object with keys set to each element of the array 
 * and values set to the character count of each key name.
 *
 * @param {Array}
 * @return {Object}
 */
let charCountMap = (arr) => {
  let obj = {};
  arr.map(element => {
    obj[element] = element.length;
  })
  return obj;
};

/* #frequencyMap
 *
 * takes in an array of strings and returns an object with the string as the key and the number of occurences as the value.
 *
 * @param {array}
 * @return {object}
 */
let frequencyMap = function(arr) {
  let obj = {};
  arr.map(element => {
    if (obj[element]) {
       obj[element]++;
    }
    else {
      obj[element] = 1;
    }
  })
  return obj;
};

/* #tupleConvertToObject
 *
 * takes in an array of tuples and and returns an object whos keys are 
 * the first element of the tuples and values are second element of the tuples.
 *
 * @param {arr}
 * @return {obj}
 */
let tupleConvertToObject = (arr) => {
  console.log(arr)
  let obj = {};
  arr.map(element => {
    obj[element[0]] = element[1]
  })
  return obj;
};


module.exports = {
  doubleArray: doubleArray,
  sumArrays: sumArrays,
  stringCount: stringCount,
  arrayLength: arrayLength,
  countAll: countAll,
  countStrings: countStrings,
  countAllStrings: countAllStrings,
  convertToArray: convertToArray,
  objectSize: objectSize,
  createZeroFilledArray: createZeroFilledArray,
  poppedArray: poppedArray,
  splitString: splitString,
  lengthOfLast: lengthOfLast,
  sumBelowTen: sumBelowTen,
  moreThanTenLetters: moreThanTenLetters,
  multiplyAll: multiplyAll,
  getKeys: getKeys,
  sumAllPositive: sumAllPositive,
  stringCountBelowThree: stringCountBelowThree,
  countObjects: countObjects,
  getObjectKeys: getObjectKeys,
  getObjectValues: getObjectValues,
  makeObject: makeObject,
  makeObjectReverse: makeObjectReverse,
  tupleToObject: tupleToObject,
  tupleToObjectReverse: tupleToObjectReverse,
  strToKeys: strToKeys,
  getValues: getValues,
  objectToArray: objectToArray,
  arrayToObject: arrayToObject,
  arraysToObject: arraysToObject,
  objectsToTuples: objectsToTuples,
  mapArrayValues: mapArrayValues,
  mapStringCounts: mapStringCounts,
  arrayToObjectNums: arrayToObjectNums,
  stringToKeys: stringToKeys,
  charCountMap: charCountMap,
  frequencyMap: frequencyMap,
  tupleConvertToObject: tupleConvertToObject
}