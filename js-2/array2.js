// escribe la función max acá
function max(maximo) {
    let result = maximo[0]; 
    for (let i = 0; i < maximo.length; i++) {
        if (maximo[i] > result) {
            result = maximo[i];
        }
    }
    return result;
}


console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined