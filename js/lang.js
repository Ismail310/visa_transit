function selectLanguage(lang) {
    localStorage.setItem('selectedLanguage', lang);
    window.location.href = 'licence.html';
    localStorage.setItem('selectedLanguage', lang);
    window.location.href = 'description.html';
}

const translations = {
    en: {
        title: 'Select Your Language',
        submit: 'Submit',
        // Add more translations
    },
    fr: {
        title: 'Choisissez votre langue',
        submit: 'Soumettre',
        // Add more translations
    },
    // Add other languages
};


