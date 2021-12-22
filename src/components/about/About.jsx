import "./about.css"
import Dev from "../../img/dev.jpg"
import Award from "../../img/award.jpg"

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img 
                        src={Dev} 
                        alt="" 
                        className="a-img" 
                    />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    sub section to input a brief summary here.
                </p>
                <p className="a-desc">
                    sub desc to input a brief description here.
                </p>
                <div className="a-award">
                    <img 
                        src={Award} 
                        alt="" 
                        className="a-award-img" 
                    />
                    <div className="a-award-texts">
                        <h4 className="a-award-title">Education title</h4>
                        <p className="a-award-desc">
                            detail info of education history
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About