import React, { useMemo, useReducer } from 'react';
import { CreateContact } from './CreateContact';
import { ContactsFilter } from './ContactsFilter';
import { ContactsList } from './ContactsList';
import { SHeading, SPhonebook } from './Phonebook.sc';
import { phonebookReducer, phonebookInitialState } from './phonebookReducer';
import { PhonebookContext } from './PhonebookContext';

export const Phonebook: React.FC = () => {
    const [{ search, contacts }, dispatch] = useReducer(phonebookReducer, phonebookInitialState);

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
