import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 tablet:px-6 laptop:px-8 desktop:px-12 py-8 tablet:py-12 laptop:py-16">
        {/* Header */}
        <header className="mb-8 tablet:mb-12 laptop:mb-16">
          <h1 className="text-3xl tablet:text-4xl laptop:text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-base tablet:text-lg text-gray-700 leading-relaxed">
            This privacy policy will explain how our organization uses the
            personal data we collect from you when you use our website.
          </p>
        </header>

        {/* Table of Contents */}
        <nav className="bg-white rounded-lg shadow-sm p-6 tablet:p-8 mb-8 tablet:mb-12">
          <h2 className="text-xl tablet:text-2xl font-semibold text-gray-900 mb-4">
            Topics:
          </h2>
          <ul className="space-y-2 text-sm tablet:text-base">
            <li>
              <a
                href="#data-collect"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                What data do we collect?
              </a>
            </li>
            <li>
              <a
                href="#how-collect"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                How do we collect your data?
              </a>
            </li>
            <li>
              <a
                href="#how-use"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                How will we use your data?
              </a>
            </li>
            <li>
              <a
                href="#how-store"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                How do we store your data?
              </a>
            </li>
            <li>
              <a
                href="#marketing"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                Marketing
              </a>
            </li>
            <li>
              <a
                href="#data-rights"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                What are your data protection rights?
              </a>
            </li>
            <li>
              <a
                href="#cookies-what"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                What are cookies?
              </a>
            </li>
            <li>
              <a
                href="#cookies-use"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                How do we use cookies?
              </a>
            </li>
            <li>
              <a
                href="#cookies-types"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                What types of cookies do we use?
              </a>
            </li>
            <li>
              <a
                href="#cookies-manage"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                How to manage your cookies
              </a>
            </li>
            <li>
              <a
                href="#other-policies"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                Privacy policies of other websites
              </a>
            </li>
            <li>
              <a
                href="#changes"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                Changes to our privacy policy
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                How to contact us
              </a>
            </li>
            <li>
              <a
                href="#contact-authority"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                How to contact the appropriate authorities
              </a>
            </li>
          </ul>
        </nav>

        {/* Content Sections */}
        <div className="space-y-8 tablet:space-y-12 laptop:space-y-16">
          {/* Section: What data do we collect */}
          <section
            id="data-collect"
            className="bg-white rounded-lg shadow-sm p-6 tablet:p-8 laptop:p-10"
          >
            <h2 className="text-2xl tablet:text-3xl font-bold text-gray-900 mb-4 tablet:mb-6">
              What data do we collect?
            </h2>
            <p className="text-base tablet:text-lg text-gray-700 mb-4">
              Our Company collects the following data:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base tablet:text-lg text-gray-700 ml-4">
              <li>
                Personal identification information (Name, email address, phone
                number, etc.), whenever you send us an email.
              </li>
              <li>Server Access Logs</li>
            </ul>
          </section>

          {/*"How do we store your data?*/}
          <section
            id="how-store"
            className="bg-white rounded-lg shadow-sm p-6 tablet:p-8 laptop:p-10"
          >
            <h2 className="text-2xl tablet:text-3xl font-bold text-gray-900 mb-4 tablet:mb-6">
              How do we store your data?
            </h2>

            <div className="space-y-4 text-base tablet:text-lg text-gray-700">
              <p>
                Our Company securely stores your data using Amazon Web Services
                (AWS) infrastructure located in{" "}
                <span className="font-semibold">US East (N. Virginia)</span>.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 tablet:p-6">
                <h3 className="font-semibold text-lg mb-2">
                  Server Access Logs
                </h3>
                <p className="mb-2">
                  When you visit our website, our hosting provider (AWS Amplify)
                  automatically collects and stores access logs containing:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>IP addresses</li>
                  <li>Browser and device information (user agent)</li>
                  <li>Pages visited and timestamps</li>
                  <li>HTTP request information</li>
                </ul>
                <p className="mt-3">
                  <strong>Purpose:</strong> These logs are collected for
                  security monitoring, troubleshooting, and ensuring proper
                  operation of our website.
                </p>
              </div>

              <p>
                AWS Amplify employs industry-standard security measures
                including encryption in transit and at rest, access controls,
                and monitoring.
              </p>
            </div>
          </section>

          {/* Section: How will we use your data */}
          <section
            id="how-use"
            className="bg-white rounded-lg shadow-sm p-6 tablet:p-8 laptop:p-10"
          >
            <h2 className="text-2xl tablet:text-3xl font-bold text-gray-900 mb-4 tablet:mb-6">
              How will we use your data?
            </h2>
            <p className="text-base tablet:text-lg text-gray-700 mb-4">
              Our Company collects your data for the following purpose:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base tablet:text-lg text-gray-700 ml-4 mb-6">
              <li>
                These logs are collected for security monitoring,
                troubleshooting, and ensuring proper operation of our website.
              </li>
              <li>
                Legitimate interest in maintaining website security and
                functionality.
              </li>
            </ul>
            <p className="text-base tablet:text-lg text-gray-700">
              When Our Company processes your server logs, it may send your data to,
              and also use the resulting information from, to Amazon for the
              data to be securely stored.
            </p>
          </section>

          {/* Section: How do we store your data */}
          <section
            id="how-store"
            className="bg-white rounded-lg shadow-sm p-6 tablet:p-8 laptop:p-10"
          >
            <h2 className="text-2xl tablet:text-3xl font-bold text-gray-900 mb-4 tablet:mb-6">
              How do we store your data?
            </h2>
            <p className="text-base tablet:text-lg text-gray-700">
              Our Company securely stores your data using Amazon Web Services
              (AWS) cloud infrastructure located in{" "}
              <span className="font-semibold">US East (Virginia)</span>
            </p>
            <p className="text-base tablet:text-lg text-gray-700">
              <strong>Retention:</strong> Access logs are retained for the
              lifetime of our application and are automatically deleted when we
              delete our application from AWS Amplify.
            </p>
          </section>

          {/* Section: Marketing */}
          <section
            id="marketing"
            className="bg-white rounded-lg shadow-sm p-6 tablet:p-8 laptop:p-10"
          >
            <h2 className="text-2xl tablet:text-3xl font-bold text-gray-900 mb-4 tablet:mb-6">
              Marketing
            </h2>
            <p className="text-base tablet:text-lg text-gray-700 mb-4">
              Our Company WILL NOT to send you information about products and
              services of ours that we think you might like, as well as those of
              our partner companies.
            </p>
            <p className="text-sm tablet:text-base text-gray-600 italic mb-4">
              Amazon Web Services
            </p>

            <p className="text-base tablet:text-lg text-gray-700 mb-4">
              You have the right at any time to stop Our Company from contacting
              you for marketing purposes or giving your data to other members of
              the Our Company Group.
            </p>
            {/* <p className="text-base tablet:text-lg text-gray-700">
              If you no longer wish to be contacted for marketing purposes,{" "}
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                please click here
              </a>
              .
            </p> */}
          </section>

          {/* Section: Data Protection Rights */}
          <section
            id="data-rights"
            className="bg-white rounded-lg shadow-sm p-6 tablet:p-8 laptop:p-10"
          >
            <h2 className="text-2xl tablet:text-3xl font-bold text-gray-900 mb-4 tablet:mb-6">
              What are your data protection rights?
            </h2>
            <p className="text-base tablet:text-lg text-gray-700 mb-6">
              Our Company would like to make sure you are fully aware of all of
              your data protection rights. Every user is entitled to the
              following:
            </p>

            <div className="space-y-4 tablet:space-y-6">
              <div className="border-l-4 border-green-500 pl-4 tablet:pl-6">
                <h3 className="font-semibold text-lg tablet:text-xl text-gray-900 mb-2">
                  The right to access
                </h3>
                <p className="text-base tablet:text-lg text-gray-700">
                  You have the right to request Our Company for copies of your
                  personal data. We may charge you a small fee for this service.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4 tablet:pl-6">
                <h3 className="font-semibold text-lg tablet:text-xl text-gray-900 mb-2">
                  The right to rectification
                </h3>
                <p className="text-base tablet:text-lg text-gray-700">
                  You have the right to request that Our Company correct any
                  information you believe is inaccurate. You also have the right
                  to request Our Company to complete the information you believe
                  is incomplete.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4 tablet:pl-6">
                <h3 className="font-semibold text-lg tablet:text-xl text-gray-900 mb-2">
                  The right to erasure
                </h3>
                <p className="text-base tablet:text-lg text-gray-700">
                  You have the right to request that Our Company erase your
                  personal data, under certain conditions.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4 tablet:pl-6">
                <h3 className="font-semibold text-lg tablet:text-xl text-gray-900 mb-2">
                  The right to restrict processing
                </h3>
                <p className="text-base tablet:text-lg text-gray-700">
                  You have the right to request that Our Company restrict the
                  processing of your personal data, under certain conditions.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4 tablet:pl-6">
                <h3 className="font-semibold text-lg tablet:text-xl text-gray-900 mb-2">
                  The right to object to processing
                </h3>
                <p className="text-base tablet:text-lg text-gray-700">
                  You have the right to object to Our Company's processing of
                  your personal data, under certain conditions.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4 tablet:pl-6">
                <h3 className="font-semibold text-lg tablet:text-xl text-gray-900 mb-2">
                  The right to data portability
                </h3>
                <p className="text-base tablet:text-lg text-gray-700">
                  You have the right to request that Our Company transfer the
                  data that we have collected to another organization, or
                  directly to you, under certain conditions.
                </p>
              </div>
            </div>

            <div className="mt-6 tablet:mt-8 bg-gray-50 p-4 tablet:p-6 rounded-lg">
              <p className="text-base tablet:text-lg text-gray-700 mb-4">
                If you make a request, we have one month to respond to you. If
                you would like to exercise any of these rights, please contact
                us:
              </p>
              <ul className="space-y-2 text-base tablet:text-lg text-gray-700">
                <li>
                  <strong>Email:</strong>{" "}
                  <span className="text-gray-500 italic">
                    {" "}
                    <a
                      className="text-blue-500 hover:text-blue-700 whitespace-nowrap"
                      href="mailto:contact@orlandomatamonge.com"
                    >
                      contact@orlandomatamonge.com
                    </a>
                  </span>
                </li>
                <li>
                  <strong>Call us at:</strong>{" "}
                  <span className="text-gray-500 italic">+34 692 53 6587</span>
                </li>
                <li>
                  <strong>Write to us:</strong>{" "}
                  <span className="text-gray-500 italic">To be defined</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section: Cookies */}
          <section
            id="cookies-what"
            className="bg-white rounded-lg shadow-sm p-6 tablet:p-8 laptop:p-10"
          >
            <h2 className="text-2xl tablet:text-3xl font-bold text-gray-900 mb-4 tablet:mb-6">
              Cookies
            </h2>
            <p className="text-base tablet:text-lg text-gray-700 mb-4">
              Cookies are text files placed on your computer to collect standard
              Internet log information and visitor behavior information. When
              you visit our websites, we may collect information from you
              automatically through cookies or similar technology.
            </p>
            <p className="text-base tablet:text-lg text-gray-700">
              For further information, visit{" "}
              <a
                href="https://allaboutcookies.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                allaboutcookies.org
              </a>
              .
            </p>
          </section>

          {/* Section: How do we use cookies */}
          <section
            id="cookies-use"
            className="bg-white rounded-lg shadow-sm p-6 tablet:p-8 laptop:p-10"
          >
            <h2 className="text-2xl tablet:text-3xl font-bold text-gray-900 mb-4 tablet:mb-6">
              How do we use cookies?
            </h2>
            <p className="text-base tablet:text-lg text-gray-700 mb-4">
              Our Company DOES NOT use cookies in a range of ways to improve
              your experience on our website, nor to store any of your personal
              data.
            </p>
          </section>

          {/* Section: What types of cookies */}
          <section
            id="cookies-types"
            className="bg-white rounded-lg shadow-sm p-6 tablet:p-8 laptop:p-10"
          >
            <h2 className="text-2xl tablet:text-3xl font-bold text-gray-900 mb-4 tablet:mb-6">
              What types of cookies do we use?
            </h2>
            <p className="text-base tablet:text-lg text-gray-700 mb-6">
              Our Company DOES NOT use any cookies in a range of ways.
            </p>
          </section>

          {/* Section: How to manage cookies */}
          <section
            id="cookies-manage"
            className="bg-white rounded-lg shadow-sm p-6 tablet:p-8 laptop:p-10"
          >
            <h2 className="text-2xl tablet:text-3xl font-bold text-gray-900 mb-4 tablet:mb-6">
              How to manage cookies
            </h2>
            <p className="text-base tablet:text-lg text-gray-700">
              In any case, you can set your browser not to accept cookies, and
              the above website tells you how to remove cookies from your
              browser.
            </p>
          </section>

          {/* Section: Privacy policies of other websites */}
          <section
            id="other-policies"
            className="bg-white rounded-lg shadow-sm p-6 tablet:p-8 laptop:p-10"
          >
            <h2 className="text-2xl tablet:text-3xl font-bold text-gray-900 mb-4 tablet:mb-6">
              Privacy policies of other websites
            </h2>
            <p className="text-base tablet:text-lg text-gray-700">
              If in any case, our Company website contains links to other websites. Our
              privacy policy applies only to our website, so if you click on a
              link to another website, you should read their privacy policy.
            </p>
          </section>

          {/* Section: Changes to privacy policy */}
          <section
            id="changes"
            className="bg-white rounded-lg shadow-sm p-6 tablet:p-8 laptop:p-10"
          >
            <h2 className="text-2xl tablet:text-3xl font-bold text-gray-900 mb-4 tablet:mb-6">
              Changes to our privacy policy
            </h2>
            <p className="text-base tablet:text-lg text-gray-700">
              Our Company keeps its privacy policy under regular review and
              places any updates on this web page. This privacy policy was last
              updated on July 27th 2026.
            </p>
          </section>

          {/* Section: How to contact us */}
          <section
            id="contact"
            className="bg-white rounded-lg shadow-sm p-6 tablet:p-8 laptop:p-10"
          >
            <h2 className="text-2xl tablet:text-3xl font-bold text-gray-900 mb-4 tablet:mb-6">
              How to contact us
            </h2>
            <p className="text-base tablet:text-lg text-gray-700 mb-6">
              If you have any questions about Our Company's privacy policy, the
              data we hold on you, or you would like to exercise one of your
              data protection rights, please do not hesitate to contact us.
            </p>
            <div className="bg-blue-50 p-4 tablet:p-6 rounded-lg">
              <ul className="space-y-2 text-base tablet:text-lg text-gray-700">
                <li>
                  <strong>Email us at:</strong>{" "}
                  <a
                    className="text-blue-500 hover:text-blue-700 whitespace-nowrap"
                    href="mailto:contact@orlandomatamonge.com"
                  >
                    contact@orlandomatamonge.com
                  </a>
                </li>
                <li>
                  <strong>Call us:</strong>{" "}
                  <span className="text-gray-500 italic">+34 692 53 6587</span>
                </li>
                <li>
                  <strong>Or write to us at:</strong>{" "}
                  <span className="text-gray-500 italic">To be defined</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section: Contact appropriate authority */}
          <section
            id="contact-authority"
            className="bg-white rounded-lg shadow-sm p-6 tablet:p-8 laptop:p-10"
          >
            <h2 className="text-2xl tablet:text-3xl font-bold text-gray-900 mb-4 tablet:mb-6">
              How to contact the appropriate authority
            </h2>
            <p className="text-base tablet:text-lg text-gray-700 mb-6">
              Should you wish to report a complaint or if you feel that Our
              Company has not addressed your concern in a satisfactory manner,
              you may contact the Information Commissioner's Office.
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 tablet:p-6 rounded-r-lg">
              <ul className="space-y-2 text-base tablet:text-lg text-gray-700">
                <li>
                  <strong>Email:</strong>{" "}
                  <span className="text-gray-500 italic">
                    <a
                      className="text-blue-500 hover:text-blue-700 whitespace-nowrap"
                      href="mailto:contact@orlandomatamonge.com"
                    >
                      contact@orlandomatamonge.com
                    </a>
                  </span>
                </li>
                <li>
                  <strong>Address:</strong>{" "}
                  <span className="text-gray-500 italic">
                    To be defined
                  </span>
                </li>
              </ul>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="mt-12 tablet:mt-16 laptop:mt-20 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm tablet:text-base text-gray-600">
            Last updated: <span className="font-semibold">July 27th, 2026</span>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
