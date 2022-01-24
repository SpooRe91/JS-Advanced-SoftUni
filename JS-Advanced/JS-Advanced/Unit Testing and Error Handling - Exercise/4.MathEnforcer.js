describe('Test MathEnforcer', () => {
    it('should return undefined', () => {
        expect(mathEnforcer.addFive('hello')).to.be.undefined;
        expect(mathEnforcer.addFive('4')).to.be.undefined;
        expect(mathEnforcer.addFive([1])).to.be.undefined;
        expect(mathEnforcer.subtractTen('hello')).to.be.undefined;
        expect(mathEnforcer.subtractTen([1])).to.be.undefined;
        expect(mathEnforcer.subtractTen('4')).to.be.undefined;
        expect(mathEnforcer.sum('hello', 'abv')).to.be.undefined;
        expect(mathEnforcer.sum(1, 'abv')).to.be.undefined;
        expect(mathEnforcer.sum('hello', 1)).to.be.undefined;
        expect(mathEnforcer.sum(1)).to.be.undefined;

    })
    it('should return num + 5', () => {
        expect(mathEnforcer.addFive(5)).to.be.equal(10);
        expect(mathEnforcer.addFive(5.5)).to.be.closeTo(10.5,0.01);
        expect(mathEnforcer.addFive(-5)).to.be.equal(0);
        
    })
    it('should return num - 10', () => {
        expect(mathEnforcer.subtractTen(15)).to.be.equal(5);
        expect(mathEnforcer.subtractTen(10)).to.be.equal(0);
        expect(mathEnforcer.subtractTen(5)).to.be.equal(-5);
        expect(mathEnforcer.subtractTen(-15)).to.be.equal(-25);
        expect(mathEnforcer.subtractTen(15.5)).to.be.closeTo(5.5,0.01);
    })
    it('should return num1 + num2', () => {
        expect(mathEnforcer.sum(5, 10)).to.be.equal(15);
        expect(mathEnforcer.sum(-5, 10)).to.be.equal(5);
        expect(mathEnforcer.sum(-5, -10)).to.be.equal(-15);
        expect(mathEnforcer.sum(5.5, 10)).to.be.closeTo(15.5,0.01);
        expect(mathEnforcer.sum(5.5, 5.5)).to.be.closeTo(11,0.01);


    })
})