import Button from "./Button"
import { Link, NavLink } from "react-router-dom"

const Toolbar = () => {
    return (
        <div className="toolbar">
            <NavLink className="navlink" to="/submit">Submit</NavLink>
            <NavLink className="navlink" to="/">Movies</NavLink>
        </div>
    )
}

export default Toolbar
