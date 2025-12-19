import { contactsState } from '../../model/initialStates';
import { EMPTY_CONTACT } from '../../constants/constants';
import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
    contacts: contactsState,
    contactForEdit: EMPTY_CONTACT,
    isFetching: false,
    error: null,
};

export default function contactsReducer(
    state = initialState,
    { type, payload }
) {
    switch (type) {
        // * ALL SUCCESS
        case ACTION_TYPES.GET_CONTACTS_SUCCESS:
            return {
                ...state,
                contacts: payload,
                isFetching: false,
            };
        case ACTION_TYPES.POST_CONTACT_SUCCESS:
            return {
                ...state,
                contacts: [...state.contacts, payload],
                contactForEdit: { ...initialState.contactForEdit },
                isFetching: false,
            };
        case ACTION_TYPES.PUT_CONTACT_SUCCESS:
            return {
                ...state,
                contacts: state.contacts.map((contact) =>
                    contact.id === payload.id ? payload : contact
                ),
                contactForEdit: payload,
                isFetching: false,
            };
        case ACTION_TYPES.DELETE_CONTACT_SUCCESS:
            return {
                ...state,
                contacts: state.contacts.filter(
                    (contact) => contact.id !== payload
                ),
                contactForEdit:
                    state.contactForEdit.id === payload
                        ? initialState.contactForEdit
                        : state.contactForEdit,
                isFetching: false,
            };

        // * ALL REQUEST
        case ACTION_TYPES.GET_CONTACTS_REQUEST:
        case ACTION_TYPES.POST_CONTACT_REQUEST:
        case ACTION_TYPES.PUT_CONTACT_REQUEST:
        case ACTION_TYPES.DELETE_CONTACT_REQUEST:
            return {
                ...state,
                isFetching: true,
            };

        // * ALL ERROR
        case ACTION_TYPES.GET_CONTACTS_ERROR:
        case ACTION_TYPES.POST_CONTACT_ERROR:
        case ACTION_TYPES.PUT_CONTACT_ERROR:
        case ACTION_TYPES.DELETE_CONTACT_ERROR:
            return {
                ...state,
                error: payload,
                isFetching: false,
            };

        case ACTION_TYPES.SET_CONTACT_FOR_EDIT:
            return {
                ...state,
                contactForEdit: payload,
            };
        default:
            return state;
    }
}
