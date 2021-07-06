import DonutMaker from './DonutMaker';

describe('The creation of DonutMaker', () =>{
    test('Does it add a donut?', () => {
        const underTest = new DonutMaker(0,0,0);
        underTest.addDonut();
        expect(underTest.numDonuts).toEqual(1);
    });

    test('Can it purchase an autoclicker AND remove spent donuts?', () =>{
        const underTest = new DonutMaker(100, 0, 0);
        underTest.addAutoClicker();
        expect(underTest.numAutoClickers).toEqual(1);
        expect(underTest.numDonuts).toEqual(0);
    });

    test('Should not allow autoclicker purchase with 99 donuts', () =>{
        const underTest = new DonutMaker (99,0, 0);
        underTest.addAutoClicker();
        expect(underTest.numAutoClickers).toEqual(0);
    });

    test('Will add donuts increase by the amount of autoclickers present when activated', () =>{
        const underTest = new DonutMaker (110, 2, 0);
        underTest.activateAutoClickers();
        expect(underTest.numDonuts).toEqual(112);
    });

    test('Should purchase a donut multiplier AND remove spent donuts', () => {
        const underTest = new DonutMaker(10,0,0);
        underTest.addDonutMultiplier();
        expect(underTest.numDonutMultipliers).toEqual(1);
        expect(underTest.numDonuts).toEqual(0);
    })

});