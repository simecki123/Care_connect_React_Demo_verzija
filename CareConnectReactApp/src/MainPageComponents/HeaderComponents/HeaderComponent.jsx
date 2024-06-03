import React, { useState } from 'react';
import './HeaderStyle.css';
import logo from '../../assets/logo.jpg';
import { Link } from 'react-router-dom';

function HeaderComponent() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <header>
                <div className='header-container'>
                    <Link className='options-container' to={"/mainpage"}>
                        <div className='logo-header-container'>
                            <img className='header-logo' src={logo} alt='Logo' />
                        </div>
                    </Link>

                    <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                        <div className='hamburger'></div>
                    </div>

                    <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
                        <Link className='options-container' to={"/devices"}>
                            <div className='options-container'>
                                <label className='option-label'>Devices</label>
                            </div>
                        </Link>

                        <Link className='options-container' to={"/yourDoctor"}>
                            <div className='options-container'>
                                <label className='option-label'>Your Doctor</label>
                            </div>
                        </Link>

                        <Link className='options-container' to={"/convoHistory"}>
                            <div className='options-container'>
                                <label className='option-label'>Convo History</label>
                            </div>
                        </Link>

                        <Link className='options-container' to={"/medicalHistory"}>
                            <div className='options-container'>
                                <label className='option-label'>Medical history</label>
                            </div>
                        </Link>

                        <Link className='options-container' to={"/medicalDocuments"}>
                            <div className='options-container'>
                                <label className='option-label'>Medical Documents</label>
                            </div>
                        </Link>

                        <Link className='options-container' to={"/medications"}>
                            <div className='options-container'>
                                <label className='option-label'>Medications</label>
                            </div>
                        </Link>
                    </div>
                </div>
                <hr className='header-break-line' />
            </header>
        </>
    );
}

export default HeaderComponent;
