// Array of paragraphs (ai generated paragraphs)
const paragraphs = [
    "Once upon a time, a small kitten named Whiskers got lost in the big city. He wandered through alleys and parks, meowing for help. Finally, a kind lady found him and took him home, giving him a warm bed and a loving family. Whiskers quickly adapted to his new home, exploring every nook and cranny. He made friends with the other pets and became the favorite of the neighborhood children. Every evening, he would curl up on the lady's lap, purring contentedly as she read stories to him. Whiskers knew he had found his forever home.",
  "Timmy found an old pencil in his attic. When he started drawing, the pictures came to life! He drew a castle, a dragon, and a brave knight. Together, they had many adventures before the pencil's magic faded. Timmy cherished every moment, knowing that such magic was rare. He drew a forest where they camped under the stars, a village where they helped the townsfolk, and a sea where they sailed on grand ships. As the pencil's magic waned, Timmy felt grateful for the incredible journey and the friends he had made along the way.",
  "Lily discovered a hidden garden behind her grandmother's house. It was filled with colorful flowers, singing birds, and a sparkling fountain. She spent every afternoon there, reading and dreaming. The garden became her sanctuary, a place where she could escape the worries of the world. She planted new flowers, watched them bloom, and even built a small treehouse. One day, she found a hidden door in the garden wall, leading to an even more magical place filled with wonders she had never imagined.",
  "Alex built a time machine in his garage. He traveled to ancient Egypt, medieval Europe, and the distant future. Each trip taught him something new and exciting about history and science. In Egypt, he helped build a pyramid; in medieval Europe, he learned sword fighting; and in the future, he saw incredible technological advancements. Alex documented his travels in a journal, filled with sketches and notes. His time machine became a portal to endless learning and adventure, and he couldn't wait for his next journey.",
  "In an old mansion, a friendly ghost named Casper lived. He loved playing tricks but never meant any harm. One day, a family moved in, and Casper found a new friend in the youngest child, Emily. They played hide and seek, told stories, and explored the mansion's hidden rooms. Casper showed Emily secret passages and old treasures. Emily, in turn, helped Casper find peace by solving the mystery of his past. Together, they brought joy and laughter to the mansion, making it a home filled with love and friendship.",
  "Sarah's dad built a robot to help around the house. The robot, named Max, could cook, clean, and even help with homework. Max became a beloved member of the family. He learned to play games, tell jokes, and even dance. The family took Max on trips, where he amazed everyone with his abilities. Max's presence brought the family closer together, and they couldn't imagine life without him. He was more than just a helper; he was a friend and a cherished part of their lives.",
  "Deep in the forest, animals could talk and trees could walk. A young girl named Mia discovered this magical place and made friends with a wise old owl and a playful fox. They taught her the secrets of the forest, from finding hidden paths to understanding the language of the trees. Mia spent her days exploring, learning, and helping her new friends. She discovered a hidden waterfall, a grove of ancient trees, and a meadow where unicorns grazed. The forest became her second home, a place of endless wonder and adventure.",
  "Jack and his friends found an old map in their attic. It led them to a hidden pirate treasure on a deserted island. They faced many challenges but finally found the chest filled with gold and jewels. The journey was filled with excitement and danger, from navigating treacherous waters to outsmarting rival treasure hunters. They built a raft, solved riddles, and braved storms. When they finally opened the chest, they found not just treasure but also a sense of accomplishment and the bonds of true friendship.",
  "Tom's bicycle could fly! He soared above the clouds, visiting faraway lands and meeting new friends. His flying adventures were the talk of the town. He visited floating islands, ancient ruins, and bustling cities. Tom's bicycle took him to places he had only dreamed of, and each journey was filled with discovery and excitement. He met people from different cultures, learned new skills, and even helped solve problems in the places he visited. His flying bicycle became a symbol of freedom and adventure.",
  "Bella's dog, Rex, could talk! He shared stories of his adventures and helped Bella solve mysteries in their neighborhood. Together, they became the best detective duo. Rex's keen sense of smell and Bella's sharp mind made them unstoppable. They uncovered hidden secrets, solved puzzles, and brought justice to their community. Their bond grew stronger with each case, and they became local heroes. Rex's ability to talk was a secret they kept, but their adventures were known far and wide.",
  "Emma found an invisible cloak in her attic. She used it to sneak into places and play pranks on her friends. But she also learned the importance of honesty and trust. The cloak gave her the power to explore unseen, but it also taught her valuable lessons. She used it to help others, uncovering secrets and solving problems. Emma realized that with great power came great responsibility. She used the cloak wisely, making a positive impact on those around her and becoming a true hero in her own right.",
  "Sam built a rocket and traveled to Mars. He met friendly aliens and explored the red planet. His journey was filled with excitement and discovery. He collected samples, conducted experiments, and learned about the Martian way of life. The aliens shared their knowledge and technology, and Sam taught them about Earth. Together, they built a bridge of understanding between their worlds. Sam's adventure on Mars was just the beginning of a lifelong quest for knowledge and exploration.",
  "On Halloween, Jake and his friends dared to enter a haunted house. They encountered spooky ghosts and eerie sounds but found out it was all a setup for a fun Halloween party. The house was filled with surprises, from hidden passages to elaborate decorations. They played games, told ghost stories, and enjoyed delicious treats. The haunted house became a place of laughter and joy, and the friends made memories they would cherish forever. Halloween became their favorite holiday, filled with fun and adventure.",
  "Lily discovered a mermaid named Ariel in a hidden lagoon. Ariel shared stories of the underwater world and gave Lily a magical shell that let her breathe underwater. Lily explored the ocean, meeting sea creatures and discovering coral reefs. She swam with dolphins, explored shipwrecks, and learned about marine life. Ariel and Lily became close friends, sharing their worlds and adventures. The lagoon became a place of wonder and magic, where dreams came true and friendships blossomed.",
  "Tim found a dinosaur egg in his backyard. It hatched into a baby T-Rex! Tim had to keep it a secret while figuring out how to care for his unusual pet. He built a special enclosure, learned about dinosaur diets, and even taught the T-Rex tricks. The dinosaur grew quickly, and Tim faced challenges in keeping it hidden. But the bond between them was strong, and they shared many adventures. Tim's backyard became a prehistoric playground, filled with excitement and discovery.",
  "Ben became an apprentice to a wise old wizard. He learned spells, potions, and magical creatures. His training was filled with wonder and challenges. Ben practiced tirelessly, mastering new skills and facing tests of courage and wisdom. He befriended magical creatures, explored enchanted forests, and uncovered ancient secrets. The wizard's teachings guided him, and Ben grew into a powerful and wise magician. His journey was one of growth, discovery, and the pursuit of knowledge.",
  "Anna found a book that transported her into fairy tales. She met Cinderella, Snow White, and other characters, helping them with their adventures. Each story was a new world, filled with magic and wonder. Anna solved problems, faced villains, and made friends with the characters she had always admired. The book became her gateway to endless adventures, and she cherished every moment. Her experiences in the fairy tales taught her valuable lessons and filled her life with joy and excitement.",
  "Max discovered he had superpowers and was invited to a school for young superheroes. He trained with other kids, learning to control his powers and fight villains. The school was a place of excitement and challenge, filled with training sessions, missions, and teamwork. Max made friends with other young heroes, each with unique abilities. Together, they faced threats, protected their city, and grew into true heroes. The school became a second home, where Max learned the values of courage, friendship, and responsibility.",
  "Sophie found a mirror that showed her different worlds. She could step through it and explore enchanted lands, meeting fairies, dragons, and knights. Each world was a new adventure, filled with magic and mystery. Sophie helped solve problems, uncover secrets, and bring peace to the lands she visited. The mirror became her portal to endless exploration, and she cherished every journey. Her adventures taught her about bravery, kindness, and the beauty of the unknown."
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
const modal = document.querySelector('.result-modal');
const modalContent = document.querySelector('.result-modal .content');

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
                spans[charIndex].style.backgroundColor = '#81cb78e5';  // Set background color for correct letter
            } else {
                spans[charIndex].classList.add('cross');  // Add 'cross' class for incorrect char
                mistakes++;  // Increment mistakes for incorrect character
            }

            charIndex++;  // Move to the next character

            // Disable textarea if all characters are typed
            if (charIndex === spans.length) {
                inputBox.disabled = true;
                clearInterval(timeInterval);  // Stop the timer
                displayFinalStats();  // Show final results
            }
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

    // Show the modal with results
    modalContent.innerHTML = `<p>WPM: ${wpm}</p><p>CPM: ${cpm}</p>`;
    modal.classList.add('show');
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
    modal.classList.remove('show');  // Hide the modal
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
