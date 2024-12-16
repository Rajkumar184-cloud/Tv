// Add event listeners to "See All" buttons (optional)
const seeAllButtons = document.querySelectorAll('.see-all button');

seeAllButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Handle "See All" button click, e.g., navigate to a different page
    console.log('See All button clicked');
  });
});
