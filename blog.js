

document.addEventListener('DOMContentLoaded', function() {
    const backButton = document.querySelector('#back button');
    backButton.addEventListener('click', function() {
        window.location.href = 'index.html'; // Redirect to index.html
    });

    // Initial setup to hide the moon button
document.getElementById('revealButton').style.display = 'none';
// Event listener for the sun button (light mode)
document.getElementById('light').addEventListener('click', function() {
    toggleDarkMode();
});
// Event listener for the moon button (dark mode)
document.getElementById('revealButton').addEventListener('click', function() {
    toggleDarkMode();
});


// Function to toggle between light and dark mode
function toggleDarkMode() {
    // Toggle dark mode
    document.body.classList.toggle('dark-mode');
  
  
    // Adjust button visibility based on dark mode
    var sunButton = document.getElementById('light');
    var moonButton = document.getElementById('revealButton');
    sunButton.style.display = (document.body.classList.contains('dark-mode')) ? 'none' : 'block';
    moonButton.style.display = (document.body.classList.contains('dark-mode')) ? 'block' : 'none';
  
  
    // Adjust styles for dark mode
    if (document.body.classList.contains('dark-mode')) {
        // Set border color to white
        var sections = document.querySelectorAll('section');
        sections.forEach(function(section) {
            section.style.border = '2px solid white';
        });

        
        // Set black background and white text for each section
        var titles = document.querySelectorAll('.title1, .title2, .title3, .title4');
        titles.forEach(function(title) {
            title.style.backgroundColor = '#000';
            title.style.color = '#fff';
        });
    } else {
        // Revert styles to default for light mode
        var sections = document.querySelectorAll('section');
        sections.forEach(function(section) {
            section.style.border = ''; // Remove border style
        });
        var titles = document.querySelectorAll('.title1, .title2, .title3, .title4');
        titles.forEach(function(title) {
            title.style.backgroundColor = ''; // Remove background color
            title.style.color = ''; // Remove text color
        });
    }
}
});

