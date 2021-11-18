export const ContactList = ({ contacts, onDelete, deleting }) => {
  console.log(contacts);
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.phone}{' '}
          <button onClick={() => onDelete(contact.id)}>
            {deleting ? 'Deleting...' : 'Delete'}
          </button>
        </li>
      ))}
    </ul>
  );
};
