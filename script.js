// Age Verification Logic
function handleJuliaVerification(isOfAge) {
    if (isOfAge) {
        document.getElementById('overlay').style.display = 'none';
        sessionStorage.setItem('ageVerified', 'true');
    } else {
        window.location.href = 'https://www.google.com';
    }
}

// Check for saved verification
window.onload = function() {
    if (!sessionStorage.getItem('ageVerified')) {
        document.getElementById('overlay').style.display = 'flex';
    } else {
        document.getElementById('overlay').style.display = 'none';
    }
};
