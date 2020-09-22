import React, { useCallback, useContext, useMemo } from 'react';
import { ContactsListItem } from './ContactsListItem';
import { SContactsList } from './ContactsList.sc';
import { ContactsListPlaceholder } from './ContactsListPlaceholder';
import { PhonebookContext } from '../store/PhonebookContext';
import { PhonebookActions } from '../store/phonebookReducer';

export const ContactsList: React.FC = () => {
    const { search, contacts, dispatch } = useContext(PhonebookContext);

    const handleContactDelete = useCallback(
        (id) => dispatch({ type: PhonebookActions.DELETE_CONTACT, payload: { id } }),
        [dispatch],
    );

    const filteredContacts = useMemo(
        () => contacts.filter(({ name }) => name.toLocaleLowerCase().includes(search.toLocaleLowerCase())),
        [search, contacts],
    );

    return (
        <SContactsList as="ul">
            {filteredContacts.length ? (
                filteredContacts.map(({ id, name, number }) => (
                    <ContactsListItem
                        key={id}
                        id={id}
                        name={name}
                        number={number}
                        onContactDelete={handleContactDelete}
                    />
                ))
            ) : (
                <ContactsListPlaceholder message="Nothing to show" />
            )}
        </SContactsList>
    );
};
