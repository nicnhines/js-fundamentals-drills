/* #doubleArray
 *
 * Takes in an array of numbers and returns an array with each element doubled
 *
 * @param {Array} // [1,2,3]
 * @return {Array} // [2,4,6]
 */
var doubleArray = function(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    result.push(arr[i] * 2); 
  }
  return result;
};

/* #sumArrays
 *
 * Takes in two arrays of numbers and returns the sum of both arrays.
 *
 * @param {Array}
 * @param {Array}
 * @return {Bool}
 */
var sumArrays = function(arr1, arr2){
  
  var num1 = 0;
  var num2 = 0;
  for(var i = 0; i< arr1.length; i++){
    num1 += arr1[i];
  }
  for(var j = 0 ; j < arr2.length ; j++){
    num2 += arr2[j];
  }
  return num1 + num2;
 };

/* #stringCount
 *
 * Takes in a string and returns the length of the string.
 *
 * @param {String}
 * @return {Number}
 */
var stringCount= function(str){
return str.length;
};

/* #arrayLength
 *
 * Takes in an array and returns the length of the array.
 *
 * @param {String}
 * @return {Number}
 */
var arrayLength = function(arr){
return arr.length;

};

/* #countAll
 *
 * Takes in an array and returns the sum of all numbers in the array.
 *
 * @param {Array}
 * @return {Number}
 */
var countAll = function(arr){
  var sum = 0;
  for(var i =0;i<arr.length;i++){
    sum +=arr[i];
  }
  return sum;
};
/* #countStrings
 *
 * Takes in an array of strings and returns an array of string lengths.
 *
 * @param {Array}
 * @return {Array}
 */
var countStrings= function(arr) {
  var lengths= [];
  for(var i =0; i < arr.length; i++){
    lengths.push(arr[i].length);
  }
  return lengths;
};

/* #countAllStrings
 *
 * Takes in an array of strings and returns the sum of all string lengths.
 *
 * @param {String}
 * @return {Number}
 */
var countAllStrings= function(arr){
  var sum = 0;
  for(i=0;i<arr.length;i++)
    sum+= arr[i].length;
  return sum;    
};

/* #convertToArray
 *
 * Takes in an object and returns all the values of the object in an array.
 *
 * @param {Object}
 * @return {Array}
 */
var convertToArray = function(obj){
  var arr= [];
  for(var a in obj){
    arr.push(obj[a]);
  }
  return arr;
} ;

/* #objectSize
 *
 * Takes in an object and returns the number of key value pairs in the object.
 *
 * @param {Object}
 * @return {Number}
 */
var objectSize= function(obj){
  var size = 0, key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) size++;
  }
  return size;
};


/* #createZeroFilledArray
 *
 * Takes in a number and fills an array with that number of zeroes.
 *
 * @param {Number}
 * @return {Zero}
 */
var createZeroFilledArray=function(n){
  var arr=[];
  for(var i= 0; i<n;i++){
    arr.push(0);
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
var poppedArray= function(arr){
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
var splitString= function(str){
  return str.split("");
};

/* #lengthOfLast
 *
 * Takes in an array of strings and returns the length of the last string.
 *
 * @param {String}
 * @return {Number}
 */
var lengthOfLast=function(arr){
  var i = arr.length -1;
  return arr[i].length;
};

/* #sumBelowTen
 *
 * Takes in an array of numbers and returns the sum of all numbers below 10.
 *
 * @param {Array}
 * @return {Number}
 */
var sumBelowTen=function(arr) {
  var sum = 0;
  for(var i =0; i<arr.length;i++) {
    if(arr[i]<10){
      sum += arr[i];
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
var moreThanTenLetters= function(str){
  var newStr=0;
  for (var i = 0; i<str.length;i++){
    if(str[i].length>= 10)
     newStr+=1;
  }
  return newStr;
};

/* #multiplyAll
 *
 * Takes in an array of numbers and returns the product of all elements.
 *
 * @param {Array}
 * @return {Number}
 */
var multiplyAll= function(arr){
  var product = 1;
  for(var i =0;i<arr.length; i++){
    product *= arr[i];
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
var getKeys= function(obj){
  return Object.keys(obj);
  
};

/* #sumAllPositive
 *
 * Takes in an array of numbers and returns the sum of all non-negative numbers.
 *
 * @param {String}
 * @return {Number}
 */
var sumAllPositive=function(arr){
  var sum=0;
  for(var i=0;i<arr.length;i++){
    if (arr[i]>=0)
    sum+=arr[i];
  }
  return sum;
};

/* #stringCountBelowThree
 *
 * Takes in an array of strings and returns the amount of strings that have three characters or less.
 *
 * @param {Array}
 * @return {Number}
 */
var stringCountBelowThree=function(arr){
  var belowThree=0;
  for(var i=0;i<arr.length;i++){
    if(arr[i].length<=3){
      belowThree += 1;
    }
  }
  return belowThree;
};

/* #countObjects
 *
 * Takes in an array of objects and returns the amount of objects in the array.
 *
 * @param {Array}
 * @return {Number}
 */
var countObjects=function(obj){
  var count= obj.length;
  return count;
};

/* #getObjectKeys
 *
 * Takes in an object and returns an array of all the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
var getObjectKeys=function(obj){
  return Object.keys(obj);
};

/* #getObjectValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
var getObjectValues=function(obj){
  return Object.values(obj);
};

/* #makeObject
 *
 * Takes in two arguments 'key' and 'value' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Object}
 */
var makeObject= function(key,value){
  var obj={};
  obj[key] = value;
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
var makeObjectReverse=function(value,key){
  var obj={};
  obj[key]=value;
  return obj;
};

/* #tupleToObject
 *
 * Takes in a tuple (an array with two elements) and returns it into a single key-value pair in an object.
 *
 * @param {Array}
 * @return {Object}
 */
var tupleToObject=function(arr){
  var obj={};
  obj[arr[0]]=arr[1];
  return obj;
};

/* #tupleToObjectReverse
 *
 * Takes in a tuple and returns it into a single key-value pair with second tuple element as key and first tuple element as value.
 *
 * @param {Array}
 * @return {Object}
 */
var tupleToObjectReverse= function(arr){
  var obj={};
  obj [arr[1]]=arr[0];
  return obj;
};

/* #strToKeys
 *
 * Takes in an array of strings and returns an object with all string elements as the object's keys and all values set to 0.
 *
 * @param {Array}
 * @return {Object}
 */
var strToKeys= function(arr){
  var obj={};
  for(var i= 0; i<arr.length;i++){
    obj[arr[i]]=0;
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
var getValues=function(obj){
  return Object.values(obj);
};

/* #getKeys
 *
 * Takes in an object and returns an array of the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
var getKeys;

/* #objectToArray
 *
 * Takes in an object and returns an array of tuples where each tuple has 
 * the object's key as element 0 and object's value as element 1.
 *
 * @param {Object}
 * @return {Array}
 */
var objectToArray=function(obj){
  var arr=[];
  for(var key in obj)
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
var arrayToObject=function(arr){
  var obj={};
  for(var i =0;i<arr.length;i++){
      obj[arr[i]]=false;
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
var arraysToObject=function(arr1,arr2){
  var obj={};
  for(var i=0;i<arr1.length;i++){
    obj[arr1[i]]=arr2[i];
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
var objectsToTuples=function(obj1,obj2){
  var arr=[];
  for(var key1 in obj1){
    var tuple1=[];
    tuple1.push(key1, obj1[key1]);
    arr.push(tuple1);
  }
  for(var key2 in obj2){
    var tuple2 = [];
    tuple2.push(key2, obj2[key2]);
    arr.push(tuple2);
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
var mapArrayValues=function(arr) {
  var obj ={};
  for (var i =0; i<arr.length;i++) {
    obj[arr[i]] = true;
  }
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
var mapStringCounts=function(arr){
  var obj={};
  for(var i=0;i<arr.length;i++) {
    if(arr[i].length >= 5){
      obj[arr[i]] = true;
    }else{
      obj[arr[i]] = false;
    }
  } return obj;
};

/* #arrayToObjectNums
 *
 * takes in an array of numbers and returns an object with keys set to 
 * each element of the array and all values set to true.
 *
 * @param {Array}
 * @return {Object}
 */
var arrayToObjectNums=function(arr){
  obj={};
  for (var i=0; i <arr.length;i++){
    obj[arr[i]] = true;
  }
  return obj;
};

/* #stringToKeys
 *
 * takes in a string and returns an object whos keys are each letter of the string and all values set to true.
 * 
 * @param {String}
 * @return {Object}
 */
var stringToKeys=function(str){
  var obj={};
  splStr=str.split('');
  for(var i = 0;i<str.length;i++){
    obj[splStr[i]] = true;
  }
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
var charCountMap=function(arr){
  var obj={};
  for(var i=0;i<arr.length;i++){
    obj[arr[i]] = arr[i].length;
  }
  return obj;

};

/* #frequencyMap
 *
 * takes in an array of strings and returns an object with the string as the key and the number of occurences as the value.
 *
 * @param {String}
 * @return {Bool}
 */
var frequencyMap=function(str){
  var obj={};
  for(var i=0;i<str.length;i++){
    obj[str[i]] = (obj[str[i]] || 0) +1;
  }
  return obj;
};

/* #tupleConvertToObject
 *
 * takes in an array of tuples and and returns an object whos keys are 
 * the first element of the tuples and values are second element of the tuples.
 *
 * @param {String}
 * @return {Bool}
 */
var tupleConvertToObject=function(arr){
  var obj= {};
  for(var i=0;i<arr.length;i++){
    obj[arr[i][0]] = arr[i][1];
  }
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