document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("header");
  const navMenu = document.getElementById("navMenu");
  const mobileToggle = document.getElementById("mobileToggle");
  const backToTop = document.getElementById("backToTop");
  const faqItems = document.querySelectorAll(".faq-item");
  const fadeItems = document.querySelectorAll(".fade-in");
  const backgroundVideo = document.querySelector(".site-video");

  backgroundVideo?.removeAttribute("controls");
  backgroundVideo?.addEventListener("contextmenu", (event) => event.preventDefault());

  const scrollToCurrentHash = () => {
    if (!window.location.hash) return;

    const target = document.getElementById(decodeURIComponent(window.location.hash.slice(1)));
    target?.scrollIntoView({ block: "start" });
  };

  const toggleMenu = () => {
    const isActive = navMenu.classList.toggle("active");
    mobileToggle.setAttribute("aria-expanded", String(isActive));
    mobileToggle.innerHTML = isActive
      ? '<i class="fas fa-times" aria-hidden="true"></i>'
      : '<i class="fas fa-bars" aria-hidden="true"></i>';
  };

  const closeMenu = () => {
    navMenu.classList.remove("active");
    mobileToggle.setAttribute("aria-expanded", "false");
    mobileToggle.innerHTML = '<i class="fas fa-bars" aria-hidden="true"></i>';
  };

  mobileToggle?.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleMenu();
  });

  document.querySelectorAll('.nav-link[href^="#"]').forEach((link) => {
    link.addEventListener("click", () => {
      if (navMenu.classList.contains("active")) {
        closeMenu();
      }
    });
  });

  document.addEventListener("click", (event) => {
    if (navMenu && mobileToggle && !navMenu.contains(event.target) && !mobileToggle.contains(event.target)) {
      closeMenu();
    }
  });

  window.addEventListener("scroll", () => {
    header?.classList.toggle("scrolled", window.scrollY > 24);
    backToTop?.classList.toggle("visible", window.scrollY > 420);
  });

  window.addEventListener("hashchange", () => {
    window.requestAnimationFrame(scrollToCurrentHash);
  });

  backToTop?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    question?.addEventListener("click", () => {
      const isOpen = item.classList.contains("active");
      faqItems.forEach((otherItem) => otherItem.classList.remove("active"));
      if (!isOpen) item.classList.add("active");
    });
  });

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    fadeItems.forEach((item) => observer.observe(item));
  } else {
    fadeItems.forEach((item) => item.classList.add("visible"));
  }

  window.setTimeout(scrollToCurrentHash, 80);
});
