if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
		var fileList = [];
		var requiredFiles = false;

		function createFileList(data, dirName, requiredFiles){

			for (var key in data){
				
				if (typeof data[key] == "object") {
					
					if (data[key,'dir'] == dirName || dirName == null){
						requiredFiles = true;
					}

					createFileList(data[key], dirName, requiredFiles);
					
				}else if (typeof data[key] == "string" && data[key].includes(".") && requiredFiles) {
					fileList.push(data[key]);
					console.log(data[key]);
				}
			}
		
			return fileList;
		}

		return createFileList(data, dirName);

    },

    permute: function(inputArr) {
		var results = [];

		  function permute(arr, memo) {
			var cur, memo = memo || [];

			for (var i = 0; i < arr.length; i++) {
			  cur = arr.splice(i, 1);
			  if (arr.length === 0) {
				results.push(memo.concat(cur));
			  }
			  permute(arr.slice(), memo.concat(cur));
			  arr.splice(i, 0, cur[0]);
			}

			return results;
		  }

		  return permute(inputArr);
    }
  };
});
