import Layout from "@/components/Home/GlobalComponents/Layout";
import Footer from "@/components/Home/HomeComponents/Footer";

const Disclaimer = () => {
    return (
        <Layout>
        <div className="p-8">
        <div className="max-w-4xl mx-auto">
        <header className="text-4xl font-bold text-center mb-8">
          Medical Disclaimer
        </header>
        <header className="text-3xl font-bold text-center mt-16">
        No Advice
        </header>
        <p className="text-lg text-center">
        This website, www.FreeMindRecovery.com, contains general information about medical conditions and treatments. The information is not advice, and should not be treated as such.
        </p>
        <header className="text-3xl font-bold text-center mt-16">
        No Doctor-Patient Relationship
        </header>
        <p className="text-lg text-center">
        Use of this website does not establish a doctor-patient relationship between us(FreeMind) and the users of this website.
        </p>
        <header className="text-3xl font-bold text-center mt-16">
        No Warranties
        </header>
        <p className="text-lg text-center">
        The medical information on this website is provided without any representations or warranties, express or implied. We make no representations or warranties in relation to the medical information on this website.
        </p>
        <header className="text-3xl font-bold text-center mt-16">
        Professional Assistance
        </header>
        <p className="text-lg text-center">
        You must not rely on the information on this website as an alternative to medical advice from your doctor or other professional healthcare provider. If you have any specific questions about any medical matter, you should consult your doctor or other professional healthcare provider. If you think you may be suffering from any medical condition, you should seek immediate medical attention.
        </p>
        <header className="text-3xl font-bold text-center mt-16">
        Limiting our Liability
        </header>
        <p className="text-lg text-center">
        You accept that we cannot be held accountable for any harm or damages that might arise due to your reliance on the medical information provided on this website.

Furthermore, you agree to avoid sharing the medical information you obtained from this website with any third party. The third party may not have read this disclaimer, and may not fully grasp the stipulations related to obtaining the information.

In case you decide to share the medical information that you&apos;ve learned from this website with a third party, either in writing, electronically, or verbally, you agree to compensate and safeguard us against any claims for damages from that third party or any other third party who received the information due to your actions, either wholly or partially. In simpler terms, if the third party you informed shares the information with another party, you must defend us against any claims made by either of those third parties.
        </p>
        <header className="text-3xl font-bold text-center mt-16">
        Interactive Features
        </header>
        <p className="text-lg text-center">
        This website includes interactive features that allow users to communicate with us. You acknowledge that, because of the limited nature of communication through our website’s interactive features, any assistance you may receive using any such features is likely to be incomplete and may even be misleading. Any assistance you may receive using any our website’s interactive features does not constitute specific advice and accordingly should not be relied upon without further independent confirmation.
        </p>
        <header className="text-3xl font-bold text-center mt-16">
        Updates
        </header>
        <p className="text-lg text-center">
        We reserve the right to amend or update our Medical Disclaimer. Any changes will be immediately posted on the website and you are deemed to have accepted the terms of any updated Medical Disclaimer on your first use of the website following the alterations.
        </p>
        </div>
        </div>
        <Footer footerClass="bg-[#F1E6FF]"/>
        </Layout>
    )
}

export default Disclaimer;