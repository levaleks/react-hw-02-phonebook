import React from 'react';
import { ContactsListItem } from './ContactsListItem';
import { SContactsList } from './ContactsList.sc';
import { Contact } from '../phonebookReducer';
import { ContactsListPlaceholder } from './ContactsListPlaceholder';

export type ContactsListProps = {
    onContactDelete: (id: string) => void;
    contacts: Contact[];
};

export const ContactsList: React.FC<ContactsListProps> = ({ contacts, onContactDelete }) => {
    return (
        <SContactsList as="ul">
            {contacts.length ? (
                contacts.map(({ id, name, number }) => (
                    <ContactsListItem key={id} id={id} name={name} number={number} onContactDelete={onContactDelete} />
                ))
            ) : (
                <ContactsListPlaceholder message="Nothing to show" />
            )}
        </SContactsList>
    );
};
