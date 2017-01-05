/**
 * Class OperandStrategy
 *
 * Base class for operand strategy used in calculator service
 */
export abstract class OperandStrategy {
    /**
     * Check if the operand is supported
     *
     * @param {string} operand
     *
     * @return {boolean}
     */
    abstract support(operand: string): boolean;

    /**
     * Compute the result
     *
     * @param {number} leftValue
     * @param {number} rightValue
     *
     * @return {number} the result of the operation
     */
    abstract compute(leftValue: number, rightValue: number): number;
}
