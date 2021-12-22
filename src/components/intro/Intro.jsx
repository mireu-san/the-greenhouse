import "./intro.css"
import Me from "../../img/me.jpg"

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is</h2>
                    <h1 className="i-name">Jongwan Kim</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">place 1</div>
                            <div className="i-title-item">place 2</div>
                            <div className="i-title-item">place 3</div>
                            <div className="i-title-item">place 4</div>
                            <div className="i-title-item">place 5</div>
                        </div>
                    </div>
                    <p className="i-desc">
                        will input something to describe myself here.
                    </p>
                </div>
            </div>
            
            
            <div className="i-right">
                {/* <div className="i-bg"></div> */}
                <img src={Me} alt="" className="i-img" />
            </div>
        </div>
    );
};

export default Intro;