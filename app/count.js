if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {
		var counter = start;
		
		var timer = setInterval(function(){
		  console.log(counter);
		  counter++;
		  if (counter == end+1) {
			clearInterval(timer);
		  }
		}, 100);	
		
		//get this to work
		//function cancel(){
		//	clearInterval(timer);
		//}
		
		
		
    }
  };
});