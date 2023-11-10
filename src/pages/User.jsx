import React, { useState } from 'react';
import { LogIn } from '../Common/logIn/LogIn';
import { SignUp } from '../Common/logIn/SignUp';
import { PageTitle } from '../Common/pageTitle/PageTitle';

export const User = () => {
  const [showLogin, setShowLogin] = useState(true);

  const handleLoginSuccess = () => {
    alert('Login successful!');
  };

  const handleSignUpSuccess = () => {
    alert('Sign up successful!');
  };
  return (
    <>
      <section className="userAccount">
        <PageTitle title="User" />

        <div className="container">
          <div className="f_flex contact-column">
            <div className="login-signup-buttons">
              <button
                className={showLogin ? 'active' : ''}
                onClick={() => setShowLogin(true)}
              >
                Login
              </button>
              <button
                className={!showLogin ? 'active' : ''}
                onClick={() => setShowLogin(false)}
              >
                Sign Up
              </button>
            </div>
            {showLogin ? (
              <LogIn onLoginSuccess={handleLoginSuccess} />
            ) : (
              <SignUp onSignUpSuccess={handleSignUpSuccess} />
            )}
          </div>
        </div>
      </section>
    </>
  );
};
