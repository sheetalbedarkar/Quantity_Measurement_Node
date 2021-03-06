var assert = require('chai').assert;
var TemperatureMeasurement = require('../main/temperature');

describe('temperature Measurement Test' , function() {

	before(() => {
		temperatureObject = new TemperatureMeasurement.Temperature();
	});

    it('Given values in 212 fahrenheit and 100 Celsius If equal should return true', function() {
        assert.equal(temperatureObject.fahrenheitConvertor(212),temperatureObject.celsiusConvertor(100));
    });
});