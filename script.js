const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const form = document.getElementById("loginForm");
const passwordInput = document.getElementById("password");
const strengthText = document.getElementById("passwordStrength");

function checkPasswordStrength(password) {
  if (password.length === 0) return "";

  if (password.length < 8) return "Weak";

  const hasLower = /[a-z]/.test(password);
  const hasUpper = /[A-Z]/.test(password);
  const hasDigit = /\d/.test(password);
  const hasSpecial = /[@$!%*?&]/.test(password);

  const score = [hasLower, hasUpper, hasDigit, hasSpecial].filter(
    Boolean,
  ).length;

  if (score >= 3 && password.length >= 8) return "Strong";
  if (score >= 2) return "Mid";
  return "Weak";
}

passwordInput.addEventListener("input", (e) => {
  const strength = checkPasswordStrength(e.target.value);
  strengthText.textContent = strength;

  if (strength === "Weak") strengthText.style.color = "red";
  else if (strength === "Mid") strengthText.style.color = "orange";
  else if (strength === "Strong") strengthText.style.color = "green";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!emailRegex.test(email)) {
    alert("Invalid email");
    return;
  }

  console.log("Username:", username);
  console.log("Email:", email);
  console.log("Password:", password);
  alert("Logged in!");
});
