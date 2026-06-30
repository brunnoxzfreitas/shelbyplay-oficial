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
      start: "2026-06-30",
      end: "2026-06-30",
      cards: [
        {
          type: "match",
          group: "Mata-mata",
          date: "30/06/2026",
          time: "13:00",
          teams: [
            { flagCode: "ci", name: "C. Marfim" },
            { flagCode: "no", name: "Noruega" },
          ],
        },
        {
          type: "match",
          group: "Mata-mata",
          date: "30/06/2026",
          time: "17:00",
          teams: [
            { flagCode: "fr", name: "França" },
            { flagCode: "se", name: "Suécia" },
          ],
        },
        {
          type: "match",
          group: "Mata-mata",
          date: "30/06/2026",
          time: "21:00",
          teams: [
            { flagCode: "mx", name: "México" },
            { flagCode: "ec", name: "Equador" },
          ],
        },
        { label: "Cinema", title: "Supergirl", meta: "Em destaque", art: "superhero" },
        { label: "Cinema", title: "Toy Story 5", meta: "Família", art: "toy" },
        { label: "Série", title: "Maratona da semana", meta: "Top do dia", art: "series" },
      ],
    },
    {
      start: "2026-07-01",
      end: "2026-07-01",
      cards: [
        {
          type: "match",
          group: "Mata-mata",
          date: "01/07/2026",
          time: "12:00",
          teams: [
            { flagCode: "gb-eng", name: "Inglaterra" },
            { flagCode: "cd", name: "RD Congo" },
          ],
        },
        {
          type: "match",
          group: "Mata-mata",
          date: "01/07/2026",
          time: "16:00",
          teams: [
            { flagCode: "be", name: "Bélgica" },
            { flagCode: "sn", name: "Senegal" },
          ],
        },
        {
          type: "match",
          group: "Mata-mata",
          date: "01/07/2026",
          time: "20:00",
          teams: [
            { flagCode: "us", name: "EUA" },
            { flagCode: "ba", name: "Bósnia" },
          ],
        },
        { label: "Copa", title: "Mata-mata", meta: "Ao vivo" },
        { label: "Cinema", title: "Toy Story 5", meta: "Família", art: "toy" },
        { label: "Série", title: "Top do dia", meta: "Maratona", art: "series" },
      ],
    },
    {
      start: "2026-07-02",
      end: "2026-07-02",
      cards: [
        {
          type: "match",
          group: "Mata-mata",
          date: "02/07/2026",
          time: "15:00",
          teams: [
            { flagCode: "es", name: "Espanha" },
            { flagCode: "at", name: "Áustria" },
          ],
        },
        {
          type: "match",
          group: "Mata-mata",
          date: "02/07/2026",
          time: "19:00",
          teams: [
            { flagCode: "pt", name: "Portugal" },
            { flagCode: "hr", name: "Croácia" },
          ],
        },
        {
          type: "match",
          group: "Mata-mata",
          date: "02/07/2026",
          time: "23:00",
          teams: [
            { flagCode: "ch", name: "Suíça" },
            { flagCode: "dz", name: "Argélia" },
          ],
        },
        { label: "Copa", title: "Jogos decisivos", meta: "Round de 32" },
        { label: "Cinema", title: "Supergirl", meta: "Em destaque", art: "superhero" },
        { label: "Série", title: "Maratona", meta: "Top do dia", art: "series" },
      ],
    },
    {
      start: "2026-07-03",
      end: "2026-07-03",
      cards: [
        {
          type: "match",
          group: "Mata-mata",
          date: "03/07/2026",
          time: "14:00",
          teams: [
            { flagCode: "au", name: "Austrália" },
            { flagCode: "eg", name: "Egito" },
          ],
        },
        {
          type: "match",
          group: "Mata-mata",
          date: "03/07/2026",
          time: "18:00",
          teams: [
            { flagCode: "ar", name: "Argentina" },
            { flagCode: "cv", name: "Cabo Verde" },
          ],
        },
        {
          type: "match",
          group: "Mata-mata",
          date: "03/07/2026",
          time: "21:30",
          teams: [
            { flagCode: "co", name: "Colômbia" },
            { flagCode: "gh", name: "Gana" },
          ],
        },
        { label: "Copa", title: "Round de 32", meta: "Últimos jogos" },
        { label: "Cinema", title: "Toy Story 5", meta: "Família", art: "toy" },
        { label: "Evento", title: "Classificados", meta: "Mata-mata" },
      ],
    },
    {
      start: "2026-07-09",
      end: "2026-07-15",
      cards: [
        { label: "Lançamento", title: "Moana", meta: "Estreia 9 jul", art: "toy" },
        { label: "Copa", title: "Fase final", meta: "Ao vivo" },
        { label: "Cinema", title: "Supergirl", meta: "Em destaque", art: "superhero" },
        { label: "Cinema", title: "Toy Story 5", meta: "Família", art: "toy" },
        { label: "Série", title: "Top do dia", meta: "Maratona", art: "series" },
        { label: "Evento", title: "Clima de final", meta: "Copa 2026" },
      ],
    },
    {
      start: "2026-07-16",
      end: "2026-07-20",
      cards: [
        { label: "Lançamento", title: "A Odisseia", meta: "Estreia 16 jul", art: "fantasy" },
        { label: "Copa", title: "Grande final", meta: "Ao vivo" },
        { label: "Cinema", title: "Moana", meta: "Família", art: "toy" },
        { label: "Cinema", title: "Supergirl", meta: "Em destaque", art: "superhero" },
        { label: "Série", title: "Maratona", meta: "Top do dia", art: "series" },
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

      tile.classList.remove("art-superhero", "art-toy", "art-fantasy", "art-series");

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
                      <img src="https://flagcdn.com/w40/${team.flagCode}.png" alt="Bandeira ${team.name}">
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
            <small>${card.date}</small>
          </div>
        `;
        return;
      }

      tile.classList.remove("is-match-card");
      tile.classList.toggle("has-card-meta", Boolean(card.meta));
      if (card.art) tile.classList.add(`art-${card.art}`);
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
