/*
A struct that will contain 3 components:
String[] currentTitle
String[] originalTitle

Init:
(String[] originalTitleParameter, int shiftNumber)

APIs
String getFirstWord()
String[] getCurrentTitle()
String[] getOriginalTitle()
bool equalCurrentTitle(Title)
bool equalOriginalTitle(Title)
*/

var Title = function(originalTitleParameter, shiftNumber) {
	var self = this;
	var originalTitle = originalTitleParameter;
	var currentTitle = shiftOriginalTitle();
	
	this.getFirstWord = function() {
		return currentTitle[0];
	}
	
	this.getCurrentTitle = function() {
		return currentTitle.slice(0);
	}
	
	this.getOriginalTitle = function() {
		return originalTitle.slice(0);
	}
	
	
	this.equalCurrentTitle = function(otherTitle) {
		var i;
		if (self.currentTitle.length==othertTitle.currentTitle.length) {
			for (i=0; i<self.currentTitle.length; i++) {
				if (self.currentTitle[i]!=otherTitle.currentTitle[i]) {
					return false;
				}
			}
			return true;
		} else {
			return false;
		}
	}
	
	this.equalOriginaltTitle = function(otherTitle) {
		var i;
		if (self.originalTitle.length==otherTitle.originalTitle.length) {
			for (i=0; i<self.originalTitle.length; i++) {
				if (self.originalTitle[i]!=otherTitle.originalTitle[i]) {
					return false;
				}
			}
			return true;
		} else {
			return false;
		}
	}
	
	
	function shiftOriginalTitle() {
		var newTitle = new Array();
		var i;
		for (i=0; i<originalTitle.length; i++) {
			newTitle[(i+shiftNumber)%originalTitle.length()] = originalTitle[i];
		}
		return newTitle;
	}
}