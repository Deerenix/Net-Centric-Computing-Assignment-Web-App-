/**
 * script.js
 * This file contains JavaScript code for the frontend of the web application.
 * 1. Manages global variables and user session state.
 * 2. Handles navigation between different pages or sections.
 * 3. Implements login and authentication logic for users.
 * 4. Provides functions for form validation and user input handling.
 * 5. Updates the DOM dynamically based on user actions.
 * 6. Can be extended to include AJAX requests for backend communication.
 * 7. Organizes code into logical sections for maintainability.
 * 8. Uses event listeners to respond to user interactions.
 * 9. Ensures a responsive and interactive user experience.
 * 10. Keeping this file modular and well-documented improves frontend reliability.
 */
  // ========== GLOBAL VARIABLES ==========
        let currentUser = null;

        // ========== NAVIGATION FUNCTIONS ==========
        function navigateTo(pageId) {
            // Hide all pages
            const pages = document.querySelectorAll('.page');
            pages.forEach(page => page.classList.remove('active'));
            
            // Show target page
            const targetPage = document.getElementById(pageId);
            if (targetPage) {
                targetPage.classList.add('active');
            }
        }

        // ========== LOGIN HANDLING ==========
        function handleLogin() {
            const email = document.getElementById('emailInput').value;
            const password = document.getElementById('passwordInput').value;

            // Basic validation
            if (!email || !password) {
                alert('Please enter both email and password');
                return false;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                return false;
            }

            // Store user info
            currentUser = {
                email: email,
                name: email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1)
            };

            // Show splash screen
            navigateTo('splashPage');

            // After 2 seconds, show success screen
            setTimeout(() => {
                navigateTo('successPage');
                
                // After 1.5 seconds, show home page
                setTimeout(() => {
                    // Update username display
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

            // Validation
            if (!course || !matric || !date) {
                alert('Please fill in all fields');
                return false;
            }

            // Show success message
            const successBox = document.getElementById('successMessage');
            successBox.classList.add('show');

            // Log attendance data (in real app, this would be sent to server)
            console.log('Attendance Recorded:', {
                course: course,
                matricNumber: matric,
                date: date,
                timestamp: new Date().toISOString()
            });

            // Hide success message after 5 seconds
            setTimeout(() => {
                successBox.classList.remove('show');
                // Clear form
                document.getElementById('attendanceForm').reset();
            }, 5000);

            return false;
        }

        // ========== LOGOUT HANDLING ==========
        function handleLogout() {
            if (confirm('Are you sure you want to log out?')) {
                currentUser = null;
                // Clear form inputs
                document.getElementById('emailInput').value = '';
                document.getElementById('passwordInput').value = '';
                document.getElementById('attendanceForm').reset();
                // Navigate to login
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