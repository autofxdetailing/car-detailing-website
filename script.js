// Wait for DOM content to load before attaching handlers
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('bookingForm');
  const yearSpan = document.getElementById('year');

  // Set current year in footer
  if (yearSpan) {
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
  }

  // Handle booking form submission
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      // Simple client-side feedback
      alert(
        'Thank you for booking with Detail Master! We will contact you to confirm your appointment.'
      );
      form.reset();
    });
  }
});