// Wait for DOM content to load before attaching handlers
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('bookingForm');
  const yearSpan = document.getElementById('year');

  // Set current year in footer
  if (yearSpan) {
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
  }

  // Update brand name in header
  // The header contains an h1 with class "logo". Change its text to the business name provided by the user.
  const logoEl = document.querySelector('.logo');
  if (logoEl) {
    logoEl.textContent = 'AutoFxDetailing';
  }

  // Update service prices on the page
  // There are four .service elements with a nested .price span. Update them to the new pricing provided by the user.
  const priceEls = document.querySelectorAll('.service .price');
  if (priceEls.length >= 4) {
    priceEls[0].textContent = '$90';
    priceEls[1].textContent = '$115';
    priceEls[2].textContent = '$185';
    priceEls[3].textContent = 'Starting at $145';
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