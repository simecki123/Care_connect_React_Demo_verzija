import './RegisterComponentStyle.css';
import { Link } from 'react-router-dom';


function RegisterComponent() {
    return (
      <div className='register-container'>
        <div className='register-header'>
          <h1 className='register-title'>REGISTER</h1>
        </div>
        <form className='register-form'>
          <div className='register-form-group'>
            <label className='register-label'>First name: </label>
            <input className='register-input' type='text' maxLength={20} placeholder='Enter your first name' />
          </div>
  
          <div className='register-form-group'>
            <label className='register-label'>Last name: </label>
            <input className='register-input' type='text' maxLength={20} placeholder='Enter your last name' />
          </div>
  
          <div className='register-form-group'>
            <label className='register-label'>Email: </label>
            <input className='register-input' type='email' maxLength={30} placeholder='Enter your email' />
          </div>
  
          <div className='register-form-group'>
            <label className='register-label'>Password: </label>
            <input className='register-input' type='password' maxLength={20} placeholder='Enter your password' />
          </div>
  
          <div className='register-form-group'>
            <label className='register-label'>Confirm Password: </label>
            <input className='register-input' type='password' maxLength={20} placeholder='Confirm your password' />
          </div>
  
          <Link to={"/mainpage"}>
            <button className='register-button'>REGISTER</button>
          </Link>
        </form>
      </div>
    );
  }
  
  export default RegisterComponent;