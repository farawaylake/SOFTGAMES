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

    permute: function(arr) {
		var temp = perm(arr);
		//console.log(temp);
		return temp;
    }
  };
});
