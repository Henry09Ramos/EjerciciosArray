//1) Realizar la multiplicación de el siguiente arreglo [10,"5","7",9,23,"17"]


const numeros = [10, "5", "7", 9, 23, "17"]

const result1 = numeros.map(x => Number(x)).reduce((a, b) => {
    return a * b
})

console.log(`El resultado es de: ${result1}`)


//console.log(result1)

//2)Crear un array que solo traiga elementos que tengan solo 6 caracteres

const frutas = ["Manzanas", "Peras", "Uvas", "Melocotones", "Piñas"]

const result = frutas.filter((x) => x.length > 6)
console.log(`Los elementos que contienen 6 caracteres son: ${result}`)


//3)Imprime la tabla de multiplicar 7 usados el forEach()
const numero2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const result2 = numero2.forEach(x => {
    console.log(`7 x ${x} = ${x * 7}`)
})

//4) Crear el siguiente arreglo(Manzanas, limon, sandia, pera,toronja,naranja) y verifica que incluya la fruta sandia

const fruta2 = ["manzana", "limon", "sandia", "pera", "toronja", "naranja"]

const result3 = fruta2.includes('sandia')

console.log(result3)

//5)En el siguiente arreglo de usuarios busca el usuario con el email rosario@gmail.com

const usuario =
    [
        {
            name: "Rafael perez",
            email: "rafael@gmail.com"
        },
        {
            name: "Rosario Perez",
            email: "rosario@gmail.com"
        },
        {
            name: "Rodrigo Avila",
            email: "rodrigo@gmail.com"
        },
        {
            name: "Alberto Campos",
            email: "alberto@gmail.com"
        },

    ]
const resp = usuario.filter(x => x.email === 'rosario@gmail.com')
console.log(resp)



// 5)En el siguiente arreglo: [1,6,3,4,2,56,10], ordenarlos de manera descendente



const array = [1, 6, 3, 4, 2, 56, 10]
const result4 = array.sort((a, b) => b - a)

console.log(result4)

//6) En el siguiente arreglo: [1,2,3,4,5,6,7], verifica si todo los números son mayores a 5

const valors = [1, 2, 3, 4, 5, 6, 7]


const result5 = valors.every(x => x > 5)

console.log(`Todos los datos son Mayores a 5? ${result5} `)


/*7) Agregar 3 arreglos que contengan al menos 2 elementos cada uno de los arreglos 
será diferente uno sera de tipo númerico , uno de tipo string y otro booleano. Concatena 
los 3 arreglos usando "concat"*/


const arreglo1 = [1, 2]
const arreglo2 = ["hola", "payaso"]
const arreglo3 = [false, true]

const concatenar = arreglo1.concat(arreglo2, arreglo3)

console.log(concatenar)

/*8)Crea un arreglo numerico y elimina el primer elemento*/

const numerico2 = [1, 2, 3, 4, 5, 6, 7]

const result6 = numerico2.shift((0, 0))
console.log(`Numero eliminado: ${result6}`)
console.log(numerico2)



/* 9)Buscar el indice en el que se encuentre el numero 5 en este arreglo: [12,6,7,8,11,10,9,5,3,43]*/

const indice = [12, 6, 7, 8, 11, 10, 9, 5, 3, 43]

const result7 = indice.findIndex((x) => x === 5)

console.log(`El numero 5 se encuentra en el indice: ${result7} `)


// 10) Creau un arreglo donde su inicio sea 1 y su fin sea 10 y luego crea una copia de el arreglo pero a cada item multiplicalo por 3

const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//const multitres = array2.forEach(x =>{
const multitres = array2.map(x => {
    console.log(`3 x ${x} = ${x * 3}`)
})






