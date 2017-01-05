import { TestBed, inject } from "@angular/core/testing";
import { CalculatorService } from "./calculator.service";

describe('CalculatorService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [CalculatorService]
        });
    });

    it('should create the service', inject([CalculatorService], (service: CalculatorService) => {
        expect(service).toBeTruthy();
    }));

    it('should return null when the operand is not supported', inject([CalculatorService], (service: CalculatorService) => {
        // Given
        const leftValue = 1;
        const rightValue = 2;
        const operand = 'dummy';

        // When
        const result = service.compute(leftValue, rightValue, operand);

        // Then
        expect(result).toBeNull();
    }));

    it('should return the addition result', inject([CalculatorService], (service: CalculatorService) => {
        const dataProvider = [
            {leftValue: 0, rightValue: 1, expectedValue: 1},
            {leftValue: 1, rightValue: 2, expectedValue: 3},
            {leftValue: 2, rightValue: 3, expectedValue: 5},
            {leftValue: 3, rightValue: 5, expectedValue: 8}
        ];

        // Given
        dataProvider.forEach((data) => {
            // When
            const result = service.compute(data.leftValue, data.rightValue, 'addition');

            // Then
            expect(result).toBe(data.expectedValue);
        });
    }));
});
