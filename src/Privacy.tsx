import { Link } from "react-router-dom";
import "./Legal.css";

const RingLogo = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 96 96" fill="none">
    <circle cx="48" cy="48" r="38" stroke="white" strokeWidth="5" strokeOpacity="0.08"/>
    <circle cx="48" cy="48" r="38" stroke="#FF6B00" strokeWidth="5" strokeLinecap="round"
      strokeDasharray="179" strokeDashoffset="45" transform="rotate(-90 48 48)"/>
    <text x="48" y="56" textAnchor="middle"
      fontFamily="-apple-system, 'SF Pro Rounded', sans-serif"
      fontSize="38" fontWeight="700" fill="white" letterSpacing="-1">G</text>
  </svg>
);

export default function Privacy() {
  return (
    <div className="legal-page">
      <nav className="legal-nav">
        <Link to="/" className="legal-nav-logo">
          <RingLogo size={28} />
          Gramo
        </Link>
      </nav>

      <div className="legal-body">
        <p className="legal-eyebrow">Legal</p>
        <h1 className="legal-title">Privacy Policy</h1>
        <p className="legal-date">Effective date: 25 May 2026</p>

        <div className="legal-section">
          <p>Gramo ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use the Gramo iPhone application.</p>
        </div>

        <div className="legal-section">
          <h2>Information We Collect</h2>
          <p>We collect the following categories of information when you use Gramo:</p>
          <ul>
            <li><strong style={{color:"rgba(245,245,247,0.8)"}}>Account information</strong> — your Apple ID or email address used to create and authenticate your account.</li>
            <li><strong style={{color:"rgba(245,245,247,0.8)"}}>Body stats and goals</strong> — age, sex, height, weight, activity level, and macro targets you provide during onboarding or in Settings.</li>
            <li><strong style={{color:"rgba(245,245,247,0.8)"}}>Food logs</strong> — meals, portions, and nutrition data you log through the app, including timestamps.</li>
            <li><strong style={{color:"rgba(245,245,247,0.8)"}}>Chat messages</strong> — your conversations with the Gramo AI, stored to maintain context across sessions.</li>
            <li><strong style={{color:"rgba(245,245,247,0.8)"}}>Photos</strong> — images you submit for food recognition. These are sent to our AI provider for analysis and are not stored by us after processing.</li>
            <li><strong style={{color:"rgba(245,245,247,0.8)"}}>Weight log entries</strong> — body weight entries you record over time.</li>
            <li><strong style={{color:"rgba(245,245,247,0.8)"}}>Usage data</strong> — anonymised analytics about how the app is used, collected via Vercel Analytics on our website.</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2>How We Use Your Information</h2>
          <ul>
            <li>To provide and personalise the macro tracking service.</li>
            <li>To calculate your TDEE, macro targets, and daily progress.</li>
            <li>To process food photos and descriptions using AI and return nutrition estimates.</li>
            <li>To maintain your conversation history so the AI retains context.</li>
            <li>To sync your data across devices and sessions.</li>
            <li>To improve the accuracy and performance of the app.</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2>AI and Third-Party Processing</h2>
          <p>Gramo uses OpenAI's API to process your food descriptions and photos and to generate nutrition estimates. Text and image data you submit is sent to OpenAI for this purpose. OpenAI's use of this data is governed by their <a href="https://openai.com/policies/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.</p>
          <p>Your account and food data are stored in Supabase (a hosted Postgres database). Data is encrypted in transit and at rest.</p>
        </div>

        <div className="legal-section">
          <h2>Apple HealthKit</h2>
          <p>If you grant permission, Gramo may read health data (height, weight, age, biological sex) from Apple Health to prefill your profile, and may write nutrition data (calories, protein, fat, carbohydrates) to Apple Health when you log food.</p>
          <p>HealthKit data is used solely within the app to provide the macro tracking service. We do not share HealthKit data with third parties, use it for advertising, or sell it in any form.</p>
        </div>

        <div className="legal-section">
          <h2>Data Retention and Deletion</h2>
          <p>Your data is retained for as long as your account is active. You may delete your account at any time from Settings → Delete Account within the app. This permanently removes all your food logs, chat history, recipes, weight entries, and profile data from our servers.</p>
        </div>

        <div className="legal-section">
          <h2>Data Sharing</h2>
          <p>We do not sell, rent, or share your personal information with third parties for marketing purposes. We only share data with:</p>
          <ul>
            <li>OpenAI — for AI-powered food recognition and macro estimation.</li>
            <li>Supabase — for secure data storage and authentication.</li>
            <li>Apple — via Sign in with Apple and HealthKit, as described above.</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2>Children's Privacy</h2>
          <p>Gramo is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal information, please contact us and we will delete it.</p>
        </div>

        <div className="legal-section">
          <h2>Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify you of significant changes by updating the effective date above. Continued use of the app after changes constitutes acceptance of the updated policy.</p>
        </div>

        <div className="legal-contact-card">
          <h3>Contact Us</h3>
          <p>If you have questions about this Privacy Policy or how your data is handled, please contact us at <a href="mailto:hello@gramo.space">hello@gramo.space</a>.</p>
        </div>
      </div>
    </div>
  );
}
