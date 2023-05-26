import React from 'react'
import {useNavigate} from 'react-router-dom'
import {
    Link, useLocation
} from "react-router-dom";
const Navbar = () => {
    let history = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem('token');
        history('/login');
    }
    let location = useLocation();
    // useEffect(() => {
    //     console.log(location.pathname);
    // }, [location]);
    return (
        <div><nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><b>NoteBook</b></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/' ? "active" : ""}`} aria-current="page" to="/"><b>Home</b></Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/about' ? "active" : ""}`} to="/about"><b>About</b></Link>
                        </li>
                    </ul>
                    {!localStorage.getItem('token') ? <form className="d-flex" role="search">
                        <Link className="btn btn-light mx-1" to="/login" role="button"><b>Login</b></Link>
                        <Link className="btn btn-light mx-1" to="/signup" role="button"><b>SignUp</b></Link>
                    </form> : <button onClick={handleLogout} className='btn btn-light'><b>Logout</b></button>}
                </div>
            </div>
        </nav></div>
    )
}

export default Navbar