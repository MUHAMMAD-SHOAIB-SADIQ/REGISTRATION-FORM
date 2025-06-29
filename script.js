document.addEventListener("DOMContentLoaded", function () {
  const logo = document.querySelector(".logo");
  const container = document.querySelector(".container");
  const close = document.querySelector(".close");
  const login = document.querySelector("#login");
  const signup = document.querySelector("#signup");
  const loginform = document.querySelector(".loginform");
  const signupform = document.querySelector(".signupform");
  const loginemail = loginform.querySelector("#email");
  const signupemail = signupform.querySelector("#email");
  const loginpassword = loginform.querySelector("#password");
  const signuppassword = signupform.querySelector("#password");
  const confirmpassword = signupform.querySelector("#confirmpassword");
  const loginbtn = loginform.querySelector(".btn");
  const signupbtn = signupform.querySelector(".btn");
  const forget = document.querySelector("#forget");
  const updateEmailBtn = document.querySelector("#bilal");
  const updateEmailBtn1 = document.querySelector("#bilal100");
  const btn100 = document.querySelector(".btn100");
  const loginemail1 = loginform.querySelector("#email100");
  const loginpassword1 = loginform.querySelector("#password100");

  logo.addEventListener("click", function () {
    container.classList.add("shoaib");
  });

  close.addEventListener("click", function () {
    container.classList.remove("shoaib");
  });

  signup.addEventListener("click", function (e) {
    e.preventDefault();
    loginform.style.display = "none";
    signupform.style.display = "block";
  });

  login.addEventListener("click", function (e) {
    e.preventDefault();
    loginform.style.display = "block";
    signupform.style.display = "none";
  });

  const pwhide = document.querySelectorAll(".pw-hide");

  pwhide.forEach((icon) => {
    icon.addEventListener("click", () => {
      const passwordInput = icon.parentElement.querySelector(
        "input[type='password'], input[type='text']"
      );
      if (passwordInput) {
        passwordInput.type =
          passwordInput.type === "password" ? "text" : "password";
        icon.classList.toggle("uil-eye");
        icon.classList.toggle("uil-eye-slash");
      }
    });
  });

  function bilal(password) {
    return password.length <= 100 && password.length >= 8;
  }

  function saveUserToLocalStorage(email, password) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const newUser = { email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
  }

  function getUsersFromLocalStorage() {
    return JSON.parse(localStorage.getItem("users")) || [];
  }

  signupbtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (
      signuppassword.value == "" ||
      confirmpassword.value == "" ||
      signupemail.value == ""
    ) {
      alert("Please fill all the fields");
      return;
    }
    if (signuppassword.value !== confirmpassword.value) {
      alert("Passwords do not match");
      return;
    }
    if (!bilal(signuppassword.value)) {
      alert("Password must be greater than 8 characters");
      return;
    }

    const users = getUsersFromLocalStorage();

    const existingUser = users.find((u) => u.email === signupemail.value);
    if (existingUser) {
      alert("You are already registered. Please log in.");
      return;
    }

    saveUserToLocalStorage(signupemail.value, signuppassword.value);
    alert("Registered successfully");
    loginform.style.display = "block";
    signupform.style.display = "none";
  });

  loginbtn.addEventListener("click", function (e) {
    e.preventDefault();
    const users = getUsersFromLocalStorage();
    const user = users.find(
      (u) => u.email === loginemail.value && u.password === loginpassword.value
    );

    if (user) {
      alert("Login successful");
    } else {
      alert("Invalid password or email");
    }
  });

  forget.addEventListener("click", function (e) {
    e.preventDefault();

    signupemail.value = "";
    signuppassword.value = "";
    confirmpassword.value = "";
    loginemail.value = "";
    loginpassword.value = "";

    const emailToReset = prompt("Enter the email for password reset:");
    if (!emailToReset) return;

    const users = getUsersFromLocalStorage();
    const userToReset = users.find((u) => u.email === emailToReset);

    if (!userToReset) {
      alert("No account found with this email.");
      return;
    }

    const currentPassword = userToReset.password;
    const newPassword = prompt("Enter a new password (8 characters long):");

    if (!newPassword || newPassword.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }

    if (newPassword === currentPassword) {
      alert(
        "Please choose a different password. The new password cannot be the same as the old one."
      );
      return;
    }

    userToReset.password = newPassword;
    localStorage.setItem("users", JSON.stringify(users));

    alert("Password reset successful!");
  });

  updateEmailBtn.addEventListener("click", function (e) {
    e.preventDefault();

    const currentEmail = prompt("Enter your current email");
    if (!currentEmail) return;

    const users = getUsersFromLocalStorage();
    const user = users.find((u) => u.email === currentEmail);

    if (!user) {
      alert("Please sign in first.");
      return;
    }

    const newEmail = prompt("Enter your new email");
    if (!newEmail) return;

    user.email = newEmail;

    localStorage.setItem("users", JSON.stringify(users));
    alert("Email updated successfully!");

    signupemail.value = "";
    signuppassword.value = "";
    confirmpassword.value = "";
    loginemail.value = "";
    loginpassword.value = "";
  });

  updateEmailBtn1.addEventListener("click", function (e) {
    const currentEmail = prompt("Enter your current email");
    if (!currentEmail) return;

    const users = getUsersFromLocalStorage();
    const user = users.find((u) => u.email === currentEmail);

    if (!user) {
      alert("Please sign in first.");
      return;
    }

    const newEmail = prompt("Enter your new email");
    if (!newEmail) return;

    user.email = newEmail;

    localStorage.setItem("users", JSON.stringify(users));
    alert("Email updated successfully!");

    signupemail.value = "";
    signuppassword.value = "";
    confirmpassword.value = "";
    loginemail.value = "";
    loginpassword.value = "";
  });

  btn100.addEventListener("click", function (e) {
    e.preventDefault();
    const users = getUsersFromLocalStorage();
    const user = users.find(
      (u) => u.email === loginemail.value && u.password === loginpassword.value
    );

    if (user) {
      alert("Login successful");
    } else {
      alert("Invalid password or email");
    }
  });
});
