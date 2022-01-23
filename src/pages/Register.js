import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validateInput } from '../assets/validateInput';
import { Button } from '../components/Button';
import '../styles/Register.scss';

export const Register = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [errors, setErrors] = useState({});

  const handleClick = (e) => {
    e.preventDefault();

    const data = {
      userName
    };

    // input validation
    const errorChecking = validateInput(data);
    if (!errorChecking.isValid) setErrors(errorChecking.errors);
    if (errorChecking.isValid) {
      // redirect to note-list according to active route
      navigate('/game');
    }
  };

  return (
    <div className="form-container">
      <form noValidate autoComplete="off">
        {/* username */}
        <label html="username">Username</label>
        <input
          id="username"
          name="username"
          autoFocus
          value={ userName }
          onChange={(e) => setUserName(e.target.value)}
        />
        <span>{ errors.userName }</span>
        <Button text="Enter and enjoy" method={ handleClick } />
      </form>
    </div>
  )
};
