import { deleteContact } from '../../src/support/deleteContact';

describe('deleteContact', () => {
    test('delete existing contact by id', () => {
        expect(deleteContact([{ id: 1 }, { id: 2 }], 1)).toEqual([{ id: 2 }]);
    });
    test('ignore non-existing values', () => {
        expect(deleteContact([{ id: 1 }, { id: 2 }], -1)).toEqual([{ id: 1 }, { id: 2 }]);
    });
});
