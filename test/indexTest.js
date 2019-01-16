const expect = chai.expect;

// const companyName = 'Scuber';
describe('index.js', function () {
  describe('companyName', function () {
    it('is set as Scuber', function () {
      expect(companyName).to.equal('Scuber');
    });

    it('raises error if the companyName is changed', function () {
      expect(function () { companyName = 'specialCompany' }).to.throw(TypeError);
    });
  });
// let mostProfitableNeighborhood = 'Chelsea';
  describe('mostProfitableNeighborhood', function () {
    it('is declared as equal to Chelsea', function () {
      expect(mostProfitableNeighborhood).to.equal('Chelsea');
    });

    it('does not raise error if the mostProfitableNeighborhood is changed', function () {
      expect(function () { mostProfitableNeighborhood = 'Upper West Side' }).to.not.throw(TypeError);
    });
  });

// let companyCeo = 'Susan Smith';
  describe('companyCeo', function () {
    it('is declared as equal to Susan Smith', function () {
      expect(companyCeo).to.equal('Susan Smith');
    });

    it('does not raise error if the companyCeo is changed', function () {
      expect(function () { companyCeo = 'Lauren Hart' }).to.not.throw(TypeError);
    });
  });
});
