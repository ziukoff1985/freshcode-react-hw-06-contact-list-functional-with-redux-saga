import { contactsState } from '../../model/initialStates';
import { EMPTY_CONTACT } from '../../constants/constants';
import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
    contacts: contactsState,
    contactForEdit: EMPTY_CONTACT,
    isFetching: false, // додаємо при роботі з REDUX SAGA
    error: null, // додаємо при роботі з REDUX SAGA
};

// const {
//     GET_CONTACTS,
//     CREATE_CONTACT,
//     UPDATE_CONTACT,
//     DELETE_CONTACT,
//     SET_CONTACT_FOR_EDIT,
// } = ACTION_TYPES;

export default function contactsReducer(
    state = initialState,
    { type, payload }
) {
    switch (type) {
        // * ВСІ SUCCESS
        case ACTION_TYPES.GET_CONTACTS_SUCCESS: // аналог GET_CONTACTS
            return {
                ...state,
                contacts: payload,
                isFetching: false, // додаємо при роботі з REDUX SAGA
            };
        case ACTION_TYPES.POST_CONTACT_SUCCESS: // аналог CREATE_CONTACT
            return {
                ...state,
                contacts: [...state.contacts, payload],
                isFetching: false, // додаємо при роботі з REDUX SAGA
            };
        case ACTION_TYPES.PUT_CONTACT_SUCCESS: // аналог UPDATE_CONTACT
            return {
                ...state,
                contacts: state.contacts.map((contact) =>
                    contact.id === payload.id ? payload : contact
                ),
                contactForEdit: payload,
                isFetching: false, // додаємо при роботі з REDUX SAGA
            };
        case ACTION_TYPES.DELETE_CONTACT_SUCCESS: // аналог DELETE_CONTACT
            return {
                ...state,
                contacts: state.contacts.filter(
                    (contact) => contact.id !== payload
                ),
                contactForEdit:
                    state.contactForEdit.id === payload
                        ? initialState.contactForEdit
                        : state.contactForEdit,
                isFetching: false, // додаємо при роботі з REDUX SAGA
            };

        // * ВСІ REQUEST
        case ACTION_TYPES.GET_CONTACTS_REQUEST:
        case ACTION_TYPES.POST_CONTACT_REQUEST:
        case ACTION_TYPES.PUT_CONTACT_REQUEST:
        case ACTION_TYPES.DELETE_CONTACT_REQUEST:
            return {
                ...state,
                isFetching: true, // додаємо при роботі з REDUX SAGA
            };

        // * ВСІ ERROR
        case ACTION_TYPES.GET_CONTACTS_ERROR:
        case ACTION_TYPES.POST_CONTACT_ERROR:
        case ACTION_TYPES.PUT_CONTACT_ERROR:
        case ACTION_TYPES.DELETE_CONTACT_ERROR:
            return {
                ...state,
                error: payload,
                isFetching: false, // додаємо при роботі з REDUX SAGA
            };

        case ACTION_TYPES.SET_CONTACT_FOR_EDIT:
            return {
                ...state,
                contactForEdit: payload,
            };
        default:
            return state;

        // ? Старий варіант ACTION_TYPES.GET_CONTACTS - БЕЗ REDUX SAGA
        // case GET_CONTACTS:
        //     return {
        //         ...state,
        //         contacts: payload,
        //     };

        // ? Старий варіант ACTION_TYPES.CREATE_CONTACT - БЕЗ REDUX SAGA
        // case CREATE_CONTACT:
        //     return {
        //         ...state,
        //         contacts: [...state.contacts, payload],
        //     };

        // ? Старий варіант ACTION_TYPES.UPDATE_CONTACT - БЕЗ REDUX SAGA
        // case UPDATE_CONTACT:
        //     return {
        //         ...state,
        //         contacts: state.contacts.map((contact) =>
        //             contact.id === payload.id ? payload : contact
        //         ),
        //     };

        // ? Старий варіант ACTION_TYPES.DELETE_CONTACT - БЕЗ REDUX SAGA
        // case DELETE_CONTACT:
        //     return {
        //         ...state,
        //         contacts: state.contacts.filter(
        //             (contact) => contact.id !== payload
        //         ),
        //         contactForEdit:
        //             state.contactForEdit.id === payload
        //                 ? initialState.contactForEdit
        //                 : state.contactForEdit,
        //     };
    }
}
