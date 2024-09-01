import Layout from "@/components/Home/GlobalComponents/Layout";
import Footer from "@/components/Home/HomeComponents/Footer";

const PrivacyPolicy = () => {
    return (
        <Layout>
        <div className="p-8">
        <div className="max-w-4xl mx-auto">
        <header className="text-4xl font-bold text-center mb-8">
          FreeMind Privacy Policy
        </header>
        
        <p className="text-lg text-center">
        We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
        </p>
        <header className="text-3xl font-bold text-center mt-16">
        How is Information Collected?
        </header>
        <p className="text-lg text-center">
        When you register for an account, we collect the following personal data: your full name, your email address, your password.
If you choose to use Google Authentication, the above data is collected via your Google account (except for password, Google handles passwords).

We do not store your payment information. All payment data, including your credit card information, is safely stored and managed by our payment provider, Stripe. We have access to limited payment information as provided by Stripe for the purpose of managing transactions.
        </p>
        <header className="text-3xl font-bold text-center mt-16">
What Information is Collected?
        </header>
        <p className="text-lg text-center">
        We collect your personal data through our registration form and through Google Authentication if you choose to register this way.
        </p>
        <header className="text-3xl font-bold text-center mt-16">
        Why is Information Collected?
        </header>
        <p className="text-lg text-center">
        We collect and process your data for the following reasons:
        </p>
        <div className="text-center">
        <li>To manage your account</li>
        <li>To provide our services to you</li>
        <li>To ensure the security of our website</li>
        <li>To prevent unauthorized access</li>
        </div>
        <header className="text-3xl font-bold text-center mt-16">
        Who has Access to the Information?
        </header>
        <p className="text-lg text-center">
        Access to your data is limited to our team who require it to provide services to you. Third-party service providers such as Heroku (where your data is stored) and Stripe (which manages your payment data) also have access to certain data as necessary for the provision of their services.
        </p>
        <header className="text-3xl font-bold text-center mt-16">
        Data Storage and Security Measures
        </header>
        <p className="text-lg text-center">
        Your personal data is stored in a database managed by Heroku. We take appropriate measures to ensure your data is securely stored.
We use Next Authentication for handling sessions and JWT (JSON Web Tokens) for managing authentication.
        </p>
        <header className="text-3xl font-bold text-center mt-16">
        User Rights
        </header>
        <p className="text-lg text-center">
        You have the right to access the personal data we hold about you and to ask that your personal data be corrected, updated, or deleted. If you would like to exercise this right, please contact us.
        </p>
        <header className="text-3xl font-bold text-center mt-16">
        Third Party Websites/Services
        </header>
        <p className="text-lg text-center">
        Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or the content of these third-party sites.
        </p>
        <header className="text-3xl font-bold text-center mt-16">
        Changes to the Privacy Policy
        </header>
        <p className="text-lg text-center">
        We may update this privacy policy from time to time in order to reflect changes to our practices or for other operational, legal, or regulatory reasons.
        </p>
        <header className="text-3xl font-bold text-center mt-16">
        Contact
        </header>
        <p className="text-lg text-center">
        For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us.
        </p>
            </div>
            </div>
            <Footer footerClass="bg-[#F1E6FF]"/>
            </Layout>
    )
}

export default PrivacyPolicy;