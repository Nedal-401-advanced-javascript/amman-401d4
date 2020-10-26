let initalState = {
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
            return payload.disabled ? state :  { ...state, totalVotes: state.totalVotes + 1 };
        case 'DECREMENT':
            return payload.disabled ? state : { ...state, totalVotes: state.totalVotes - 1 };
        case 'RESET':
            return initalState;
        default:
            return state;
    }
}