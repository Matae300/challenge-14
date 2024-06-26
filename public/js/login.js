const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in');
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.signup').addEventListener('click', function () {
      document.querySelector('.signup-form').classList.remove('hidden');
      document.querySelector('.login-form').style.display = 'none';
    });
  });

  async function signupFormHandler(event) {
    event.preventDefault();
    const email = document.querySelector("#email-signup").value.trim();
    const password = document.querySelector("#password-signup").value.trim();
    console.log(email, password);
    if (email && password) {
      const response = await fetch("/api/users", {
        method: "post",
        body: JSON.stringify({
          email,
          password,
        }),
        headers: { "Content-Type": "application/json" },
      });
      // check the response status
      if (response.ok) {
        console.log("success");
      } else {
        alert(response.statusText);
      }
    }
  }