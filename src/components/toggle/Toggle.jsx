import { useContext } from "react"
import { ThemeContext } from "../../context"
import "./toggle.css"


const Toggle = () => {
    const theme = useContext(ThemeContext)

    const handleClick = () => {
        theme.dispatch({type:"TOGGLE"})
    }
    return (
        <div className="t">
            <i class="t-icon fas fa-sun"></i>
            <i class="t-icon fas fa-moon"></i>
            <div className="t-button" onClick={handleClick}></div>
        </div>
    )
}

export default Toggle
