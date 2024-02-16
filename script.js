document.addEventListener('DOMContentLoaded', function() {
    var numberElement = document.getElementById('number'); // Get the element with ID 'number'

    // Set initial number to 9
    numberElement.textContent = '9';

    // Change the number to 7 upon click
    numberElement.addEventListener('click', function() {
        this.textContent = '7';
    });
});
