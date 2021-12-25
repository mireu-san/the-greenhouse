import "./workList.css"
import Work from "../work/Work"
import { works } from "../../data"
import Equilibrium from "../../img/yin_and_yang.png"

const WorkList = () => {
    return (
        <div className="wl">
            <div className="wl-text">
                <img 
                    src={Equilibrium} 
                    alt="yin and yang image"
                    className="wl-title-img"    
                />
                    <h1 className="wl-title">Work Catalogue</h1>
                        <p className="wl-desc">
                            Among Yin and Yang, you will see how this developer's skills are growing.
                        </p>
            </div>

            <div className="wl-list">
                {works.map((item) => (
                    <Work key={item.id} img={item.img} link={item.link} />
                ))}
            </div>
        </div>
    )
}

export default WorkList
