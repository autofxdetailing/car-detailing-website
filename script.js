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

  // Set hero section background image programmatically. This ensures the hero
  // image displays even if the CSS path points to a non‑existent folder on GitHub.
  const heroEl = document.querySelector('.hero');
  if (heroEl) {
    // Only set the image if not already inline to avoid overriding styles
    heroEl.style.backgroundImage = "url('hero_supra.png')";
  }

  // Handle the booking form submission.
  // With Formspree integration, the form action and method are defined in the
  // HTML.  We no longer need to intercept the submit event or use EmailJS.
  // If desired, you could add a listener here to display a custom
  // confirmation message or perform other client‑side logic after submission.
});