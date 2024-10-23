// Smooth Scroll for Navigation Links (Top and Footer)
document.querySelectorAll('nav a, .footer-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

// Image Modal for Profile Picture
const profilePic = document.getElementById('profile-pic');
const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-image');
const closeBtn = document.querySelector('.close');

profilePic.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalImg.src = profilePic.src;
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Dark Mode Toggle 
const darkModeToggle = document.getElementById('dark-mode-toggle');

// Check if dark mode is already enabled (stored in local storage)
if (localStorage.getItem('darkMode') === 'enabled') {
    enableDarkMode();
    darkModeToggle.checked = true; // Set the switch to checked if dark mode is enabled
}

// Function to enable dark mode
function enableDarkMode() {
    document.body.classList.add('dark-mode');
    document.querySelector('header').classList.add('dark-mode');
    document.querySelector('nav').classList.add('dark-mode');
    document.querySelector('footer').classList.add('dark-mode');
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('dark-mode');
    });
    localStorage.setItem('darkMode', 'enabled'); // Save preference in local storage
}

// Function to disable dark mode
function disableDarkMode() {
    document.body.classList.remove('dark-mode');
    document.querySelector('header').classList.remove('dark-mode');
    document.querySelector('nav').classList.remove('dark-mode');
    document.querySelector('footer').classList.remove('dark-mode');
    document.querySelectorAll('section').forEach(section => {
        section.classList.remove('dark-mode');
    });
    localStorage.setItem('darkMode', 'disabled'); // Save preference in local storage
}

// Toggle dark mode when the switch is changed
darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});
