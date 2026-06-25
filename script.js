document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("header");
  const navMenu = document.getElementById("navMenu");
  const mobileToggle = document.getElementById("mobileToggle");
  const backToTop = document.getElementById("backToTop");
  const faqItems = document.querySelectorAll(".faq-item");
  const fadeItems = document.querySelectorAll(".fade-in");
  const backgroundVideo = document.querySelector(".site-video");
  const seasonBadge = document.getElementById("seasonBadge");
  const worldCupStrip = document.getElementById("worldCupStrip");
  const posterTiles = document.querySelectorAll(".poster-tile");

  backgroundVideo?.removeAttribute("controls");
  backgroundVideo?.addEventListener("contextmenu", (event) => event.preventDefault());

  const getToday = () => {
    const previewDate = new URLSearchParams(window.location.search).get("previewDate");
    return previewDate ? new Date(`${previewDate}T12:00:00`) : new Date();
  };

  const dateFromISO = (date) => new Date(`${date}T00:00:00`);
  const dateEndFromISO = (date) => new Date(`${date}T23:59:59`);
  const today = getToday();
  const worldCupStart = new Date("2026-06-11T00:00:00");
  const worldCupEnd = new Date("2026-07-20T00:00:00");
  const isWorldCupSeason = today >= worldCupStart && today < worldCupEnd;
  const highlightSchedule = [
    {
      start: "2026-06-25",
      end: "2026-06-25",
      cards: [
        ["Lançamento", "Supergirl"],
        ["Cinema", "Toy Story 5"],
        ["Copa hoje", "Alemanha x Equador"],
        ["Copa hoje", "Curaçao x C. Marfim"],
        ["Lançamento", "Mestres do Universo"],
        ["Evento", "Rodada de grupos"],
      ],
    },
    {
      start: "2026-06-26",
      end: "2026-06-27",
      cards: [
        ["Copa hoje", "Noruega x França"],
        ["Copa hoje", "Uruguai x Coreia"],
        ["Copa hoje", "Panamá x Inglaterra"],
        ["Cinema", "Supergirl"],
        ["Cinema", "Toy Story 5"],
        ["Evento", "Última rodada"],
      ],
    },
    {
      start: "2026-06-28",
      end: "2026-07-08",
      cards: [
        ["Copa", "Mata-mata"],
        ["Copa", "Oitavas de final"],
        ["Cinema", "Supergirl"],
        ["Cinema", "Toy Story 5"],
        ["Série", "Maratona da semana"],
        ["Evento", "Jogos decisivos"],
      ],
    },
    {
      start: "2026-07-09",
      end: "2026-07-15",
      cards: [
        ["Lançamento", "Moana"],
        ["Copa", "Fase final"],
        ["Cinema", "Supergirl"],
        ["Cinema", "Toy Story 5"],
        ["Série", "Top do dia"],
        ["Evento", "Clima de final"],
      ],
    },
    {
      start: "2026-07-16",
      end: "2026-07-20",
      cards: [
        ["Lançamento", "A Odisseia"],
        ["Copa", "Grande final"],
        ["Cinema", "Moana"],
        ["Cinema", "Supergirl"],
        ["Série", "Maratona"],
        ["Evento", "Campeão do mundo"],
      ],
    },
  ];
  const fallbackCards = [
    ["Lançamento", "Filme novo"],
    ["Top do dia", "Mais visto"],
    ["Ao vivo", "Futebol"],
    ["Série", "Maratona"],
    ["Clássico", "Cinema"],
    ["Jogo", "Rodada"],
  ];

  const getActiveHighlights = () => {
    const activePeriod = highlightSchedule.find(
      (period) => today >= dateFromISO(period.start) && today <= dateEndFromISO(period.end)
    );

    return activePeriod?.cards ?? fallbackCards;
  };

  const updatePosterHighlights = () => {
    getActiveHighlights().forEach(([label, title], index) => {
      const tile = posterTiles[index];
      if (!tile) return;

      const labelNode = tile.querySelector("span");
      const titleNode = tile.querySelector("strong");
      if (labelNode) labelNode.textContent = label;
      if (titleNode) titleNode.textContent = title;
    });
  };

  if (isWorldCupSeason) {
    document.body.classList.add("world-cup-active");
    seasonBadge?.removeAttribute("hidden");
    worldCupStrip?.removeAttribute("hidden");
  }

  updatePosterHighlights();

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
