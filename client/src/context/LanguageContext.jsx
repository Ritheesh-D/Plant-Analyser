import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const translations = {
  en: {
    // Navbar
    appName: 'AI Plant Analyser',
    history: 'History',
    download: 'Download',
    logout: 'Logout',
    manageAccount: 'Manage Account',
    switchAccount: 'Switch Account',

    // Landing Page
    heroTitle: 'AI Plant Analyser',
    heroSubtitle: 'Instantly identify medicinal plants and uncover their hidden healing properties with state-of-the-art AI.',
    searchPlaceholder: 'Search for a plant...',
    scanNow: 'SCAN NOW',
    howItWorks: 'How It Works',
    step1: 'Upload or Scan',
    step1Desc: 'Upload a plant image or use live camera',
    step2: 'AI Analysis',
    step2Desc: 'Our AI identifies the plant instantly',
    step3: 'Get Results',
    step3Desc: 'View detailed medicinal information',

    // Login
    loginTitle: 'Login',
    loginSubtitle: 'Welcome back to AI Plant Analyser',
    emailLabel: 'Email Address',
    passwordLabel: 'Password',
    loginBtn: 'Login',
    forgotPassword: 'Forgot Password?',
    noAccount: "Don't have an account?",
    signUpLink: 'Sign Up',
    invalidCredentials: 'Invalid credentials',

    // Signup
    signupTitle: 'Sign Up',
    signupSubtitle: 'Join the AI Plant Analyser',
    usernameLabel: 'Username',
    confirmPasswordLabel: 'Confirm Password',
    signupBtn: 'Create Account',
    hasAccount: 'Already have an account?',
    loginLink: 'Login',
    passwordRequirements: 'Password Requirements',
    req8chars: 'Minimum 8 characters',
    reqLower: 'Lowercase letter (a-z)',
    reqUpper: 'Uppercase letter (A-Z)',
    reqNumber: 'Number (0-9)',
    reqSpecial: 'Special symbol (!@#$%^&*)',

    // Dashboard
    dashboardTitle: 'Plant Database',
    searchPlants: 'Search plants by common or scientific name...',
    scanPlant: 'Scan a Plant',
    viewDetails: 'View Details',
    showing: 'Showing',
    plants: 'plants',

    // Scan Page
    scanTitle: 'Scan a Plant',
    uploadTab: 'Upload Image',
    cameraTab: 'Live Camera',
    dragDrop: 'Drag & drop an image or click to upload',
    uploadBtn: 'Choose Image',
    scanBtn: 'Scan Now',
    analyzing: 'AI is analyzing your plant...',
    captureBtn: 'Capture & Scan',

    // Result Page
    backDashboard: '← Back to Dashboard',
    herbalUses: 'Herbal Uses',
    medicalUses: 'Medical Uses',
    diseasesTreated: 'Diseases Treated',
    medicineForms: 'Medicine Forms',
    habitat: 'Habitat',
    sideEffects: 'Side Effects',
    downloadPDF: 'Download PDF',
    confidence: 'Confidence',
    aiScanned: 'AI Scanned',
    noData: 'No data available',

    // History
    historyTitle: 'Scan History',
    noHistory: "You haven't scanned any plants yet!",
    goScan: 'Start Scanning',
    deleteBtn: 'Delete',
    viewFullDetails: 'View Full Details',
    scanDate: 'Scanned on',

    // Manage Account
    manageTitle: 'Manage Account',
    profileSection: 'Profile',
    changePassword: 'Change Password',
    accountInfo: 'Account Info',
    preferences: 'Preferences',
    dangerZone: 'Danger Zone',
    saveChanges: 'Save Changes',
    updatePassword: 'Update Password',
    deleteAccount: 'Delete Account',
    memberSince: 'Member Since',
    totalScans: 'Total Scans',
    accountStatus: 'Account Status',
    active: 'Active ✅',
    language: 'Language',
    theme: 'Theme',

    // Chatbot
    aiAssistant: 'AI Botanist',
    chatPlaceholder: 'Type your question...',
    chatHello: 'Hello! Ask me any botanical questions.',
    chatError: 'Sorry, I encountered an error. Please try again.',
    chatLogin: 'Please login to chat with the AI Plant Expert!',
  },

  ta: {
    // Navbar
    appName: 'AI தாவர ஆய்வாளர்',
    history: 'வரலாறு',
    download: 'பதிவிறக்கம்',
    logout: 'வெளியேறு',
    manageAccount: 'கணக்கு நிர்வகி',
    switchAccount: 'கணக்கு மாற்று',

    // Landing Page
    heroTitle: 'AI தாவர ஆய்வாளர்',
    heroSubtitle: 'மருத்துவ தாவரங்களை உடனடியாக அடையாளம் காணவும் மற்றும் அவற்றின் மறைக்கப்பட்ட குணப்படுத்தும் பண்புகளை கண்டறியவும்.',
    searchPlaceholder: 'ஒரு தாவரத்தை தேடுங்கள்...',
    scanNow: 'இப்போது ஸ்கேன் செய்',
    howItWorks: 'எப்படி செயல்படுகிறது',
    step1: 'பதிவேற்று அல்லது ஸ்கேன்',
    step1Desc: 'தாவர படத்தை பதிவேற்றவும் அல்லது நேரடி கேமரா பயன்படுத்தவும்',
    step2: 'AI பகுப்பாய்வு',
    step2Desc: 'எங்கள் AI தாவரத்தை உடனடியாக அடையாளம் காணும்',
    step3: 'முடிவுகளை பெறுங்கள்',
    step3Desc: 'விரிவான மருத்துவ தகவல்களை பார்க்கவும்',

    // Login
    loginTitle: 'உள்நுழைவு',
    loginSubtitle: 'AI தாவர ஆய்வாளருக்கு மீண்டும் வரவேற்கிறோம்',
    emailLabel: 'மின்னஞ்சல் முகவரி',
    passwordLabel: 'கடவுச்சொல்',
    loginBtn: 'உள்நுழை',
    forgotPassword: 'கடவுச்சொல் மறந்துவிட்டதா?',
    noAccount: 'கணக்கு இல்லையா?',
    signUpLink: 'பதிவு செய்யுங்கள்',
    invalidCredentials: 'தவறான சான்றுகள்',

    // Signup
    signupTitle: 'பதிவு செய்யுங்கள்',
    signupSubtitle: 'AI தாவர ஆய்வாளரில் சேருங்கள்',
    usernameLabel: 'பயனர் பெயர்',
    confirmPasswordLabel: 'கடவுச்சொல்லை உறுதிப்படுத்தவும்',
    signupBtn: 'கணக்கை உருவாக்கு',
    hasAccount: 'ஏற்கனவே கணக்கு உள்ளதா?',
    loginLink: 'உள்நுழைவு',
    passwordRequirements: 'கடவுச்சொல் தேவைகள்',
    req8chars: 'குறைந்தபட்சம் 8 எழுத்துக்கள்',
    reqLower: 'சிறிய எழுத்து (a-z)',
    reqUpper: 'பெரிய எழுத்து (A-Z)',
    reqNumber: 'எண் (0-9)',
    reqSpecial: 'சிறப்பு குறியீடு (!@#$%^&*)',

    // Dashboard
    dashboardTitle: 'தாவர தரவுத்தளம்',
    searchPlants: 'பொதுவான அல்லது அறிவியல் பெயரால் தாவரங்களை தேடுங்கள்...',
    scanPlant: 'தாவரத்தை ஸ்கேன் செய்யுங்கள்',
    viewDetails: 'விவரங்களை பார்',
    showing: 'காட்டுகிறது',
    plants: 'தாவரங்கள்',

    // Scan Page
    scanTitle: 'தாவரத்தை ஸ்கேன் செய்யுங்கள்',
    uploadTab: 'படத்தை பதிவேற்று',
    cameraTab: 'நேரடி கேமரா',
    dragDrop: 'படத்தை இழுத்து விடுங்கள் அல்லது பதிவேற்ற கிளிக் செய்யுங்கள்',
    uploadBtn: 'படத்தை தேர்ந்தெடு',
    scanBtn: 'இப்போது ஸ்கேன் செய்',
    analyzing: 'AI உங்கள் தாவரத்தை பகுப்பாய்வு செய்கிறது...',
    captureBtn: 'படம் எடுத்து ஸ்கேன் செய்',

    // Result Page
    backDashboard: '← டாஷ்போர்டுக்கு திரும்பு',
    herbalUses: 'மூலிகை பயன்கள்',
    medicalUses: 'மருத்துவ பயன்கள்',
    diseasesTreated: 'குணப்படுத்தும் நோய்கள்',
    medicineForms: 'மருந்து வடிவங்கள்',
    habitat: 'வாழிடம்',
    sideEffects: 'பக்க விளைவுகள்',
    downloadPDF: 'PDF பதிவிறக்கம்',
    confidence: 'நம்பகத்தன்மை',
    aiScanned: 'AI ஸ்கேன் செய்யப்பட்டது',
    noData: 'தகவல் இல்லை',

    // History
    historyTitle: 'ஸ்கேன் வரலாறு',
    noHistory: 'நீங்கள் இன்னும் எந்த தாவரத்தையும் ஸ்கேன் செய்யவில்லை!',
    goScan: 'ஸ்கேன் தொடங்குங்கள்',
    deleteBtn: 'நீக்கு',
    viewFullDetails: 'முழு விவரங்களை பார்',
    scanDate: 'ஸ்கேன் செய்யப்பட்டது',

    // Manage Account
    manageTitle: 'கணக்கை நிர்வகி',
    profileSection: 'சுயவிவரம்',
    changePassword: 'கடவுச்சொல்லை மாற்று',
    accountInfo: 'கணக்கு தகவல்',
    preferences: 'விருப்பங்கள்',
    dangerZone: 'ஆபத்தான பகுதி',
    saveChanges: 'மாற்றங்களை சேமி',
    updatePassword: 'கடவுச்சொல்லை புதுப்பி',
    deleteAccount: 'கணக்கை நீக்கு',
    memberSince: 'உறுப்பினர் ஆனது',
    totalScans: 'மொத்த ஸ்கேன்கள்',
    accountStatus: 'கணக்கு நிலை',
    active: 'செயலில் உள்ளது ✅',
    language: 'மொழி',
    theme: 'தீம்',

    // Chatbot
    aiAssistant: 'AI தாவரவியலாளர்',
    chatPlaceholder: 'உங்கள் கேள்வியை தட்டச்சு செய்யவும...',
    chatHello: 'வணக்கம்! தாவரவியலைப் பற்றி நீங்கள் ஏதேனும் கேட்கலாம்.',
    chatError: 'மன்னிக்கவும், பிழை ஏற்பட்டுள்ளது. மீண்டும் முயற்சிக்கவும்.',
    chatLogin: 'AI தாவர நிபுணருடன் அரட்டையடிக்க உள்நுழையவும்!',
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('app_language') || 'en';
  });

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'ta' : 'en';
    setLanguage(newLang);
    localStorage.setItem('app_language', newLang);
  };

  const t = (key) => translations[language]?.[key] || translations['en'][key] || key;

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
export default LanguageContext;
