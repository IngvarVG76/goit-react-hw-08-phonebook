import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuthentificated } from 'redux/selectors';
import { registerUserThunk } from 'redux/operations';
import { Form, FormBtn, FormInput, FormLabel } from './RegisterPage.styled';
import { Heading, Main } from '../HomePage/HomePage.styled';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const authenticated = useSelector(selectAuthentificated);

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;
    const name = form.elements.userName.value;
    const email = form.elements.userEmail.value;
    const password = form.elements.userPassword.value;

    dispatch(
      registerUserThunk({
        name,
        email,
        password,
      })
    );
  };

  if (authenticated) return <Navigate to="/contacts" />;

  return (
    <Main>
      <Heading>Register Your Account</Heading>
      <Form onSubmit={handleSubmit}>
        <FormLabel htmlFor="name">Name:</FormLabel>
        <FormInput
          name="userName"
          type="text"
          required
          placeholder="Enter name"
          minLength={2}
        />

        <FormLabel htmlFor="email">Email:</FormLabel>
        <FormInput
          name="userEmail"
          type="email"
          placeholder="Enter email"
          required
        />

        <FormLabel htmlFor="Password">Password:</FormLabel>
        <FormInput
          name="userPassword"
          type="password"
          placeholder="Enter password"
          required
          minLength={7}
        />

        <FormBtn type="submit">Sign Up</FormBtn>
      </Form>
    </Main>
  );
};

export default RegisterPage;
