import React, {useState, useEffect } from 'react';


function People(props) {
    const [people, setPeople] = useState([]);
    const [name, setName] = useState('');


    const _changeName = (e) => {
        setName(e.target.value);
    }

    const _addPerson = (e) => {
        e.preventDefault();
        e.target.reset();
        // array of people and add name to it
        // if (name) {
        //     setPeople([...people, name]);
        // }
        //short circle 
        name && setPeople([...people, name]);
    }

    // people or name got changed 
    useEffect(()=> {
        console.log("%c I will run on every render and re-render! ", "color:green")
    });

    // people or name got changed 
    useEffect(()=> {
        console.log("NAME Only got updated! ")
    }, [name]);

    // people or name got changed 
    useEffect(()=> {
        console.log("name or people got changed! ")
    }, [name, people]);

    // this will run on the intial render
    useEffect(()=> {
        window.addEventListener('click', function(){
            console.log("window got clicked!!!");
        });
        console.log("initial useEffect render!!! ")
    }, []);



    return (
        <div>
            <form onSubmit={_addPerson}>
                <input onChange={_changeName} /> 
            </form>
            {
               people.map((person, idx) => 
                    <div key={idx}>{person}</div>
                )
            }
        </div>
    )
}

export default People;