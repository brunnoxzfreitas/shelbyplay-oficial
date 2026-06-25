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
        { label: "Lançamento", title: "Supergirl", meta: "Estreia 25 jun" },
        { label: "Cinema", title: "Toy Story 5", meta: "Estreia 18 jun" },
        {
          type: "match",
          group: "Grupo E",
          time: "16:00",
          teams: [
            { flagCode: "cw", name: "Curaçao" },
            { flagCode: "ci", name: "C. Marfim" },
          ],
        },
        {
          type: "match",
          group: "Grupo E",
          time: "16:00",
          teams: [
            { flagCode: "ec", name: "Equador" },
            { flagCode: "de", name: "Alemanha" },
          ],
        },
        { label: "Lançamento", title: "Mestres do Universo", meta: "Estreia 4 jun" },
        { label: "Evento", title: "Rodada de grupos", meta: "Copa 2026" },
      ],
    },
    {
      start: "2026-06-26",
      end: "2026-06-27",
      cards: [
        {
          type: "match",
          group: "Grupo I",
          time: "16:00",
          teams: [
            { flagCode: "no", name: "Noruega" },
            { flagCode: "fr", name: "França" },
          ],
        },
        {
          type: "match",
          group: "Grupo H",
          time: "19:00",
          teams: [
            { flagCode: "uy", name: "Uruguai" },
            { flagCode: "kr", name: "Coreia" },
          ],
        },
        {
          type: "match",
          group: "Grupo L",
          time: "22:00",
          teams: [
            { flagCode: "pa", name: "Panamá" },
            { flagCode: "gb-eng", name: "Inglaterra" },
          ],
        },
        { label: "Cinema", title: "Supergirl", meta: "Em destaque" },
        { label: "Cinema", title: "Toy Story 5", meta: "Família" },
        { label: "Série", title: "Maratona da semana", meta: "Top do dia" },
      ],
    },
    {
      start: "2026-06-28",
      end: "2026-07-08",
      cards: [
        { label: "Copa", title: "Mata-mata", meta: "Ao vivo" },
        { label: "Copa", title: "Oitavas de final", meta: "Jogos decisivos" },
        { label: "Cinema", title: "Supergirl", meta: "Em destaque" },
        { label: "Cinema", title: "Toy Story 5", meta: "Família" },
        { label: "Série", title: "Maratona da semana", meta: "Top do dia" },
        { label: "Evento", title: "Jogos decisivos", meta: "Copa 2026" },
      ],
    },
    {
      start: "2026-07-09",
      end: "2026-07-15",
      cards: [
        { label: "Lançamento", title: "Moana", meta: "Estreia 9 jul" },
        { label: "Copa", title: "Fase final", meta: "Ao vivo" },
        { label: "Cinema", title: "Supergirl", meta: "Em destaque" },
        { label: "Cinema", title: "Toy Story 5", meta: "Família" },
        { label: "Série", title: "Top do dia", meta: "Maratona" },
        { label: "Evento", title: "Clima de final", meta: "Copa 2026" },
      ],
    },
    {
      start: "2026-07-16",
      end: "2026-07-20",
      cards: [
        { label: "Lançamento", title: "A Odisseia", meta: "Estreia 16 jul" },
        { label: "Copa", title: "Grande final", meta: "Ao vivo" },
        { label: "Cinema", title: "Moana", meta: "Família" },
        { label: "Cinema", title: "Supergirl", meta: "Em destaque" },
        { label: "Série", title: "Maratona", meta: "Top do dia" },
        { label: "Evento", title: "Campeão do mundo", meta: "Copa 2026" },
      ],
    },
  ];
  const fallbackCards = [
    { label: "Lançamento", title: "Filme novo", meta: "Atualizado" },
    { label: "Top do dia", title: "Mais visto", meta: "Em alta" },
    { label: "Ao vivo", title: "Futebol", meta: "Agora" },
    { label: "Série", title: "Maratona", meta: "Top do dia" },
    { label: "Clássico", title: "Cinema", meta: "Sugestão" },
    { label: "Jogo", title: "Rodada", meta: "Ao vivo" },
  ];

  const getActiveHighlights = () => {
    const activePeriod = highlightSchedule.find(
      (period) => today >= dateFromISO(period.start) && today <= dateEndFromISO(period.end)
    );

    return activePeriod?.cards ?? fallbackCards;
  };

  const updatePosterHighlights = () => {
    getActiveHighlights().forEach((card, index) => {
      const tile = posterTiles[index];
      if (!tile) return;

      if (card.type === "match") {
        tile.classList.add("is-match-card");
        tile.classList.remove("has-card-meta");
        tile.innerHTML = `
          <span class="match-group">${card.group}</span>
          <div class="match-teams">
            ${card.teams
              .map(
                (team) => `
                  <div class="match-team">
                    <span class="match-flag">
                      <img src="https://flagcdn.com/w40/${team.flagCode}.png" alt="Bandeira ${team.name}" loading="lazy">
                    </span>
                    <strong>${team.name}</strong>
                  </div>
                `
              )
              .join("")}
          </div>
          <div class="match-meta">
            <span>Hoje</span>
            <strong>${card.time}</strong>
            <small>História do jogo</small>
          </div>
        `;
        return;
      }

      tile.classList.remove("is-match-card");
      tile.classList.toggle("has-card-meta", Boolean(card.meta));
      tile.innerHTML = `
        <span>${card.label}</span>
        <strong>${card.title}</strong>
        ${card.meta ? `<small>${card.meta}</small>` : ""}
        <i class="${tile.dataset.icon || "fas fa-star"}"></i>
      `;
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
