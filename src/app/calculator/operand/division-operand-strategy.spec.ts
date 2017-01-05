import { DivisionOperandStrategy } from "./division-operand-strategy";

describe('DivisionOperandStrategy', () => {
    let strategy: DivisionOperandStrategy;

    beforeEach(() => {
        strategy = new DivisionOperandStrategy;
    });

    it(`should support '/', '÷' or 'division' operand`, () => {
        expect(strategy.support('+')).toBeFalsy();
        expect(strategy.support('/')).toBeTruthy();
        expect(strategy.support('÷')).toBeTruthy();
        expect(strategy.support('division')).toBeTruthy();
    });

    it('should do a division and return a number when computing the result', () => {
        const dataProvider = [
            {leftValue: 0, rightValue: 1, expectedValue: 0},
            {leftValue: 1, rightValue: 2, expectedValue: 0.5},
            {leftValue: 6, rightValue: 3, expectedValue: 2}
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
