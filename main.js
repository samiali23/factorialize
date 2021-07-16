alert('working')

function factorialize(num){
    let result = 1;
    for(let i = 1; i<=num; i++){
        result = result * i;
        // console.log(this)
    }
    return result;
}

console.log(factorialize(6))