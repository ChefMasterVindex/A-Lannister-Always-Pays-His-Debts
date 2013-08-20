

var ListOfTitles = function(){
	var self = this;
	var titleListObj = {};

	this.addTitles = function(titleObjArr){
		if(Object.prototype.toString.call(titleObjArr) == "[object Array]") return;

		var i;

		for(i = 0; i < titleObjArr.length; i++){
			var titleObj = titleObjArr[i]
			var currTitle = titleObj.getCurrentTitle();

			titleListObj[currTitle] = titleObj;
		}
	}

	this.removeTitles = function(titleObjArr){
		if(Object.prototype.toString.call(titleObjArr) == "[object Array]") return;

		var i;

		for(i = 0; i < titleObjArr.length; i++){
			var titleObj = titleObjArr[i]
			var currTitle = titleObj.getCurrentTitle();

			delete titleListObj[currTitle];
		}
	}

	this.removeTitlesWithFirstWord = function(firstWord){
		if(typeof(firstWord) != "string") return [];

		var removedTitleList = [];
		var key;

		for(key in titleListObj){
			var keyArr = key.split(" ");
			var keyFirstWord = keyArr[0];

			if(keyFirstWord == firstWord){
				removedTitleList.push(titleListObj[key]);
				delete titleListObj[key];
			}
		}

		// Return an array containing the titles removed by this function
		return removedTitleList;
	}

	this.getTitleList = function(){
		return Object.keys(titleListObj).sort();
	}
}