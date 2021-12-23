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
                            <i className="fas fa-phone-square-alt"></i>
                            +82 01-8215-8540
                        </div>
                        <div className="c-info-item">
                            <i className="fas fa-envelope"></i>
                            {/* <img src={Email} alt="" className="c-icon"/> */}
                            starmireu@gmail.com
                        </div>
                        <div className="c-info-item">
                            <i class="fab fa-linkedin"></i>
                            {/* <img src={LinkedIn} alt="" className="c-icon"/> */}
                            https://www.linkedin.com/in/jongwan-kim-89500a194/
                        </div>
                        <div className="c-info-item">
                            <i class="fab fa-github-square"></i>
                            {/* <img src={Github} alt="" className="c-icon"/> */}
                            https://github.com/mireu-san
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
