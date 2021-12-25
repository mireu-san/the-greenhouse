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
                안녕하세요, 김 종완이라고 합니다👋
                저는 호주 퀸즐랜드 공과대학에서 경제학사 과정을 졸업을 한 이 후에도, 소프트웨어 개발에 대한 관심을 가져오고 있다가 2020년 7월 부터 웹 개발자로서 독학을 진행하고 있습니다. 
                현재 가장 관심이 많은 분야는 자바스크립트 기술 기반의 프론트엔드 개발입니다. 이 외 부가적 사항으로는 백엔드 개발이 있으며, 파이썬과 장고를 활용 하여 개발을 구현 해 본 경험이 있습니다.
                </p>
                <p className="a-desc">
                    Greetings, I am Jongwan Kim. I graduated from Queensland University of Technology in Economics. I have been a software developer enthusiast since I was a puberty. I have been working on web development since 2020. This web development has now been my great interest. I have been working on front-end web development with JavaScript base technology (e.g. react.js). Additioanlly, I have expericend back-end web development with Python and Django.
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
                            <li>Self-taught in web development since 2020</li> 
                            <li>Queensland University of Technology, Economics (2013 - 2017 July), Brisbane, Australia</li>
                            <li>All Saints Anglican School (2012)</li>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About