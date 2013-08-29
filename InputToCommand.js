/*this class bridge between user input in HTML and  processing
APIs:
void addWordsToIgnore (String input)
void removeWordsToIgnore (String input)
void addTitles (String input)
void removeTitles (String input)
*/

var InputToCommand = function() {
	
	var self_ = this;
	var processing = new processing();
	var addWordsToIgnoreBox_ = document.getElementById("ADD_WORDS_TO_IGNORE_BOX")
	var removeWordsToIgnoreBox_ = document.getElementById("REMOVE_WORDS_TO_IGNORE_BOX")
	var addTitlesBox_ = document.getElementById("ADD_TITLES_BOX")
	var removeTitlesBox_ = document.getElementById("REMOVE_TITLES_BOX")

	this.addTitles = function() {
		var retrievedString = addTitlesBox.value;
		var stringArray = retrieveString.split("\n");
		var titleArray = new Array();
		var i;
		var j;
		var numberOfWords;
		for (i=0; i<stringArray.length; i++) {
			stringArray[i] = stringArray[i].trim();
			numberOfWords = stringArray[i].split(" ").length;
			for (j=0; j<numberOfWords; i++) {
				titleArray.add(new Title(stringArray[i], j));
			}
		}
		processing.addTitles(titleArray);
	}
	
}