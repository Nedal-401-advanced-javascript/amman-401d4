import React from 'react';
import { connect } from 'react-redux';

import SharedActions from '../store/shared-actions.js';
import { disable } from '../store/candidates.js';

// read state from the store : through props -> mapStateToProps
// + do actions to update the store values => mapDispatchToProps

const VotesCounter = props => {
    console.log("SharedActions >> ",SharedActions)
    console.log("props : ",props)
    return (
        <section className="counter"> 
            <ul>
                {props.counter.map((person,idx)=>{
                    return <li 
                        onClick={()=> person.disabled ? {} : props.increment(person) } 
                        onDoubleClick={()=> props.disable(person) }
                        key={idx}>{person.name} : {person.votes}</li>
                })}
            </ul>
            <button onClick={props.reset}>reset all</button>
        </section>
    )
};

const mapStateToProps = state => ({
    counter: state.candidates
});

const mapDispatchToProps = {
    increment: SharedActions.increment,
    decrement: SharedActions.decrement,
    reset: SharedActions.reset,
    disable: disable
};

// const mapDispatchToProps = dispatch => {
//     return {
//         increment: (person) => dispatch(SharedActions.increment(person)),
//         decrement: (person)=> dispatch(SharedActions.decrement(person)),
//         reset: ()=> dispatch(SharedActions.reset())
//     }
// };

// using connect to connect between the component and the stroe
export default connect(mapStateToProps, mapDispatchToProps)(VotesCounter);