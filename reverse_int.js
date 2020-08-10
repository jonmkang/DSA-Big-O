function reverse_int(num){
    let reverse = 0;
    let negative = false;

    if(num < 0){
        negative = true;
        num *= -1
    }

    while(num > 10){
        reverse += num%10
        reverse *= 10
        num = Math.floor(num/10)
    }

    reverse += num

    if(negative === true){
        reverse *= -1
    }

    return reverse
}

console.log(reverse_int(123))
console.log(reverse_int(-1234))