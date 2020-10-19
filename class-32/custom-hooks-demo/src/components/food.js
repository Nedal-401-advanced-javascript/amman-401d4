import React, {useState} from 'react';

import useForm from '../hooks/useForm';

function Food(props) {
    // values state
    const [formData, setFormData] = useState({});
    const [handleSubmit, handleChange, values] = useForm(eat);

    function eat(food) { //  JS hoisting 
        console.log("fooood @@@@@@@@ ", food);
        setFormData(food);
    }

    return (
        <div>
            <h2>Food</h2>
            <form onSubmit={handleSubmit}>
                <input name="food" type="text" placeholder="Food name" onChange={handleChange} />
                <input name="type" type="text" placeholder="Type" onChange={handleChange}/>
                <input name="price" type="number" placeholder="Price" onChange={handleChange}/>
                <input name="calories" type="number" placeholder="Calories" onChange={handleChange}/>
                <button>Eat</button>
            </form>
            <strong>Form Food Values: </strong>
            {
                Object.keys(formData).map((key, idx)=> <div key={idx}> {key} - {formData[key]}</div>)
            }
        </div>
    )

}


export default Food;