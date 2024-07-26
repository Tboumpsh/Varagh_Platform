import "/Lib/silverBox/silverBox.min.scss";
import axios from "axios";

import silverBox from "/Lib/silverBox/silverBox.min";
import checkUserInformation from "./validationForm";

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
