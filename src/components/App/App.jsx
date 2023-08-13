import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';

import { Container, Heading, Section, SubHeading } from 'components';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Section>
      <Container>
        <Heading>Phonebook</Heading>
        <ContactForm />
        <SubHeading>Contacts</SubHeading>
        <Filter />
        {isLoading && !error && <b>Request in progress...</b>}
        <ContactList />
      </Container>
    </Section>
  );
};

export default App;
