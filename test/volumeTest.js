var assert = require('chai').assert;
var VolumeMeasurement = require('../main/volume');

describe('Volume Measurement Test' , function() {

    it('Given values in 1 Gallon  and 3 Litres If equal should return true', function() {
        assert.equal(VolumeMeasurement.gallonConvertor(1),VolumeMeasurement.litresConvertor(3.78));
    });

    it('Given values in 1 Litres  and 1000 ml If equal should return true', function() {
        assert.equal(VolumeMeasurement.litresConvertor(1),VolumeMeasurement.mlConvertor(1000));
    });

    it('Given values in 1 Gallon and 3 Litres should return Addition', function() {
        var volume1 = VolumeMeasurement.gallonConvertor(1);
        var volume2 = VolumeMeasurement.litresConvertor(3.78);
        result = VolumeMeasurement.add(volume1,volume2);
        assert.equal(result,7.56);
    });

    it('Given values in 1 Litres and 1000  ml should return Addition', function() {
        var volume1 = VolumeMeasurement.litresConvertor(1);
        var volume2 = VolumeMeasurement.mlConvertor(1000);
        result = VolumeMeasurement.add(volume1,volume2);
        assert.equal(result,2);
    });
})