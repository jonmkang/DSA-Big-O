function counting_sheep(n){
    for(let i = n; i > 0; i--){
        console.log(`${i}: Another sheep jumps over the fence`)
    }

    console.log('All sheep jumped over the fence')
}

counting_sheep(3)