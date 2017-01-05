import { OperandStrategy } from "./operand-strategy";

export class DivisionOperandStrategy extends OperandStrategy {
    private static SUPPORTED_OPERAND = ['/', '÷', 'division'];

    support(operand: string): boolean {
        return DivisionOperandStrategy.SUPPORTED_OPERAND.indexOf(operand) !== -1;
    }

    compute(leftValue: number, rightValue: number): number {
        return leftValue / rightValue;
    }
}
