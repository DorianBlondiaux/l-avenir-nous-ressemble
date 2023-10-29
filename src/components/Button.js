import React from 'react'

function Button(props){

    return (
        <div className="button">
            {props.content}
        </div>
    )
}

export default Button;