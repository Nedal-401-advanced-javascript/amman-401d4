import React from 'react';

import { connect } from 'react-redux';
import * as actions from './store/actions';

const App = props => {

    const fetchData = (e) => {
        // get data form API 
        // prevent default if it was inside a form;
        props.get();
    }
    // console.log("props ====> ", props)
    // props.data = {results: []}
    return (
        <>
            <button onClick={fetchData}>Get Data</button>
            {
                props.data.results.map((record, idx) => {
                    return <div key={idx}>{record.text}</div>
                })
            }
        </>
    )
}

const mapStateToProps = state => ({
    data: state.data
});

// actions to fetch data
const mapDispatchToProps = (dispatch, getState) => ({
    get: ()=> dispatch(actions.getRemoteData())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);