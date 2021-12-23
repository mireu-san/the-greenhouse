import "./work.css"

const Work = ({img, link}) => {
    return (
        <div className="w">
            {/* memopad effect */}
            <div className="w-browser">
                <div className="w-circle"></div>
                <div className="w-circle"></div>
                <div className="w-circle"></div>
            </div>
            {/* thumbnail image for each work */}
            <a href={link} target="_black" rel="noreferrer">
                <img src={img} alt="" className="w-img" />
            </a>
        </div>
    )
}

export default Work
