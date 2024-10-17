const { add } = require('./stringCalculator');

describe('String Calculator', () => {
    test('empty string returns 0', () => {
        expect(add('')).toBe(0);
    });

    test('single number returns the number', () => {
        expect(add('1')).toBe(1);
        expect(add('5')).toBe(5);
    });

    test('two numbers comma separated return their sum', () => {
        expect(add('1,2')).toBe(3);
        expect(add('5,10')).toBe(15);
    });

    test('multiple numbers comma separated return their sum', () => {
        expect(add('1,2,3')).toBe(6);
        expect(add('1,2,3,4,5')).toBe(15);
    });

    test('handles new lines as separators', () => {
        expect(add('1\n2,3')).toBe(6);
    });

    test('supports different delimiters', () => {
        expect(add('//;\n1;2;3')).toBe(6);
        expect(add('//:\n1:2:3')).toBe(6);
    });

    test('throws error for negative numbers', () => {
        expect(() => add('1,-2,3')).toThrow('Negative numbers not allowed: -2');
    });

    test('ignores numbers greater than 1000', () => {
        expect(add('1001,2')).toBe(2);
        expect(add('1000,1')).toBe(1001);
    });
});
