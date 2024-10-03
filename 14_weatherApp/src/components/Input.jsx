import React from 'react'

function Input(props) {
    return (
        <input type="text" 
        className='input-field'
        placeholder={props.placeholder} 
        value={props.value} 
        onChange={props.onChange} />
    )
}

export default Input