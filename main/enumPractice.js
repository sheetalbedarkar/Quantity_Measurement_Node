var Enum = require('enum');

require('enum').register();

var read = require('readline-sync')

var a = read.question('Enter the value :: ')

var myEnum = new Enum({
	footConverter(a) {
		this.a = a;
		return a * 12
	},

	inchConverter(value) {
		return value
	},
});

console.log('sdfbg', myEnum.footConverter(3));
