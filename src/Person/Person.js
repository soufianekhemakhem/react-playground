import React from 'react'
import './Person.css'

const Person = (props) => {
    return (

        // React.createElement("div", { className: 'Person' },
        //     React.createElement("p", null, "I am " + props.name + "and I am " + props.age + " years old"))


        <div className="Person">
            <p>I am {props.name} and I am {props.age} years old</p>
            <button> X </button>
        </div>
    )
}

export default Person