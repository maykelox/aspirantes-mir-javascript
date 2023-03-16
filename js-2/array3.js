
function maxIndex(buscar) {
    let result = 0;
    let index = -1; 
    for (let i = 0; i < buscar.length; i++) { 
        let valorActual = buscar[i];
        if (valorActual > result) {
            result = valorActual 
            index = i
        }
    }
    return index;
}



 console.log(maxIndex([1, 3, 2])) // 1
 console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
 console.log(maxIndex([])) // -1