import { ExponentiationOperandStrategy } from "./exponentiation-operand-strategy";

describe('ExponentiationOperandStrategy', () => {
    let strategy: ExponentiationOperandStrategy;

    beforeEach(() => {
        strategy = new ExponentiationOperandStrategy;
    });

    it(`should support '*' or 'exponentiation' operand`, () => {
        expect(strategy.support('+')).toBeFalsy();
        expect(strategy.support('^')).toBeTruthy();
        expect(strategy.support('exponentiation')).toBeTruthy();
    });

    it('should do a exponentiation and return a number when computing the result', () => {
        const dataProvider = [
            {leftValue: 0, rightValue: 1, expectedValue: 0},
            {leftValue: 1, rightValue: 2, expectedValue: 1},
            {leftValue: 2, rightValue: 4, expectedValue: 16},
            {leftValue: 3, rightValue: 2, expectedValue: 9}
        ];

        // Given
        dataProvider.forEach((data) => {
            // When
            const result = strategy.compute(data.leftValue, data.rightValue);

            // Then
            expect(result).toBe(data.expectedValue);
        });
    });
});
