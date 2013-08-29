/*This function convert list of titles to real output in HTML
APIs:
void Output(ListOfTitles listOfTitles)
*/

var Output = function(){
	var TITLE_OUTPUT_P_ID_ = "output-title-p";
	var WORDS_TO_IGNORE_OUTPUT_P_ID_ = "output-words-to-ignore-p";
	var ERROR_OUTPUT_P_ID_ = "output-error-p";

	var self_ = this;

	this.displayTitleOutput = function(titleArr){
		var i;

		for(i = 0; i < titleArr.length; i++){
			document.getElementById(TITLE_OUTPUT_P_ID_).innerHTML =
				document.getElementById(TITLE_OUTPUT_P_ID_).innerHTML + titleArr[i] + "<br/>";
		}
	}
	this.displayWordsToIgnoreOutput = function(wordsToIgnoreArr){
		var i;

		for(i = 0; i < wordsToIgnoreArr.length; i++){
			if(i != 0){
				document.getElementById(WORDS_TO_IGNORE_OUTPUT_P_ID_).innerHTML =
					document.getElementById(WORDS_TO_IGNORE_OUTPUT_P_ID_).innerHTML + ", ";
			}

			document.getElementById(WORDS_TO_IGNORE_OUTPUT_P_ID_).innerHTML =
				document.getElementById(WORDS_TO_IGNORE_OUTPUT_P_ID_).innerHTML + wordsToIgnoreArr[i];
		}

	}
	this.displayErrorOutput = function(errorStr){
		document.getElementById(ERROR_OUTPUT_P_ID_).innerHTML = errorStr;
	}
}