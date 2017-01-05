import { AdditionOperandStrategy } from "./addition-operand-strategy";

describe('AdditionOperandStrategy', () => {
    let strategy: AdditionOperandStrategy;

    beforeEach(() => {
        strategy = new AdditionOperandStrategy;
    });

    it(`should support '+' operand`, () => {
        expect(strategy.support('+')).toBeTruthy();
    });

    it(`should support 'addition' operand`, () => {
        expect(strategy.support('addition')).toBeTruthy();
    });

    it('should do an addition and return a number when computing the result', () => {
        const dataProvider = [
            {leftValue: 0, rightValue: 1, expectedValue: 1},
            {leftValue: 1, rightValue: 2, expectedValue: 3},
            {leftValue: 2, rightValue: 3, expectedValue: 5},
            {leftValue: 3, rightValue: 5, expectedValue: 8}
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
