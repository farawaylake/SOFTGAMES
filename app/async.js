if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {

    },

	//technically returns the expected data - can't figure out how the "then" function (promises?) expects it to return
    manipulateRemoteData : function(url) {
		
		var nameArray = [];
		
		$.getJSON( url, function( jsonObject ) {
		
			for (var key in jsonObject['people']){
				nameArray.push(jsonObject['people'][key]['name']);	
			}
			nameArray.sort();
			
		 });
		 
		return nameArray;
    }
  };
});
