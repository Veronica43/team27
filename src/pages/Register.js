import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../components/UserContext';
import { validateInput } from '../assets/validateInput';
import { Button } from '../components/Button';
import '../styles/Register.scss';

export const Register = () => {
  const { setUserName } = useContext(UserContext);
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState('');
  const [errors, setErrors] = useState({});

  const handleClick = (e) => {
    e.preventDefault();

    const data = {
      userInput
    };

    // input validation
    const errorChecking = validateInput(data);
    if (!errorChecking.isValid) setErrors(errorChecking.errors);
    if (errorChecking.isValid) {
      console.log('useerInput', userInput);
      setUserName(userInput);
      // redirect to note-list according to active route
      navigate('/game');
    }
  };

  return (
    <div className="form-container">
      <div className="logo">
        <img src="https://i.ibb.co/YZd9mx5/Fem-Hoot-Logo.png" alt="Logo" />
      </div>
      <form noValidate autoComplete="off">
        {/* username */}
        <label html="username">Username</label>
        <input
          id="username"
          name="username"
          autoFocus
          value={ userInput }
          onChange={(e) => setUserInput(e.target.value)}
        />
        <span className="error">{ errors.userInput }</span>
        <Button text="Enter and enjoy" method={ handleClick } />
      </form>
    </div>
  )
};
