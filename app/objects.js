if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
		return fn.call(obj);
    },

    alterObjects : function(constructor, greeting) {

	
		constructor.defineProperty = [greeting,"greeting"];
		
		console.log(constructor);
	

    },

    iterate : function(obj) {

    }
  };
});
