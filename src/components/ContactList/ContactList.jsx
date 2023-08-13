import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { ContList, ContItem, ContButton } from './ContactList.styled';
import { selectContacts, selectFilter } from 'redux/selectors';

const ContactList = () => {
  const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };
  
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (filteredContacts.length === 0 && filter) {
    return <p>No such name</p>;
  };

  return (
    <ContList>
      {filteredContacts.map(contact => (
        <ContItem key={contact.id}>
          {contact.name}: {contact.number}
          <ContButton onClick={() => handleDeleteContact(contact.id)}>
            Delete
          </ContButton>
        </ContItem>
      ))}
    </ContList>
  );
};

export default ContactList;
