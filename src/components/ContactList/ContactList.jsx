import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { EMPTY_CONTACT } from '../../constants/constants';
import {
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
