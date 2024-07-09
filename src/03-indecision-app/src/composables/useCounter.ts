    import {ref, computed } from 'vue';

export const useCounter = (initialValue: number = 5) => {

    const counter = ref(10);


    return  {
        counter,
        squareCounter: computed(()=> counter.value * counter.value)

    }
}