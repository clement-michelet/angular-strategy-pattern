import { SubstractionOperandStrategy } from "./substraction-operand-strategy";

describe('SubstractionOperandStrategy', () => {
    let strategy: SubstractionOperandStrategy;

    beforeEach(() => {
        strategy = new SubstractionOperandStrategy;
    });

    it(`should support '-' or 'substraction' operand`, () => {
        expect(strategy.support('+')).toBeFalsy();
        expect(strategy.support('-')).toBeTruthy();
        expect(strategy.support('substraction')).toBeTruthy();
    });

    it('should do a substraction and return a number when computing the result', () => {
        const dataProvider = [
            {leftValue: 0, rightValue: 1, expectedValue: -1},
            {leftValue: 1, rightValue: 2, expectedValue: -1},
            {leftValue: 5, rightValue: 3, expectedValue: 2}
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
