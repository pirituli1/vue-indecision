//*Tres formas de escribir un return

//? Forma 1
function saludarPersona(name: any) {
  return `Hola ${name}`;
}

// Se guarda el parametro recibido como any, debe evitarse eso.

//? segunda forma, flecha

const saludarPersona2 = (name: string) => {
  return `Hola ${name}`;
};

// Se define el parametro, y se convierte en función flecha

//? tercera forma, un solo return

const saludarPersona3 = (name: string) => `Hola ${name}`;
console.log(
  saludarPersona("Carlos\n"),
  saludarPersona2("Carlos2\n"),
  saludarPersona3("Carlos3\n")
);

// *En caso de que el valor regresado sea un objeto se puede hacer de la  siguiente manera
// const getUser = () => {
//     return {
//         id: 123,
//         username: 'Fernando'
//     }
// }
//? Solución;
// Si se llaman de la misma manera es opcional usar el value
const getUser = (id: string) => ({
  id,
  username: "Fernando",
});
console.log(getUser);

const heroes = [
  {
    id: 1,
    name: "Batman",
  },
  {
    id: 2,
    name: "SuperMan",
    power: "Super Fuerza",
  },
];

const hero= heroes.find( (h) => h.id===2);

// En esta parte está creando una protección para que el programa no se detenga con el ? ya que el id podría llegar a ser nulo.
console.log(hero?.power?.toUpperCase());