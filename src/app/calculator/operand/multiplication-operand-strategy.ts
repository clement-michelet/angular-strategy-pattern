import { OperandStrategy } from "./operand-strategy";

export class MultiplicationOperandStrategy extends OperandStrategy {
    private static SUPPORTED_OPERAND = ['*', 'x', 'multiplication'];

    support(operand: string): boolean {
        return MultiplicationOperandStrategy.SUPPORTED_OPERAND.indexOf(operand) !== -1;
    }

    compute(leftValue: number, rightValue: number): number {
        return leftValue * rightValue;
    }
}
