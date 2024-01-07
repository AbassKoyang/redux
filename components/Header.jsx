import { Link } from "react-router-dom";
import { useDispatch , useSelector} from "react-redux";
import { increaseCount, getCount } from "../features/post/postSlice";

const Header = () => {
  return (
    <header className="header">
        <h1 className="header-logo">Redux Blog</h1>
        <nav className="header-nav">
            <ul className="header-links">
                <li>
                    <Link to="/" className="header-link">Home</Link>
                </li>
                <li>
                    <Link to="post" className="header-link">CreatePost</Link>
                </li>
                <li>
                    <Link to="user" className="header-link">Users</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header