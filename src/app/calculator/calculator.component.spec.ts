import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { CalculatorComponent } from "./calculator.component";
import { CalculatorService } from "./calculator.service";
import { FormsModule } from "@angular/forms";

describe('CalculatorComponent', () => {
    let component: CalculatorComponent;
    let fixture: ComponentFixture<CalculatorComponent>;

    beforeEach(async(() => {
        TestBed
            .configureTestingModule({
                imports: [FormsModule],
                declarations: [CalculatorComponent],
                providers: [CalculatorService]
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

    it('should display N/A when the result is not available', () => {
        // Given
        component.result = null;

        // When
        fixture.detectChanges();

        // Then
        const resultElement = fixture.debugElement.query(By.css('.calculator__result'));
        expect(resultElement.nativeElement.textContent).toBe('N/A');
    });

    it('should display the result when the result is available', () => {
        // Given
        component.result = 50;

        // When
        fixture.detectChanges();

        // Then
        const resultElement = fixture.debugElement.query(By.css('.calculator__result'));
        expect(resultElement.nativeElement.textContent).toBe('50');
    });

    it('should have 2 number inputs', () => {
        const inputElements = fixture.debugElement.queryAll(By.css('input[type=number]'));

        expect(inputElements.length).toBe(2);
    });

    it('should have an addition operand selector', () => {
        const additionOperandSelector = fixture.debugElement.query(By.css('.calculator__operand'));

        expect(additionOperandSelector).not.toBeNull();
    });

    it('should update the result after computation', () => {
        // Given
        component.result = null;
        component.leftValue = 5;
        component.rightValue = 10;
        component.operand = 'addition';

        // When
        component.compute();

        // Then
        expect(component.result).toBe(15);
    });
});
