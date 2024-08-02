import calculateTotalPrice from "./calculateTotal";
import initiatePayment from "./pay";

/**
 * Handles the payment process by calculating the total price and initiating the payment.
 *
 * @param {string} userName - The name of the user whose bought list is to be processed.
 * @returns {Promise<void>} - A promise that resolves when the payment process has been completed.
 */
async function handlePayment(userName) {
  try {
    const totalPrice = await calculateTotalPrice(userName);
    if (totalPrice > 0) {
      await initiatePayment(totalPrice);
    } else {
      alert("سبد خرید شما خالی است.");
    }
  } catch (error) {
    console.error("Error handling payment:", error);
    alert("خطایی در فرآیند پرداخت رخ داده است.");
  }
}

export default handlePayment;
