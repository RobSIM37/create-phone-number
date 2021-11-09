function createPhoneNumber(arr) {

    return `(${arr.splice(0,3).join('')}) ${arr.splice(0,3).join('')}-${arr.join('')}`

}

console.log(createPhoneNumber([3,1,3,3,8,8,6,5,9,6]));
console.log(createPhoneNumber([7,3,4,8,3,3,1,2,3,2]));