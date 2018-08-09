if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    createModule : function(str1, str2) {
		var greeting = str1;
		var name = str2;
		
		function sayIt() {
			greeting = this.greeting;
			name = this.name;
			return greeting + ', ' + name;
		}
		
		return {
			greeting : greeting,
			name : name,
			sayIt: sayIt
		}
		
    }
  }
});

