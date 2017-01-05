import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { CalculatorComponent } from "./calculator.component";
import { By } from "@angular/platform-browser";

describe('CalculatorComponent', () => {
    let component: CalculatorComponent;
    let fixture: ComponentFixture<CalculatorComponent>;

    beforeEach(async(() => {
        TestBed
            .configureTestingModule({
                declarations: [CalculatorComponent]
            })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CalculatorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display a tooltip in the table header', () => {
        const tooltipElement = fixture.debugElement.query(By.css('.calculator__tooltip'));
        expect(tooltipElement.nativeElement.textContent).toContain("Enter 2 numbers and select an operand");
    });

    it('should display by default N/A as the result', () => {
        const resultElement = fixture.debugElement.query(By.css('.calculator__result'));
        expect(resultElement.nativeElement.textContent).toBe('N/A');
    });

    it('should have 2 number inputs', () => {
        const inputElements = fixture.debugElement.queryAll(By.css('input[type=number]'));

        expect(inputElements.length).toBe(2);
    });

    it('should have an addition operand selector', () => {
        const additionOperandSelector = fixture.debugElement.query(By.css('.calculator__operand'));

        expect(additionOperandSelector).not.toBeNull();
    });
});
