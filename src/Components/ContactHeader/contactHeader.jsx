import style from "./contactHeader.module.css"
const ContactHeader = () => {
    return (
        <div className={` ${style.mainSec} container`}>

            <h1 className={style.heading} >CONTACT US</h1>
            <p className={style.contact_para}>
                LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA.
            </p>
        </div>
    )
}

export default ContactHeader