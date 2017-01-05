import { browser, element, by } from "protractor";

export class AngularStrategyPatternPage {
    navigateTo() {
        return browser.get('/');
    }

    getParagraphText() {
        return element(by.css('app-root h1')).getText();
    }

    getCalculateButton() {
        return element(by.css('button'));
    }

    getResultText() {
        return element(by.css('.calculator__result')).getText();
    }

    setLeftValue(value) {
        const input = element(by.css('input[name=leftValue]'));

        return input.sendKeys(value);
    }

    setRightValue(value) {
        const input = element(by.css('input[name=rightValue]'));

        return input.sendKeys(value);
    }

    setOperand(operand) {
        const option = element(by.cssContainingText('option', operand));

        return option.click();
    }
}
