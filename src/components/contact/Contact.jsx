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
                            <i class="c-icon fab fa-linkedin fa-2x"></i>
                            https://www.linkedin.com/in/jongwan-kim-89500a194/
                        </div>
                        <div className="c-info-item">
                            <i class="c-icon fab fa-github-square fa-2x"></i>
                            https://github.com/mireu-san
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>솔직하게, 책임있게 답을 드리겠습니다.</b>
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="성함" name="user_name" />
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="제목" name="user_subject" />
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="이메일 주소" name="user_email" />
                        <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="남기실 말을 입력해주세요." name="message" />
                        <button>Send</button>
                        {done && "메일이 전송되었습니다! 오늘 중으로 연락드리겠습니다."}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
