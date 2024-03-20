// verifying the user's input
function verifyInput(){
	var name = document.getElementById('fname').value;
	var lastName = document.getElementById('lname').value;
	var mail = document.getElementById('mail').value;
	var event = document.getElementById('event').value;
    var notes = document.getElementById('notes').value;
	var phone = document.getElementById('phone').value;
	var alertMsg = "";
	// verifying first name
	if((trim(name) == '')) {
	
		alertMsg = alertMsg + "אנא הכניסו שם תקין";
	}
	// verifying last name
	if (trim(lastName) == ''){
		alertMsg = alertMsg + "\nאנא הכניסו שם משפחה תקין";
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
		var fmsg = " היי " + name + " קיבלנו את פנייתך, נטפל בה בהקדם  "
		myCanvas(fmsg);
		processInfo(name,lastName,mail,phone,event,notes);
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
    document.getElementById('notes').value = '';
	document.getElementById('fmsg').innerHTML = '';	
}
//canvas message function
function myCanvas(fmsg) {
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	ctx.clearRect(0, 0, c.width, c.height);
	ctx.font = "20px Segoe UI";
	ctx.fillText(fmsg,500 ,75);
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