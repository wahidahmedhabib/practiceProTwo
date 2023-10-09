// import React from 'react'
import style from "./Drawer.module.css"
import { RxCross1 } from "react-icons/rx"


const Drawer = ({ open, setOpen }) => {
    const close = () => {
        setOpen(false)
    }
    return (
        <div>

            <div className={open ? style.ul : style.collaps}>
                <div className={style.icon_sec}>
                    <RxCross1 onClick={() => close()} className={style.icon} />
                </div>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </div>
        </div>
    )
}

export default Drawer