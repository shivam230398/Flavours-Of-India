// script.js

// Function to display the current date and time
function displayCurrentDateTime() {
    const now = new Date();
    const options = { 
        year: 'numeric', 
        month: '2-digit', 
        day: '2-digit', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        hour12: false 
    };
    const formattedDateTime = now.toLocaleString('en-GB', options).replace(',', ''); // Convert to the desired format
    document.getElementById('datetime').innerText = formattedDateTime;
}

// Call the function on page load
window.onload = function() {
    displayCurrentDateTime();
};