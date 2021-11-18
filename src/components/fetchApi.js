import {
  useFetchContactsQuery,
  useDeleteContactMutation,
} from '../redux/contacts/contactsSlice';
import { ContactList } from './contactList';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
export const ContactsPage = () => {
  const { data, isFetching } = useFetchContactsQuery();
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  return (
    <div>
      {isFetching && (
        <Loader
          type="Circles"
          color="#00BFFF"
          height={40}
          width={40}
          timeout={3000} //3 secs
        />
      )}
      {data && (
        <ContactList
          contacts={data}
          onDelete={deleteContact}
          deleting={isDeleting}
        />
      )}
    </div>
  );
};
