let parkingState = [
    [1, 0, 1, 1],
    [0, 0, 0, 2],
    [1, 1, 2, 1],
    [2, 1, 1, 1]
]

// Your code here((
function getParkingLotState(arr) {
    let desglose = {};
    let plazasTotales = 0;
    let ocupados = 0;
    let disponibles = 0;
    let noparking = 0;


    arr.forEach(fila => {
        fila.forEach(contenido => {
            if (contenido === 1) {
                ocupados++;
                //
            } else if (contenido === 2) {
                disponibles++;
                //
            }
        })

    });

    plazasTotales = disponibles + ocupados;
    desglose["totalSlots"] = plazasTotales;
    desglose["availableSlots"] = disponibles;
    desglose["occupiedSlots"] = ocupados;





    return desglose;
}

console.log(getParkingLotState(parkingState))

//1 . ocupado
//2. disponible
//0. no se puede aparcar