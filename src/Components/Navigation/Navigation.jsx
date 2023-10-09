import { useState } from "react"
import style from "./navigation.module.css"
import { CgMenu } from "react-icons/cg"

import Drawer from "../DRAWER/Drawer"

const Navigation = () => {

  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }
  return (
    <>
      <Drawer open={open} setOpen={setOpen} />
      <div className={` container  ${style.nav_bar} `} >

        <div>
          <img src="./images/Frame 2 1.png" alt="" />
        </div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className={` ${style.menu} `}>
          <button >
            <CgMenu onClick={() => handleOpen()} />
          </button>
        </div>
      </div>
    </>

  )
}

export default Navigation