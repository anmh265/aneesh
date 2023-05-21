function wordCount(string){
    let count = 0
    for(let i = 0; i < string.length; i++){
        if(string[i] === ' '){
            count++
        }
    }
    return count + 1
}

let words = wordCount('hello world')
console.log(words)