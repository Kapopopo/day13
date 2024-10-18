function handleSubmit() {

  let firstN = document.getElementById("firstname").value.trim();
  let lastN = document.getElementById("lastname").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let errors = document.getElementById("error");

  errors.textContent = "";

  if (firstN === "") {
    errors.textContent = "First Name must not be empty";
    return false;
  }
  if (lastN === "") {
    errors.textContent = "Last Name must not be empty";
    return false;
  }
  if (email === "") {
    errors.textContent = "Email must not be empty";
    return false;
  }
  if (password === "") {
    errors.textContent = "Password must not be empty";
    return false;
  }
  return true;
}


window.onload = (event) => {
  handleSubmit()
};
