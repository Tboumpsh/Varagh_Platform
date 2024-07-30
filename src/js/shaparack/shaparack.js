import "/Lib/silverBox/silverBox.min.scss";
import axios from "axios";

import silverBox from "/Lib/silverBox/silverBox.min";

async function handlePurchase(planType, basePrice) {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  if (!user) {
    silverBox({
      position: "top-right",
      alertIcon: "info",
      text: "ابتدا وارد حساب خود شوید",
      centerContent: true,
      showCloseButton: true,
    });
    return;
  }

  const quantity = prompt(
    `برای چه مدت می‌خواهید این پلن (${planType}) را خریداری کنید؟`
  );

  if (!quantity) {
    alert("مدت زمان معتبر وارد کنید.");
    return;
  }

  const finalPrice = basePrice * quantity;
  silverBox({
    title: {
      text: "ثبت محصول",
      alertIcon: "Success",
    },
    text: `قیمت نهایی شما برای پلن ${planType}: ${finalPrice} تومان`,
  });

  const membershipPlan = {
    planType,
    quantity,
    finalPrice,
  };

  try {
    await axios.patch(`http://localhost:3000/user/${user.id}`, {
      membershipPlan,
    });
  } catch (error) {
    silverBox({
      alertIcon: "error",
      text: "مشکلی در ثبت محصول رخ داده است.",
      centerContent: true,
      cancelButton: {
        text: "باشه",
      },
    });
    console.error(error);
  }
}

export default handlePurchase;
