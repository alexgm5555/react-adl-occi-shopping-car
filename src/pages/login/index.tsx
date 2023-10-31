import { FC }from 'react';
import { useNavigate } from "react-router-dom";

import { LoginForm } from '../../components';

import './styles.scss';

export const Login:FC = () => {
  let navigate = useNavigate();

  const loginSuccess = () => {
    navigate("/main");
  }

  return (
    <div className='login-container'>
      <LoginForm loginSucess={loginSuccess}/>
    </div>
  );
};
