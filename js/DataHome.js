// verifying the user's input
function verifyInput(){
	var name = document.getElementById('fname').value;
	var lastName = document.getElementById('lname').value;
	var mail = document.getElementById('mail').value;
	var event = document.getElementById('event').value;
	var phone = document.getElementById('phone').value;
	var alertMsg = "";
	// verifying first name
	if((trim(name) == '')) {
	
		alertMsg = alertMsg + "נא הכניסו שם תקין";
	}
	// verifying last name
	if (trim(lastName) == ''){
		alertMsg = alertMsg + "אנא הכניסו שם משפחה תקין";
	}
	// verifying mail
	if(!isValidEmail(trim(mail))) {
		alertMsg = alertMsg + "\nאנא הכניסו כתובת מייל תקינה";
	}
    // verifying phone number
	if((trim(phone).length!=10)) {
		alertMsg = alertMsg + "\n אנא הכניסו מספר טלפון תקין בעל 10 ספרות";
	}
	// verifying if event has been selected
	if(trim(event)=='notSelected'){
        alertMsg = alertMsg + "\n אנא בחרו את האירוע המבוקש";
    }
	// checks if the error message isnt empty
	if(alertMsg != '') {
		alert (alertMsg);
	}
	// saves user's input from contact us form + prints a confirmation message
	else {
		cleanForm();
		processInfo(name,lastName,mail,phone,event,"blank");
	}
}
// validating email address
function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

// removes spaces before and after str
function trim (str){
     return str.replace (/^\s+|\s+$/g, '');
}
// cleans all fields in form
function cleanForm(){
	document.getElementById('fname').value = '';
	document.getElementById('lname').value = '';
	document.getElementById('mail').value = '';
	document.getElementById('phone').value = '';
	document.getElementById('event').value = 'notSelected';
}

var popupActivated = false; // Variable to track if pop-up has been activated

// pop-Up activation
function openPopup() {
	if (!popupActivated) {
		var randomIndex = Math.floor(Math.random() * 3) + 1; // Generate a random number between 1 and 3
		var popupImg = document.getElementById("popup-img");
		popupImg.src = "media\\popUp" + randomIndex + ".png"; // Set the image source based on the random number
		document.getElementById("popup").style.display = "block";
		document.getElementById("overlay").style.display = "block";
		popupActivated = true; // Set the variable to true once pop-up is activated
	}
}

// pop-Up close
function closePopup() {
	document.getElementById("popup").style.display = "none";
	document.getElementById("overlay").style.display = "none";
}

// reset the popUp
function resetPopup() {
	popupActivated = false;
}