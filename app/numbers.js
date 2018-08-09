if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
		binaryString = num.toString(2);
		return parseInt(binaryString[binaryString.length - bit]);
    },

    base10: function(str) {
		return parseInt(str,2);
    },

    convertToBinary: function(num) {
		binaryString = num.toString(2);
		
		if (binaryString % 4 != 0){
			binaryString = 0 + binaryString;
		}
		
		return binaryString;
    },

    multiply: function(a, b) {
		return +(a*b).toFixed(8);
    }
  };
});

