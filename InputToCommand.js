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
	var processing = new processing();
	var addTitlesBox_;
	var removeTitlesBox_;
	var addWordsToIgnoreBox_;
	var removeWordsToIgnoreBox_;

	this.addTitles = function() {
		var retrievedString = addTitlesBox_.value;
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
		processing.addTitles(titleArray);
	}
	
	this.initBoxes = function(addTitlesBoxString, removeTitlesBoxString, addWordsToIgnoreBoxString, removeWordsToIgnoreBoxString) {
		addTitlesBox_ = document.getElementById(addTitlesBoxString);
		removeTitlesBox_ = document.getElementById(removeTitlesBoxString);
		addWordsToIgnoreBox_ = document.getElementById(addWordsToIgnoreBoxString);
		removeWordsToIgnoreBox_ = document.getElementById(removeWordsToIgnoreBoxString);
	}
	
}