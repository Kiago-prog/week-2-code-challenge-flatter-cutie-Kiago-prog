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
                  // Clear the previous details and display the new character's details
                detailedInfo.innerHTML = `
                <h2>${character.name}</h2>
                <img src="${character.image}" alt="${character.name}" />
                <p>Votes: <span id="votes-count">${character.votes}</span></p>
            `;
                // Store the character in the element for later vote updates
                detailedInfo.setAttribute('data-character-id', character.id);
                detailedInfo.setAttribute('data-votes', character.votes);
            })
            .catch(error => console.error('Error fetching character details:', error));
    }
});
// Step 3: Add votes when the form is submitted
document.getElementById('votes-form').addEventListener('submit', (event) => {
    event.preventDefault();

    const votesInput = document.getElementById('votes-input');
    const votesToAdd = parseInt(votesInput.value, 10);

    if (!isNaN(votesToAdd) && votesToAdd > 0) {
        const detailedInfo = document.getElementById('detailed-info');
        const currentVotes = parseInt(detailedInfo.getAttribute('data-votes'), 10);
        const newVotes = currentVotes + votesToAdd;
          // Update the votes count in the detailed info
          detailedInfo.setAttribute('data-votes', newVotes);
          document.getElementById('votes-count').textContent = newVotes;
