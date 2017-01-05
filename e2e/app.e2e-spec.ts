import { AngularStrategyPatternPage } from "./app.po";

describe('angular-strategy-pattern App', function () {
    let page: AngularStrategyPatternPage;

    beforeEach(() => {
        page = new AngularStrategyPatternPage();
        page.navigateTo();
    });

    it('should display message saying Calculator', () => {
        expect(page.getParagraphText()).toEqual('Calculator');
    });

    it(`should display 'N/A' as result at initial state`, () => {
        // Then
        expect(page.getResultText()).toBe('N/A');
    });

    it('should display the result of the addition', () => {
        // Given
        page.setLeftValue(5);
        page.setRightValue(10);
        page.setOperand('+');

        // When
        page.getCalculateButton().click();

        // Then
        expect(page.getResultText()).toBe('15');
    });

    it('should display the result of the substraction', () => {
        // Given
        page.setLeftValue(5);
        page.setRightValue(10);
        page.setOperand('-');

        // When
        page.getCalculateButton().click();

        // Then
        expect(page.getResultText()).toBe('-5');
    });

    it('should display the result of the multiplication', () => {
        // Given
        page.setLeftValue(5);
        page.setRightValue(10);
        page.setOperand('x');

        // When
        page.getCalculateButton().click();

        // Then
        expect(page.getResultText()).toBe('50');
    });
});
