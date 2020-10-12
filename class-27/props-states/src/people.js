import React from 'react';

const People = (props) => {

    return (
        <div className={`loading-${props.loading}`} >
            <ul>
                {Object.keys(props.people).map((key, indx)=> {
                    return (
                        <li key={indx}>
                            <a href={props.people[key]}>{key}</a>
                        </li>
                    );
                })}
            </ul>
        </div>
    )

}

export default People;