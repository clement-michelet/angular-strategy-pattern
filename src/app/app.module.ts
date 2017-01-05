import { BrowserModule } from "@angular/platform-browser";
import { NgModule, FactoryProvider } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { AppComponent } from "./app.component";
import { CalculatorComponent } from "./calculator/calculator.component";
import { CalculatorService } from "./calculator/calculator.service";
import { OperandStrategy } from "./calculator/operand/operand-strategy";
import {
    AdditionOperandStrategy,
    SubstractionOperandStrategy,
    MultiplicationOperandStrategy,
    DivisionOperandStrategy,
    ExponentiationOperandStrategy
} from "./calculator/operand";

export function calculatorServiceFactory(...operands: Array<OperandStrategy>): CalculatorService {
    return new CalculatorService(operands);
}

const CALCULATOR_PROVIDER: FactoryProvider = {
    provide: CalculatorService,
    useFactory: calculatorServiceFactory,
    deps: [
        AdditionOperandStrategy,
        SubstractionOperandStrategy,
        MultiplicationOperandStrategy,
        DivisionOperandStrategy,
        ExponentiationOperandStrategy
    ]
};

@NgModule({
    declarations: [
        AppComponent,
        CalculatorComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [
        AdditionOperandStrategy,
        SubstractionOperandStrategy,
        MultiplicationOperandStrategy,
        DivisionOperandStrategy,
        ExponentiationOperandStrategy,
        CALCULATOR_PROVIDER,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
