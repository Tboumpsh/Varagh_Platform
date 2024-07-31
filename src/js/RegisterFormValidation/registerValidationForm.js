import "/Lib/silverBox/silverBox.min.scss";

import silverBox from "/Lib/silverBox/silverBox.min";
import checkUserInformation from "./validationForm";

/**
 * Displays a registration form using the `silverBox` library and sets up user validation.
 * 
 * This function uses `silverBox` to show a modal dialog with a custom registration form.
 * The form includes input fields for username and password, and buttons for logging in and registering.
 * After displaying the form, it calls `checkUserInformation()` to set up validation for the input fields.
 * 
 * The registration form includes the following components:
 * - **Custom Icon**: A custom icon is displayed at the top of the modal.
 * - **Title**: The main title of the modal.
 * - **Text**: Instructions for the user to enter their information.
 * - **Footer**: A footer text displayed at the bottom of the modal.
 * - **Confirm Button**: A button labeled "ورود" (Login), which does not close the modal on click.
 * - **Custom Button**: A button labeled "ثبت نام" (Register), which does not close the modal on click.
 * - **Input Fields**: Includes fields for username and password with respective labels, placeholders, and hints.
 * 
 * @async
 * @function showRegisterForm
 * 
 * @returns {void} This function does not return any value. It performs side effects such as displaying a modal and setting up validation.
 */


async function showRegisterForm() {
  silverBox({
    customIcon: "/public/images/header/ei_user.svg",
    title: {
      text: "به پلتفرم ورق خوش آمدید",
    },
    centerContent: true,
    text: "لطفا اطلاعات خود را وارد کنید",
    footer: "ورق پلتفرم آنلایین کتاب",
    confirmButton: {
      text: "ورود",
      closeOnClick: false,
      id: "logInButton",
    },
    showCloseButton: true,
    customButton: {
      text: "ثبت نام",
      closeOnClick: false,
      id: "registerButton",
    },
    

    input: [
      {
        label: "نام کاربری",
        type: "text",
        placeHolder: "نام خود را وارد کنید",
        maxLength: 30,
        id: "userName",
      },
      {
        label: "رمز عبور",
        type: "password",
        placeHolder: "رمز خود را وارد کنید",
        hint: "لطفا رمز قوی را برای امنیت خود انتخاب کنید.",
        id: "password",
      },
    ],
  });


  checkUserInformation();
}

export default showRegisterForm;
