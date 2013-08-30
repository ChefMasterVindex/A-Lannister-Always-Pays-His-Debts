var ErrorHandler = function(){
	var ERROR_OUTPUT_P_ID_ = "output-error-p";

	var self_ = this;

	this.clearErrorDisplay = function(){
		document.getElementById(ERROR_OUTPUT_P_ID_).innerHTML = "";
	}

	this.displayError = function(errorStr){
		document.getElementById(ERROR_OUTPUT_P_ID_).innerHTML = errorStr;
	}
}