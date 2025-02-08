export default function About() {
    return (
      <div className="bg-gray-100 min-h-screen">
        {/* Hero Section */}
        <section className="text-center py-16 bg-blue-700 text-white">
          <h1 className="text-4xl font-bold">About India's Online Voting Platform 🇮🇳</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            A secure and transparent e-voting system aligned with the Election Commission of India.
          </p>
        </section>
  
        {/* Mission & Vision */}
        <section className="py-16 px-6 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
          <p className="mt-4 text-gray-600">
            To empower every Indian citizen with a seamless, secure, and transparent digital voting experience.
          </p>
          <h2 className="text-3xl font-bold text-gray-800 mt-8">Our Vision</h2>
          <p className="mt-4 text-gray-600">
            A future where every eligible voter can cast their vote online safely, reducing fraud and increasing voter turnout.
          </p>
        </section>
  
        {/* How It Works */}
        <section className="bg-white py-16 px-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center">How It Works</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md max-w-sm">
              <h3 className="text-xl font-semibold">🔒 Aadhaar-Based Verification</h3>
              <p className="mt-2 text-gray-600">
                Voter identity is verified using *Aadhaar and OTP authentication*, ensuring a foolproof system.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md max-w-sm">
              <h3 className="text-xl font-semibold">📊 Tamper-Proof Blockchain</h3>
              <p className="mt-2 text-gray-600">
                Votes are securely recorded on an *immutable blockchain ledger* to prevent fraud.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md max-w-sm">
              <h3 className="text-xl font-semibold">✅ Real-Time Vote Counting</h3>
              <p className="mt-2 text-gray-600">
                Election results are *instantly calculated* while maintaining voter anonymity.
              </p>
            </div>
          </div>
        </section>
  
        {/* Features */}
        <section className="py-16 px-6 bg-gray-100">
          <h2 className="text-3xl font-bold text-gray-800 text-center">Key Features</h2>
          <ul className="mt-6 text-gray-600 max-w-3xl mx-auto text-center space-y-4">
            <li>✔ *Aadhaar-Based Authentication* for voter verification.</li>
            <li>✔ *EVM & Blockchain Integration* for tamper-proof elections.</li>
            <li>✔ *Secure & Encrypted* end-to-end online voting.</li>
            <li>✔ *Mobile & Web Accessibility* for urban and rural voters.</li>
            <li>✔ *Multi-Language Support* for all Indian citizens.</li>
          </ul>
        </section>
  
        {/* Government Compliance */}
        <section className="py-16 px-6 bg-white">
          <h2 className="text-3xl font-bold text-gray-800 text-center">Government Compliance</h2>
          <p className="mt-4 text-gray-600 text-center max-w-3xl mx-auto">
            Our platform is built in compliance with the *Election Commission of India (ECI)* and follows the *Representation of the People Act, 1951*.
          </p>
          <p className="mt-4 text-center text-blue-600 font-semibold">
            Learn more at <a href="https://eci.gov.in" className="underline">eci.gov.in</a>
          </p>
        </section>
  
        {/* Team Section */}
        <section className="py-16 px-6 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800">Meet Our Team</h2>
          <p className="mt-4 text-gray-600">
            Our dedicated professionals work to ensure India's voting system is *secure, reliable, and future-ready*.
          </p>
        </section>
  
        {/* Contact */}
        <section className="bg-blue-700 text-white py-16 text-center">
          <h2 className="text-3xl font-bold">Get in Touch</h2>
          <p className="mt-4 text-lg">
            Have questions? Email us at <a href="mailto:support@indianelections.com" className="underline">support@indianelections.com</a>
          </p>
          <p className="mt-2">
            📍 Election Commission of India, Nirvachan Sadan, New Delhi
          </p>
        </section>
      </div>
    );
  }