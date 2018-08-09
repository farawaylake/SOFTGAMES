if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
		return fn.apply(this,arr);
    },

    speak : function(fn, obj) {
		return fn.call(obj);
    },

    functionFunction : function(str) {
		var localString = str
		function createOutput(str) {
			return localString + ', ' + str;
		}
		return createOutput;
    },

    makeClosures : function(arr, fn) {
		
    },

    partial : function(fn, str1, str2) {

    },

    useArguments : function(a, b, c, d) {
		var total = 0;

		if (a != null){
			total = total + a;
		}
		if (b != null){
			total = total + b;
		}
		
		if (c != null){
			total = total + c;
		}
		
		if (d != null){
			total = total + d;
		}
		
		return total;
			
    },


    callIt : function(fn, ...args) {
		fn.apply(null,args);
    },

    partialUsingArguments : function(fn) {

    },

    curryIt : function(fn) {

    }
  };
});
