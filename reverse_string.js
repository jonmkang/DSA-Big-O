function reverse_string(string){
    let reverse_string = ''
    for(let i = string.length-1; i >= 0; i--){
        reverse_string += string[i]
    }
    
    return reverse_string
}

console.log(reverse_string('this should be reversed'))