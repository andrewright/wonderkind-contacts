const groupName = (value) => (value.lastName || value.firstName).charAt(0).toUpperCase();

export const groupContacts = (contacts) => contacts.reduce((values, value) => ({
    ...values,
    [groupName(value)]: [...(values[groupName(value)] || []), value]
}), {});
