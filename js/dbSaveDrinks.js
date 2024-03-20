// proccess' user information from form and stores it in local storage
function processInfo( name, lastName, mail,phone,event,notes) {
	var dbStr = stringify(name,lastName,mail,phone,event,notes);
	localStorage.setItem(phone, dbStr);
}
// creates the strings for every full field in form
function stringify( name, lastName, mail,phone,event,notes) {
	var nameStr = 'name: ' + name;
	var lastNameStr = 'lastName: ' + lastName;
	var mailstr = 'Mail: ' + mail;
	var phoneStr = 'Phone: ' + phone;
	var eventstr = 'Event: ' + event;
    var notesStr = 'Notes: ' + notes;
	var dbStr = '{'+ nameStr + ',' + lastNameStr + ',' + mailstr + ',' + phoneStr + ','+ eventstr  + ','+ notesStr + '}';
	return dbStr;	
}
