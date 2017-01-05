import { TestBed, inject } from "@angular/core/testing";
import { CalculatorService } from "./calculator.service";
import { OperandStrategy } from "./operand/operand-strategy";

class InvalidOperandStrategyStub extends OperandStrategy {
    support(operand: string): boolean {
        return false;
    }

    compute(leftValue: number, rightValue: number): number {
        return 0;
    }
}

class ValidOperandStrategyStub extends OperandStrategy {
    support(operand: string): boolean {
        return operand === 'valid';
    }

    compute(leftValue: number, rightValue: number): number {
        return 100;
    }
}

describe('CalculatorService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                CalculatorService,
                {provide: OperandStrategy, useValue: [new InvalidOperandStrategyStub(), new ValidOperandStrategyStub()]}
            ]
        });
    });

    it('should create the service', inject([CalculatorService], (service: CalculatorService) => {
        expect(service).toBeTruthy();
    }));

    it('should return null when the operand is not supported by any strategy', inject([CalculatorService], (service: CalculatorService) => {
        const result = service.compute(5, 5, 'invalid');

        expect(result).toBeNull();
    }));

    it('should return the strategy result', inject([CalculatorService], (service: CalculatorService) => {
        const result = service.compute(5, 5, 'valid');

        expect(result).toBe(100);
    }));
});
