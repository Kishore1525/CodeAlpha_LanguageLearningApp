const flashcards = [
  { english: "Hello", tamil: "வணக்கம்" },
  { english: "Thank you", tamil: "நன்றி" },
  { english: "How are you?", tamil: "நீங்கள் எப்படி இருக்கிறீர்கள்?" },
  { english: "Good night", tamil: "இனிய இரவு" },
  { english: "Food", tamil: "உணவு" }
];

let currentIndex = 0;

function showCard(index) {
  document.getElementById("english-word").textContent = flashcards[index].english;
  document.getElementById("translated-word").textContent = flashcards[index].tamil;
  document.getElementById("translated-word").classList.add("hidden");
}

function showTranslation() {
  document.getElementById("translated-word").classList.remove("hidden");
}

function nextCard() {
  if (currentIndex < flashcards.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  showCard(currentIndex);
}

function prevCard() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = flashcards.length - 1;
  }
  showCard(currentIndex);
}

// Initialize with first card
showCard(currentIndex);
