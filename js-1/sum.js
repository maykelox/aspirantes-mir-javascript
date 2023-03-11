// escribe la función suma acá

// function sum(){
// let i = 0;
// while (i < 10) {
//   console.log("Hola mundo");
//   i = i + 1;
// }
// };

function sum(suma) {
    let result = 0;
 for (let i = 0; i <= suma; i ++) {
    result += i;
} return result;
};
 
// código de prueba
console.log(sum(4)) // 1 + 2 + 3 + 4 = 10
console.log(sum(10)) // 55
console.log(sum(15)) // 120s