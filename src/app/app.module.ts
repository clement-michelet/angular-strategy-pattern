import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { AppComponent } from "./app.component";
import { CalculatorComponent } from "./calculator/calculator.component";
import { CalculatorService } from "./calculator/calculator.service";
import { AdditionOperandStrategy } from "./calculator/operand/addition-operand-strategy";
import { SubstractionOperandStrategy } from "./calculator/operand/substraction-operand-strategy";
import { MultiplicationOperandStrategy } from "./calculator/operand/multiplication-operand-strategy";

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
    providers: [CalculatorService, AdditionOperandStrategy, SubstractionOperandStrategy, MultiplicationOperandStrategy],
    bootstrap: [AppComponent]
})
export class AppModule {
}
