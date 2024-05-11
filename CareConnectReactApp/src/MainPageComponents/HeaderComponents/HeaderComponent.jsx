import './HeaderStyle.css';
import logo from '../../assets/logo.jpg';
import { Link } from 'react-router-dom';

function HeaderComponent() {
    return(
        <>
            <header>

                <div className='header-container'>
                    <div className='logo-header-container'>
                        <img className='header-logo' src={logo}></img>
                    </div>

                    <Link className='options-container' to={"/devices"}>
                        <div className='options-container'>
                                <label className='option-label'>Devices</label>
                        </div>
                    </Link>
                    <div className='options-container'>
                        <label className='option-label'>Your Doctor</label>
                    </div>
                    <div className='options-container'>
                        <label className='option-label'>Convo History</label>
                    </div>
                    <div className='options-container'>
                        <label className='option-label'>Medical history</label>
                    </div>
                    <div className='options-container'>
                        <label className='option-label'>Medical Documents</label>
                    </div>
                    <div className='options-container'>
                        <label className='option-label'>Medications</label>
                    </div>
                </div>
                <hr className='header-break-line' />

            </header>
        </>
    );
}


export default HeaderComponent;