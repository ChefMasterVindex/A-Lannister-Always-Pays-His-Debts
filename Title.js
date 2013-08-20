/*
A struct that will contain 3 components:
String currentTitle_
String originalTitle_
String firstWord_
int shiftNumber_

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

var Title = function(originalTitle, shiftNumber) {
	var self_ = this;
	var originalTitle_ = originalTitle;
	var currentTitle_ = shiftOriginalTitle();
	var firstWord_;
	var shiftNumber_ = shiftNumber;
	
	this.getFirstWord = function() {
		return firstWord_;
	}
	
	this.getCurrentTitle = function() {
		return currentTitle_;
	}
	
	this.getOriginalTitle = function() {
		return originalTitle_;
	}
	
	
	this.equalCurrentTitle = function(otherTitle) {
		return (self_.getCurrentTitle()==otherTitle.getCurrentTitle());
	}
	
	this.equalOriginalTitle = function(otherTitle) {
		return (self_.getOriginalTitle()==otherTitle.getOriginalTitle());
	}
	
	this.compareTo = function(otherTitle) {
		if (self_.getCurrentTitle()==otherTitle.getCurrentTitle()) {
			return 0;
		} else if (self_.getCurrentTitle()>otherTitle.getCurrentTitle()) {
			return 1;
		} else {
			return -1;
		}
	}
	
	
	function shiftOriginalTitle() {
		var oldTitle = originalTitle_.split(" ");
		var newTitle = new Array();
		var i;
		for (i=0; i<oldTitle.length; i++) {
			newTitle[(i+shiftNumber)%oldTitle.length] = oldTitle[i];
		}
		self_.firstWord_ = newTitle[0];
		return newTitle.join(" ");
	}
	
}