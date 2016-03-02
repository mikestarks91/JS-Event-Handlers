// Grabs an element and changes the color
function turnRed() {
	document.getElementById('example').style.color = "red";
}
// Cuts the elements text string contents in half
function chopInHalf() {
	var element = document.getElementById('example').innerHTML;
	element = element.split('');
	var arr = [];
	for(var i = 0; i < Math.floor(element.length / 2); i++) {
		arr.push(element[i]);
	}
	element = arr.join('');
	document.getElementById('example').innerHTML = element;
}
// Reproduces each element from 'example-box' div
function reproduce() {
	var targetParent = document.getElementById('example-box');
	var origLength = targetParent.children.length;
	for (var i = 0; i < origLength; i++) {
		var child = targetParent.children[i];
		var elementType = child.tagName;
		var type = document.createElement(elementType);
		var node = document.createTextNode(child.innerHTML);
		type.appendChild(node);

		var newElement = document.getElementById('example-box');
		newElement.appendChild(type);
	}
}
// Prevents reproduce() function from executing more than 4 times
var fourTimes = (function() {
	var counter = 4;
	return function() {
		if (counter > 0) {
			reproduce();
			counter--;
		}
		else {
			alert('Refresh the page to avoid killing your browser!');
		}
	};
})();
// Listed event handlers
document.getElementById('red').addEventListener('click', turnRed);

document.getElementById('chop').addEventListener('click', chopInHalf);

document.getElementById('mitosis').addEventListener('click', fourTimes);