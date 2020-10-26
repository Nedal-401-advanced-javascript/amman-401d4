import React from 'react';
import { connect } from 'react-redux';

const Status = props => {
    return (
        <section>
            {props.totalVotes}
        </section>
    )
}

// we only care about state from the store, no actions needed
const mapStateToProps = state => ({
    totalVotes: state.votes.totalVotes
});

// no need to add dispatch part (no actions)
export default connect(mapStateToProps)(Status);

