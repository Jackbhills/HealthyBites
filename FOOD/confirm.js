// Function to get URL parameters
function getUrlParams() {
    const params = {};
    const queryString = window.location.search.substring(1);
    const regex = /([^&=]+)=([^&]*)/g;
    let m;

    while (m = regex.exec(queryString)) {
        params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
    }
    return params;
}

// Get reservation details from URL parameters
const params = getUrlParams();
document.getElementById('confirm-name').textContent = params.name || 'N/A';
document.getElementById('confirm-date').textContent = params.date || 'N/A';
document.getElementById('confirm-time').textContent = params.time || 'N/A';
document.getElementById('confirm-people').textContent = params.people || 'N/A';


document.getElementById('reservation-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get form values
    const name = document.getElementById('res-name').value;
    const date = document.getElementById('res-date').value;
    const time = document.getElementById('res-time').value;
    const people = document.getElementById('res-people').value;

    // Redirect to confirmation page with parameters
    window.location.href = `confirmation.html?name=${encodeURIComponent(name)}&date=${encodeURIComponent(date)}&time=${encodeURIComponent(time)}&people=${encodeURIComponent(people)}`;
});