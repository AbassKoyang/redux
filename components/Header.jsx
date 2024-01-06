import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="header">
        <h1 className="header-logo">Redux Blog</h1>
        <nav>
            <ul className="header-links">
                <li>
                    <Link to="/" className="header-link">Home</Link>
                </li>
                <li>
                    <Link to="post" className="header-link">Post</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header