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
        const tooltipElement = fixture.debugElement.query(By.css('.calculator__result'));
        expect(tooltipElement.nativeElement.textContent).toBe('N/A');
    });
});
