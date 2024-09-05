// Array of paragraphs (add your own paragraphs here)
const paragraphs = [
    "The quick brown fox jumps over the lazy dog.",
    "A journey of a thousand miles begins with a single step.",
    "To be or not to be, that is the question."
];

let timeLeft = 60;  // Timer starts with 60 seconds
let timeInterval;   // Variable to store the timer
let isTyping = false;  // To track if typing has started
let mistakes = 0;  // Count the number of mistakes
let charIndex = 0;  // Character index in the current paragraph
let wpm = 0, cpm = 0;  // Words per minute and characters per minute
let correctChars = 0;  // Counter for correct characters
let typedText = '';  // Store typed text

// DOM elements
const typingText = document.querySelector('.typing-text p');
const inputBox = document.querySelector('.input-box');
const timeDisplay = document.querySelector('.Time span b');
const mistakeDisplay = document.querySelector('.mistake span');
const wpmDisplay = document.querySelector('.wpm span');
const cpmDisplay = document.querySelector('.cpm span');
const tryAgainBtn = document.querySelector('button');

// Function to load a random paragraph
function loadParagraph() {
    const randomIndex = Math.floor(Math.random() * paragraphs.length);
    typingText.innerHTML = '';  // Clear previous paragraph
    paragraphs[randomIndex].split('').forEach(char => {
        let span = `<span>${char}</span>`;
        typingText.innerHTML += span;  // Wrap each character in a span
    });
}

// Function to start the timer
function startTimer() {
    timeInterval = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            timeDisplay.textContent = timeLeft;  // Update timer on UI
        } else {
            clearInterval(timeInterval);  // Stop the timer when time is up
            inputBox.disabled = true;  // Disable input after time runs out
            displayFinalStats();  // Display WPM and CPM after time is up
        }
    }, 1000);
}

// Function to handle typing and display mistakes dynamically
function handleTyping(event) {
    const spans = typingText.querySelectorAll('span');  // Get all spans

    // Handle backspace
    if (event.inputType === 'deleteContentBackward' && charIndex > 0) {
        charIndex--;  // Move back by one character
        spans[charIndex].classList.remove('check', 'cross');  // Remove highlight
    } else {
        const typedChar = inputBox.value[charIndex];  // Get current typed character
        if (charIndex < spans.length) {
            let currentChar = spans[charIndex].textContent;  // Get the corresponding character from paragraph

            // If the typed character is correct
            if (typedChar === currentChar) {
                spans[charIndex].classList.add('check');  // Add 'check' class for correct char
                correctChars++;
                cpm++;  // Increase CPM for correct character
                spans[charIndex].style.backgroundColor = '#a9d7a3 ';  // Set background color for correct letter
            } else {
                spans[charIndex].classList.add('cross');  // Add 'cross' class for incorrect char
                mistakes++;  // Increment mistakes for incorrect character
            }

            charIndex++;  // Move to the next character
        }
    }

    // Update typed text in the textarea
    typedText = inputBox.value;  // Store the current input text
    inputBox.value = typedText;  // Reflect the typed text

    // Show mistakes dynamically
    mistakeDisplay.textContent = mistakes;
}

// Function to display WPM and CPM at the end of the timer
function displayFinalStats() {
    wpm = Math.round((correctChars / 5) / ((60 - timeLeft) / 60));  // Calculate WPM based on correct characters
    wpmDisplay.textContent = wpm;
    cpmDisplay.textContent = cpm;  // Show final CPM
}

// Function to reset the game
function resetGame() {
    clearInterval(timeInterval);  // Clear timer
    loadParagraph();  // Load a new random paragraph
    timeLeft = 60;  // Reset time
    charIndex = 0;
    mistakes = 0;
    correctChars = 0;
    wpm = 0;
    cpm = 0;
    isTyping = false;
    typedText = '';  // Reset typed text
    inputBox.disabled = false;  // Enable input
    inputBox.value = '';  // Clear input box
    typingText.querySelectorAll('span').forEach(span => {
        span.classList.remove('check', 'cross');  // Reset span styles
        span.style.backgroundColor = '';  // Reset background color
    });
    timeDisplay.textContent = timeLeft;
    mistakeDisplay.textContent = mistakes;
    wpmDisplay.textContent = wpm;
    cpmDisplay.textContent = cpm;
}

// Initialize paragraph and event listeners
window.onload = loadParagraph;  // Load a paragraph when page loads
inputBox.addEventListener('input', (e) => {
    if (!isTyping) {
        startTimer();  // Start timer when typing starts
        isTyping = true;  // Prevent restarting timer
    }
    handleTyping(e);  // Handle typing logic
});
tryAgainBtn.addEventListener('click', resetGame);  // Reset game on 'Try Again' click

