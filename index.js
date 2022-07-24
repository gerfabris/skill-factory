//Manejo de datos

let name = "Germán";
let age = 28;
let partner = true;
const numbers = [1,2,3,4,5,6,7,8,9,10]
const skillers = ["Gonzalo", "Alan", "Mariano", "German", "Maximiliano"];
const object = {
    name: "German",
    age: 28,
    partner: true,
    numbers: [1,2,3,4,5,6,7,8,9,10],
    skillers: ["Gonzalo", "Alan", "Mariano", "German", "Maximiliano"]
}

//Programa pedir números
/* const validate = (input) => {
    if(parseInt(input)){
        input = input;
        alert("El número ingresado es correcto")
    } else{
        alert("El input no es correcto, ingrese nuevamente");
        input = prompt("Coloca un número")
    };
};

let input1 = prompt("Coloca un número");
validate(input1);
let input2 = prompt("Coloca un número");
validate(input2);

const compare = (num1,num2) => {
    if(num1 > num2){
        alert("El primer número ingresado es mayor")
    }else if (num1 < num2){
        alert("El segundo número ingresado es mayor")
    }else{
        alert("Los números son iguales")
    };
};

compare(input1,input2); */

//Métodos arrays

const arrayTasks = ["Alan", "Willy", "Maximiliano", "German", "Gonzalo"];
console.log(arrayTasks);

const pop = arrayTasks.pop(); //Remueve el ultimo elemento del arreglo y lo devuelve.
console.log("Utilizando POP: ", pop); // lo modifica
console.log(arrayTasks);

const shift = arrayTasks.shift(); // Remueve el primer elemento del arreglo y lo devuelve
console.log("Utilizando Shift: ", shift); // lo modifica
console.log(arrayTasks);

const push = arrayTasks.push("NuevoElemento"); // Agregar un nuevo elemento al final del
console.log("Utilizando push: ", push); //arreglo y retorna la longitud.
console.log(arrayTasks);

const slice = arrayTasks.slice(0, -1); // retorna el rango de indices pasados por parametro
console.log("Utilizando Slice: ", slice); // no modifica el arreglo
console.log(arrayTasks);

const unshift = arrayTasks.unshift("Federico"); // Agrega nuevo elemento al comienzo del arreglo
console.log("Utilizando Unshift", unshift); // retorna la nueva longitud
console.log(arrayTasks);

const reverse = arrayTasks.reverse(); // Da vuelta el arreglo
console.log("Utilizando Reverse", reverse); // retorna como queda
console.log(arrayTasks);

const join = arrayTasks.join("--+--"); // Transforma el arreglo en un String. Por defecto separa con comas
console.log("Utilizando Join", join); // sino con lo que pasemos por parametro.
console.log(arrayTasks);

const newArrayTask = ["Maria", "Matias"];
const concat = arrayTasks.concat(newArrayTask); // Retorna un nuevo array concatenado con el pasado
console.log("Utilizando concat", concat); // por parametro. No modifica el array
console.log(arrayTasks); // donde se efectua el metodo.

const longitud = arrayTasks.length; //
console.log("Utilizando lenght", longitud); // da la longitud del arreglo.
console.log(arrayTasks);

const orderArray = arrayTasks.sort(); // Ordena el arreglo yu lo modifica de menor a mayor
console.log("Ordernado", orderArray);
console.log(arrayTasks);

const map = arrayTasks.map((n) => n + "Mapeado"); // retorno el arreglo modificado por al condicion del map
console.log("Utilizando map", map); // no modifica el arreglo
console.log(arrayTasks); // los strings los retorna como nan

const filter = arrayTasks.filter((n) => n == "Willy");
console.log("Utilizando filter: ", filter); //Devuelve un array segun la condicion
console.log(arrayTasks); // No modifica el arreglo

const find = arrayTasks.find((n) => n == "Gonzalo");
console.log("Utilizando find: ", find); //Retorna un elemento si lo encuentro por la condicion
console.log(arrayTasks); // sino retorne undefined. No modifica el arreglo.

const findIndex = arrayTasks.findIndex((n) => n == "Maximiliano");
console.log("Utilizando findIndex: ", findIndex); //Retorna la posicion de un elemento segun al condicion
console.log(arrayTasks); //  Si no existe retorna -1. No modifica el arreglo

const fill = arrayTasks.fill("Skillers"); // Modifica el arreglo y rellena todos los espacios 
//console.log(arrayTasks); // pasado por parametro
console.log("Utilizando Fill: ", fill);