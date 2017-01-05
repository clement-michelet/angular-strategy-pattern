import { OperandStrategy } from "./operand-strategy";

export class AdditionOperandStrategy extends OperandStrategy {
    private static SUPPORTED_OPERAND = ['+', 'addition'];

    support(operand: string): boolean {
        return AdditionOperandStrategy.SUPPORTED_OPERAND.indexOf(operand) !== -1;
    }

    compute(leftValue: number, rightValue: number): number {
        return leftValue + rightValue;
    }
}
