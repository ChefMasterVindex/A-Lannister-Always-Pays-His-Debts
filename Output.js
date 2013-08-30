/*This function convert list of titles and list of words to ignore to real output in HTML
APIs:
void displayTitleOutput(titleArr)
void displayWordsToIgnoreOutput(wordsToIgnoreArr)
*/

var Output = function(){
	var TITLE_OUTPUT_P_ID_ = "output-title-p";
	var WORDS_TO_IGNORE_OUTPUT_P_ID_ = "output-words-to-ignore-p";

	var self_ = this;

	this.displayTitleOutput = function(titleArr){
		var i, j;

		document.getElementById(TITLE_OUTPUT_P_ID_).innerHTML = "";

		for(i = 0; i < titleArr.length; i++){
			currTitle = titleArr[i];
			currTitleArr = currTitle.split(" ");
			currTitleArr[0] = currTitleArr[0].toUpperCase();
			currTitle = "";

			for(j = 0; j < currTitleArr.length; j++){
				currTitle += currTitleArr[j] + " ";
			}

			currTitle = currTitle.trim();

			document.getElementById(TITLE_OUTPUT_P_ID_).innerHTML =
				document.getElementById(TITLE_OUTPUT_P_ID_).innerHTML + currTitle + "<br/>";
		}
	}
	this.displayWordsToIgnoreOutput = function(wordsToIgnoreArr){
		var i;

		document.getElementById(WORDS_TO_IGNORE_OUTPUT_P_ID_).innerHTML = "";

		for(i = 0; i < wordsToIgnoreArr.length; i++){
			if(i != 0){
				document.getElementById(WORDS_TO_IGNORE_OUTPUT_P_ID_).innerHTML =
					document.getElementById(WORDS_TO_IGNORE_OUTPUT_P_ID_).innerHTML + ", ";
			}

			document.getElementById(WORDS_TO_IGNORE_OUTPUT_P_ID_).innerHTML =
				document.getElementById(WORDS_TO_IGNORE_OUTPUT_P_ID_).innerHTML + wordsToIgnoreArr[i];
		}

	}
}