function sumOfThree(arr){
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 3 === 0){
            sum += arr[i]
        }
    }
    return sum
}

console.log(sumOfThree([10, 20, 30, 40, 50]))