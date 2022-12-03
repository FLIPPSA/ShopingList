var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function ToogleDoneClass(clicked){
	if(clicked.target.tagName === "LI"){
		clicked.target.classList.toggle("done");
	}
}

function createListElement() {
	var div = document.createElement("div");
	var li = document.createElement("li");
	var delButton = document.createElement("button");
	ul.appendChild(div);
	div.append(li, delButton);
	li.appendChild(document.createTextNode(input.value));
	input.value = "";
	delButton.classList.add("delete");
	delButton.innerHTML='delete';
}

function Delete(clicked){
	if(clicked.target.className === "delete"){
		clicked.target.parentElement.remove();
	}
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function twoOptions(element){
	ToogleDoneClass(element);
	Delete(element);
}

ul.addEventListener("click", twoOptions);
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);