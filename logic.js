document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const usernameInput = document.getElementById('User');
    const titleInput = document.getElementById('Title');
    const contentInput = document.getElementById('Content');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const Uservalue = usernameInput.value;
        const Titlevalue = titleInput.value;
        const Contentvalue = contentInput.value;
        if (!Uservalue || !Titlevalue || !Contentvalue) {
            alert('Please complete all fields in the form.');
            return; // Stop further execution if any field is empty
        }
        console.log('Username:', Uservalue);
        console.log('Title:', Titlevalue);
        console.log('Content:', Contentvalue);
        localStorage.setItem('User', Uservalue);
        localStorage.setItem('Title', Titlevalue);
        localStorage.setItem('Content', Contentvalue);
        usernameInput.value = '';
        titleInput.value = '';
        contentInput.value = '';
        alert('Data submitted and stored in local storage!');
        // Redirect to the posts page
        window.location.href = 'blog.html'; // Replace 'blog.html' with the actual URL of your posts page
    });
    document.getElementById('backButton').addEventListener('click', function(event) {
        event.preventDefault();
        window.history.back();
    });
});