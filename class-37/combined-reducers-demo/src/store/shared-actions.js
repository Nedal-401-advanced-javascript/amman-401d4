
// shared actions
export default {
    increment : (person) =>{
        return {
            type: 'INCREMENT',
            payload: person
        }
    },
    decrement: (person) =>{
        return {
            type: 'DECREMENT',
            payload: person
        }
    },
    reset : () =>{
        return {
            type: 'RESET'
        }
    }
};
        
    
