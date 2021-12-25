import "./workList.css"
import Work from "../work/Work"
import { works } from "../../data"


const WorkList = () => {
    return (
        <div className="wl">
            <div className="wl-text">
                <h1 className="wl-title">Work Catalogue</h1>
                <p className="wl-desc">
                    The latest works I have done.
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
