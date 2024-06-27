import React from 'react'

export default function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark p-3">
                <a className="navbar-brand text-white fs-3" href="#">
                    Employee Management System
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                       
                        <li className="nav-item">
                            <a className="nav-link text-white fs-5" href="#">
                                Sign in
                            </a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link text-white fs-5" href="#">
                                Sign up
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

        </div>
    )
}
