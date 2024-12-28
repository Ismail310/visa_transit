document.addEventListener('DOMContentLoaded', function() {
    const loader = document.getElementById('loader');
    const buttons = document.querySelectorAll('.travel-btn');
    const selectedLang = localStorage.getItem('selectedLanguage') || 'en';

    const translations = {
        ar: {
            germany: 'ألمانيا',
            canada: 'كندا',
            america: 'أمريكا',
            uk: 'المملكة المتحدة'
        },
        en: {
            germany: 'GERMANY',
            canada: 'CANADA',
            america: 'AMERICA',
            uk: 'UNITED KINGDOM'
        },
        fr: {
            germany: 'ALLEMAGNE',
            canada: 'CANADA',
            america: 'ÉTATS-UNIS',
            uk: 'ROYAUME-UNI'
        },
        es: {
            germany: 'ALEMANIA',
            canada: 'CANADÁ',
            america: 'ESTADOS UNIDOS',
            uk: 'REINO UNIDO'
        },
        hi: {
            germany: 'जर्मनी',
            canada: 'कनाडा',
            america: 'अमेरिका',
            uk: 'यूनाइटेड किंगडम'
        }
    };

    // Update button text based on selected language
    if (selectedLang && translations[selectedLang]) {
        document.querySelector('[data-url*="auswaertiges-amt"]').textContent = translations[selectedLang].germany;
        document.querySelector('[data-url*="canada"]').textContent = translations[selectedLang].canada;
        document.querySelector('[data-url*="travel.state"]').textContent = translations[selectedLang].america;
        document.querySelector('[data-url*="gov.uk"]').textContent = translations[selectedLang].uk;
    }
    function showLoader() {
        loader.style.display = 'flex';
    }

    function hideLoader() {
        loader.style.display = 'none';
    }

    async function handleNavigation(url) {
        showLoader();
        
        try {
            // Add a slight delay for the loading animation
            await new Promise(resolve => setTimeout(resolve, 800));
            window.open(url, '_blank');
            hideLoader();
        } catch (error) {
            console.error('Navigation error:', error);
            alert('There was an error navigating to the page. Please try again.');
            hideLoader();
        }
    }

    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const url = this.dataset.url;
            handleNavigation(url);
        });

        button.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)';
        });

        button.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });

    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        setTimeout(() => {
            document.body.style.opacity = '1';
            document.body.style.transition = 'opacity 0.5s ease-in';
        }, 100);
    });
});
