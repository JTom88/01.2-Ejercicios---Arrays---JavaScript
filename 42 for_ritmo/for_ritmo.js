// Your code here
function lyricsGenerator(arr) {
    let ritmo = "";
    let consecutivo = 0; // Variable para contar los 1 consecutivos

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            ritmo += 'Boom ';
            consecutivo = 0; // Reiniciamos el contador si encontramos un 0
        } else if (arr[i] === 1) {
            ritmo += 'Drop the bass ';
            consecutivo++; // Incrementamos el contador si encontramos un 1
            if (consecutivo === 3) {
                ritmo += '!!!Break the bass!!! ';
                consecutivo = 0; // Reiniciamos el contador después de agregar "Break the bass!!!"
            }
        }
    }
    return ritmo;
}


// Don't change anything below this line
console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))


// Boom Boom Drop the bass Drop the bass Boom Boom Boom
// Boom Boom Drop the bass Drop the bass Drop the bass !!!Break the bass!!! Boom Boom Boom
// Boom Boom Boom
// Drop the bass Boom Drop the bass
// Drop the bass Drop the bass Drop the bass !!!Break the bass!!!