import "./contact.css"


const Contact = () => {
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
                            {/* <img 
                                src={Phone} 
                                alt="" 
                                className="c-icon" 
                            /> */}
                            <i className="c-icon fas fa-phone-square-alt fa-2x"></i>
                            +82 01-8215-8540
                        </div>
                        <div className="c-info-item">
                            <i className="c-icon fas fa-envelope fa-2x"></i>
                            {/* <img src={Email} alt="" className="c-icon"/> */}
                            starmireu@gmail.com
                        </div>
                        <div className="c-info-item">
                            <i class="c-icon fab fa-linkedin fa-2x"></i>
                            {/* <img src={LinkedIn} alt="" className="c-icon"/> */}
                            https://www.linkedin.com/in/jongwan-kim-89500a194/
                        </div>
                        <div className="c-info-item">
                            <i class="c-icon fab fa-github-square fa-2x"></i>
                            {/* <img src={Github} alt="" className="c-icon"/> */}
                            https://github.com/mireu-san
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>test</b> test.
                    </p>
                    <form>
                        <input type="text" placeholder="Name" name="user_name" />
                        <input type="text" placeholder="Name" name="user_name" />
                        <input type="text" placeholder="Name" name="user_name" />
                        <textarea rows="5" placeholder="Message" name="message" />
                        <button>Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
