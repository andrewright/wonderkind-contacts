export const findContactsByCriteria = (contacts, criteria) => criteria === ''
    ? contacts
    : contacts.filter(contact => `${contact.firstName} ${contact.lastName}`
        .toLowerCase()
        .includes(criteria.toLowerCase())
    );
