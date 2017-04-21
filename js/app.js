//add user input to a list

function addComment(){
	//store user name input
	var userName = document.getElementById("userName").value;
	//store user comment input
	var userInput = document.getElementById("userComment").value;
	//current time and date comment was posted
	var dt = new Date();
	var utcDate = dt.toLocaleTimeString();
	//create element breaks
	var br = document.createElement('br');

	//create li element
	var li = document.createElement("li");
	//create class for li to be edited in css
	li.className = "liClass"
	//add user name and comment to the li element
	li.innerHTML = userName + ":" + "</br>" + userInput + "</br>" + "Posted at: " + utcDate;
	//put li in my ul element on screen
	document.getElementById("comments").appendChild(li);
	//clear out the input box
	document.getElementById("userName").value = "";
	document.getElementById("userComment").value = "";

}



// var d = new Date();
// document.getElementById("demo").innerHTML = d.toDateString();