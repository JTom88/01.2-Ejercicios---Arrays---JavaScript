let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// Your code here
    //quitamos los espacios al string para que no los tenga en cuenta
    let parSinEspacios = par.replace(/\s/g, "");

    //recorremos el nuevo string
    for (let i = 0; i < parSinEspacios.length; i++) {
        let letra = parSinEspacios[i].toLowerCase();

        if (counts.hasOwnProperty(letra)){
            counts[letra] += 1;
        }else {
            counts[letra] = 1;
        }
    }

console.log(counts);
