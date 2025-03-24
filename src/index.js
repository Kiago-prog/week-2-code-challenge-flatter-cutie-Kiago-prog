// Your code here
// Global variable to store all character data
let allCharacters = [];
let currentCharacter = null;

// Wait for the DOM to load before executing code
document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('DOMContentLoaded', () => {
        // Get elements from the DOM
        const characterBar = document.getElementById('character-bar');
        const detailedInfo = document.getElementById('detailed-info');
        const nameEl = document.getElementById('name');
        const imageEl = document.getElementById('image');
        const voteCountEl = document.getElementById('vote-count');
        const votesForm = document.getElementById('votes-form');
        const resetBtn = document.getElementById('reset-btn');
          // Initialize the application
  init();