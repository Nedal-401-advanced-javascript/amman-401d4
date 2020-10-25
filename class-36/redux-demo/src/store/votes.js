let initalState = {
    candidates : [
        {name: 'Ahmad Shela', votes: 0},
        {name: 'Yahya', votes: 0},
        {name: 'Saja', votes: 0}
    ],
    totalVotes: 0
};

// reducer
export default (state = initalState, action) => {
    // update the state based on an action
    // increment, decrement, reset votes
    let {type, payload} = action;
    let totalVotes = state.totalVotes;
    switch(type) {
        case 'INCREMENT':
            // increment a specific candidate votes
            totalVotes = state.totalVotes + 1;
            let candidates = state.candidates.map(candidate=> {
                // {name: 'Yahya', votes: 0},
                if (candidate.name == payload) {
                    return {name: candidate.name, votes: candidate.votes + 1}
                } else {
                    return candidate;
                }
            });
            // return the updated state.
            return { totalVotes, candidates};
        case 'DECREMENT': 
            // decrement a candidate votes -1
            let decremented = state.candidates.map(candidate=> {
                 // {name: 'Yahya', votes: 0},
                 if (candidate.name == payload && candidate.votes > 0) {
                    totalVotes = state.totalVotes - 1;
                    return {name: candidate.name, votes: candidate.votes - 1}
                 } else {
                    return candidate;
                 }
            });
             // return the updated state.
             return { totalVotes, decremented};
        case 'RESET':
            return initalState;
        default:
            return state;
    }
}

// actions
export const increment =(name) =>{
    return {
        type: 'INCREMENT',
        payload: name
    }
}

export const decrement =(name) =>{
    return {
        type: 'DECREMENT',
        payload: name
    }
}

export const reset =() =>{
    return {
        type: 'RESET'
    }
}