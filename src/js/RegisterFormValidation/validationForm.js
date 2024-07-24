import axios from "axios";

import renderLandingPage from "../../../pages/landingPage/renderLandingPage";
import renderAdminPage from "../../../pages/adminPage/renderingAdminPage";

function checkUserInformation() {
  const logInButton = document.getElementById("logInButton");
  const registerButton = document.getElementById("registerButton");

  logInButton.addEventListener("click", async (e) => {
    e.preventDefault();
    const username = document.getElementById("userName").value;
    const password = document.getElementById("password").value;

    if (username === "support" && password === "vara_1382") {
      localStorage.setItem(
        "currentUser",
        JSON.stringify({ username, role: "admin" })
      );
      alert("Welcome, Admin!");
      renderAdminPage();
      return;
    }

    try {
      const response = await axios.get(
        `http://localhost:3000/user?name=${username}&password=${password}`
      );
      if (response.data.length > 0) {
        localStorage.setItem("currentUser", JSON.stringify(response.data[0]));
        alert("Login successful!");
        renderLandingPage();  // Redirect to the landing page after successful login
      } else {
        alert("Invalid username or password");
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  });

  registerButton.addEventListener("click", async (e) => {
    e.preventDefault();
    const username = document.getElementById("userName").value;
    const password = document.getElementById("password").value;

    try {
      const checkResponse = await axios.get(
        `http://localhost:3000/user?name=${username}`
      );
      if (checkResponse.data.length > 0) {
        alert("User already registered with this username.");
      } else {
        const response = await axios.post("http://localhost:3000/user", {
          name: username,
          password: password,
        });
        console.log("User registered successfully:", response.data);
        alert("Registration successful! Please login.");
      }
    } catch (error) {
      console.error("Error registering user:", error);
    }
  });


 

}

export default checkUserInformation;
