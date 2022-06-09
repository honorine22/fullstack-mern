import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
function Navbar(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }
        window.addEventListener('resize', changeWidth)
        return () => {
            window.removeEventListener('resize', changeWidth);
        }
    }, []);
    const handleOpen = () => {
        console.log("Button Clicked");
        setIsOpen(!isOpen);
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <div className={`${screenWidth <= 500 ? 'col-12' : ''}`}>
                        <a className="navbar-brand" href="#">Learn</a>
                        <button className="navbar-toggler float-end" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation" onClick={handleOpen}>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className={`${isOpen || screenWidth > 500 ? 'd-block' : 'd-none'}
                     ${screenWidth <= 500 ? 'mx-auto' : ''}`} id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">USER PLACES</a>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/ui/places" className="nav-link">MY PLACES</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/places/new" className="nav-link">ADD PLACES</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/auth" className="nav-link">AUTHENTICATE</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar; 