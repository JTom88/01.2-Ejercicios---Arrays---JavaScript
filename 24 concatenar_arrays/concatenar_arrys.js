let listOfNumbers = [4, 80, 85, 59, 37, 25, 5, 64, 66, 81, 20, 64, 41, 22, 76, 76, 55, 96, 2, 68];

// Your code here
function mergeTwoList  (numeros){
    let odd = [];
    let even = [];
    let arrayFinal = [];
    for (let i=0; i<numeros.length; i++){
        if (numeros[i] % 2 !==0){
            odd.push(numeros[i]);
        }else {
            even.push(numeros[i]);
        }
    }
    arrayFinal = odd.concat(even);
    return arrayFinal;
}

console.log(mergeTwoList(listOfNumbers));