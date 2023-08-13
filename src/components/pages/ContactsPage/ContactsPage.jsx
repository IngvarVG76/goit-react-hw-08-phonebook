import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {
  selectAuthentificated,
  selectIsLoading,
  selectError,
} from 'redux/selectors';

import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

import { Container, Heading, Section, SubHeading } from 'components';
import { fetchContacts } from 'redux/operations';



const Contacts = () => {
    const dispatch = useDispatch();
    
  useEffect(() => {
       if (!selectAuthentificated) return;

    dispatch(fetchContacts());
  }, [dispatch]);
    
  return (
    <Section>
      <Container>
        <Heading>Phonebook</Heading>
        <ContactForm />
        <SubHeading>Contacts</SubHeading>
        <Filter />
        {selectIsLoading && !selectError && <b>Request in progress...</b>}
        <ContactList />
      </Container>
    </Section>
  );
};

export default Contacts;
