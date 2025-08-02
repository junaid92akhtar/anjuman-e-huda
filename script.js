const scriptURL = 'https://script.google.com/macros/s/AKfycbz0zuIQQ3ustzvMm6TacqK1O5DiJOaqbwYQcb9E_EEOA1d__X5Rm2rDn4t_4FBSPBI2/exec'; // ← Yahan tumhara Google Apps Script web app URL aayega

const form = document.forms['contact-form']; // ← Form ka naam 'contact-form' hona chahiye

form.addEventListener('submit', e => {
  e.preventDefault(); // ← Form page reload na kare

  fetch(scriptURL, {
    method: 'POST',
    body: new FormData(form) // ← Form data ko send karta hai
  })
    .then(response => alert("Thank you! your form is submitted successfully."))
    .then(() => window.location.reload()) // ← Submit ke baad page reload
    .catch(error => console.error('Error!', error.message));
});