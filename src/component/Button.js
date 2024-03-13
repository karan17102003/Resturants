import React from 'react'
import './Button.css'
export const Button=(props)=>{
    return(
        <button style={{
            color : props.fontColor,
            backgroundColor : props.backgroundKaColor
        }}
        className='button'
        >{props.children}</button>
    )
}