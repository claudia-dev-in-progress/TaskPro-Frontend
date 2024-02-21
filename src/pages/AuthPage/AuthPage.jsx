import React from 'react';

import { useParams } from 'react-router-dom';
import LoginForm from 'components/LoginForm/LoginForm';
import RegisterForm from 'components/RegisterForm/RegisterForm';
 

function AuthPage() {
  const { id } = useParams();

  return (
    <div>
      {id === 'register' && <RegisterForm />}
      {id === 'login' && <LoginForm />}
      
    </div>
  );
};

export default AuthPage;
 