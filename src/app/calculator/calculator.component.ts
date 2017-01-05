import { Component, OnInit } from "@angular/core";
import { CalculatorService } from "./calculator.service";

@Component({
    selector: 'app-calculator',
    templateUrl: './calculator.component.html',
    styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
    result: number = null;
    leftValue: number;
    rightValue: number;
    operand: string;

    constructor(private calculator: CalculatorService) {
    }

    ngOnInit() {
    }

    compute() {
        this.result = this.calculator.compute(this.leftValue, this.rightValue, this.operand);
    }
}
