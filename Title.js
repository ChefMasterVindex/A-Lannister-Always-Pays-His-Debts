/*
A struct that will contain 3 components:
String currentTitle
String originalTitle
String firstWord

Init:
(String originalTitleParameter, int shiftNumber)

APIs
String getFirstWord()
String getCurrentTitle()
String getOriginalTitle()
bool equalCurrentTitle(Title)
bool equalOriginalTitle(Title)
int compareTo(Title)
*/

var Title = function(originalTitleParameter, shiftNumber) {
	var self = this;
	var originalTitle = originalTitleParameter;
	var currentTitle = shiftOriginalTitle();
	var firstWord;
	
	this.getFirstWord = function() {
		return firstWord;
	}
	
	this.getCurrentTitle = function() {
		return currentTitle;
	}
	
	this.getOriginalTitle = function() {
		return originalTitle;
	}
	
	
	this.equalCurrentTitle = function(otherTitle) {
		return (self.getCurrentTitle()==otherTitle.getCurrentTitle());
	}
	
	this.equalOriginalTitle = function(otherTitle) {
		return (self.getOriginalTitle()==otherTitle.getOriginalTitle());
	}
	
	this.compareTo = function(otherTitle) {
		if (self.getCurrentTitle()==otherTitle.getCurrentTitle()) {
			return 0;
		} else if (self.getCurrentTitle()>otherTitle.getCurrentTitle()) {
			return 1;
		} else {
			return -1;
		}
	}
	
	
	function shiftOriginalTitle() {
		var oldTitle = originalTitle.split(" ");
		var newTitle = new Array();
		var i;
		for (i=0; i<originalTitle.length; i++) {
			newTitle[(i+shiftNumber)%originalTitle.length()] = originalTitle[i];
		}
		self.firstWord = newTitle[0];
		return newTitle.join(" ");
	}
}