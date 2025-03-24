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
    // Add event listener for the votes form
    votesForm.addEventListener('submit', handleVoteSubmit);
      // Add event listener for the reset button
  resetBtn.addEventListener('click', handleResetVotes);
});
// Initialize the application
async function init() {
    try {
      const characters = await fetchCharacters();
      allCharacters = characters;
      displayCharacters(characters);
    } catch (error) {
      console.error('Error initializing application:', error);
    }
  }
  // Fetch characters from the API
async function fetchCharacters() {
    const response = await fetch('http://localhost:3000/characters');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  }