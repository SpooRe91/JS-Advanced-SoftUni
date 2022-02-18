const expect = require('chai').expect;
const companyAdministration = require('./companyAdministration')


describe("Tests …", function () {
    describe("test hiringEmployee method", function () {
        it("successfully", () => {
            expect(companyAdministration.hiringEmployee("gosho", "Programmer", 3)).to.be.equal("gosho was successfully hired for the position Programmer.")
            expect(companyAdministration.hiringEmployee("gosho", "Programmer", 10)).to.be.equal("gosho was successfully hired for the position Programmer.")
        })
        it("not successfully", () => {
            expect(companyAdministration.hiringEmployee("gosho", "Programmer", 0)).to.be.equal("gosho is not approved for this position.")
        })
        it("not successfully", () => {
            expect(()=>companyAdministration.hiringEmployee("gosho", "Builder", 2)).to.throw("We are not looking for workers for this position.")
        })
        
    });

    describe("test calculateSalary method", function () {
        it("invalid hours",()=>{
            expect(()=>companyAdministration.calculateSalary("3")).to.throw("Invalid hours")
            expect(()=>companyAdministration.calculateSalary([])).to.throw("Invalid hours")
            expect(()=>companyAdministration.calculateSalary({})).to.throw("Invalid hours")
            expect(()=>companyAdministration.calculateSalary(-5)).to.throw("Invalid hours")
        })
        it("<160",()=>{
            expect(companyAdministration.calculateSalary(0)).to.be.equal(0)
            expect(companyAdministration.calculateSalary(160)).to.be.equal(2400)
            expect(companyAdministration.calculateSalary(10)).to.be.equal(150)
        })
        it(">160",()=>{
            expect(companyAdministration.calculateSalary(170)).to.be.equal(3550)
        })
    });

    describe("test firedEmployee  method", function () {
        it("successfully",()=>{
            expect(companyAdministration.firedEmployee(["Petar","Ivan","Gosho"],1)).to.be.equal("Petar, Gosho")
            expect(companyAdministration.firedEmployee(["Petar","Ivan","Gosho"],0)).to.be.equal("Ivan, Gosho")
            expect(companyAdministration.firedEmployee(["Petar"],0)).to.be.equal("")
            expect(companyAdministration.firedEmployee(["Petar","Ivan","Gosho"],2)).to.be.equal("Petar, Ivan")
        })
        it("Should throw error if the arguments are not the correct type", function() {
            expect(() => companyAdministration.firedEmployee(['e1', 'e2', 'e3'], -2)).to.throw("Invalid input")
            expect(() => companyAdministration.firedEmployee(['e1', 'e2', 'e3'], 3)).to.throw("Invalid input")
            expect(() => companyAdministration.firedEmployee(['e1', 'e2', 'e3'], -1)).to.throw("Invalid input")
            expect(() => companyAdministration.firedEmployee(['e1', 'e2', 'e3'], -2.3)).to.throw("Invalid input")
            expect(() => companyAdministration.firedEmployee(['e1', 'e2', 'e3'], -1.3)).to.throw("Invalid input")
            expect(() => companyAdministration.firedEmployee(['e1', 'e2', 'e3'], '2')).to.throw("Invalid input")
            expect(() => companyAdministration.firedEmployee(['e1', 'e2', 'e3'], 2.3)).to.throw("Invalid input")
            expect(() => companyAdministration.firedEmployee('e3', 0)).to.throw("Invalid input")
            expect(() => companyAdministration.firedEmployee({}, 0)).to.throw("Invalid input")
            expect(() => companyAdministration.firedEmployee(1, 0)).to.throw("Invalid input")
            expect(() => companyAdministration.firedEmployee(-1, 0)).to.throw("Invalid input")
        });
        
    });
});



