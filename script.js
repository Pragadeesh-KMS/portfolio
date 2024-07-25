// Add event listener to button
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        // Add animation to button
        button.classList.add('animate');
        setTimeout(() => {
            button.classList.remove('animate');
        }, 500);
    });
});