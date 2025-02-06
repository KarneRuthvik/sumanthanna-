const typingText = document.querySelector('.typing-animation');
const professions = ["Web Developer", "Software Developer", "UI/UX Designer"];
let index = 0;
let charIndex = 0;

function type() {
  if (charIndex < professions[index].length) {
    typingText.textContent += professions[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100); // Typing speed (100ms per character)
  } else {
    setTimeout(erase, 2000); // Wait 2 seconds before erasing
  }
}

function erase() {
  if (charIndex > 0) {
    typingText.textContent = professions[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50); // Erasing speed (50ms per character)
  } else {
    index = (index + 1) % professions.length; // Move to the next profession
    setTimeout(type, 500); // Wait 0.5 seconds before typing the next profession
  }
}

// Start the typing animation
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(type, 1000); // Start typing after 1 second
});