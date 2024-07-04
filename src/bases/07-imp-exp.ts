// Son diferentes importanciones porque el primer valor (fuera de la desustructuración) se va guardar con un nuevo nombre del valor. (Se puede poner el nombre que sea) ya que traerá lo exportado por defecto.
// import heroes, { owners } from "../data/hero";

// Importación independiente, lo escribes y al hacer tab automaticamente importa todo
// console.log(owners, heroes)

// ? Se usa Type cuando se usa algo de typeScript como una interfaz o un Type
import heroes, { Hero, type Owner} from "../data/hero";

// !No olvidar poner un return o en su caso usar el otro formato
export const getHeroesById = (id: number): Hero | undefined =>  {
    return heroes.find(hero => hero.id === id);
}
// Se agregó válidación en caso de no obtener un resultado
// Si son valores cerrados se puede usar de la siguiente manera 
// export const getHeroesByOwner = 'DC' | 'Marvel' => { 
//     return heroes.filter(hero => hero.owner === owner) ?? {}
// }
// ?
export const getHeroesByOwner = (owner:Owner) => { 
    return heroes.filter(hero => hero.owner === owner) ?? {}
}


// O Usamos un tipado propiamente puesto por nosotros
// console.log(getHeroesByOwner('DC'));
// console.log(getHeroesByOwner('Marvel'));
