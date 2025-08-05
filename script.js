const scriptURL = 'https://script.google.com/macros/s/AKfycbz0zuIQQ3ustzvMm6TacqK1O5DiJOaqbwYQcb9E_EEOA1d__X5Rm2rDn4t_4FBSPBI2/exec';
const form = document.forms['contact-form'];

// Check login status on page load
window.addEventListener('DOMContentLoaded', () => {
  if (sessionStorage.getItem('loggedIn') === 'true') {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('main-form').style.display = 'block';
  }
});

form.addEventListener('submit', e => {
  e.preventDefault();
  const submitBtn = form.querySelector('button[type="submit"]');
  submitBtn.disabled = true;
  submitBtn.textContent = "Submitting🥱👨‍💻";

  fetch(scriptURL, {
    method: 'POST',
    body: new FormData(form)
  })
    .then(response => {
      alert("Thank you! Your form is submitted successfully.");
      submitBtn.disabled = false;
      submitBtn.textContent = "Submit";
      window.location.reload(); // Reloads the page after submit
    })
    .catch(error => {
      alert('Error submitting form!');
      submitBtn.disabled = false;
      submitBtn.textContent = "Submit";
      console.error('Error!', error.message);
    });
});

document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  if (username === 'admin' && password === '1234') {
    sessionStorage.setItem('loggedIn', 'true');
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('main-form').style.display = 'block';
  } else {
    alert('Invalid credentials!');
  }
});
