import './YourDoctorProfileStyle.css';
import logo from '../../assets/logo.jpg';


function YourDoctorProfileComponent() {
    return(
        <>
            <div className="doctor-profileContainer-big">
                <div className='doctor-profile-pic-container'>
                    <img className='doctor-profile-pic' src={logo} />
                </div>

                <div className='name-surname-container'>
                    <label className='doctor-name-surname-label'>Skibidi toilet</label>
                </div>

                <div className='title-of-doctor-container'>
                    <label className='title-of-doctor'>dr.sc</label>
                </div>

                <div className='doctor-profile-description'>
                    <p className='doctor-profile-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque id aperiam iusto unde perferendis autem, quia illo, quod illum delectus quae blanditiis dolore. Et facere alias dignissimos eveniet sapiente reprehenderit!</p>
                </div>
            </div>
        </>
    );
}

export default YourDoctorProfileComponent;