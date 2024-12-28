document.addEventListener('DOMContentLoaded', function() {
    const loader = document.getElementById('loader');
    const buttons = document.querySelectorAll('.travel-btn');
    const selectedLang = localStorage.getItem('selectedLanguage') || 'en';

    const translations = {
        ar: {
            flightbooking: 'حجز الطيران',
            visatransit: 'تأشيرة العبور',
            hotelreservation: 'حجز الفنادق',
            tourismprogram: 'البرنامج السياحي'
        },
        en: {
            flightbooking: 'FLIGHT BOOKING',
            visatransit: 'VISA TRANSIT',
            hotelreservation: 'HOTEL RESERVATION',
            tourismprogram: 'TOURISM PROGRAM'
        },
        fr: {
            flightbooking: 'RÉSERVATION DE VOL',
            visatransit: 'VISA DE TRANSIT',
            hotelreservation: 'RÉSERVATION HÔTEL',
            tourismprogram: 'PROGRAMME TOURISTIQUE'
        },
        es: {
            flightbooking: 'RESERVA DE VUELOS',
            visatransit: 'VISA DE TRÁNSITO',
            hotelreservation: 'RESERVA DE HOTEL',
            tourismprogram: 'PROGRAMA TURÍSTICO'
        },
        hi: {
            flightbooking: 'उड़ान बुकिंग',
            visatransit: 'वीजा ट्रांजिट',
            hotelreservation: 'होटल बुकिंग',
            tourismprogram: 'पर्यटन कार्यक्रम'
        }
    };

    // Update button text based on selected language
    buttons.forEach(button => {
        const key = button.textContent.toLowerCase().replace(/\s+/g, '');
        if (translations[selectedLang] && translations[selectedLang][key]) {
            button.textContent = translations[selectedLang][key];
        }
    });

    // Show loader
    function showLoader() {
        loader.style.display = 'flex';
    }

    // Hide loader
    function hideLoader() {
        loader.style.display = 'none';
    }

    // Handle navigation with loading state
    async function handleNavigation(url) {
        showLoader();
        
        try {
            if (url.startsWith('http')) {
                // External URL - open in new tab
                window.open(url, '_blank');
                hideLoader();
            } else {
                // Internal page - navigate with transition
                await new Promise(resolve => setTimeout(resolve, 500)); // Smooth transition
                window.location.href = url;
            }
        } catch (error) {
            console.error('Navigation error:', error);
            alert('There was an error navigating to the page. Please try again.');
            hideLoader();
        }
    }

    // Add click handlers to buttons
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const url = this.dataset.url;
            handleNavigation(url);
        });

        // Add hover effect
        button.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)';
        });

        button.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Page load animation
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        setTimeout(() => {
            document.body.style.opacity = '1';
            document.body.style.transition = 'opacity 0.5s ease-in';
        }, 100);
    });
});
