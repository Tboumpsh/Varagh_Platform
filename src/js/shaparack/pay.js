import axios from "axios";

/**
 * Initiates the payment process with a test payment gateway.
 *
 * @param {number} amount - The total amount to be paid.
 * @returns {Promise<void>} - A promise that resolves when the payment process has been initiated.
 */
async function initiatePayment(price) {
  const stripe = Stripe(
    "pk_test_51PiEiQRoQTVDUn55sFAy5X5V9Z6NjIun7RfcQdRV424JXHyHrB6ZygCi1tFAESE00KUAGX5yST2Qkdk2DZbySUST00HN8NQAyE"
  ); // Replace with your test publishable key
  try {
    const response = await fetch(
      "https://api.stripe.com/v1/checkout/sessions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Bearer sk_test_51PiEiQRoQTVDUn55nXIARSqx9tlqJ28MKDqht4IiMYV3jJ7wwlLOzuSlOiEYIJaLulGX2wQMKG4bOjcvLinAp3Ka00tLIbaE2F`, // Replace with your test secret key
        },
        body: new URLSearchParams({
          "payment_method_types[]": "card",
          "line_items[0][price_data][currency]": "usd",
          "line_items[0][price_data][product_data][name]": "Test Product",
          "line_items[0][price_data][unit_amount]": price, // Amount in cents (e.g., 1000 for $10.00)
          "line_items[0][quantity]": "1",
          mode: "payment",
          success_url: "http://localhost:3000/success",
          cancel_url: "http://localhost:3000/cancel",
        }),
      }
    );

    const session = await response.json();

    // Redirect to Stripe Checkout
    const { error } = await stripe.redirectToCheckout({
      sessionId: session.id,
    });
    if (error) {
      console.error("Error redirecting to Stripe Checkout:", error);
    }
  } catch (error) {
    console.error("Error creating Stripe Checkout session:", error);
  }
}

export default initiatePayment;
