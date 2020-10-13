import React from 'react'

function input(props) {
    return (
        <input type="text" placeholder={props.placeholder} onChange={props.onChange}/>
    )
}

export default input
