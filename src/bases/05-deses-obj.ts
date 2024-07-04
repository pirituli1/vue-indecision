// Define cómo se verá un objeto, si se agrega: 
// ? el simbolo '?' significa que puede ser opciónal 
interface Hero {
    name: string;
    age: number;
    codeName: string;
    power?: string;
};

export const person: Hero= {
    name: 'tony',
    age: 45,
    codeName: 'Iroman',

};
// ! TS Crea problemas con el power, apesar de que corre, no es correcto hacerlo (descomentar para ver)
// const {age,name, power = 'No tiene poder' } = person // puede ser un objeto o un arreglo

// console.log({age, name, power})

//* Para resolver se agrega un interface (Se agrego arriba)

// * Usando '??' se dice que si el valor es nulo,empty,void se ponga no tiene poder. 
// Antes se usaba '||'
// Si se fuera a recibir cualquier tipo de dato se puede usar así:
// const createHero = (args: any) => ({
//     id: 1234,
//     name: args.name,
//     age: args.age,
//     codeName: args.codeName,
//     power: args.power ?? 'No tiene poder',
// })
// ?Interfaz de hero:
interface createHero {
    name: string,
    age: number,
    codeName: string,
    power?: string
}

// ? Solución: En caso contrario:
// Aquí no olvidemos definir su interface. 
const createHero = ({name, age,codeName,power}: createHero) => ({
    id: 1234,
    name: name,
    age: age,
    codeName: codeName,
    power: power ?? 'No tiene poder',
})
// *Aquí se desestructura el objeto mandado, para traer solo lo deseado (Para evitar problemas, se agrega también otra interfaz del create hero)

console.log( createHero( person));