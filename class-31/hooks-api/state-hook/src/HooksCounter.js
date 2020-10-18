// import React from 'react';
// import { useState } from 'react';
import React, { useState } from 'react';

function HooksCounter() {
    // internal state
    const [clicks, setClicks] = useState(0); // inital value is any data type

    const updateCounter = () => {
        let newCount = clicks + 1;
        setClicks(newCount);
    }
   
    return (
        <div>
            <h2>Button Clicked {clicks} time(s)</h2>
            <button type="button" onClick={updateCounter}>
                    Update Counter
            </button>
        </div>
    )
}

export default HooksCounter;