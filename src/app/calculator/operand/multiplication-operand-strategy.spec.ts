import { MultiplicationOperandStrategy } from "./multiplication-operand-strategy";

describe('MultiplicationOperandStrategy', () => {
    let strategy: MultiplicationOperandStrategy;

    beforeEach(() => {
        strategy = new MultiplicationOperandStrategy;
    });

    it(`should support '*', 'x' or 'multiplication' operand`, () => {
        expect(strategy.support('+')).toBeFalsy();
        expect(strategy.support('x')).toBeTruthy();
        expect(strategy.support('*')).toBeTruthy();
        expect(strategy.support('multiplication')).toBeTruthy();
    });

    it('should do a multiplication and return a number when computing the result', () => {
        const dataProvider = [
            {leftValue: 0, rightValue: 1, expectedValue: 0},
            {leftValue: 1, rightValue: 2, expectedValue: 2},
            {leftValue: 5, rightValue: 3, expectedValue: 15}
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
