import { FC, SetStateAction, useEffect, useState }from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import './styles.scss';
import { userRegister } from '../../redux/userSlice';
import { findOneUser } from "../../services";

interface props {
  loginSucess(): void;
}
export const LoginForm:FC<props> = ({loginSucess}) => {
  const [disableButton, setDisableButton] = useState<boolean>(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errroMessage, setErrorMessage] = useState('');
  const dispatch =  useDispatch();

  const handleClick = () => {
      const userData = findOneUser(email, password)
      if (userData?.name) {
        dispatch(userRegister({ name: userData.name, email}));
        loginSucess();
        setErrorMessage('');
      } else {
        setErrorMessage('User Not Found');
      }
  }

  const handleOnChangeTextField = (
    e: { target: { value: SetStateAction<string> }},
    field: 'email' | 'pass'
  )=>{
    if (field === 'email') setEmail(e.target.value);
    if (field === 'pass') setPassword(e.target.value);
  }

  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter' && disableButton === false) {
      handleClick();
    }
  }

  useEffect(() => {
    if (email !== '' && password !== '') {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [email, password]);


  return (
    <div className='login-form-container'>
      <br />
      <TextField
        id='filte01'
        label='Email'
        value={email}
        onChange={(e)=>handleOnChangeTextField(e, 'email')}
        onKeyDown={handleKeyDown}
      />
      <br />
      <br />
      <TextField
        id='filte01'
        label='Password'
        value={password}
        onChange={(e)=>handleOnChangeTextField(e, 'pass')}
        onKeyDown={handleKeyDown}
      />
      <br />
      {errroMessage && <label>
        {errroMessage}
      </label>}
      <br />
      <Button
        id="contained"
        variant='contained'
        onClick={handleClick}
        disabled={disableButton}
      >search</Button>
    </div>
  );
};
