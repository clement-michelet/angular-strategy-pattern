import { OperandStrategy } from "./operand-strategy";

export class ExponentiationOperandStrategy extends OperandStrategy {
    private static SUPPORTED_OPERAND = ['^', 'exponentiation'];

    support(operand: string): boolean {
        return ExponentiationOperandStrategy.SUPPORTED_OPERAND.indexOf(operand) !== -1;
    }

    compute(leftValue: number, rightValue: number): number {
        return Math.pow(leftValue, rightValue);
    }
}
