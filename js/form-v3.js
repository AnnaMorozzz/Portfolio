document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.contact-form-v3');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = form.elements['name'].value.trim();
      const email = form.elements['email'].value.trim();
      const message = form.elements['message'].value.trim();
      if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
      }
      // Здесь можно добавить отправку формы через fetch/AJAX
      alert('Thank you! Your message has been sent.');
      form.reset();
    });
  }
}); 