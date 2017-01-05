import { Injectable, Inject } from "@angular/core";
import { OperandStrategy } from "./operand/operand-strategy";

@Injectable()
export class CalculatorService {

    constructor(@Inject(OperandStrategy) private strategies: Array<OperandStrategy>) {
    }

    compute(leftValue: number, rightValue: number, operand: string): number|null {
        const strategy = this.strategies.find((strategy) => {
            return strategy.support(operand);
        });

        if (strategy === undefined) {
            return null;
        }

        return strategy.compute(leftValue, rightValue);
    }
}
