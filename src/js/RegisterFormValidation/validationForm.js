import "/Lib/silverBox/silverBox.min.scss";
import axios from "axios";

import renderLandingPage from "../../../pages/landingPage/renderLandingPage";
import renderAdminPage from "../../../pages/adminPage/renderingAdminPage";
import silverBox from "/Lib/silverBox/silverBox.min";
import removeMassage from "./removeMassage";

/**
 * Sets up event listeners for the login and register buttons on a registration form.
 *
 * This function adds event listeners to the login and register buttons. When the login button is clicked,
 * it checks if the credentials match a hardcoded admin user or if they match any user in the database.
 * If the credentials are correct, it stores the user information in `localStorage` and redirects to the appropriate page.
 * When the register button is clicked, it checks if the username is already registered. If not, it registers
 * the new user and displays a confirmation message.
 *
 * **Login Behavior:**
 * - If the username is "support" and the password is "vara_1382", the user is considered an admin.
 * - Admin users are redirected to the admin page.
 * - Regular users are redirected to the landing page after successful login.
 * - Displays an error message if the credentials are incorrect.
 *
 * **Registration Behavior:**
 * - Checks if the username is already registered.
 * - Registers the new user if the username is not taken and displays a success message.
 * - Displays an information message if the username is already registered.
 *
 * @function checkUserInformation
 *
 * @returns {void} This function does not return a value. It performs side effects such as adding event listeners
 * and interacting with the DOM and external services.
 *
 */

function checkUserInformation() {
  const logInButton = document.getElementById("logInButton");
  const registerButton = document.getElementById("registerButton");

  logInButton.addEventListener("click", async (e) => {
    e.preventDefault();
    const username = document.getElementById("userName").value;
    const password = document.getElementById("password").value;

    if (!username || !password) {
      silverBox({
        alertIcon: "error",
        text: "لطفاً نام کاربری و رمز عبور خود را وارد کنید.",
        centerContent: true,
        cancelButton: {
          text: "باشه",
        },
      });
      removeMassage();
      return;
    }

    if (username === "support" && password === "vara_1382") {
      localStorage.setItem(
        "currentUser",
        JSON.stringify({ username, role: "admin" })
      );
      silverBox({
        title: {
          text: "سلام مدیر",
          alertIcon: "success",
        },
        text: "شما با موفقیت وارد شدید",
      });
      removeMassage();
      renderAdminPage();
      return;
    }

    try {
      const response = await axios.get(
        `http://localhost:3000/user?name=${username}&password=${password}`
      );
      if (response.data.length > 0) {
        localStorage.setItem("currentUser", JSON.stringify(response.data[0]));
        silverBox({
          title: {
            text: "وارد شدید",
            alertIcon: "success",
          },
          text: "شما با موفقیت وارد شدید",
        });
        removeMassage();
        renderLandingPage();
      } else {
        silverBox({
          alertIcon: "error",
          text: "رمز یا نام کاربری شما اشتباه است",
          centerContent: true,
          cancelButton: {
            text: "باشه",
          },
        });
        removeMassage();
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  });

  registerButton.addEventListener("click", async (e) => {
    e.preventDefault();
    const username = document.getElementById("userName").value;
    const password = document.getElementById("password").value;

    if (!username || !password) {
      silverBox({
        alertIcon: "error",
        text: "لطفاً نام کاربری و رمز عبور خود را وارد کنید.",
        centerContent: true,
        cancelButton: {
          text: "باشه",
        },
      });
      removeMassage();
      return;
    }

    try {
      const checkResponse = await axios.get(
        `http://localhost:3000/user?name=${username}`
      );
      if (checkResponse.data.length > 0) {
        silverBox({
          position: "top-right",
          alertIcon: "info",
          text: "شما قبلا ثبت نام کرده اید",
          centerContent: true,
          showCloseButton: true,
        });
        removeMassage();
      } else {
        const response = await axios.post("http://localhost:3000/user", {
          name: username,
          password: password,
        });
        localStorage.setItem("currentUser", JSON.stringify(response.data));
        silverBox({
          title: {
            text: "به ورق خوش آمدید",
            alertIcon: "success",
          },
          text: "ثبت نام شما موفق بود",
        });
        removeMassage();
        renderLandingPage();
      }
    } catch (error) {
      console.error("Error registering user:", error);
    }
  });
}

export default checkUserInformation;
