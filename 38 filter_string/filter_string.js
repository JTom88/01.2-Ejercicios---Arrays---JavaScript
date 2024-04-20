let names = ['Liam','Emma','Noah','Olivia','William','Ava','James','Isabella','Logan','Sophia','Benjamin','Mia','Mason','Charlotte','Elijah','Amelia','Oliver','Evelyn','Jacob','Abigail','Lucas','Harper','Michael','Emily','Alexander','Elizabeth','Ethan','Avery','Daniel','Sofia','Matthew','Ella','Aiden','Madison','Henry','Scarlett','Joseph','Victoria','Jackson','Aria','Samuel','Grace','Sebastian','Chloe','David','Camila','Carter','Penelope','Wyatt','Riley'];

// Your code here

function filterByName (arr, str){
    let namesMinusculas = arr.map(function(cadena){ 
        return cadena.toLowerCase();
    });
  

    let filtro = namesMinusculas.filter(function(nombre){

        return nombre.includes(str);
    })

    let vuelta = filtro.map(function (palabra){
        let primeraLetra = palabra.charAt(0);
        let resto = palabra.slice(1);
        let palabraFinal = primeraLetra.toUpperCase()+resto;
        return palabraFinal;
    })

    return vuelta;
}

console.log(filterByName(names, 'am'));
