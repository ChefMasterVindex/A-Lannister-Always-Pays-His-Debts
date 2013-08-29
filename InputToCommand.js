/*this class bridge between user input in HTML and  processing
APIs:
void initBoxes(String addTitlesBoxString, String removeTitlesBoxString, String addWordsToIgnoreBoxString, String removeWordsToIgnoreBoxString)
void addWordsToIgnore()
void removeWordsToIgnore()
void addTitles()
void removeTitles()
*/

var InputToCommand = function() {
	
	var self_ = this;
	var processing = new Processing();
	var addTitlesBox_;
	var removeTitlesBox_;
	var addWordsToIgnoreBox_;
	var removeWordsToIgnoreBox_;

	this.initBoxes = function(addTitlesBoxString, removeTitlesBoxString, addWordsToIgnoreBoxString, removeWordsToIgnoreBoxString) {
		addTitlesBox_ = document.getElementById(addTitlesBoxString);
		removeTitlesBox_ = document.getElementById(removeTitlesBoxString);
		addWordsToIgnoreBox_ = document.getElementById(addWordsToIgnoreBoxString);
		removeWordsToIgnoreBox_ = document.getElementById(removeWordsToIgnoreBoxString);
	}
	
	
	this.addTitles = function() {
		var retrievedString = addTitlesBox_.value;
		var titleArray = generateTitleArray(retrievedString);
		processing.addTitles(titleArray);
	}
	
	this.removeTitles = function() {
		var retrievedString = addTitlesBox_.value;
		var titleArray = generateTitleArray(retrievedString);
		processing.removeTitles(titleArray);
	}
	
	function generateTitleArray(retrievedString) {
		var stringArray = retrievedString.split("\n");
		var titleArray = new Array();
		var i;
		var j;
		var numberOfWords;
		for (i=0; i<stringArray.length; i++) {
			stringArray[i] = stringArray[i].trim();
			numberOfWords = stringArray[i].split(" ").length;
			for (j=0; j<numberOfWords; j++) {
				titleArray.push(new Title(stringArray[i], j));
			}
		}
		return titleArray;
	}
	
}