import superagent from 'superagent';

let api = 'https://todo-api-laith.herokuapp.com/api/v1/todos';
// action creator is a function that returns an object
// return a function from my action creator
export const getRemoteData = () => (dispatch) => {
    // return a fucntion that will call superagent API
    return superagent.get(api).then(data=> {
        // call my action after getting the API response.
        dispatch(getAction(data.body));
    });
}

// acton creator function 
const getAction = payload => {
    return {
        type: 'GET',
        payload: payload
    }
}



