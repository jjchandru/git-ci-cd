import { displayTodayDate } from "../src/util.js";

describe('first sample tests', () => {
    it('should display today date', () => {
        const element = document.createElement('div');
        element.setAttribute('id', 'date');
        document.body.appendChild(element);
        displayTodayDate();
        let date = new Date().toDateString();
        expect(element.innerText).toEqual("incorrect date");
    });
});
