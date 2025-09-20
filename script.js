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

  // Initialize EmailJS and handle booking form submission
  if (form) {
    try {
      // Initialize EmailJS with your public key. Replace the placeholder string
      // 'YOUR_PUBLIC_KEY' with the actual public key from your EmailJS account.
      emailjs.init('YOUR_PUBLIC_KEY');
    } catch (err) {
      console.warn('EmailJS could not be initialized:', err);
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Collect form values to build custom template parameters. This allows
      // specifying multiple recipients: the business email and the customer's email.
      const nameVal = form.name.value;
      const emailVal = form.email.value;
      const phoneVal = form.phone.value;
      const dateVal = form.date.value;
      const serviceVal = form.service.value;
      const addonsVal = form.addons.value;
      const messageVal = form.message.value;

      // Template parameters: the 'to_email' field includes both the business
      // address and the customer email separated by a comma. EmailJS will send
      // a copy to each recipient if configured accordingly.
      const templateParams = {
        to_email: 'autofx.detailings@gmail.com, ' + emailVal,
        name: nameVal,
        email: emailVal,
        phone: phoneVal,
        date: dateVal,
        service: serviceVal,
        addons: addonsVal,
        message: messageVal
      };

      // Send the email using the template parameters. Replace 'YOUR_SERVICE_ID'
      // and 'YOUR_TEMPLATE_ID' with your actual IDs from EmailJS.
      emailjs
        .send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
        .then(() => {
          alert(
            'Thank you for booking with AutoFxDetailing! We will contact you to confirm your appointment.'
          );
          form.reset();
        })
        .catch((error) => {
          console.error('Error sending booking form:', error);
          alert(
            'There was a problem submitting your booking. Please try again later.'
          );
        });
    });
  }
});