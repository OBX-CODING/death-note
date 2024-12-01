const nameInput = document.getElementById('nameInput');
const addNameButton = document.getElementById('addName');
const deathList = document.getElementById('deathList');
const writeSound = document.getElementById('writeSound');
const deathSound = document.getElementById('deathSound');

addNameButton.addEventListener('click', () => {
    const name = nameInput.value.trim();

    if (name) {
        // Play writing sound effect
        writeSound.currentTime = 0;
        writeSound.play();

        // Add name to the Death Note
        const listItem = document.createElement('li');
        listItem.textContent = name;

        // Add animation
        listItem.style.color = 'red';

        // Simulate "death effect"
        setTimeout(() => {
            listItem.style.color = 'darkred';
            listItem.style.textShadow = '0px 0px 5px black';
            deathSound.currentTime = 0;
            deathSound.play();
        }, 2000);

        deathList.appendChild(listItem);
        nameInput.value = '';
    } else {
        alert('Please type a name.');
    }
});
