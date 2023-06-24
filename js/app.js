// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
const synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
const speakButton = document.getElementById('speakButton');
const randButton = document.querySelectorAll('.randButton');
const buttonGenerator = document.getElementById('buttonGenerator');
const resetButton = document.getElementById('resetButton');
const textContainer = document.getElementById('textDisplay');

//Arrays
let nouns = ['Turkey', 'mom', 'dad', 'Dog', 'teacher' , 'Elephant' , 'Cat'];
let verbs = ['sat', 'ate', 'dance', 'saw', 'doesnt like' , 'kissed'];
let adjectives = ['funny', 'scary' ,'goofy', 'slimmy', 'barking', 'fat'];
let places = ['moon', 'chair', 'spaghetti', 'soup', 'grass','shoes'];

let story = [];




/* Functions
-------------------------------------------------- */

function getRandom(array) {
	return array[Math.floor(Math.random() * array.length)];
}

function storyGenerator() {
	story = [
		getRandom(nouns),
		getRandom(verbs),
		getRandom(adjectives),
		getRandom(nouns),
		getRandom(places)
	];
	storyDisplay();
}

function storyDisplay() {
	textContainer.textContent = story.join(' ');
}

function speakNow(string) {
	const utterThis = new SpeechSynthesisUtterance(string);
	synth.speak(utterThis);
}


/* Event Listeners
-------------------------------------------------- */
// The click event handler for the button that speaks the text contained in the above var textToSpeak
speakButton.addEventListener('click', function () {
	speakNow(textContainer.textContent);
});

randButton.forEach(function (button, index) {
	button.addEventListener('click', function () {
		let randomWord = '';

		switch (index) {
			case 0:
				randomWord = getRandom(nouns);
				break;
			case 1:
				randomWord = getRandom(verbs);
				break;
			case 2:
				randomWord = getRandom(adjectives);
				break;
			case 3:
				randomWord = getRandom(nouns);
				break;
			case 4:
				randomWord = getRandom(places);
				break;
			default:
				break;
		}

		story[index] = randomWord;
		storyDisplay();
	});
});

buttonGenerator.addEventListener('click', storyGenerator);

resetButton.addEventListener('click', function () {
	story = [];
	storyDisplay();
});
