describe('Test lookupChar', () => {
    it('should return undefined if first par is string or second par not a number', () => {
        expect(lookupChar("abv", "abv")).to.be.undefined;
        expect(lookupChar(1, "abv")).to.be.undefined;
        expect(lookupChar(1, 1)).to.be.undefined;
        expect(lookupChar("abv", 1.15)).to.be.undefined;
    })
    it('should return Incorrect index', () => {
        expect(lookupChar("abv", -5)).to.be.equal('Incorrect index');
        expect(lookupChar("abv", 4)).to.be.equal('Incorrect index');
        expect(lookupChar("abv", 25)).to.be.equal('Incorrect index');
    })
    it('should return the character', () => {
        expect(lookupChar("abv", 2)).to.equal('v');
    })
})