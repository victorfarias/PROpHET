import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import "./DisclaimerPage.css";
import logo from "../../assets/logo.png";

function DisclaimerPage(props) {
    return (
        <div className="disclaimer-container">
            <NavBar activePage="disclaimer" />
            <div className="container container-text">
                <div className="logo-container">
                    <img src={logo} alt="" />
                </div>
                <div className="text">
                    <h1 className="my-5">The Disclaimer</h1>
                    <span className="py-4">
                        This application is made available solely for personal
                        non-commercial, teaching and educational use. This
                        application is not a medical device and does not and
                        should not be construed to provide health-related or
                        medical advice, or clinical decision support, or to
                        support or replace the diagnosis, or other kind of
                        medical decision. This application does not create a
                        physician-patient relationship between the
                        above-mentioned institutions and any individual. You,
                        the user, agree to use this application under all these
                        terms and conditions. If you do not agree to all of
                        these terms of use, do not use this site.
                        <br />
                        Dr. Joao Andrade and the developers make no
                        representations as to any matter whatsoever, including
                        accuracy, fitness for a particular purpose or
                        non-infringement.
                        <br />
                        Dr Joao Andrade and the developers are not liable to you
                        or anyone else for any decision made or action taken
                        based on reliance upon the information contained on or
                        provided through this website. The use of the
                        information shall be at your own risk.
                    </span>
                </div>
                <div className="privacy-policy py-5">
                    <h1 className="my-5">Privacy Policy</h1>
                    <span className="py-3">
                        Your privacy is important to us. It is JOAO B C DE ANDRADE&#39;s policy to respect your
                        privacy and comply with any applicable law and regulation regarding any personal
                        information we may collect about you, including across our website,
                        https://www.prophet-score.com, and other sites we own and operate.
                        <br />
                        This policy is effective as of 24 September 2022 and was last updated on 24 September
                        2022.
                    </span>
                    
                    <h5 className="my-4">Information We Collect</h5>
                    <span className="py-3">
                        Information we collect includes both information you knowingly and actively provide us when using or participating in any of our services and promotions, and any information automatically sent by your devices in the course of accessing our products and services.
                    </span>                    

                    <h5 className="my-4">Log Data</h5>
                    <span className="py-3">
                    When you visit our website, our servers may automatically log the standard data provided by your web browser. It may include your device’s Internet Protocol (IP) address, your browser type and version, the pages you visit, the time and date of your visit, the time spent on each page, other details about your visit, and technical details that occur in conjunction with any errors you may encounter.
                    <br />
                    Please be aware that while this information may not be personally identifying by itself, it may be possible to combine it with other data to personally identify individual persons.
                    </span>

                    <h5 className="my-4">Collection and Use of Information</h5>
                    <span className="py-3">
                    We may collect personal information from you when you do any of the following on our website:
                    <ul>
                        <li>Use a mobile device or web browser to access our content</li>
                        <li>Contact us via email, social media, or on any similar technologies</li>
                        <li>When you mention us on social media</li>
                    </ul>
                                        
                        We may collect, hold, use, and disclose information for the following purposes, and personal information will not be further processed in a manner that is incompatible with these purposes.
                        <br />
                        Please be aware that we may combine information we collect about you with general information or research data we receive from other trusted sources.

                    </span>

                    <h5 className="my-4">Security of Your Personal Information</h5>
                    <span className="py-3">
                        When we collect and process personal information, and while we retain this information, we will protect it within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use, or modification.
                        <br />
                        Although we will do our best to protect the personal information you provide to us, we advise that no method of electronic transmission or storage is 100% secure, and no one can guarantee absolute data security. We will comply with laws applicable to us in respect of any data breach.
                        <br />
                        You are responsible for selecting any password and its overall security strength, ensuring the security of your own information within the bounds of our services.

                    </span>

                    <h5 className="my-4">How Long We Keep Your Personal Information</h5>
                    <span className="py-3">
                        We keep your personal information only for as long as we need to. This time period may depend on what we are using your information for, in accordance with this privacy policy. If your personal information is no longer required, we will delete it or make it anonymous by removing all details that identify you.
                        <br />
                        However, if necessary, we may retain your personal information for our compliance with a legal, accounting, or reporting obligation or for archiving purposes in the public interest, scientific, or historical research purposes or statistical purposes.
                    </span>

                    <h5 className="my-4">Children’s Privacy</h5>
                    <span className="py-3">
                        We do not aim any of our products or services directly at children under the age of 13, and we do not knowingly collect personal information about children under 13.
                    </span>

                    <h5 className="my-4">International Transfers of Personal Information</h5>
                    <span className="py-3">
                        The personal information we collect is stored and/or processed where we or our partners, affiliates, and third-party providers maintain facilities. Please be aware that the locations to which we store, process, or transfer your personal information may not have the same data protection laws as the country in which you initially provided the information. If we transfer your personal information to third parties in other countries: (i) we will perform those transfers in accordance with the requirements of applicable law; and (ii) we will protect the transferred personal information in accordance with this privacy policy.                       
                    </span>

                    <h5 className="my-4">Your Rights and Controlling Your Personal Information</h5>
                    <span className="py-3">
                        You always retain the right to withhold personal information from us, with the understanding that your experience of our website may be affected. We will not discriminate against you for exercising any of your rights over your personal information. If you do provide us with personal information you understand that we will collect, hold, use and disclose it in accordance with this privacy policy. You retain the right to request details of any personal information we hold about you.
                        <br />
                        If we receive personal information about you from a third party, we will protect it as set out in this privacy policy. If you are a third party providing personal information about somebody else, you represent and warrant that you have such person’s consent to provide the personal information to us.
                        <br />
                        If you have previously agreed to us using your personal information for direct marketing purposes, you may change your mind at any time. We will provide you with the ability to unsubscribe from our email-database or opt out of communications. Please be aware we may need to request specific information from you to help us confirm your identity.
                        <br />
                        If you believe that any information we hold about you is inaccurate, out of date, incomplete, irrelevant, or misleading, please contact us using the details provided in this privacy policy. We will take reasonable steps to correct any information found to be inaccurate, incomplete, misleading, or out of date.
                        <br />
                        If you believe that we have breached a relevant data protection law and wish to make a complaint, please contact us using the details below and provide us with full details of the alleged breach. We will promptly investigate your complaint and respond to you, in writing, setting out the outcome of our investigation and the steps we will take to deal with your complaint. You also have the right to contact a regulatory body or data protection authority in relation to your complaint.
                    </span>

                    <h5 className="my-4">Limits of Our Policy</h5>
                    <span className="py-3">
                        Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and policies of those sites, and cannot accept responsibility or liability for their respective privacy practices.
                    </span>

                    <h5 className="my-4">Changes to This Policy</h5>
                    <span className="py-3">
                        At our discretion, we may change our privacy policy to reflect updates to our business processes, current acceptable practices, or legislative or regulatory changes. If we decide to change this privacy policy, we will post the changes here at the same link by which you are accessing this privacy policy.
                        <br />
                        If required by law, we will get your permission or give you the opportunity to opt in to or opt out of, as applicable, any new uses of your personal information.
                    </span>

                    <h5 className="my-4">Contact Us</h5>
                    <span className="py-3">
                        For any questions or concerns regarding your privacy, you may contact us using the following details:
                        <br />
                        <b>JOAO BRAINER CLARES DE ANDRADE</b><br />
                        <b>joao.brainer@unifesp.br</b>

                    </span>



                </div>

            </div>
        </div>
    );
}

export default DisclaimerPage;
