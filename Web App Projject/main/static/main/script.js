// Moved from templates/main/script.js
// ========== GLOBAL VARIABLES ==========
let currentUser = null;
// ========== NAVIGATION FUNCTIONS ==========
function navigateTo(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }
}
// ========== LOGIN HANDLING ==========
function handleLogin() {
    const email = document.getElementById('emailInput').value;
    const password = document.getElementById('passwordInput').value;
    if (!email || !password) {
        alert('Please enter both email and password');
        return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return false;
    }
    currentUser = {
        email: email,
        name: email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1)
    };
    navigateTo('splashPage');
    setTimeout(() => {
        navigateTo('successPage');
        setTimeout(() => {
            document.getElementById('displayUsername').textContent = currentUser.name;
            navigateTo('homePage');
        }, 1500);
    }, 2000);
    return false;
}
// ========== ATTENDANCE HANDLING ==========
function handleAttendance() {
    const course = document.getElementById('courseInput').value;
    const matric = document.getElementById('matricInput').value;
    const date = document.getElementById('dateInput').value;
    if (!course || !matric || !date) {
        alert('Please fill in all fields');
        return false;
    }
    const successBox = document.getElementById('successMessage');
    successBox.classList.add('show');
    console.log('Attendance Recorded:', {
        course: course,
        matricNumber: matric,
        date: date,
        timestamp: new Date().toISOString()
    });
    setTimeout(() => {
        successBox.classList.remove('show');
        document.getElementById('attendanceForm').reset();
    }, 5000);
    return false;
}
// ========== LOGOUT HANDLING ==========
function handleLogout() {
    if (confirm('Are you sure you want to log out?')) {
        currentUser = null;
        document.getElementById('emailInput').value = '';
        document.getElementById('passwordInput').value = '';
        document.getElementById('attendanceForm').reset();
        navigateTo('loginPage');
    }
}
// ========== SET TODAY'S DATE AS DEFAULT ==========
window.addEventListener('DOMContentLoaded', function() {
    const dateInput = document.getElementById('dateInput');
    const today = new Date().toISOString().split('T')[0];
    dateInput.value = today;
});
// ========== FORM SUBMISSION HANDLERS ==========
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    handleLogin();
});
document.getElementById('attendanceForm').addEventListener('submit', function(e) {
    e.preventDefault();
    handleAttendance();
});