function createPhoneNumber(numbers) {

    return `(${numbers.slice(0,3).join('')}) ${numbers.slice(3,6).join('')}-${numbers.slice(6,10).join('')}`

}

console.log(createPhoneNumber([3,1,3,3,8,8,6,5,9,6]));
console.log(createPhoneNumber([7,3,4,8,3,3,1,2,3,2]));