import './ProfileComponentStyle.css';
import logo from '../../assets/AndrejPlenkovic.jpg';

function ProfileComponent() {
    return(
        <>
            <div className='profile-container'>
                <div className='profile-profile-pic-container'>
                    <img className='profile-profile-pic' src={logo} />
                </div>
                <div className='user-data-container'>
                    <div className='data-labels-container'>
                        <label className='data-labels'>Name: Andrej</label>
                    </div>
                    <div className='data-labels-container'>
                        <label className='data-labels'>Surname: Plenković</label>
                    </div>
                    <div className='data-labels-container'>
                        <label className='data-labels'>Height: 185</label>
                    </div>
                    <div className='data-labels-container'>
                        <label className='data-labels'>Weight: 90kg</label>
                    </div>
                    <div className='data-labels-container'>
                        <label className='data-labels'>Age: 50</label>
                    </div>
                    <div className='data-labels-container'>
                        <label className='data-labels'>Invalid: no</label>
                    </div>
                    <div className='data-labels-container'>
                        <label className='data-labels'>Priority: high</label>
                    </div>
                    <div className='data-labels-container'>
                        <label className='data-labels'>Heart Rate: 90</label>
                    </div>
                    <div className='data-labels-container'>
                        <label className='data-labels'>Blood Preassure:150</label>
                    </div>
                    <div className='data-labels-container'>
                        <label className='data-labels'>Blood Oxygen: 95</label>
                    </div>
                    <div className='data-labels-container'>
                        <label className='data-labels'>Stress: 45</label>
                    </div>
                </div>

            </div>
        </>
    );
}

export default ProfileComponent;