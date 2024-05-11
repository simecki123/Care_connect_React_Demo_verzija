import './ProfileComponentStyle.css';
import logo from '../../assets/logo.jpg';

function ProfileComponent() {
    return(
        <>
            <div className='profile-container'>
                <div className='profile-profile-pic-container'>
                    <img className='profile-profile-pic' src={logo} />
                </div>
                <div className='user-data-container'>
                    <div className='data-labels-container'>
                        <label className='data-labels'>Name:</label>
                    </div>
                    <div className='data-labels-container'>
                        <label className='data-labels'>Surname:</label>
                    </div>
                    <div className='data-labels-container'>
                        <label className='data-labels'>Height:</label>
                    </div>
                    <div className='data-labels-container'>
                        <label className='data-labels'>Weight:</label>
                    </div>
                    <div className='data-labels-container'>
                        <label className='data-labels'>Age:</label>
                    </div>
                    <div className='data-labels-container'>
                        <label className='data-labels'>Invalid:</label>
                    </div>
                    <div className='data-labels-container'>
                        <label className='data-labels'>Priority:</label>
                    </div>
                    <div className='data-labels-container'>
                        <label className='data-labels'>Heart Rate:</label>
                    </div>
                    <div className='data-labels-container'>
                        <label className='data-labels'>Blood Preassure:</label>
                    </div>
                    <div className='data-labels-container'>
                        <label className='data-labels'>Blood Oxygen:</label>
                    </div>
                    <div className='data-labels-container'>
                        <label className='data-labels'>Stress:</label>
                    </div>
                </div>

            </div>
        </>
    );
}

export default ProfileComponent;