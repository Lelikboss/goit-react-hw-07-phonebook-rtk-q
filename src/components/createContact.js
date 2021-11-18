import { useCreateContactMutation } from '../redux/contacts/contactsSlice';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
export const CreateContact = () => {
  const [createContact, { isLoading }] = useCreateContactMutation();

  const handlerSubmit = e => {
    e.preventDefault();
    createContact({
      name: e.currentTarget.elements.content.value,
      phone: e.currentTarget.elements.number.value,
    });
    e.currentTarget.reset();
  };
  return (
    <form autoComplete="off" onSubmit={handlerSubmit}>
      <input type="text" name="content" />
      <input type="tel" name="number" placeholder="xxx-xxx-xxx" />
      <button type="submit" disabled={isLoading}>
        {isLoading && <Loader type="Circles" height={20} width={20} />} Create
        contact
      </button>
    </form>
  );
};
