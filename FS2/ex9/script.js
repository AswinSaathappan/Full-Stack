function getRandomNumber(min,max){
    return Math.random() * ((max - min + 1)) + min;
}

console.log(getRandomNumber(1,10));
console.log(getRandomNumber(1,100));
console.log(getRandomNumber(50,60));