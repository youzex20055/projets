import React from "react";
import "./payment.css"; // Assuming you have a separate CSS file for styles

const BillingPaymentForm = () => {
  return (
    <div className="container07">
      <form>
        <div className="row">
          <div className="col">
            <h3 className="title">Billing Address</h3>

            <div className="inputBox">
              <span>Full Name:</span>
              <input type="text" placeholder="youssef hdilisse" />
            </div>
            <div className="inputBox">
              <span>Email:</span>
              <input type="email" placeholder="example@example.com" />
            </div>
            <div className="inputBox">
              <span>Address:</span>
              <input type="text" placeholder="Room - Street - Locality" />
            </div>
            <div className="inputBox">
              <span>City:</span>
              <input type="text" placeholder="Safi" />
            </div>

            <div className="flex">
              <div className="inputBox">
                <span>State:</span>
                <input type="text" placeholder="Safi-Marrakech" />
              </div>
              <div className="inputBox">
                <span>Zip Code:</span>
                <input type="text" placeholder="123 456" />
              </div>
            </div>
          </div>

          <div className="col">
            <h3 className="title">Payment</h3>

            <div className="inputBox">
              <span>Cards Accepted:</span>
              <img src="/assets/products/payments.png" alt="Accepted Payment Methods" />
            </div>
            <div className="inputBox">
              <span>Name on Card:</span>
              <input type="text" placeholder="Mr. Youssef" />
            </div>
            <div className="inputBox">
              <span>Credit Card Number:</span>
              <input type="number" placeholder="1111-2222-3333-4444" />
            </div>
            <div className="inputBox">
              <span>Exp Month:</span>
              <input type="text" placeholder="January" />
            </div>

            <div className="flex">
              <div className="inputBox">
                <span>Exp Year:</span>
                <input type="number" placeholder="2022" />
              </div>
              <div className="inputBox">
                <span>CVV:</span>
                <input type="text" placeholder="1234" />
              </div>
            </div>
          </div>
        </div>

        <input type="submit" value="Proceed to Checkout" className="submit-btn" />
      </form>
    </div>
  );
};

export default BillingPaymentForm;

