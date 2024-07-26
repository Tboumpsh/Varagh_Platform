import "/Lib/silverBox/silverBox.min.scss";
import axios from "axios";

import renderLandingPage from "../../../pages/landingPage/renderLandingPage";
import renderAdminPage from "../../../pages/adminPage/renderingAdminPage";
import silverBox from "/Lib/silverBox/silverBox.min";

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
      silverBox({
        title: {
          text: "سلام مدیر",
          alertIcon: "success",
        },
        text: "شما با موفقیت وارد شدید",
      });
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
        renderLandingPage(); // Redirect to the landing page after successful login
      } else {
        silverBox({
          alertIcon: "error",
          text: "رمز یا نام کاربری شما اشتباه است",
          centerContent: true,
          cancelButton: {
                 text: "باشه"
          }
   })
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
        silverBox({
          position: "top-right",
          alertIcon: "info",
          text: "شما قبلا ثبت نام کرده اید",
          centerContent: true,
          showCloseButton: true
   })
      } else {
        const response = await axios.post("http://localhost:3000/user", {
          name: username,
          password: password,
        });
        console.log("User registered successfully:", response.data);
        silverBox({
          title: {
            text: "وارد شدید",
            alertIcon: "success",
          },
          text: "اطلاعات شما ثبت شد.",
        });
      }
    } catch (error) {
      console.error("Error registering user:", error);
    }
  });
}

export default checkUserInformation;
