import Button from "./Button"
import { Link, NavLink } from "react-router-dom"

const Toolbar = () => {
    return (
        <div>
            <NavLink to="/submit">Submit</NavLink>
            <NavLink to="/">Movies</NavLink>
        </div>
    )
}

export default Toolbar
