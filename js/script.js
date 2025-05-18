// Script per elementi interattivi della landing page

document.addEventListener('DOMContentLoaded', function() {
    // Aggiungi classe fadeIn agli elementi quando entrano nel viewport
    const fadeElements = document.querySelectorAll('.schedule-item, .rule, .activity, .info-item');
    
    // Funzione per controllare se un elemento è nel viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    }
    
    // Funzione per aggiungere la classe fadeIn agli elementi visibili
    function checkFade() {
        fadeElements.forEach(element => {
            if (isInViewport(element) && !element.classList.contains('fadeIn')) {
                element.classList.add('fadeIn');
            }
        });
    }
    
    // Controlla gli elementi all'avvio
    checkFade();
    
    // Controlla gli elementi durante lo scroll
    window.addEventListener('scroll', checkFade);
    
    // Effetto parallax per lo sfondo della sezione CTA
    const ctaSection = document.querySelector('.cta');
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        if (ctaSection) {
            const ctaOffset = ctaSection.offsetTop;
            const parallaxOffset = (scrollPosition - ctaOffset) * 0.4;
            if (scrollPosition > ctaOffset - window.innerHeight && scrollPosition < ctaOffset + ctaSection.offsetHeight) {
                ctaSection.style.backgroundPositionY = `calc(50% + ${parallaxOffset}px)`;
            }
        }
    });
    
    // Aggiungi classe hover-glow agli elementi interattivi
    const interactiveElements = document.querySelectorAll('.cta-button, .schedule-item, .activity, .info-item');
    interactiveElements.forEach(element => {
        element.classList.add('hover-glow');
    });
    
    // Animazione per il pulsante CTA
    const ctaButton = document.querySelectorAll('.cta-button');
    ctaButton.forEach(button => {
        button.addEventListener('mouseover', function() {
            this.style.transform = 'translateY(-5px) scale(1.05)';
            this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
        });
        
        button.addEventListener('mouseout', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });
    
    // Aggiungi bordo egiziano a elementi selezionati
    const egyptianBorderElements = document.querySelectorAll('.onboard-info');
    egyptianBorderElements.forEach(element => {
        element.classList.add('egyptian-border');
    });
    
    // Effetto di scorrimento fluido per i link interni
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animazione per il titolo principale
    const mainTitle = document.querySelector('h1');
    if (mainTitle) {
        setTimeout(() => {
            mainTitle.style.opacity = '0';
            mainTitle.style.transition = 'all 1.5s ease';
            
            setTimeout(() => {
                mainTitle.style.opacity = '1';
                mainTitle.style.textShadow = '0 0 10px rgba(200, 164, 92, 0.8), 0 0 20px rgba(200, 164, 92, 0.5)';
                
                setTimeout(() => {
                    mainTitle.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.5)';
                }, 1500);
            }, 500);
        }, 1000);
    }
    
    // Effetto di rotazione per le icone delle attività
    const activityIcons = document.querySelectorAll('.activity i');
    activityIcons.forEach(icon => {
        icon.addEventListener('mouseover', function() {
            this.style.transform = 'rotate(10deg) scale(1.2)';
            this.style.transition = 'all 0.3s ease';
        });
        
        icon.addEventListener('mouseout', function() {
            this.style.transform = '';
        });
    });
});
