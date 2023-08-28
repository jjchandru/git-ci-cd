import { displayTodayDate } from "../src/sample.js";

describe('first sample tests', () => {
    it('should be true', () => {
        expect(true).toBe(true);
    });
    it('should display today date', () => {
        const element = document.createElement('div');
        element.setAttribute('id', 'date');
        document.body.appendChild(element);
        displayTodayDate();
        let date = new Date().toDateString();
    });
});
