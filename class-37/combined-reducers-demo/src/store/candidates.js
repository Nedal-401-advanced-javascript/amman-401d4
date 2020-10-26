let initalState = [
    {name: 'Ahmad Shela', votes: 0},
    {name: 'Yahya', votes: 0},
    {name: 'Saja', votes: 0}
];

// reducer
export default (state = initalState, action) => {
    // update the state based on an action
    // increment, decrement, reset votes
    let {type, payload} = action;
    console.log("payload >>> ",payload)
    switch(type) {
        case 'INCREMENT':
            // increment a specific candidate votes
            return state.map(candidate=> {
                // {name: 'Yahya', votes: 0},
                if (candidate.name == payload.name) {
                    return {name: candidate.name, votes: candidate.votes + 1}
                } else {
                    return candidate;
                }
            });
        case 'DECREMENT': 
            // decrement a candidate votes -1
            return state.map(candidate=> {
                 // {name: 'Yahya', votes: 0},
                 if (candidate.name == payload.name && candidate.votes > 0) {
                    return {name: candidate.name, votes: candidate.votes - 1}
                 } else {
                    return candidate;
                 }
            });
        case 'DISABLE': 
            return state.map(candidate => candidate.name == payload.name ? {...candidate, disabled: true} : candidate);
        case 'RESET':
            return initalState;
        default:
            return state;
    }
}

export const disable = (person) =>{
    return {
        type: 'DISABLE',
        payload: person
    }
}