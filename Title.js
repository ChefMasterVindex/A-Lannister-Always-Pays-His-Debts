/*
A struct that will contain 3 components:
String[] currentTitle
bool isIgnored
String[] originalTitle

Init:
(String[] originalTitleParameter, int shiftNumber)

APIs
String getFirstWord()
String[] getCurrentTitle()
String[] getOriginalTitle()
void ignore()
void include()
*/

var Title = function(originalTitleParameter, shiftNumber) {
	var self = this;
	var originalTitle = originalTitleParameter;
	var currentTitle = shiftOriginalTitle();
	var isIgnored = false;
	
	this.getFirstWord = function() {
		return currentTitle[0];
	}
	
	this.getCurrentTitle = function() {
		return currentTitle.slice(0);
	}
	
	this.getOriginalTitle = function() {
		return originalTitle.slice(0);
	}
	
	this.ignore = () {
		isIgnored = true;
	}
	
	this.include = () {
		isIgnored = false;
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