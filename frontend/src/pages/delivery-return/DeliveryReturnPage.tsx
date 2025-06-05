
import React from "react";
import LayoutV5 from "../../components/layouts/LayoutV5";

const DeliveryReturnPage = () => {
  return (
    <LayoutV5 breadCrumb="delivery-return" title="Delivery & Returns">
      <div className="about-style-one-area default-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="about-style-one-info">
              <h4 className="sub-heading">Our Policy</h4>
              
                <h2 className="title">Returns and Refunds Policy</h2>
                <section className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    1. Return Eligibility
                  </h3>
                  <p>
                    At Sytro, we strive to ensure your complete satisfaction with
                    every purchase. If you are not entirely satisfied with your
                    order, we’re here to help. You have 15 days from the date of
                    delivery to initiate a return.
                  </p>
                  <ul className="tag-list">
                    <li>To be eligible for a return, the product must be:</li>
                    <ul
                      style={{
                        listStyleType: "disc",
                        marginLeft: 20,
                        color: "#fff",
                        fontSize: "1em",
                        lineHeight: "1.6",
                      }}
                    >
                      <li>Unused</li>
                      <li>In its original packaging</li>
                      <li>With all tags attached</li>
                    </ul>
                  </ul>
                </section>
              </div>
              <div className="content mt-50">
                <section className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    2. How to Initiate a Return
                  </h3>
                  <p>
                    To initiate a return, please contact us within 15 days of
                    receiving your order. You can reach us via:
                  </p>
                  <ul className="tag-list">
                    <li>
                      <b>Email: </b>sytrobags@gmail.com
                    </li>
                    <li>
                      <b>Phone: </b>+91 72933 33483
                    </li>
                    <li>
                      <b>WhatsApp: </b>+91 72933 33483
                    </li>
                  </ul>
                  <p>Provide the following details:</p>
                  <ul className="tag-list">
                    <li>Your order number</li>
                    <li>Product details</li>
                    <li>Reason for return</li>
                  </ul>
                  <p>
                    Once your return request is approved, we will provide
                    instructions on how to return the product.
                  </p>
                </section>
                <section className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    3. Return Shipping
                  </h3>
                  <p>
                    Sytro will cover the cost of return shipping. We will provide
                    a return shipping label or arrange for a pickup, depending on
                    your location.
                  </p>
                </section>
                <section className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    4. Refund Process
                  </h3>
                  <ul className="tag-list">
                    <li>
                      Once we receive and inspect the returned product, we will
                      notify you of the approval or rejection of your refund.
                    </li>
                    <li>
                      If approved, your refund will be processed within 3-5
                      business days.
                    </li>
                    <li>
                      Refunds will be issued through the original payment method
                      or via bank transfer, depending on your preference.
                    </li>
                  </ul>
                </section>
                <section className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    5. Non-Returnable Items
                  </h3>
                  <p>
                    Currently, all products sold by Sytro are eligible for returns,
                    provided they meet the return conditions outlined above. However,
                    kids' bags are non-refundable and non-returnable.
                  </p>
                </section>
                <section className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    6. Exchanges
                  </h3>
                  <p>
                    At this time, Sytro does not offer exchanges. If you wish to
                    replace an item, please return the original product and place
                    a new order.
                  </p>
                </section>
                <section className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    7. Damaged or Defective Products
                  </h3>
                  <p>
                    If you receive a damaged or defective product, please contact
                    us immediately. We will arrange for a replacement or refund
                    at no additional cost to you.
                  </p>
                </section>
                <section className administrationsName="mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    8. Contact Us
                  </h3>
                  <p>
                    If you have any questions about our Returns and Refunds
                    Policy, please contact us at:
                  </p>
                  <p style={{ fontSize: "1em", color: "#666", marginBottom: 20 }}>
                    <b>Email: </b>sytrob@gmail.com <br />
                    <b>Phone: </b>+91 72933 55483 <br />
                    <b>Address: </b>Panakal Tower, North Basin Road, Broadway,
                    Ernakulam, Kochi, Kerala 682031
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
    
    </LayoutV5>
  );
};

export default DeliveryReturnPage;
