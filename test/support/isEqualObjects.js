import { isEqualObjects } from '../../src/support/isEqualObjects';

describe('isEqualObjects', () => {
    test('equal objects should be equal', () => {
        expect(isEqualObjects({ id: 1 }, { id: 1 })).toBe(true);
    });
    test('not equal objects should be not equal', () => {
        expect(isEqualObjects({ id: 1 }, { id: 2 })).toBe(false);
    });
});
