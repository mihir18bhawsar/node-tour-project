/*eslint-disable*/
import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe(
  'pk_test_51JrIGqSJJjZ6nVgZQfLgVbFnYXI11AKOQd1vqDeVuL6BDipu8zNX8kucpRlji4MYZAzvbYzF0tNx6LqQX5Mp1EW8003ZzZViMQ'
);
export const bookTour = async tourId => {
  try {
    const res = await axios(
      `http://localhost:8000/api/v1/bookings/checkout-session/${tourId}`
    );
    stripe.redirectToCheckout({
      sessionId: res.data.session.id
    });
  } catch (err) {
    // console.log(err);
    showAlert('error', err);
  }
};
