// Translation Dictionary
const translations = {
    en: {
        home: "Home",
        projects: "Projects",
        contact: "Contact",
        support: "Financial Support",
        welcome: "Welcome to my website, I am <span class='highlight'>void</span>",
        subtitle: "Developer",
        coming_soon: "Projects coming soon...",
        phone: "Phone",
        email: "Email",
        support_msg: "Thank you for your support.",
        vodafone_cash: "Vodafone Cash"
    },
    ar: {
        home: "الرئيسية",
        projects: "المشاريع",
        contact: "تواصل معي",
        support: "الدعم المادي",
        welcome: "مرحباً بك في موقعي، أنا <span class='highlight'>void</span>",
        subtitle: "مطور",
        coming_soon: "المشاريع قادمة قريباً...",
        phone: "الهاتف",
        email: "البريد الإلكتروني",
        support_msg: "شكراً لدعمكم.",
        vodafone_cash: "فودافون كاش"
    }
};

const langToggleBtn = document.getElementById('lang-toggle');
const htmlTag = document.documentElement;

// Current language state
let currentLang = 'en';

langToggleBtn.addEventListener('click', () => {
    // Switch Language
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    
    // Update HTML attribute for RTL/LTR
    htmlTag.setAttribute('lang', currentLang);
    htmlTag.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
    
    // Update Button Text
    langToggleBtn.textContent = currentLang === 'en' ? 'Arabic' : 'English';
    
    // Update Content
    updateContent();
});

function updateContent() {
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            // Check if translation contains HTML (for the 'highlight' span)
            if (translations[currentLang][key].includes('<')) {
                element.innerHTML = translations[currentLang][key];
            } else {
                element.textContent = translations[currentLang][key];
            }
        }
    });
}