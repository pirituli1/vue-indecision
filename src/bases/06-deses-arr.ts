
const character = ['Goku','Vegueta','Trunks','Goten'];

// Al desustructurar un arreglo nos encontramos que es posicionario. Ergo la G hace referencia al primer objeto, que sería Goku y V a Vegueta del 2.
// !Si intercambiamos las letras, la v sería d goku y v de vegueta.
// const [ g, v ] = character;
// console.log({g,v})

// ? Si quisieramos que la v fuera para el segundo. Sería de la siguiente manera
// const [ , v ] = character;
// console.log({v})
// y así sucesivamente, como si quisieramos el tercero usamos..
// const [ ,,t ] = character;
// console.log({t})

// !Si llega a sobrepasar el indice, nos mostraría 'Undefined'

// * Tuplas
const returnArray = () => {
    return [123, 'ABV'] as const;
}

const [numbers,letters] = returnArray();

// console.log(numbers, letters.toLowerCase())