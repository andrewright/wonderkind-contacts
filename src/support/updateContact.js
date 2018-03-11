import { contactExists } from './contactExists';
import { deleteContact } from './deleteContact';
import { readContact } from './readContact';

export const updateContact = (contacts, contact) => {
    return contactExists(contacts, contact.id)
        ? [
            ...deleteContact(contacts, contact.id),
            {
                ...readContact(contacts, contact.id),
                ...contact
            }
        ]
        : contacts;
};
