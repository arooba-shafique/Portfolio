document.getElementById('year').textContent = new Date().getFullYear();

const menuBtn = document.getElementById('menuBtn');
const navList = document.getElementById('navList');

menuBtn && menuBtn.addEventListener('click', () => {
  if (navList.style.display === 'flex') {
    navList.style.display = '';
  } else {
    navList.style.display = 'flex';
  }
  navList.style.flexDirection = 'column';
  navList.style.background = 'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))';
  navList.style.padding = '12px';
  navList.style.borderRadius = '10px';
});

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if (href.length > 1 && document.querySelector(href)) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100; 
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

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

function submitForm(e) {
  e.preventDefault();
  const status = document.getElementById('formStatus');
  status.textContent = '⏳ Sending...';
  status.style.color = "#10b981";
  setTimeout(() => {
    status.textContent = '✅ Message Sent! I will reply soon.';
    status.style.color = "#22c55e";
    document.getElementById('contactForm').reset();
  }, 1200);
  return false;
}
function openProject(src) {
  const lightbox = document.getElementById('projectLightbox');
  const img = document.getElementById('projectLightboxImg');
  img.src = src;
  lightbox.style.display = 'flex'; 
}

function closeProjectLightbox() {
  const lightbox = document.getElementById('projectLightbox');
  lightbox.style.display = 'none';
}

function openCert(src) {
  const lightbox = document.getElementById('certLightbox');
  const img = document.getElementById('certLightboxImg');
  img.src = src;
  lightbox.style.display = 'flex';
}
function closeCertLightbox() {
  const lightbox = document.getElementById('certLightbox');
  lightbox.style.display = 'none';
}
