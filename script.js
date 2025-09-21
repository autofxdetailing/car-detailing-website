// Initialize EmailJS (public key found in your EmailJS dashboard)
emailjs.init('EvRCTgUoKNbArnga6');

 const heroSection = document.querySelector('.hero');
  if (heroSection) {
    heroSection.style.backgroundImage = "url('hero_supra.png')";
  }

form.addEventListener('submit', (e) => {
  e.preventDefault();

  

  // Collect form values
  const nameVal = form.name.value;
  const emailVal = form.email.value;
  const phoneVal = form.phone.value;
  const dateVal = form.date.value;
  const serviceVal = form.service.value;
  const addonsVal = form.addons.value;
  const messageVal = form.message.value;

  // Build parameters; send to business and customer
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

  // Send via EmailJS using your service and template IDs
  emailjs
    .send('service_xtenz7j', 'template_aztdbjit', templateParams)
    .then(() => {
      alert('Thank you for booking with AutoFxDetailing! We will contact you to confirm your appointment.');
      form.reset();
    })
    .catch((error) => {
      console.error('Error sending booking form:', error);
      alert('There was a problem submitting your booking. Please try again later.');
    });
});
