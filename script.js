document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const menuBtn = document.getElementById('menuBtn');
  const navList = document.getElementById('navList');
  if (menuBtn && navList) {
    menuBtn.addEventListener('click', () => {
      navList.classList.toggle('show'); 
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();

          if (window.innerWidth > 880) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
          } else {
            const header = document.querySelector("header");
            const headerHeight = header ? header.offsetHeight : 0;
            const elementPosition = target.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - headerHeight - 20;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth"
            });
          }
          navList && navList.classList.remove("show");
        }
      }
    });
  });

  const sections = document.querySelectorAll("section"); 
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(section => observer.observe(section));

  document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("mousemove", e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.transform = `perspective(600px) rotateY(${(x - rect.width / 2) / 25}deg) rotateX(${-(y - rect.height / 2) / 25}deg)`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(600px) rotateY(0deg) rotateX(0deg)";
    });
  });

  const contactForm = document.getElementById('contactForm');
  const successMsg = document.getElementById('formSuccess');
  if (contactForm) {
    contactForm.addEventListener('submit', async function(event) {
      event.preventDefault();
      const data = new FormData(contactForm);
      try {
        await fetch(contactForm.action, {
          method: contactForm.method,
          body: data,
          headers: { 'Accept': 'application/json' }
        });
        if (successMsg) successMsg.style.display = 'block';
        contactForm.reset();
      } catch (error) {
        alert('Oops! Something went wrong. Please try again.');
      }
    });
  }

  window.openProject = function(src) {
    const lightbox = document.getElementById('projectLightbox');
    const img = document.getElementById('projectLightboxImg');
    if (lightbox && img) {
      img.src = src;
      lightbox.style.display = 'flex';
    }
  };

  window.closeProjectLightbox = function() {
    const lightbox = document.getElementById('projectLightbox');
    if (lightbox) lightbox.style.display = 'none';
  };

  window.openCert = function(src) {
    const lightbox = document.getElementById('certLightbox');
    const img = document.getElementById('certLightboxImg');
    if (lightbox && img) {
      img.src = src;
      lightbox.style.display = 'flex';
    }
  };

  window.closeCertLightbox = function() {
    const lightbox = document.getElementById('certLightbox');
    if (lightbox) lightbox.style.display = 'none';
  };

  const brand = document.getElementById("brand");
  if (brand) {
    brand.style.cursor = "pointer";
    brand.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
