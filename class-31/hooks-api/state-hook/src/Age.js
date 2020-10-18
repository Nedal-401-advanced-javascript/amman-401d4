import React, { useState } from 'react';

function Age(props) {

    // create a state with useState
    const [age, setAge] = useState(props.age || 0);

    return (
        <div>
            <h2>{age}</h2>
        </div>
    )
}

export default Age;