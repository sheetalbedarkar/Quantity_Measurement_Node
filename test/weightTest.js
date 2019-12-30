var assert = require('chai').assert;
var WeightMeasurement = require('../main/weight');

describe('Mass Measurement Test' , function() {

    it('Given values in 1 kiloGrams and 1000 Grams If equal should return true', function() {
        assert.equal(WeightMeasurement.kilogramConvertor(1),WeightMeasurement.gramConvertor(1000));
    });

    it('Given values in 1 tonne and 1000 kiloGrams If equal should return true', function() {
        assert.equal(WeightMeasurement.tonneConvertor(1),WeightMeasurement.kilogramConvertor(1000));
    });

    it('Given values in 1 Tonne and 1000 Grams should return Addition', function() {
        var mass1 = WeightMeasurement.tonneConvertor(1);
        var mass2 = WeightMeasurement.gramConvertor(1000);
        result = WeightMeasurement.add(mass1,mass2);
        assert.equal(result,1001);
    });
});