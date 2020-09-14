import { uniqueId } from 'lodash';

export type Contact = { id: string; name: string; number: string };

export type PhonebookState = { search: string; contacts: Contact[] };

export const phonebookInitialState: PhonebookState = {
    search: '',
    contacts: [],
};

export const phonebookReducer = (state, action): PhonebookState => {
    switch (action.type) {
        case 'CREATE_CONTACT':
            return {
                ...state,
                contacts: [
                    ...state.contacts,
                    { id: uniqueId(), name: action.payload.name, number: action.payload.number },
                ],
            };
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts: [...state.contacts.filter(({ id }) => id !== action.payload.id)],
            };
        case 'SET_SEARCH':
            return {
                ...state,
                search: action.payload.search,
            };
        default:
            return state;
    }
};
