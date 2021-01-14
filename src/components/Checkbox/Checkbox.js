import React from 'react'
import './Checkbox.css'

export const Checkbox = props => (
        <>
            <input type="radio" className="radio-btn" id={props.id} name={props.name} onChange={props.sortHandler} />
            <label htmlFor={props.id}>{props.title}</label>
        </>
)