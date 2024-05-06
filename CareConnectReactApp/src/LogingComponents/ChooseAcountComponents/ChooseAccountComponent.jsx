import './ChooseAccountComponentStyle.css';
import remeberdProfilesData from '../../RemeberedProfilesData';
import logo from '../../assets/logo.jpg';
import { Link } from 'react-router-dom'; 

function ChooseAccountComponent() {
    return(
        <>
            <div className='choose-acc-container'>
                <div className='icon-container'>
                    <img className='logo' src={logo} />
                </div>
                <div className='remebered-accounts-container'>
                    {remeberdProfilesData.map((profile) => (
                        <div key={profile.id} className='remebered-acc'>
                            <img className='profile-pic' src={profile.img} alt='Profile Pic' />
                            <label className='profile-name'>{profile.nameSurname}</label>
                        </div>
                    ))}
                </div>
                <div className='login-and-register-container'>
                    <Link to={`/login`}>
                        <div className='login-container'>
                            <label className='login-register-labels'>Login</label>
                        </div>
                    </Link>
                    <Link to={`/register`}>
                        <div className='register-container'>
                            <label className='login.register-labels'>Register</label>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default ChooseAccountComponent;