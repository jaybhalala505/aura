// navigation bar
function navigationBar() {
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeMenu = document.getElementById('closeMenu');

  // Open mobile menu
  mobileToggle.addEventListener('click', () => {
    mobileMenu.classList.add('show');
  });

  // Close mobile menu
  closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('show');
  });
}

navigationBar();

//custom alert
function customAlert() {
  document.getElementById("custom-alert").style.display = "block";
}

function closeAlert() {
  document.getElementById("custom-alert").style.display = "none";
}

// login from
function loginForm(event) {
  event.preventDefault();  // stops form reload
  var isValid = true;

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  document.getElementById("email-error").innerText = "";
  document.getElementById("password-error").innerText = "";

  if (email === "") {
    document.getElementById("email-error").innerText = "please enter email";
    isValid = false;
  }

  if (password.length < 6) {
    document.getElementById("password-error").innerText = "password must be at least 6 characters";
    isValid = false;
  }

  if (isValid) {
    window.location.href = "index.html";
  }
}

// form validaton

function contactForm(event) {
  event.preventDefault();  // stops form reload
  var isValid = true;

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();

  document.getElementById("name-error").innerText = "";
  document.getElementById("email-error").innerText = "";
  document.getElementById("subject-error").innerText = "";

  if (name === "") {
    document.getElementById("name-error").innerText = "please enter name";
    isValid = false;
  }

  if (email === "") {
    document.getElementById("email-error").innerText = "please enter email";
    isValid = false;
  }

  if (subject === "") {
    document.getElementById("subject-error").innerText = "please enter subject";
    isValid = false;
  }

  if (isValid) {
    customAlert();
  }
}
