document.addEventListener('DOMContentLoaded', () => {
    const selectedLang = localStorage.getItem('selectedLanguage');
    
    const translations = {
        ar: {
            title: 'أدخل مفتاح الترخيص',
            placeholder: 'أدخل مفتاح الترخيص الخاص بك',
            submit: 'إرسال',
            noLicense: 'لا تمتلك ترخيص !',
            contactUs: 'تواصل بنا',
            phone: '+50936184444',
            email: 'info@piblikhub.com',
            priceInfo: 'يمكنك الحصول على ترخيص صالح 6 شهور مقابل 2300 دولار'
        },
        en: {
            title: 'Enter License Key',
            placeholder: 'Enter your license key',
            submit: 'Submit',
            noLicense: 'You don\'t have a license!',
            contactUs: 'Contact Us',
            phone: '+50936184444',
            email: 'info@piblikhub.com',
            priceInfo: 'You can get a valid 6-month license for $2,300'
        },
        fr: {
            title: 'Entrez la clé de licence',
            placeholder: 'Entrez votre clé de licence',
            submit: 'Soumettre',
            noLicense: 'Vous n\'avez pas de licence !',
            contactUs: 'Contactez-nous',
            phone: '+50936184444',
            email: 'info@piblikhub.com',
            priceInfo: 'Vous pouvez obtenir une licence valide de 6 mois pour 2300 $'
        },
        es: {
            title: 'Ingrese la clave de licencia',
            placeholder: 'Ingrese su clave de licencia',
            submit: 'Enviar',
            noLicense: '¡No tienes licencia!',
            contactUs: 'Contáctenos',
            phone: '+50936184444',
            email: 'info@piblikhub.com',
            priceInfo: 'Puede obtener una licencia válida de 6 meses por $2,300'
        },
        hi: {
            title: 'लाइसेंस कुंजी दर्ज करें',
            placeholder: 'अपनी लाइसेंस कुंजी दर्ज करें',
            submit: 'जमा करें',
            noLicense: 'आपके पास लाइसेंस नहीं है!',
            contactUs: 'संपर्क करें',
            phone: '+50936184444',
            email: 'info@piblikhub.com',
            priceInfo: 'आप $2,300 में 6 महीने का वैध लाइसेंस प्राप्त कर सकते हैं'
        }
    };
    
    // Update content based on selected language
    if (selectedLang && translations[selectedLang]) {
        document.getElementById('licenseTitle').textContent = translations[selectedLang].title;
        document.getElementById('licenseKey').placeholder = translations[selectedLang].placeholder;
        document.getElementById('submitBtn').textContent = translations[selectedLang].submit;
        document.getElementById('noLicense').textContent = translations[selectedLang].noLicense;
        document.getElementById('contactUs').textContent = translations[selectedLang].contactUs;
        document.getElementById('phone').textContent = translations[selectedLang].phone;
        document.getElementById('email').textContent = translations[selectedLang].email;
        document.getElementById('priceInfo').textContent = translations[selectedLang].priceInfo;
        document.documentElement.lang = selectedLang;
    }
});



function validateLicense(event) {
    event.preventDefault();
    const licenseKey = document.getElementById('licenseKey').value;
    
    if (licenseKey == "123456789") {
        const popup = document.getElementById('successPopup');
        popup.style.display = 'block';
        
        setTimeout(() => {
            window.location.href = 'travel.html';
        }, 3000);
    } else {
        showMessage('Invalid license key', 'error');
    }
}

function showMessage(text, type) {
    const message = document.getElementById('message');
    message.textContent = text;
    message.className = `message ${type}`;
    setTimeout(() => {
        message.textContent = '';
        message.className = 'message';
    }, 3000);
}
