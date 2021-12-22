import "./workList.css"
import Work from "../work/Work"

const WorkList = () => {
    return (
        <div className="wl">
            <div className="wl-text">
                <h1 className="wl-title">Work Catalogue</h1>
                    <p className="wl-desc">
                        I have worked on many projects. etc etc.
                    </p>
            </div>
            <div className="wl-list">
                <Work />
                <Work />
                <Work />
            </div>
        </div>
    )
}

export default WorkList
