let mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

// Your code here
let nuevoArr = [];

for (let i=0; i<mix.length; i++){
    nuevoArr.push(typeof(mix[i]));
}
console.log((nuevoArr));