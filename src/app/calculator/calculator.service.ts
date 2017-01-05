import { Injectable } from "@angular/core";

@Injectable()
export class CalculatorService {

    constructor() {
    }

    public compute(leftValue: number, rightValue: number, operand: string): number|null {
        if (operand === 'addition') {
            return leftValue + rightValue;
        }

        return null;
    }
}
