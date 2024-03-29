

//Function to toggle between light and dark mode
function toggleDarkMode() {
    const body = document.body;
    const isDarkMode = !body.classList.contains('dark-mode');
    // Toggle dark mode
    body.classList.toggle('dark-mode', isDarkMode);
    // Adjust button visibility based on dark mode
    const sunButton = document.getElementById('modeToggle');
    const moonButton = document.getElementById('revealButton');
    sunButton.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
    moonButton.style.display = 'block'; // Ensure reveal button is always visible
    // Adjust styles for dark mode
    const sections = document.querySelectorAll('section');
    const titles = document.querySelectorAll('.title');
    sections.forEach(function(section) {
        section.style.border = isDarkMode ? '2px solid white' : ''; // Set border color
    });
    titles.forEach(function(title) {
        title.style.backgroundColor = isDarkMode ? '#000' : ''; // Set background color
        title.style.color = isDarkMode ? '#fff' : ''; // Set text color
    });
}
// Event listener for the toggle button
document.getElementById('modeToggle').addEventListener('click', function() {
    toggleDarkMode();
});
document.getElementById('revealButton').addEventListener('click', function() {
    toggleDarkMode();
});