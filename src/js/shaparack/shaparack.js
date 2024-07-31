import "/Lib/silverBox/silverBox.min.scss";
import axios from "axios";

import silverBox from "/Lib/silverBox/silverBox.min";
import initiatePayment from "./pay";

/**
 * Handles the purchase of a membership plan by prompting the user for the duration, calculating the final price, and updating the user data.
 * If the user is not logged in, shows an alert to log in first.
 *
 * @async
 * @function handlePurchase
 * @param {string} planType - The type of the membership plan to be purchased.
 * @param {number} basePrice - The base price of the membership plan.
 * @returns {Promise<void>} - A promise that resolves when the purchase is handled.
 * @throws Will throw an error if there is an issue with the HTTP request to update the user data.
 */

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

    // آغاز فرآیند پرداخت بعد از موفقیت در بروزرسانی اطلاعات کاربر
    await initiatePayment(finalPrice);
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
