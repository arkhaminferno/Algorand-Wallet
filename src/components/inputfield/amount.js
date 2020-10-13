import React from 'react'

function amount(props) {
    return (
        <input type="number" placeholder={props.placeholder} onChange={props.onChange}/>
    )
}

export default amount
