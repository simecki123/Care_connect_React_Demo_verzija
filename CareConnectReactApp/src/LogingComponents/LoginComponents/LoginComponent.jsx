import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpg';
import './LoginStyle.css';

function LoginComponent() {

    return(
        <>
            
            
            <div className='login-container'>
                <div className="header-login-container">
                    <img src={logo} alt='LOGO' className='logo-login-container'/>
                    <h1 className='login-title-big'>Care Connect</h1>
                </div>

                <form className="form-login">
                    <div className="form-group">
                        <label className='login-label'>Email: </label>
                    </div>
                    <div className='form-group'>
                        <input className='login-input' type="email" placeholder="Enter your email" />
                    </div>

                    <div className="form-group">
                        <label className='login-label' >Password: </label>
                    </div>
                    <div className='form-group'>
                        <input className='login-input' type="password" placeholder="Enter your password"/>
                    </div>
                    <Link to="/mainpage">
                        <button className="button_login">LOGIN</button>
                    </Link>
                </form>
                
                    <p className='register-text-login-form' > Don`t have an account? Register for free here ➡️ <Link className='link-to-register-login-form' to="/register">Register</Link></p>
                

            </div>
        </>
    )
}

export default LoginComponent;