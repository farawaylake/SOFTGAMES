if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
		return arr.indexOf(item);
    },

    sum : function(arr) {
		var arraySum = 0;
		for (var i = 0; i < arr.length; i++) {
			arraySum = arraySum + arr[i];
		}
		return arraySum;
    },

    remove : function(arr, item) {
		for(var i = 0; i < arr.length; i++){
			if(arr[i]==item) {
				arr.splice(i,1);
				i--;
			}
		}
		return arr;
    },

    removeWithoutCopy : function(arr, item) {
		for(var i = 0; i < arr.length; i++){
			if(arr[i]==item) {
				arr.splice(i,1);
				i--;
			}
		}
		return arr;
    },

    append : function(arr, item) {
		arr.push(item);
		return arr;
    },

    truncate : function(arr) {
		arr.pop();
		return arr;
    },

    prepend : function(arr, item) {
		arr.unshift(item);
		return arr;
    },

    curtail : function(arr) {
		arr.shift();
		return arr;
    },

    concat : function(arr1, arr2) {
		return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
		arr.splice(index, 0, item);
		return arr;
    },

    count : function(arr, item) {
		var count = 0;
		for(var i = 0; i < arr.length; i++){
			if(arr[i]==item) {
				count++;
			}
		}
		return count;
    },

    duplicates : function(arr) {
		var dupArr = [];
		
		for(var i = 0; i < arr.length-1; i++){
			for(var j = i+1; j < arr.length; j++){
				if((arr[i] === arr[j]) && !dupArr.includes(arr[i])){
					dupArr.push(arr[i]);
				}
			}
		}
		return dupArr;
    },

    square : function(arr) {
		for(var i = 0; i < arr.length; i++){
			arr[i] = arr[i]*arr[i];
		}
		return arr;
    },

    findAllOccurrences : function(arr, target) {
		var targetIndexArr = [];
		
		for(var i = 0; i < arr.length; i++){
			if(arr[i]==target) {
				targetIndexArr.push(i);
			}
		}
		return targetIndexArr;
    }
  };
});
