import { useDispatch, useSelector } from 'react-redux';

import {
    deleteContactAction,
    setContactForEdit,
} from '../../store/actions/contactsActions';

import styles from './ContactItem.module.css';

function ContactItem({ contact }) {
    const dispatch = useDispatch();

    const contactForEdit = useSelector((state) => state.contactForEdit);

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
