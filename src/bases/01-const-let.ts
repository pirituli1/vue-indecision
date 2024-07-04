
const firstName = 'Tony';
const lastName = 'Stark';


/**
 * 
 * *Formas de hacer un console.log, como tabla se muestra de una manera es mejor hacer el console.log como objeto, dá más información.
 * Ejemplo: 
 */
// ? console.log({firstName, lastName});
// ? console.table({firstName, lastName});

/**
 * *Temple literal se usa ``. Diferentes de "" y de ''. Backticks
 * Ejemplo:
 */

// Aquí se agrega que es un dato de tipo string
export const fullname:string = `${firstName} ${lastName}`;

// console.log(fullname) 