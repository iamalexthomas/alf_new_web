

import LayoutV5 from "../../components/layouts/LayoutV5";
import { Link } from "react-router-dom";
export default function TermsConditionsPage() {
  return (
    <LayoutV5 breadCrumb="terms-conditions" title="Terms & Conditions">
      <div className="about-style-one-area default-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="about-style-one-info">
              <h4 className="sub-heading">Our Terms</h4>
            
                <h2 className="title">Terms and Conditions</h2>
                <section className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    1. Website Usage
                  </h3>
                  <p>
                    Welcome to Sytro! These Terms and Conditions govern your use
                    of our website [www.sytro.com] and your purchase of products
                    from us. By accessing or using our website, you agree to
                    comply with and be bound by these terms. Please read them
                    carefully. There are no age restrictions or specific
                    prohibitions for using our website. However, you agree to use
                    the website for lawful purposes only and not to engage in any
                    activity that disrupts or interferes with its functionality.
                  </p>
                </section>
              </div>
              <div className="content mt-50">
                <section className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    1. Intellectual Property
                  </h3>
                  <ul className="tag-list">
                    <li>
                      All content on this website, including but not limited to
                      text, graphics, logos, images, and software, is the property
                      of Sytro and is protected by Indian and international
                      copyright laws.
                    </li>
                    <li>
                      You may not reproduce, distribute, or use any content from
                      this website without our prior written permission.
                    </li>
                  </ul>
                </section>
                <section className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    2. Limitation of Liability
                  </h3>
                  <p>
                    Sytro sells bags and related products. We are not liable for
                    any damages, injuries, or losses arising from the use of our
                    products or website, except as required by law.
                  </p>
                </section>
                <section className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    3. Governing Law
                  </h3>
                  <p>
                    These Terms and Conditions are governed by and construed in
                    accordance with the laws of India. Any disputes will be
                    subject to the exclusive jurisdiction of the courts in
                    Ernakulam, Kerala.
                  </p>
                </section>
                <section className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    4. Payment Terms
                  </h3>
                  <ul className="tag-list">
                    <li>
                      We accept payments through our secure payment gateway, which
                      supports credit/debit cards, UPI, and other online payment
                      methods.
                    </li>
                    <li>
                      We also offer Cash on Delivery (COD) for eligible orders. However, COD is not available for kids' bags.
                    </li>
                    <li>
                      All prices are listed in Indian Rupees (INR) and are
                      inclusive of applicable taxes.
                    </li>
                  </ul>
                </section>
                <section className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    5. Shipping and Delivery
                  </h3>
                  <ul className="tag-list">
                    <li>
                      Please refer to our{" "}
                       <Link to="/delivery-return" className="text-blue-600 hover:underline">
                        Shipping Policy
                      </Link>{" "} 
                      for details about shipping timelines, delivery areas, and
                      handling of delays or lost packages.
                    </li>
                    <li>
                      We strive to deliver your orders promptly, but we are not
                      responsible for delays caused by unforeseen circumstances
                      (e.g., natural disasters, courier delays).
                    </li>
                  </ul>
                </section>
                <section className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    6. User Accounts
                  </h3>
                  <ul className="tag-list">
                    <li>
                      To place an order, you must create an account on our
                      website.
                    </li>
                    <li>
                      You are responsible for maintaining the confidentiality of
                      your account credentials and for all activities that occur
                      under your account.
                    </li>
                    <li>
                      Notify us immediately if you suspect any unauthorized use of
                      your account.
                    </li>
                  </ul>
                </section>
                <section className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    7. Dispute Resolution
                  </h3>
                  <ul className="tag-list">
                    <li>
                      In the event of a dispute, we will strive to resolve it
                      amicably through negotiation or mediation.
                    </li>
                    <li>
                      If the dispute cannot be resolved, it will be referred to
                      the courts in Ernakulam, Kerala.
                    </li>
                  </ul>
                </section>
                <section className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    8. Updates to Terms
                  </h3>
                  <ul className="tag-list">
                    <li>
                      We reserve the right to update or modify these Terms and
                      Conditions at any time. Any changes will be posted on this
                      page with an updated effective date.
                    </li>
                    <li>
                      Your continued use of the website after changes are made
                      constitutes your acceptance of the revised terms.
                    </li>
                  </ul>
                </section>
                <section className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    9. Contact Us
                  </h3>
                  <p>
                    If you have any questions or concerns about these Terms and
                    Conditions, please contact us at:
                  </p>
                  <p style={{ fontSize: "1em", color: "#666", marginBottom: 20 }}>
                    <b>Email: </b>sytrobags@gmail.com <br />
                    <b>Phone: </b>+91 72933 33483 <br />
                    <b>Address: </b>Panakal tower North Basin Road Broadway
                    Ernakulam, Kochi, Kerala 682031
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
    
    </LayoutV5>
  );
}
