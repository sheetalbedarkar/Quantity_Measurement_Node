var assert = require('chai').assert;
var WeightMeasurement = require('../main/weight');

describe('Mass Measurement Test' , function() {

	before(() => {
		weightObject = new WeightMeasurement.Weight();
	});

    it('Given values in 1 kiloGrams and 1000 Grams If equal should return true', function() {
        assert.equal(weightObject.kilogramConvertor(1),weightObject.gramConvertor(1000));
    });

    it('Given values in 1 tonne and 1000 kiloGrams If equal should return true', function() {
        assert.equal(weightObject.tonneConvertor(1),weightObject.kilogramConvertor(1000));
    });

    it('Given values in 1 Tonne and 1000 Grams should return Addition', function() {
        var mass1 = weightObject.tonneConvertor(1);
        var mass2 = weightObject.gramConvertor(1000);
        result = weightObject.add(mass1,mass2);
        assert.equal(result,1001);
    });
});