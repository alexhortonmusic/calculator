var add = document.getElementById('add');
var subtract = document.getElementById('subtract');
var multiply = document.getElementById('multiply');
var divide = document.getElementById('divide');
var answerBox = document.getElementById('answerBox');
var a = document.getElementById('a');
var b = document.getElementById('b');

function numToInt () {
	a = parseInt(a.value);
	b = parseInt(b.value);
	console.log("a", a);
}

//-------Event Listeners----//
add.addEventListener('click', function () {
	numToInt();
	answerBox.innerHTML = a + b;
});

subtract.addEventListener('click', function () {
	numToInt();
	answerBox.innerHTML = a - b;
});

multiply.addEventListener('click', function () {
	numToInt();
	answerBox.innerHTML = a * b;
});

divide.addEventListener('click', function () {
	numToInt();
	answerBox.innerHTML = a / b;
});




