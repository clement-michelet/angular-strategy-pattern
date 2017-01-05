import { Component, OnInit } from "@angular/core";

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

    constructor() {
    }

    ngOnInit() {
    }
}
