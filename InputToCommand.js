/*this class bridge between user input in HTML and  processing_
APIs:
void initBoxes(String addTitlesBoxString, String removeTitlesBoxString, String addWordsToIgnoreBoxString, String removeWordsToIgnoreBoxString)
void addTitles()
void removeTitles()
void addWordsToIgnore()
void removeWordsToIgnore()
*/

var InputToCommand = function() {
	var ALPHA_NUM_WHITESPACE_REGEX_ = /^([0-9a-z]|\s)+$/i;

	var self_ = this;
	var processing_ = new Processing();
	var errorHandler_ = new ErrorHandler();
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
		var retrievedString = addTitlesBox_.value.toLowerCase();

		errorHandler_.clearErrorDisplay();
		if(!retrievedString.match(ALPHA_NUM_WHITESPACE_REGEX_)){
			errorHandler_.displayError("Sorry, this application only receives alpha-numeric inputs.");
			return;
		}

		var titleArray = generateTitleArray(retrievedString);
		processing_.addTitles(titleArray);
	}
	
	this.removeTitles = function() {
		var retrievedString = removeTitlesBox_.value.toLowerCase();

		errorHandler_.clearErrorDisplay();
		if(!retrievedString.match(ALPHA_NUM_WHITESPACE_REGEX_)){
			errorHandler_.displayError("Sorry, this application only receives alpha-numeric inputs.");
			return;
		}

		var titleArray = generateTitleArray(retrievedString);
		processing_.removeTitles(titleArray);
	}
	
	this.addWordsToIgnore = function() {
		var retrievedString = addWordsToIgnoreBox_.value.toLowerCase();

		errorHandler_.clearErrorDisplay();
		if(!retrievedString.match(ALPHA_NUM_WHITESPACE_REGEX_)){
			errorHandler_.displayError("Sorry, this application only receives alpha-numeric inputs.");
			return;
		}

		var stringArray = generateStringArray(retrievedString);
		processing_.addWordsToIgnore(stringArray);
	}
	
	this.removeWordsToIgnore = function() {
		var retrievedString = removeWordsToIgnoreBox_.value.toLowerCase();

		errorHandler_.clearErrorDisplay();
		if(!retrievedString.match(ALPHA_NUM_WHITESPACE_REGEX_)){
			errorHandler_.displayError("Sorry, this application only receives alpha-numeric inputs.");
			return;
		}

		var stringArray = generateStringArray(retrievedString);
		processing_.removeWordsToIgnore(stringArray);
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
	
	function generateStringArray(retrievedString) {
		var stringArray = retrievedString.split(" ");
		var i;
		for (i=0; i<stringArray.length; i++) {
			stringArray[i].trim();
		}
		return stringArray;
	}
	
}