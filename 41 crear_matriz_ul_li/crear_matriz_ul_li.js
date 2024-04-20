let allColors = [
	{label: 'Red', sexy: true},
	{label: 'Pink', sexy: false},
	{label: 'Orange', sexy: true},
	{label: 'Brown', sexy: false},
	{label: 'Pink', sexy: true},
	{label: 'Violet', sexy: true},
	{label: 'Purple', sexy: false},
];

//Esta función recibe un color, genera un string "<li>" y lo concatena con el valor que tenga la
//propiedad label (ej: "<li> Violet"). 
//Este string lo concatena con otro "</li>"" al final
//y retorna este resultado final (ej: <li> violet </li>).
function generateLI(color) {
	// Your code here
    let htmlString = '<li>';
	
	htmlString += color.label;
	
	htmlString += '</li>';
	return htmlString;
	
}
//recibe color a color todos los colores del objeto, y buscaremos sólo los valores que tengan el sexy en "true",
//y retornamos color.label que es el color en sí.
function filterColors(color) {
	// Your code here
 
    if (color.sexy === true){
        return color.label;
    }
}



function generateHTMLFromArray(array) { //el array que recibe es el objeto que está arriba. 
	
    //le pasamos a filteredOptions el filtrado. Hacemos un filter llamando ala función filterColors
	let filteredOptions = array.filter((filterColors)); 

    //En esta nueva variable LIs, recoge los colores que hemos filtrado como "true" y los mapeaa llamando a
    //la función "generateLI"
	let LIs = filteredOptions.map(generateLI);

	let htmlString = '<ul>';
	LIs.forEach(function(element) {
		htmlString += element;
	})
	htmlString += '</ul>';
	return htmlString;
}

console.log(generateHTMLFromArray(allColors));

