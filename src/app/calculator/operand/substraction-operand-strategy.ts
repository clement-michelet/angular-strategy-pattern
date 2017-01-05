import { OperandStrategy } from "./operand-strategy";

export class SubstractionOperandStrategy extends OperandStrategy {
    private static SUPPORTED_OPERAND = ['-', 'substraction'];

    support(operand: string): boolean {
        return SubstractionOperandStrategy.SUPPORTED_OPERAND.indexOf(operand) !== -1;
    }

    compute(leftValue: number, rightValue: number): number {
        return leftValue - rightValue;
    }
}
