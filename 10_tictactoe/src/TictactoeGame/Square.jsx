import React from 'react'

function Square(props) {
    return (
        <div onClick={props.onClick} className='board-square'>
            <h4 className='x-or-o'>{props.value}</h4>
        </div>
    )
}

export default Square