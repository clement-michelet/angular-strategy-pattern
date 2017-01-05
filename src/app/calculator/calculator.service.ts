import { Injectable } from "@angular/core";
import { AdditionOperandStrategy } from "./operand/addition-operand-strategy";

@Injectable()
export class CalculatorService {

    constructor(private additionStrategy: AdditionOperandStrategy) {
    }

    public compute(leftValue: number, rightValue: number, operand: string): number|null {
        if (this.additionStrategy.support(operand)) {
            return this.additionStrategy.compute(leftValue, rightValue);
        }

        return null;
    }
}
