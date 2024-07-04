export const person = {
  lastName: "Stark",
  age: 45,
  address: {
    city: "New York",
    zip: 51214,
    lat: 13.342,
    lng: 12.222
  },
} // as const;
// person.age = 12; // Permite redefinir sus valores, no la variable en sí.
// * Si se a grega un as count ya no permité cambiar los valores

/**
 * *Si se hace de la siguiente manera se recibe como referencia y se cambia tanto la persona1 como la persona2. Por eso si lo que se desea es hacer eso, se usa un spreed
const person2 = person;
persona2.lastName = 'Parker'
 */

// const person2 = {...person}
// person2.lastName = 'Parker'; 

/**
 * *Hacerlo de la forma anterior también puede ser dificil, porque los objetos anidados siguen mandandose por referencia. lo que hace que se necesite hacer el spreed una vez más para borrar la referencia de nuevo
 */

/**
 * TODO Solución, usar la función global de structuredClone() 
 */


const person2 = structuredClone(person); // Nos permitirá hacer un clon sin referencia.

person2.lastName = 'Parker'; 

console.log({person});
console.log({person2});
