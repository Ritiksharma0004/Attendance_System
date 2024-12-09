document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("submitBtn");

    btn.addEventListener("click", () => {
        const id = document.getElementById("studentID").value;
        console.log(id);

        // Send a POST request to the server
        fetch('/submitID', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ studentID: id })
        })
        .then(response => response.json())
        .then(data => {
            // Redirect to the dashboard after the POST request succeeds
            window.location.href = 'dashboard.html';
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});
