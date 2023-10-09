// import React from 'react'
import style from "./button.module.css"

function Button( {text , icon , isoutline} ) {
    return (
        <button className={ isoutline? style.btnEmail : style.btn}>
{icon  }
{text}
        </button>
    )
}

export default Button