import React, { useCallback, useMemo, useReducer } from 'react';
import { CreateContact } from './CreateContact';
import { ContactsFilter } from './ContactsFilter';
import { ContactsList } from './ContactsList';
import { SHeading, SPhonebook } from './Phonebook.sc';
import { phonebookReducer, phonebookInitialState } from './phonebookReducer';

export const Phonebook: React.FC = () => {
    const [{ search, contacts }, dispatch] = useReducer(phonebookReducer, phonebookInitialState);

    const handleContactCreate = useCallback(
        ({ name, number, clearForm }) => {
            if (!name || !number) return;

            const prettifiedName = name.trim().replace(/\s{2,}/g, ' ');

            const hasDuplicate = contacts.some(({ name: contactName }) => {
                return prettifiedName.toLowerCase() === contactName.toLowerCase();
            });

            if (hasDuplicate) {
                alert(`${prettifiedName} is already in your contacts`);

                return;
            }

            dispatch({ type: 'CREATE_CONTACT', payload: { name: prettifiedName, number } });

            clearForm();
        },
        [contacts, dispatch],
    );

    const handleContactDelete = useCallback((id) => dispatch({ type: 'DELETE_CONTACT', payload: { id } }), [dispatch]);

    const handleFilter = useCallback(
        (query): void => {
            dispatch({ type: 'SET_SEARCH', payload: { search: query } });
        },
        [dispatch],
    );

    const filteredContacts = useMemo(
        () => contacts.filter(({ name }) => name.toLocaleLowerCase().includes(search.toLocaleLowerCase())),
        [search, contacts],
    );

    return (
        <SPhonebook>
            <SHeading>Phonebook</SHeading>
            <CreateContact onContactCreate={handleContactCreate} />
            <ContactsFilter onChange={handleFilter} disabled={!contacts.length} />
            <ContactsList contacts={filteredContacts} onContactDelete={handleContactDelete} />
        </SPhonebook>
    );
};
