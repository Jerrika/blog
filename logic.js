const form = document.getElementById('form');

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const formData = new FormData(form);
            const dataObject = {};

            for (let [key, value] of formData.entries()) {
                dataObject[key] = value;
            }

            localStorage.setItem('userData', JSON.stringify(dataObject));
            alert('Data submitted and stored in local storage!');
        });

//Alert
        document.getElementById('form').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission
        
            // Handle form submission here (e.g., store data, etc.)
        
            // Redirect to the posts page
            window.location.href = 'blog.html'; // Replace 'posts.html' with the actual URL of your posts page
        });

  
