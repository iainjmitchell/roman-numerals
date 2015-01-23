require('chai').should();

var NUMERALS = {
	1 : 'I',
	4 : 'IV',
	5 : 'V',
	9 : 'IX',
	10 : 'X',
	40 : 'XL',
	50 : 'L',
	90 : 'XC',
	100 : 'C',
	500 : 'D',
	900 : 'CM',
	1000 : 'M'
};

Object.keys(NUMERALS).forEach(function(arabicNumber){
	test(arabicNumber + ' should return ' + NUMERALS[arabicNumber], function(){
		new RomanNumeralGenerator(NUMERALS)
			.generate(arabicNumber)
			.should.equal(NUMERALS[arabicNumber]);
	});
});

test('2 should return II', function(){
	new RomanNumeralGenerator(NUMERALS)
		.generate(2)
		.should.equal('II');
});

test('3 should return III', function(){
	new RomanNumeralGenerator(NUMERALS)
		.generate(2)
		.should.equal('II');
});

test('9 should return IX', function(){
	new RomanNumeralGenerator(NUMERALS)
		.generate(9)
		.should.equal('IX');
});

test('66 should return LXVI', function(){
	new RomanNumeralGenerator(NUMERALS)
		.generate(66)
		.should.equal('LXVI');
});

test('1977 should return MCMLXXVII', function(){
	new RomanNumeralGenerator(NUMERALS)
		.generate(1977)
		.should.equal('MCMLXXVII');
});

test('1977 should return MCMLXXVII', function(){
	new RomanNumeralGenerator(NUMERALS)
		.generate(1977)
		.should.equal('MCMLXXVII');
});

test('2290 should return MMCCXC', function(){
	new RomanNumeralGenerator(NUMERALS)
		.generate(2290)
		.should.equal('MMCCXC');
});

var RomanNumeralGenerator = function(numerals){
	this.generate = function(arabicNumber){
		if (arabicNumber === 0){
			return '';
		}
		var closestArabicNumber = findClosestNumberWithNumeral(arabicNumber),
			remainder = arabicNumber - closestArabicNumber;
		return numerals[closestArabicNumber] + this.generate(remainder);	
	};

	function findClosestNumberWithNumeral(arabicNumber){
		return !!numerals[arabicNumber] ? arabicNumber : findClosestNumberWithNumeral(arabicNumber-1);
	}
};