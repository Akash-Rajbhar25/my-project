document.addEventListener('DOMContentLoaded', () => {
    // Function to handle form submission and store data in local storage
    function handleFormSubmit(event) {
        event.preventDefault(); // Prevent the default form submission

        const form = event.target;
        const formId = form.id;

        // Get the value from the input field
        const input = form.querySelector('input').value;
        if (!input) return; // If input is empty, do nothing

        // Retrieve existing data from local storage
        let data = JSON.parse(localStorage.getItem(formId)) || [];

        // Add new entry
        data.push(input);

        // Save updated data back to local storage
        localStorage.setItem(formId, JSON.stringify(data));

        // Clear the form input
        form.reset();
    }

    // Attach event listeners to all forms
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', handleFormSubmit);
    });
});
