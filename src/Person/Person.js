import React from 'react'
import './Person.css'

const Person = (props) => {
    return (

        //Without JSX !!

        // React.createElement("div", { className: 'Person' },
        //     React.createElement("p", null, "I am " + props.name + "and I am " + props.age + " years old"))


        <div className="Person">
            <p onClick={props.moved}>I am {props.name} and I am {props.age} years old</p>
            <input onChange={props.changed} />
            <button onClick={props.deleted}> X </button>

        </div>
    )
}

export default Person