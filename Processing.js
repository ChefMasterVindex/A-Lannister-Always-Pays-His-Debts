/*This component is the main processing unit
Class variables:
	ListOfTitles listOfTitles_
	ListOfWordsToIgnore listOfWordsToIgnore_
Public Methods (APIs):
	void processNewTitles(Title[] listOfNewTitles)
	void processNewWordsToIgnore(String[] listOfNewWordsToIgnore)
	void processTitleRemoval(Title[] listOfRemovedTitles)
	void processWordsToIgnoreRemoval(String[] listOfRemovedWordsToIgnore)
*/

var Processing = function(){
	var listofIncludedTitle_ = new ListOfTitles();
	var listOfIgnoredTitle_ = new ListOfTitles();

	var listOfWordsToIgnore_ = {}; 

	this.addTitles = function(titleObjArr){
		if(Object.prototype.toString.call(titleObjArr) == "[object Array]") return;

		var key;

		for(key in listOfWordsToIgnore_){
			var i;

			for(i = 0; i < titleObjArr.length; i++){
				var titleObj = titleObjArr[i];

				if(titleObj.getFirstWord() == listOfWordsToIgnore_[key]){
					listOfIgnoredTitle_.addTitles([titleObj]);
					titleObjArr.splice(i, 1);
					i--;
				}
			}
		}

		listofIncludedTitle_.addTitles(titleObjArr);

		callOutput();
	}

	this.removeTitles = function(titleObjArr){
		if(Object.prototype.toString.call(titleObjArr) == "[object Array]") return;

		listofIncludedTitle_.removeTitles(titleObjArr);
		listOfIgnoredTitle_.removeTitles(titleObjArr);

		callOutput()
	}

	this.addWordsToIgnore = function(firstWordArr){
		if(Object.prototype.toString.call(firstWordArr) == "[object Array]") return;

		var i;

		for(i = 0; i < firstWordArr; i++){
			var firstWord = firstWordArr[i];

			if(listOfWordsToIgnore_[firstWord] == null){
				listOfWordsToIgnore_[firstWord] = true;

				var ignoredTitlesArr = listofIncludedTitle_.removeTitlesWithFirstWord(firstWord);
				listOfIgnoredTitle_.addTitles(ignoredTitlesArr);
			}
		}
	}

	this.removeWordsToIgnore = function(firstWordArr){
		if(Object.prototype.toString.call(firstWordArr) == "[object Array]") return;

		var i;

		for(i = 0; i < firstWordArr; i++){
			var firstWord = firstWordArr[i];

			if(listOfWordsToIgnore_[firstWord] != null){
				delete listOfWordsToIgnore_[firstWord];

				var includedTitlesArr = listofIgnoredTitle_.removeTitlesWithFirstWord(firstWord);
				listOfIncludedTitle_.addTitles(includedTitlesArr);
			}
		}
	}

	function callOutput(){

	}
}