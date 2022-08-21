import {Link} from 'react-router-dom'
const Navbar = () => {
    return (
    <nav className="navbar navbar-default navbar-dark bg-primary navbar-expand-lg">
        <div className="navbar-brand ps-3">GitHub Search</div>
        <ul className="navbar-nav">
            <li className="nav-item">
                {/* <a href="/" className="nav-link">Главная</a> */}
                <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
                {/* <a href="/about" className="nav-link">Информация</a> */}
                <Link className="nav-link" to="/about">About</Link>
            </li>
        </ul>
    </nav>
    )
}

export default Navbar