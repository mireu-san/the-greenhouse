import "./contact.css"
import React, { useRef, useState, useContext } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
    const formRef = useRef()
    const [done, setDone] = useState(false)
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    
    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('starmireu', 'template_e341pwx', formRef.current, 'user_rIJ3MvYpGYtkU69hbTOgg')
            .then((result) => {
                console.log(result.text);
                setDone(true)
            }, (error) => {
                console.log(error.text);
            });
        };

    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">
                        Contact
                    </h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <i className="c-icon fas fa-phone-square-alt fa-2x"></i>
                            +82 10-8215-8540
                        </div>
                        <div className="c-info-item">
                            <i className="c-icon fas fa-envelope fa-2x"></i>
                            starmireu@gmail.com
                        </div>
                        <div className="c-info-item">
                            <i class="c-icon fab fa-github-square fa-2x"></i>
                            https://github.com/mireu-san
                        </div>
                        <div className="c-info-item">
                            <i class="c-icon fab fa-linkedin fa-2x"></i>
                            https://www.linkedin.com/in/jongwan-kim-89500a194/
                        </div>
                        {/* <div className="c-info-item">
                            <a href="https://drive.google.com/file/d/1tu39JaGKjqL7nSaKWC6Wi9qZnkIbxRdn/view?usp=sharing">
                                <i class="c-icon fas fa-id-card fa-2x"></i>
                            </a>
                            Resume document
                        </div> */}
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>????????? ?????????????????????. ?????? ???????????? ?????? ????????? ?????? ?????? ??????????????????.</b>
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="??????" name="user_name" />
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="??????" name="user_subject" />
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="????????? ??????" name="user_email" />
                        <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="????????? ?????? ??????????????????." name="message" />
                        <button>Send</button>
                        {done && "????????? ?????????????????????! ?????? ????????? ????????????????????????."}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
