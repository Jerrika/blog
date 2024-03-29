
document.addEventListener('DOMContentLoaded', function() {
    const title4 = document.querySelector('.title4');
    // Retrieve data from localStorage
    const user = localStorage.getItem('User');
    const title = localStorage.getItem('Title');
    const content = localStorage.getItem('Content');
    // Update the elements in the title4 section with the data from localStorage
    title4.querySelector('h4').textTitle = title;
    title4.querySelector('p#Content').textContent = content;
    title4.querySelector('p#User').textUser = `Posted by: ${user}`;
});
document.addEventListener('DOMContentLoaded', function() {
    const backButton = document.querySelector('#back button');
    backButton.addEventListener('click', function() {
        window.location.href = 'index.html'; // Redirect to index.html
    });
});