const form = document.getElementById("contact-form");

const firstNameGroup = document.getElementById("first-name-group");
const lastNameGroup = document.getElementById("last-name-group");   
const emailGroup = document.getElementById("email-group");
const passwordGroup = document.getElementById("password-group");

const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

function validateFirstName() {
    if (firstNameInput.value.trim() === "") {
        firstNameGroup.classList.add("error");
    }
    else {
        firstNameGroup.classList.remove("error");
    }
}

function validateLastName() {
    if (lastNameInput.value.trim() === "") {
        lastNameGroup.classList.add("error");
    }
    else {
        lastNameGroup.classList.remove("error");
    }
}

function validateEmail() {
    const message = emailGroup.querySelector(".error-msg");
    const emailValue = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

    if (emailValue === "") {
        message.textContent = "Email cannot be empty";
        emailGroup.classList.add("error");
    }
    else if (!emailPattern.test(emailValue)) {
        message.textContent = "Looks like this is not an email";
        emailGroup.classList.add("error");
    }
    else {
        message.textContent = "";
        emailGroup.classList.remove("error");
    }

}
function validatePassword() {
    if (passwordInput.value.trim() === "") {
        passwordGroup.classList.add("error");
    }
    else {
        passwordGroup.classList.remove("error");
    }
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    validateFirstName();
    validateLastName();
    validateEmail();
    validatePassword();

    if (!firstNameGroup.classList.contains("error") &&
        !lastNameGroup.classList.contains("error") &&
        !emailGroup.classList.contains("error") &&
        !passwordGroup.classList.contains("error")) {
             alert("Form submitted successfully!");
    }
});

firstNameInput.addEventListener("input", validateFirstName);
lastNameInput.addEventListener("input", validateLastName);
emailInput.addEventListener("input", validateEmail);
passwordInput.addEventListener("input", validatePassword);
