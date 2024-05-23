"use strict"
function compareArrays(arr1, arr2) {  
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++){
    if (arr1[i] === arr2[i]){
      return true;
    } else {
      return false;
    }    
  }
  const compare = compareArrays.every(arr1, arr2);
  return compare
}
console.log(compareArrays([8, 9], [6])); 
console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5])); 
console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4])); 
console.log(compareArrays([1, 2, 3], [2, 3, 1])); 
console.log(compareArrays([8, 1, 2], [8, 1, 2])); 

function getUsersNamesInAgeRange(users, gender) {
  let result = users.filter(user => user.gender === gender).map(user => user.age);
  if (result.length === 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < result.length; i++) {
    sum += result[i];
  }
  return sum / result.length;
}