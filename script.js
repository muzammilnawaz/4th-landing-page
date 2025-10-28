  // Mobile menu functionality
  const mobileMenu = document.getElementById("mobile-menu");
  const openMenuBtn = document.getElementById("mobile-menu-button");
  const closeMenuBtn = document.getElementById("close-menu-button");
  const popupModal = document.getElementById('popup-modal');
  const closePopup = document.getElementById('close-popup');
  const popupCancel = document.getElementById('popup-cancel');
  const popupForm = document.getElementById('popup-form');

  // Mobile menu toggle
   openMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("hidden");
  });

  closeMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });



  document.querySelectorAll("#mobile-menu a").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  });
  
//   Show popup after 3 seconds
  // setTimeout(() => {
  //     popupModal.classList.remove('hidden');
  // }, 3000);

  // Close popup functionality
  closePopup.addEventListener('click', () => {
      popupModal.classList.add('hidden');
  });

  popupCancel.addEventListener('click', () => {
      popupModal.classList.add('hidden');
  });

  // Close popup when clicking outside
  popupModal.addEventListener('click', (e) => {
      if (e.target === popupModal) {
          popupModal.classList.add('hidden');
      }
  });

  // Form submission with reCAPTCHA validation
  popupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Check if reCAPTCHA is completed
      const recaptchaResponse = grecaptcha.getResponse();
      if (!recaptchaResponse) {
          alert('Please complete the reCAPTCHA verification.');
          return;
      }
      
      // Get form data
      const formData = {
          name: document.getElementById('popup-name').value,
          email: document.getElementById('popup-email').value,
          phone: document.getElementById('popup-phone').value,
          terms: document.getElementById('popup-terms').checked,
          recaptcha: recaptchaResponse
      };
      
      // Validate form
      if (!formData.name || !formData.email || !formData.phone || !formData.terms) {
          alert('Please fill in all required fields.');
          return;
      }
      
      // Simulate form submission
      console.log('Form submitted:', formData);
      alert('Thank you for your interest! We will contact you soon.');
      popupModal.classList.add('hidden');
      
      // Reset form
      popupForm.reset();
      grecaptcha.reset();
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
              target.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
              });
          }
          // Close mobile menu if open
          mobileMenu.classList.remove('open');
      });
  });

  // Add scroll animations
  const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('animate-fade-in');
          }
      });
  }, observerOptions);

  // Observe all sections for scroll animations
  document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
  });

  // Add hover effects to buttons
  document.querySelectorAll('button, .cursor-pointer').forEach(button => {
      button.addEventListener('mouseenter', function() {
          this.style.transform = 'translateY(-2px)';
          this.style.transition = 'transform 0.2s ease';
      });
      
      button.addEventListener('mouseleave', function() {
          this.style.transform = 'translateY(0)';
      });
  });

  // <!-- WhatsApp Button -->

  const whatsappNumber = "919035086850";
  const defaultMessage = "Hello! I want to know more about your services.";

  document.getElementById("whatsappBtn").addEventListener("click", function() {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, "_blank"); 
  });

  // Enhanced Header Animations
  document.addEventListener('DOMContentLoaded', function() {
    // Add floating animation to hero cards after initial load
    setTimeout(() => {
      const heroCards = document.querySelectorAll('.card-hover');
      heroCards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add('animate-card-float');
        }, index * 200);
      });
    }, 2000);

    // Add interactive hover effects to hero cards
    const heroCards = document.querySelectorAll('.card-hover');
    heroCards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) scale(1.05)';
        this.style.transition = 'all 0.3s ease';
        
        // Add ripple effect to icon
        const icon = this.querySelector('.w-12');
        icon.style.transform = 'scale(1.2) rotate(10deg)';
        icon.style.transition = 'all 0.3s ease';
      });
      
      card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        
        // Reset icon
        const icon = this.querySelector('.w-12');
        icon.style.transform = 'scale(1) rotate(0deg)';
      });
    });

    // Add text typing effect to main heading
    const mainHeading = document.querySelector('.animate-text-reveal');
    if (mainHeading) {
      const text = mainHeading.textContent;
      mainHeading.textContent = '';
      
      setTimeout(() => {
        let i = 0;
        const typeWriter = () => {
          if (i < text.length) {
            mainHeading.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
          }
        };
        typeWriter();
      }, 500);
    }

    // Add scroll-triggered animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const scrollObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-scale-in');
        }
      });
    }, observerOptions);

    // Observe hero cards for scroll animations
    heroCards.forEach(card => {
      scrollObserver.observe(card);
    });

    // Add parallax effect to hero background
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const heroSection = document.querySelector('.hero-bg');
      if (heroSection) {
        heroSection.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    });

    // Add click animation to hero cards
    heroCards.forEach(card => {
      card.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
          this.style.transform = 'scale(1)';
        }, 150);
      });
    });
  });
  

  function openModal() {
    document.getElementById('costSheetModal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('costSheetModal').classList.add('hidden');
}

// Optional: close modal on clicking outside
window.addEventListener('click', function(e) {
    const modal = document.getElementById('costSheetModal');
    if (e.target === modal) {
        closeModal();
    }
});