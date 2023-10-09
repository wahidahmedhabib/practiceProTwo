// import React from 'react'
import style from './FormContact.module.css'
import Button from '../Button/Button'
import { MdOutlineMessage } from "react-icons/md"
import { BiPhoneCall } from "react-icons/bi"
import { useState } from 'react'



const FormContact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [text, setText] = useState('')
    const [card, setCard] = useState(false)
    const submitBtn = (e) => {
        e.preventDefault()
        setName(e.target[3].value)
        setEmail(e.target[4].value)
        setText(e.target[5].value)
        setCard(true)
    }
    return (
        <div>
            <div className={style.form_container}>
                <form onSubmit={submitBtn}>

                    <div className={style.form_sec}>
                        <div className={style.form_sec_btns}>
                            <Button
                                className={style.btns}
                                icon={
                                    <MdOutlineMessage
                                        className={style.icons} />
                                }
                                text='VIA SUPPORT CHAT'
                            />
                            <Button
                                className={style.btns}
                                icon={
                                    <BiPhoneCall
                                        className={style.icons}
                                    />}
                                text='VIA CALL '
                            />
                        </div>
                        <Button
                            icon={<BiPhoneCall
                                className={style.icons}
                            />}
                            isoutline={true}
                            text='VIA Email FROM  '
                        />

                        <div className={style.form}>
                            <div className={style.input} >
                                <label htmlFor="name">NAME</label>
                                <input type="text" name='name' />
                            </div>
                            <div className={style.input} >
                                <label htmlFor="name">EMAIL</label>
                                <input type="text" name='name' />
                            </div>
                            <div className={style.textArea} >
                                <label htmlFor="name">TEXT</label>
                                <textarea type="text" name='name' />
                            </div>
                        </div>
                        <div className={style.submitBtn}>
                            <Button
                                className={style.btns}
                                text='SUBMIT BUTTON'
                            />
                        </div>

                    </div>

                </form>
                <div className={style.img_sec}>
                    <img src="/images/mainpic.png" />
                </div>
            </div>
            {card ?
                <div className={style.card}>
                    <p>Name : {name} </p>
                    <p>Email : {email} </p>
                    <p>TEXT : {text} </p>
                </div> :
                ''}
        </div>



    )
}

export default FormContact