var assert = require('chai').assert;
var LengthMeasurement = require('../main/length');

describe('Length Measurement Test' , function() {

    it('Given values in 0 Ft and 0 Ft If equal should return true', function() {
        assert.equal(0,LengthMeasurement.feetConvertor(0));
    });

    it('Given values in 0 Ft and 1 Ft  If not equal should return not true', function() {
        assert.notEqual(0,LengthMeasurement.feetConvertor(1));
    });
    
    it('Given values 0 and null in Ft If null should return wrong value', function() {
        assert.isNull(null,LengthMeasurement.feetConvertor(0));
    })

    it('Given values in Feet should return type Number', function() {
        assert.typeOf(LengthMeasurement.feetConvertor(0),'Number');
    })
    
    it('Given values in 0 Inch and 0 Inch If equal should return true', function() {
        assert.equal(0,LengthMeasurement.inchConvertor(0));
    });

    it('Given values in 0 Inch and 1 Inch  If not equal should return true', function() {
        assert.notEqual(0,LengthMeasurement.inchConvertor(1));
    });
    
    it('Given values 0 and null in Inch If null should return wrong value', function() {
        assert.isNull(null,LengthMeasurement.inchConvertor(0));
    });

    it('Given values in Inch should return type Number', function() {
        assert.typeOf(LengthMeasurement.inchConvertor(0),'Number');
    });

    it('Given values in 1 Feet and 1 Inch If not equal should return true', function() {
        assert.notEqual(LengthMeasurement.feetConvertor(1),LengthMeasurement.inchConvertor(1));
    });

    it('Given values in 1 Inch and 1 Feet If not equal should return true', function() {
        assert.notEqual(LengthMeasurement.inchConvertor(1),LengthMeasurement.feetConvertor(1));
    });
    
    it('Given values in 1 Feet and 12 Inch If equal should return True', function() {
        assert.equal(LengthMeasurement.feetConvertor(1), LengthMeasurement.inchConvertor(12));
    });
   
    it('Given values in 12 Inch and 1 Feet If equal should return True', function() {
        assert.equal(LengthMeasurement.inchConvertor(12),LengthMeasurement.feetConvertor(1));
    });

    it('Given values in 3 Feet  and 1 Yard If equal should return True', function() {
        assert.equal(LengthMeasurement.feetConvertor(3),LengthMeasurement.yardConvertor(1));
    });

    it('Given values in 1 Feet  and 1 Yard If not equal should return true', function() {
        assert.notEqual(LengthMeasurement.feetConvertor(1),LengthMeasurement.yardConvertor(1));
    });

    it('Given values in 1 Inch  and 1 Yard If not equal should return true', function() {
        assert.notEqual(LengthMeasurement.inchConvertor(1),LengthMeasurement.yardConvertor(1));
    });

    it('Given values in 1 Yard  and 36 Inch If equal should return true', function() {
        assert.equal(LengthMeasurement.yardConvertor(1),LengthMeasurement.inchConvertor(36));
    });

    it('Given values in 36 Inch and 1 Yard If equal should return true', function() {
        assert.equal(LengthMeasurement.inchConvertor(36),LengthMeasurement.yardConvertor(1));
    });

    it('Given values in 1 Yard and 3 feet If equal should return true', function() {
        assert.equal(LengthMeasurement.yardConvertor(1),LengthMeasurement.feetConvertor(3));
    });

    it('Given values in 2 Inch and 5 cm If equal should return true', function() {
        assert.equal(LengthMeasurement.inchConvertor(2),LengthMeasurement.CmConvertor(5));
    });

    it('Given values in 2 Inch and 2 Inch  should return Addition', function() {
        var length1 = LengthMeasurement.inchConvertor(2);
        var length2 = LengthMeasurement.inchConvertor(2);
        result = LengthMeasurement.add(length1,length2);
        assert.equal(result,4);
    });

    it('Given values in 1 Feet and 1 Feet  should return Addition', function() {
        var length1 = LengthMeasurement.feetConvertor(1);
        var length2 = LengthMeasurement.feetConvertor(1);
        result = LengthMeasurement.add(length1,length2);
        assert.equal(result,24);
    });

    it('Given values in 2 Inch and 2.5 Cm should return Addition', function() {
        var length1 = LengthMeasurement.inchConvertor(2);
        var length2 = LengthMeasurement.CmConvertor(2.5);
        result = LengthMeasurement.add(length1,length2);
        assert.equal(result,3);
    });

    it('Given values in 1 Feet and 2 Inch should return Addition', function() {
        var length1 = LengthMeasurement.feetConvertor(1);
        var length2 = LengthMeasurement.inchConvertor(2);
        result = LengthMeasurement.add(length1,length2);
        assert.equal(result,14);
    });

})