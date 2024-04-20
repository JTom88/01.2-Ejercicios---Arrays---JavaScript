let arr = [4,5,734,43,45];

//*****************
// Your code here
// you need to loop 10 times, for example, using a for loop
//*****************
for (let i=1; i<=10; i++){
    let aleat = Math.floor(Math.random()*10 + 1);
    arr.push(aleat);
}
console.log(arr);