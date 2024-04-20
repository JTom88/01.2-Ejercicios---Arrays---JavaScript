let theBools = [0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

// Your code here
let nuevoArreglo = theBools.map(function(value) {
    if (value == 1){
        return("wiki");
    }else if (value == 0) {
        return("woko");
    }    
    })
    console.log(nuevoArreglo); 