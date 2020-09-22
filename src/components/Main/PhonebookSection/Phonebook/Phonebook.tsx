import React, { useEffect, useMemo, useReducer, useRef } from 'react';
import { CreateContact } from './CreateContact';
import { ContactsFilter } from './ContactsFilter';
import { ContactsList } from './ContactsList';
import { SHeading, SPhonebook } from './Phonebook.sc';
import { phonebookReducer, phonebookInitialState, PhonebookActions } from './store/phonebookReducer';
import { PhonebookContext } from './store/PhonebookContext';
import { PhonebookStorage } from './store/PhonebookStorage';

export const Phonebook: React.FC = () => {
    const [{ search, contacts }, dispatch] = useReducer(phonebookReducer, phonebookInitialState);
    const phonebookStorage = useRef(new PhonebookStorage('phonebook-v1'));

    useEffect(() => {
        dispatch({
            type: PhonebookActions.SET_CONTACTS,
            payload: { contacts: phonebookStorage.current.getContacts() },
        });
    }, []);

    useEffect(() => {
        phonebookStorage.current.saveContacts(contacts);
    }, [contacts]);

    const phonebookContext = useMemo(() => ({ search, contacts, dispatch }), [search, contacts, dispatch]);

    return (
        <PhonebookContext.Provider value={phonebookContext}>
            <SPhonebook>
                <SHeading>Phonebook</SHeading>
                <CreateContact />
                <ContactsFilter />
                <ContactsList />
            </SPhonebook>
        </PhonebookContext.Provider>
    );
};
