const form = document.getElementById('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData(form);
    const dataObject = {};
    
    let isFormValid = true;

    for (let [key, value] of formData.entries()) {
        if (value.trim() === '') {
            isFormValid = false;
            break;
        }
        dataObject[key] = value;
    }

    if (isFormValid) {
        localStorage.setItem('userData', JSON.stringify(dataObject));
        alert('Data submitted and stored in local storage!');
        window.location.href = 'blog.html'; // Redirect only if all fields are complete
    } else {
        alert('Please fill out all fields (username, title, and content) before submitting.');
    }
});