var assert = require('chai').assert;
var TemperatureMeasurement = require('../main/temperature');

describe('temperature Measurement Test' , function() {
    it('Given values in 212 fahrenheit and 100 Celsius If equal should return true', function() {
        assert.equal(TemperatureMeasurement.fahrenheitConvertor(212),TemperatureMeasurement.celsiusConvertor(100));
    });
});