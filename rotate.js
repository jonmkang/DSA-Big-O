function rotLeft(a, d){
    let b = a.splice(0,d);
    return a.concat(b)
}

console.log(rotLeft([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5))