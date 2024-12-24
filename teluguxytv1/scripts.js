document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const key = document.getElementById('key').value;

    // Simple authentication check (for demonstration purposes)
    if (key === 'teluguxyt-day1') { // Replace 'your_secret_key' with your actual key
        localStorage.setItem('loggedIn', 'true');
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid key');
        window.location.href = 'https://t.me/your_telegram_link'; // Replace with your Telegram link
    }
});

document.getElementById('logoutButton').addEventListener('click', function() {
    localStorage.removeItem('loggedIn');
    window.location.href = 'login.html';
});

// Redirect to dashboard if already logged in
if (localStorage.getItem('loggedIn') && window.location.pathname.includes('login.html')) {
    window.location.href = 'dashboard.html';
}

// Redirect to login page if not logged in
if (!localStorage.getItem('loggedIn') && window.location.pathname.includes('dashboard.html')) {
    window.location.href = 'login.html';
}

// Timer and Period Number Logic
function startTimerAndPeriodNumber() {
    const timerElement = document.getElementById('timer');
    const periodElement = document.getElementById('period-number');

    setInterval(() => {
        const now = new Date();
        const timeZoneOffset = 5.5 * 60 * 60 * 1000; // Offset for IST (GMT+5:30)
        const currentTime = new Date(now.getTime() + timeZoneOffset);

        // Calculate remaining seconds in the current minute
        const seconds = currentTime.getUTCSeconds();
        const remainingSeconds = 60 - seconds;

        // Calculate total minutes since 7:30 AM
        const totalMinutes = currentTime.getUTCHours() * 60 + currentTime.getUTCMinutes();
        let adjustedMinutes = totalMinutes - (7 * 60 + 30);
        if (adjustedMinutes < 0) adjustedMinutes += 24 * 60;

        // Period number (yyyyMMdd + 1-minute interval)
        const periodNumber = `${currentTime.getUTCFullYear()}${String(currentTime.getUTCMonth() + 1).padStart(2, '0')}${String(currentTime.getUTCDate()).padStart(2, '0')}0${10001 + adjustedMinutes}`;

        // Update Timer and Period Number
        periodElement.textContent = `Period Number: ${periodNumber}`;
        timerElement.textContent = `Timer: 00:${String(remainingSeconds).padStart(2, '0')}`;
    }, 1000); // Update every second
}

// Call Timer function on page load
document.addEventListener('DOMContentLoaded', () => {
    startTimerAndPeriodNumber();
});
