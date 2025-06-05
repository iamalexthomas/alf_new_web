
import React from "react";
import LayoutV5 from "../../components/layouts/LayoutV5";

const PrivacyPolicyPage = () => {
  return (
    <LayoutV5 breadCrumb="privacy-policy" title="Privacy Policy">
      <div className="about-style-one-area default-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="about-style-one-info">
             
                <h4 className="sub-heading">Our Commitment</h4>
                <h2 className="title">
                  Protecting Your Privacy is Our Priority
                </h2>
                <section className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    1. Introduction
                  </h3>
                  <p>
                    At Sytrobags, we are committed to safeguarding your personal information. This Privacy Policy explains how we collect, use, and protect your data when you interact with our services.
                  </p>
                </section>
              </div>
              <div className="content mt-50">
                <section className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    2. Information We Collect
                  </h3>
                  <p>
                    We collect information you provide, such as your name, email address, and browsing data, to enhance your experience and provide our services.
                  </p>
                </section>
                <section className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    3. How We Use Your Information
                  </h3>
                  <p>
                    Your information is used to personalize your experience, improve our services, and communicate updates or support-related information.
                  </p>
                </section>
                <section className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    4. Contact Us
                  </h3>
                  <p>
                    For any privacy-related questions, please reach out to us at{" "}
                    <a
                      href="mailto:privacy@sytrobags.com"
                      className="text-blue-600 hover:underline"
                    >
                      privacy@sytrobags.com
                    </a>.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>

    </LayoutV5>
  );
};

export default PrivacyPolicyPage;
