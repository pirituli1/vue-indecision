// console.log('Inicio');

import { type Hero } from "../data/hero";
import { getHeroesById } from "./07-imp-exp";

// new Promise( (resolve, reject) => {
//     setTimeout(() => {
//         // *En caso de result
//         // Se sigue ejecutando código despúes del result. Si se quiere terminar:
//         //!Se agrega un return
//         // resolve('Mi amigo cumplió'):

//         //*En caso de reject
//         reject('Mi amigo no cumplió');
//     }, 1000);

//     // Then es encargado cuando sale el resolve
// }).then((message)=>{
//     console.log(message)
//     // Catch sale en caso de Reject
// }).catch(ErrorMessage => console.log(ErrorMessage)
// // Finally sale indiscretamente se cumpla o no la promesa
// ).finally( () => console.log('Fin de la promesa'))

// console.log('Final');

const getHeroByIdAsync = (id: number): Promise<Hero> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const hero = getHeroesById(id);

      hero ? resolve(hero) : reject(`Heroe no encontrado #${id}`);
    }, 1500);
  });
};

getHeroByIdAsync(40)
  .then((hero) => console.log(`El nombre del heroe es: `, hero.name))
  .catch(alert);
