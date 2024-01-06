import { Link } from "react-router-dom";
import { useDispatch , useSelector} from "react-redux";
import { increaseCount, getCount } from "../features/post/postSlice";

const Header = () => {
    const dispatch = useDispatch();
    const count = useSelector(getCount);
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

            <button className="count-button" onClick={() => dispatch(increaseCount())}>
                {count}
            </button>
        </nav>
    </header>
  )
}

export default Header