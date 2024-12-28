document.addEventListener('DOMContentLoaded', function() {
    const selectedLang = localStorage.getItem('selectedLanguage') || 'en';
    const descriptions = {
        ar: {
            text: `يرجى العلم ان هذا التطبيق تحت المراقبة

            1_تصدر الملفات من جهازك مع رقم الترخيص و تمر عبر شركة السياحة الكفيلة
            
            2-تصدر الملفات من شركة السياحة مع رقم الترخيص وترسل الى وزارة السياحة في هايتي 
            
            3_تصدر الملفات التي قمت بتقديمها من وزارة السياحة مع الاكواد المخصصة ثم الى وجهتها الاخيرة
            
            يرجى مراعات ان الشركة السياحية المُشغلة  هي المسؤولة عن جميع المعلومات و نتائج العمل المقدمة من خلال هذ التطبيق`,
            buttonText: 'قبول'
        },
        en: {
            text: `Please note that this application is under surveillance

            1_Files are issued from your device with the license number and pass through the sponsoring tourism company
            
            2-Files are issued from the tourism company with the license number and sent to the Ministry of Tourism in Haiti
            
            3_The files you submitted are issued from the Ministry of Tourism with the designated codes and then to their final destination
            
            Please note that the operating tourism company is responsible for all information and work results submitted through this application`,
            buttonText: 'Accept'
        },
        fr: {
            text: `Veuillez noter que cette application est sous surveillance...`,
            buttonText: 'Accepter'
        },
        es: {
            text: `Tenga en cuenta que esta aplicación está bajo vigilancia...`,
            buttonText: 'Aceptar'
        },
        hi: {
            text: `कृपया ध्यान दें कि यह एप्लिकेशन निगरानी में है...`,
            buttonText: 'स्वीकार करें'
        }
    };
    const descriptionText = document.getElementById('descriptionText');
    descriptionText.style.opacity = 0;
    descriptionText.innerHTML = descriptions[selectedLang].text;
    
    // Set button text
    document.querySelector('.continue-btn').innerHTML = descriptions[selectedLang].buttonText;
    
    // Fade in animation
    setTimeout(() => {
        descriptionText.style.transition = 'opacity 0.5s ease-in';
        descriptionText.style.opacity = 1;
    }, 100);
   
});
function goToLicense() {
    window.location.href = 'licence.html';
}