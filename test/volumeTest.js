var assert = require('chai').assert;
var VolumeMeasurement = require('../main/volume');

describe('Volume Measurement Test' , function() {

	before(() => {
		volumeObject = new VolumeMeasurement.Volume();
	});

    it('Given values in 1 Gallon  and 3 Litres If equal should return true', function() {
        assert.equal(volumeObject.gallonConvertor(1),volumeObject.litresConvertor(3.78));
    });

    it('Given values in 1 Litres  and 1000 ml If equal should return true', function() {
        assert.equal(volumeObject.litresConvertor(1),volumeObject.mlConvertor(1000));
    });

    it('Given values in 1 Gallon and 3 Litres should return Addition', function() {
        var volume1 = volumeObject.gallonConvertor(1);
        var volume2 = volumeObject.litresConvertor(3.78);
        result = volumeObject.add(volume1,volume2);
        assert.equal(result,7.56);
    });

    it('Given values in 1 Litres and 1000  ml should return Addition', function() {
        var volume1 = volumeObject.litresConvertor(1);
        var volume2 = volumeObject.mlConvertor(1000);
        result = volumeObject.add(volume1,volume2);
        assert.equal(result,2);
    });
})