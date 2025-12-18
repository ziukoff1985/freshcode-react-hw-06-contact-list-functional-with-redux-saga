import { put } from 'redux-saga/effects';

import api from '../api/contactsService';
import {
    getContactsRequest,
    getContactsSuccess,
    getContactsError,
    createContactRequest,
    createContactSuccess,
    createContactError,
    updateContactRequest,
    updateContactSuccess,
    updateContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
} from '../store/actions/contactsActions';

export function* getContactsSaga() {
    yield put(getContactsRequest());
    try {
        const contacts = yield api.get('/').then(({ data }) => data);
        yield put(getContactsSuccess(contacts));
    } catch (error) {
        yield put(getContactsError(error));
    }
}

export function* createContactSaga({ payload }) {
    yield put(createContactRequest());
    try {
        const newContact = yield api
            .post('/', payload)
            .then(({ data }) => data);
        yield put(createContactSuccess(newContact));
    } catch (error) {
        yield put(createContactError(error));
    }
}

export function* updateContactSaga({ payload }) {
    yield put(updateContactRequest());
    try {
        const updatedContact = yield api
            .put(`/${payload.id}`, payload)
            .then(({ data }) => data);
        yield put(updateContactSuccess(updatedContact));
    } catch (error) {
        yield put(updateContactError(error));
    }
}

export function* deleteContactSaga({ payload }) {
    yield put(deleteContactRequest());
    try {
        yield api.delete(`/${payload}`);
        yield put(deleteContactSuccess(payload));
    } catch (error) {
        yield put(deleteContactError(error));
    }
}
