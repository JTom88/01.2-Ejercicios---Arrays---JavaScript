// Your code here
function matrixBuilder (number){
    let matriz = [];
    for (let i=0; i<number; i++){
        let fila = [];
        for (let j=0; j<number; j++ ){            
            fila.push(Math.round(Math.random()));

        }
        matriz.push(fila);
    }
    return matriz;
}



// Do not change anything from this line down
console.log(matrixBuilder(5))