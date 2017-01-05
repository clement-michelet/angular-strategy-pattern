import { BrowserModule } from "@angular/platform-browser";
import { NgModule, FactoryProvider } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { AppComponent } from "./app.component";
import { CalculatorComponent } from "./calculator/calculator.component";
import { CalculatorService } from "./calculator/calculator.service";
import { AdditionOperandStrategy } from "./calculator/operand/addition-operand-strategy";
import { SubstractionOperandStrategy } from "./calculator/operand/substraction-operand-strategy";
import { MultiplicationOperandStrategy } from "./calculator/operand/multiplication-operand-strategy";
import { OperandStrategy } from "./calculator/operand/operand-strategy";

export function calculatorServiceFactory(...operands: Array<OperandStrategy>): CalculatorService {
    return new CalculatorService(operands);
}

const CALCULATOR_PROVIDER: FactoryProvider = {
    provide: CalculatorService,
    useFactory: calculatorServiceFactory,
    deps: [AdditionOperandStrategy, SubstractionOperandStrategy, MultiplicationOperandStrategy]
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
        CALCULATOR_PROVIDER,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
