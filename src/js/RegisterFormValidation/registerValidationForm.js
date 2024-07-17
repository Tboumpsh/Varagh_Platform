import "/Lib/silverBox/silverBox.min.scss";
import axios from "axios";

import silverBox from "/Lib/silverBox/silverBox.min";
import checkUserInformation from "./validationForm";

async function showRegisterForm() {
  silverBox({
    customIcon: "/public/images/header/ei_user.svg",
    title: {
      text: "Login",
    },
    centerContent: true,
    text: "Enter your account information",
    footer: "<a href='#'>Forgot your password?</a>",
    showCloseButton: true,
    confirmButton: {
      text: "Login",
      closeOnClick: false,
      id: "logInButton",
    },
    customButton: {
      text: "Register",
      closeOnClick: false,
      id: "registerButton",
    },

    input: [
      {
        label: "Username",
        type: "text",
        placeHolder: "Enter your username",
        maxLength: 30,
        id: "userName",
      },
      {
        label: "Password",
        type: "password",
        placeHolder: "Enter your password",
        hint: "Pick a strong password.",
        id: "password",
      },
    ],
  });

  checkUserInformation();
}

export default showRegisterForm;
