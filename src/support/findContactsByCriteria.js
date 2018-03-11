export const findContactsByCriteria = (contacts, criteria) => criteria === '' ? contacts : contacts
    .filter(contact => new RegExp(criteria, 'ig').test(contact.firstName + contact.lastName));
