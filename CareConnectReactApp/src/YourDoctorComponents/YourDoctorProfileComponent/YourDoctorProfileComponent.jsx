import './YourDoctorProfileStyle.css';
import logo from '../../assets/drscthompson.webp';


function YourDoctorProfileComponent() {
    return(
        <>
            <div className="doctor-profileContainer-big">
                <div className='doctor-profile-pic-container'>
                    <img className='doctor-profile-pic' src={logo} />
                </div>

                <div className='name-surname-container'>
                    <label className='doctor-name-surname-label'>Marko Perković Thompson</label>
                </div>

                <div className='title-of-doctor-container'>
                    <label className='title-of-doctor'>dr.sc</label>
                </div>

                <div className='doctor-profile-description'>
                    <p className='doctor-profile-description'>Svježi vjetar s Dinare će vas izlječiti. Ja sam doktor trust me bro.</p>
                </div>
            </div>
        </>
    );
}

export default YourDoctorProfileComponent;