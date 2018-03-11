import { updateContact } from '../../src/support/updateContact';

describe('updateContact', () => {
    test('update existing contact by id', () => {
        expect(updateContact([{ id: 1 }, { id: 2 }], { id: 2, name: 'name' }))
            .toContainEqual({ id: 2, name: 'name' });

        expect(updateContact([{ id: 1 }, { id: 2 }], { id: 2, name: 'name' }))
            .not.toContainEqual({ id: 2 });
    });

    test('ignore non-existing values', () => {
        expect(updateContact([{ id: 1 }, { id: 2 }], { id: 3, name: 'name' }))
            .toContainEqual({ id: 1 });

        expect(updateContact([{ id: 1 }, { id: 2 }], { id: 3, name: 'name' }))
            .not.toContainEqual({ id: 3, name: 'name' });
    });
});
