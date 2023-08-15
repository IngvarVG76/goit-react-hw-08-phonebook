import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuthentificated } from 'redux/auth/selectorsAuth';
import { loginUserThunk } from 'redux/auth/operationsAuth';
import { Heading, Main } from '../HomePage/HomePage.styled';
import { Form, FormBtn, FormInput, FormLabel } from './LoginPage.styled';

const LoginPage = () => {
  const dispatch = useDispatch();
  const authenticated = useSelector(selectAuthentificated);

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;
    const email = form.elements.userEmail.value;
    const password = form.elements.userPassword.value;

    dispatch(
      loginUserThunk({
        email,
        password,
      })
    );
  };

  if (authenticated) return <Navigate to="/contacts" />;

  return (
    <Main>
      <Heading>Login Into Your Account</Heading>
      <Form onSubmit={handleSubmit}>
        <FormLabel htmlFor="name">Email:</FormLabel>
        <FormInput
          name="userEmail"
          type="email"
          required
          placeholder="Enter email"
        />
        <FormLabel htmlFor="Password">Password:</FormLabel>
        <FormInput
          name="userPassword"
          type="password"
          placeholder="Enter password"
          required
          minLength={7}
        />
        <FormBtn type="submit">Sign In</FormBtn>
      </Form>
    </Main>
  );
};

export default LoginPage;
