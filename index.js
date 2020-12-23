// Add your functions here

function map(array, fnctn){
    return array.map(fnctn)
}

function reduce(array, cllbck, startValue){
    if (!!startValue === false){
        startValue = array.shift()
    }
    return array.reduce(cllbck, startValue)
}