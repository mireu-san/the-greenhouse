import "./contact.css"
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"

fontawesome vs image?

const Contact = () => {
    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">
                        Contact
                    </h1>
                    <div className="d-info">
                        <div className="c-info-item">
                            <img 
                                src="" 
                                alt="" 
                                className="c-icon" 
                            />
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <h2></h2>
                </div>
            </div>
        </div>
    )
}

export default Contact
