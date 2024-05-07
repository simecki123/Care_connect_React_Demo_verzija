import React from 'react';
import { Link  } from 'react-router-dom';
import PropTypes from 'prop-types'; // Import PropTypes
import logo from '../../assets/logo.jpg';
import './RemeberedUsersLoginStyle.css';

function RemeberedUsersLoginComponent({ RemeberedProfilesData }) {
    
    
    return (
        <div className='remebered-login-components-container'>
            <div className='remebered-login-components-logo-container'>
                <img className='remebered-login-components-logo' src={logo} alt='Logo' />
            </div>

            <div className='remebered-accounts-big-container'>
                {RemeberedProfilesData.map(profile => (
                    <Link key={profile.id} to="/mainpage" className='remebered-accounts-container'>
                    <img
                        className='remebered-account-component-profile-pic-mini'
                        src={profile.img}
                        alt='Profile Pic'
                    />
                    <label className='remebered-accounts-component-name'>{profile.nameSurname}</label>
                    </Link>
                ))}
            </div>

            <div className='login-and-register-options-to-click-container'>
                <div className='login-option-container'>
                    <label className='login-option'><Link className='login-option' to="/login">Login</Link></label>
                </div>
                <div className='register-option-container'>
                    <label className='register-option'><Link className='register-option' to="/register">Register</Link></label>
                </div>
            </div>
        </div>
    );
}

// Define PropTypes for RemeberedProfilesData
RemeberedUsersLoginComponent.propTypes = {
    RemeberedProfilesData: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            img: PropTypes.string.isRequired,
            nameSurname: PropTypes.string.isRequired
        })
    ).isRequired
};

export default RemeberedUsersLoginComponent;
