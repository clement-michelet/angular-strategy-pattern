import { Injectable } from "@angular/core";
import { AdditionOperandStrategy } from "./operand/addition-operand-strategy";
import { SubstractionOperandStrategy } from "./operand/substraction-operand-strategy";
import { MultiplicationOperandStrategy } from "./operand/multiplication-operand-strategy";

@Injectable()
export class CalculatorService {

    constructor(private additionStrategy: AdditionOperandStrategy,
                private substractionStrategy: SubstractionOperandStrategy,
                private multiplicationStrategy: MultiplicationOperandStrategy) {
    }

    public compute(leftValue: number, rightValue: number, operand: string): number|null {
        if (this.additionStrategy.support(operand)) {
            return this.additionStrategy.compute(leftValue, rightValue);
        }

        if (this.substractionStrategy.support(operand)) {
            return this.substractionStrategy.compute(leftValue, rightValue);
        }

        if (this.multiplicationStrategy.support(operand)) {
            return this.multiplicationStrategy.compute(leftValue, rightValue);
        }

        return null;
    }
}
