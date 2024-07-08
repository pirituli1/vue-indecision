
const { createApp, ref} = Vue;

const app = createApp({
    // template: `
    //     <h1> {{ message }} </h1>
    //     <h1> {{ autor }} </h1>
    //     <p> Desde app.js</p>
    // `,

    setup() {

        const message = ref(`Variable Message`)
        const autor = ref(`Primera etapa`)

        // setTimeout(() => {
        //     message.value = 'Variable Message Mutando';
        //     autor.value = `Segunda etapa`
        //     console.log('Ejecutado')
        // }, 1000);

        const changeQuote = () => {
            message.value = 'Variable Message Mutando';
            autor.value = `Segunda etapa`;
            console.log('Ejecutada la función');

        }

        return {
            message,
            autor,
            changeQuote
        }
    }
});

app.mount('#myApp')