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
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">JavaScript</div>
                            <div className="i-title-item">React.js</div>
                            <div className="i-title-item">Node.js</div>
                            <div className="i-title-item">TypeScript</div>
                        </div>
                    </div>
                    <p className="i-desc">
                        저는 웹 개발자로서 작업 중 발생하는 문제를 자율적으로 디버깅 해 냄으로서, 프론트엔드 개발자로서의 활동을 이어오고 있습니다. 유저가 불편함을 겪지 않는 웹 경험을 제공 하는 것에 초점을 두고 있습니다.
                    </p>
                </div>
            </div>
            
            
            <div className="i-right">
                <img src={Me} alt="profile" className="i-img" />
            </div>
        </div>
    );
};

export default Intro;