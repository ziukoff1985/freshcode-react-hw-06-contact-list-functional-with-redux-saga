import { useDispatch, useSelector } from 'react-redux';

// import api from '../../api/contactsService';
import {
    // deleteContact,
    deleteContactAction,
    setContactForEdit,
} from '../../store/actions/contactsActions';

import styles from './ContactItem.module.css';

function ContactItem({ contact }) {
    const dispatch = useDispatch();

    const contactForEdit = useSelector((state) => state.contactForEdit);

    // * Старий варіант - без Redux Saga
    // async function onContactDelete() {
    //     try {
    //         await api.delete(`/${contact.id}`);
    //         dispatch(deleteContact(contact.id));
    //     } catch (error) {
    //         console.log(error.message);
    //     }
    // }

    // ! Новий варіант - з Redux Saga
    const onContactDelete = () => {
        dispatch(deleteContactAction(contact.id));
    };

    function onContactEdit() {
        dispatch(setContactForEdit(contact));
    }

    return (
        <li
            className={`${styles.contactItem} ${
                contactForEdit?.id === contact.id && styles.updating
            }`}
            onDoubleClick={onContactEdit}
        >
            <div className={styles.contactName}>
                {contact.firstName} {contact.lastName}
            </div>
            <button
                className={styles.deleteButton}
                type='button'
                onClick={onContactDelete}
            >
                ❌
            </button>
        </li>
    );
}

export default ContactItem;
