var ListOfTitles = function(){
	var self_ = this;
	var titleListObj_ = {};

	this.addTitles = function(titleObjArr){
		if(Object.prototype.toString.call(titleObjArr) == "[object Array]") return;

		var i;

		for(i = 0; i < titleObjArr.length; i++){
			var titleObj = titleObjArr[i]
			var currTitle = titleObj.getCurrentTitle();

			titleListObj_[currTitle] = titleObj;
		}
	}

	this.removeTitles = function(titleObjArr){
		if(Object.prototype.toString.call(titleObjArr) == "[object Array]") return;

		var i;

		for(i = 0; i < titleObjArr.length; i++){
			var titleObj = titleObjArr[i]
			var currTitle = titleObj.getCurrentTitle();

			delete titleListObj_[currTitle];
		}
	}

	this.removeTitlesWithFirstWord = function(firstWord){
		if(typeof(firstWord) != "string") return [];

		var removedTitleList = [];
		var key;

		for(key in titleListObj_){
			var titleFirstWord = titleListObj_[key].getFirstWord();

			if(titleFirstWord == firstWord){
				removedTitleList.push(titleListObj_[key]);
				delete titleListObj_[key];
			}
		}

		// Return an array containing the titles removed by this function
		return removedTitleList;
	}

	this.getTitleList = function(){
		return Object.keys(titleListObj_).sort();
	}
}