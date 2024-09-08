// Select the theme toggle checkbox
const themeToggle = document.getElementById('themeToggle');

// Load theme based on user's previous choice from localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.checked = true;
}

// Add event listener for the toggle switch
themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        // Switch to dark mode
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark'); // Save preference
    } else {
        // Switch to light mode
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light'); // Save preference
    }
});

const scrollUpButton = document.getElementById('scrollUpButton');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollUpButton.classList.add('show');
    } else {
        scrollUpButton.classList.remove('show');
    }
});

scrollUpButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});