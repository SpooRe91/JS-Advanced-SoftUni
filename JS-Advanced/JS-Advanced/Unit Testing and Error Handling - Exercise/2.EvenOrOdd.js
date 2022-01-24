describe('Test oddOrEven', () => {
    it('Test invalid input', () => {
        expect(isOddOrEven(1)).to.be.undefined;
        expect(isOddOrEven({})).to.be.undefined;
        expect(isOddOrEven([])).to.be.undefined;
    })

    it('Test to return even', () => {
        expect(isOddOrEven("")).to.be.equal('even');
        expect(isOddOrEven("abcd")).to.be.equal('even');
    })

    it('Test to return odd', () => {
        expect(isOddOrEven("abc")).to.be.equal('odd')
    })
})