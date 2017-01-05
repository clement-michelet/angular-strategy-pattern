import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { AppComponent } from "./app.component";
import { CalculatorComponent } from "./calculator/calculator.component";
import { CalculatorService } from "./calculator/calculator.service";
import { AdditionOperandStrategy } from "./calculator/operand/addition-operand-strategy";

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
    providers: [CalculatorService, AdditionOperandStrategy],
    bootstrap: [AppComponent]
})
export class AppModule {
}
