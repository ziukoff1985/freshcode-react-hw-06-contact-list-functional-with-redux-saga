import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

// import api from '../../api/contactsService';
import { EMPTY_CONTACT } from '../../constants/constants';
import {
    // getContacts,
    getContactsAction,
    setContactForEdit,
} from '../../store/actions/contactsActions';
import ContactItem from '../ContactItem/ContactItem';

import styles from './ContactList.module.css';

function ContactList() {
    const dispatch = useDispatch();

    const contacts = useSelector((state) => state.contacts);

    function onAddNewContact() {
        dispatch(setContactForEdit(EMPTY_CONTACT));
    }

    // * useEffect для отримання фільмів з сервера - БЕЗ REDUX SAGA
    // useEffect(() => {
    //     async function fetchContacts() {
    //         try {
    //             const { data } = await api.get('/');
    //             dispatch(getContacts(data ?? []));
    //         } catch (error) {
    //             console.log(error.message);
    //         }
    //     }
    //     fetchContacts();
    // }, [dispatch]);

    // ! useEffect для отримання фільмів з сервера - З REDUX SAGA
    useEffect(() => {
        dispatch(getContactsAction());
    }, [dispatch]);

    return (
        <div className={styles.contactListWrapper}>
            <ul className={styles.contactList}>
                {contacts.length === 0
                    ? 'No contacts yet'
                    : contacts.map((contact) => (
                          <ContactItem key={contact.id} contact={contact} />
                      ))}
            </ul>
            <button
                className={styles.addButton}
                type='button'
                onClick={onAddNewContact}
            >
                New
            </button>
        </div>
    );
}

export default ContactList;
