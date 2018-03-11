import { findContactsByCriteria } from '../../src/support/findContactsByCriteria';

describe('findContactsByCriteria', () => {
    const contacts = [
        { id: 1, firstName: 'Foo', lastName: 'Bar' },
        { id: 2, firstName: 'Baz', lastName: 'Bar' },
        { id: 3, firstName: 'Foo', lastName: 'Qux' }
    ];

    test('find contact with firstName or lastName containing criteria', () => {
        expect(findContactsByCriteria(contacts, 'foo'))
            .toContainEqual({ id: 1, firstName: 'Foo', lastName: 'Bar' });
    });

    test('remove contact with firstName or lastName not containing criteria', () => {
        expect(findContactsByCriteria(contacts, 'foo'))
            .not.toContainEqual({ id: 2, firstName: 'Baz', lastName: 'Bar' });
    });
});
