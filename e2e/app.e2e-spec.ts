import { AngularStrategyPatternPage } from "./app.po";

describe('angular-strategy-pattern App', function () {
    let page: AngularStrategyPatternPage;

    beforeEach(() => {
        page = new AngularStrategyPatternPage();
    });

    it('should display message saying Calculator', () => {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('Calculator');
    });
});
