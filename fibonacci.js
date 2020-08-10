function fibonacci(n){
    let arr = [];
    for(let i = 1; i <= n; i++){
        if(i === 1){
            arr.push(1);
        }else if(i === 2){
            arr.push(1);
        }else {
            arr.push(arr[i-2]+arr[i-3])
        }
    }
    return arr[n-2] + arr[n-3]
}

console.log(fibonacci(8))