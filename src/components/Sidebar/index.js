import { Link } from 'react-router-dom'
import './index.scss'

const Sidebar = () => {
    return (
        <div className="navigationbar">
            <Link className="logo" to="/">
                <img src="" alt="LOGO" />
            </Link>
        </div>
    )
}

export default Sidebar
