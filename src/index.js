// Your code here
// Step 1: Fetch character data and display in the character bar
document.addEventListener('DOMContentLoaded', () => {
    fetch('/characters') // Fetch character data from the server
    .then(response => response.json()) // Parse the response to JSON
    .then(characters => {
        const characterBar = document.getElementById('character-bar');

        characters.forEach(character => {
            // Create a span tag for each character and set its name
            const characterSpan = document.createElement('span');
            characterSpan.textContent = character.name;
            characterSpan.setAttribute('data-id', character.id); // Store character id on span for later use
               // Append the character name span to the character bar
               characterBar.appendChild(characterSpan);
            });
        })
        .catch(error => console.error('Error fetching characters:', error));
});

// Step 2: Show character details when clicked
document.getElementById('character-bar').addEventListener('click', (event) => {
    const clickedCharacter = event.target;

    if (clickedCharacter.tagName === 'SPAN') {
        const characterId = clickedCharacter.getAttribute('data-id');
              // Fetch the details of the clicked character
              fetch(`/characters/${characterId}`)
              .then(response => response.json())
              .then(character => {
                  const detailedInfo = document.getElementById('detailed-info');
