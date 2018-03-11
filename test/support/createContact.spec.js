import { createContact } from '../../src/support/createContact';

describe('createContact', () => {
    test('add new values', () => {
        expect(createContact([], { id: 1 })).toContainEqual({ id: 1 });
    });
});
