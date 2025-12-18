import ACTION_TYPES from './actionTypes';

// const {
//     GET_CONTACTS,
//     CREATE_CONTACT,
//     UPDATE_CONTACT,
//     DELETE_CONTACT,
//     SET_CONTACT_FOR_EDIT,
// } = ACTION_TYPES;

// ? Старий варіант getContacts БЕЗ REDUX SAGA
// export const getContacts = (contacts) => {
//     return {
//         type: GET_CONTACTS,
//         payload: contacts,
//     };
// };

// ! Нові action creators для getContacts - з REDUX SAGA
export const getContactsAction = () => {
    return {
        type: ACTION_TYPES.GET_CONTACTS_ACTION,
    };
};

export const getContactsRequest = () => {
    return {
        type: ACTION_TYPES.GET_CONTACTS_REQUEST,
    };
};

export const getContactsSuccess = (contacts) => {
    return {
        type: ACTION_TYPES.GET_CONTACTS_SUCCESS,
        payload: contacts,
    };
};

export const getContactsError = (error) => {
    return {
        type: ACTION_TYPES.GET_CONTACTS_ERROR,
        payload: error,
    };
};

// ? Старий варіант createContact БЕЗ REDUX SAGA
// export const createContact = (contact) => {
//     return {
//         type: CREATE_CONTACT,
//         payload: contact,
//     };
// };

// ! Нові action creators для createContact - з REDUX SAGA
export const createContactAction = (contact) => {
    return {
        type: ACTION_TYPES.POST_CONTACT_ACTION,
        payload: contact,
    };
};

export const createContactRequest = () => {
    return {
        type: ACTION_TYPES.POST_CONTACT_REQUEST,
    };
};

export const createContactSuccess = (contact) => {
    return {
        type: ACTION_TYPES.POST_CONTACT_SUCCESS,
        payload: contact,
    };
};

export const createContactError = (error) => {
    return {
        type: ACTION_TYPES.POST_CONTACT_ERROR,
        payload: error,
    };
};

// ? Старий варіант updateContact БЕЗ REDUX SAGA
// export const updateContact = (contact) => {
//     return {
//         type: UPDATE_CONTACT,
//         payload: contact,
//     };
// };

// ! Нові action creators для updateContact - з REDUX SAGA
export const updateContactAction = (contact) => {
    return {
        type: ACTION_TYPES.PUT_CONTACT_ACTION,
        payload: contact,
    };
};

export const updateContactRequest = () => {
    return {
        type: ACTION_TYPES.PUT_CONTACT_REQUEST,
    };
};

export const updateContactSuccess = (contact) => {
    return {
        type: ACTION_TYPES.PUT_CONTACT_SUCCESS,
        payload: contact,
    };
};

export const updateContactError = (error) => {
    return {
        type: ACTION_TYPES.PUT_CONTACT_ERROR,
        payload: error,
    };
};

// ? Старий варіант deleteContact БЕЗ REDUX SAGA
// export const deleteContact = (contactId) => {
//     return {
//         type: DELETE_CONTACT,
//         payload: contactId,
//     };
// };

// ! Нові action creators для deleteContact - з REDUX SAGA
export const deleteContactAction = (contactId) => {
    return {
        type: ACTION_TYPES.DELETE_CONTACT_ACTION,
        payload: contactId,
    };
};

export const deleteContactRequest = () => {
    return {
        type: ACTION_TYPES.DELETE_CONTACT_REQUEST,
    };
};

export const deleteContactSuccess = (contactId) => {
    return {
        type: ACTION_TYPES.DELETE_CONTACT_SUCCESS,
        payload: contactId,
    };
};

export const deleteContactError = (error) => {
    return {
        type: ACTION_TYPES.DELETE_CONTACT_ERROR,
        payload: error,
    };
};

export const setContactForEdit = (contact) => {
    return {
        type: ACTION_TYPES.SET_CONTACT_FOR_EDIT,
        payload: contact,
    };
};
