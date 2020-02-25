function validateForm(){
	var x = document.forms["submit"]["name_data"].value;
	if (x == ""){
		alert("Name must be filled out!");
		return false;
	var a = document.forms["submit"]["email_data"].value;
	if (x==""){
		alert("Email must be filled out")
	}
	
}