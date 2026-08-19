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
      start: "2026-08-19",
      end: "2026-08-19",
      cards: [
        {
          type: "match",
          group: "Libertadores",
          date: "19/08/2026",
          time: "19:00",
          when: "Hoje",
          teams: [
            { flagCode: "py", name: "Cerro Porteño" },
            { flagCode: "br", name: "Palmeiras" },
          ],
        },
        {
          type: "match",
          group: "Libertadores",
          date: "19/08/2026",
          time: "21:30",
          when: "Hoje",
          teams: [
            { flagCode: "br", name: "Flamengo" },
            { flagCode: "br", name: "Cruzeiro" },
          ],
        },
        {
          type: "match",
          group: "Brasileirão",
          date: "22/08/2026",
          time: "16:00",
          when: "Sáb",
          teams: [
            { flagCode: "br", name: "Fluminense" },
            { flagCode: "br", name: "Remo" },
          ],
        },
        {
          type: "match",
          group: "Brasileirão",
          date: "22/08/2026",
          time: "18:30",
          when: "Sáb",
          teams: [
            { flagCode: "br", name: "Internacional" },
            { flagCode: "br", name: "Atlético-MG" },
          ],
        },
        {
          type: "match",
          group: "Brasileirão",
          date: "22/08/2026",
          time: "20:30",
          when: "Sáb",
          teams: [
            { flagCode: "br", name: "Cruzeiro" },
            { flagCode: "br", name: "Flamengo" },
          ],
        },
        {
          type: "match",
          group: "Brasileirão",
          date: "23/08/2026",
          time: "16:00",
          when: "Dom",
          teams: [
            { flagCode: "br", name: "Palmeiras" },
            { flagCode: "br", name: "Vasco" },
          ],
        },
      ],
    },
    {
      start: "2026-08-20",
      end: "2026-08-20",
      cards: [
        {
          type: "match",
          group: "Libertadores",
          date: "20/08/2026",
          time: "19:00",
          when: "Hoje",
          teams: [
            { flagCode: "ec", name: "LDU" },
            { flagCode: "br", name: "Mirassol" },
          ],
        },
        {
          type: "match",
          group: "Libertadores",
          date: "20/08/2026",
          time: "21:30",
          when: "Hoje",
          teams: [
            { flagCode: "br", name: "Corinthians" },
            { flagCode: "ar", name: "Rosario Central" },
          ],
        },
        {
          type: "match",
          group: "Brasileirão",
          date: "22/08/2026",
          time: "16:00",
          when: "Sáb",
          teams: [
            { flagCode: "br", name: "Fluminense" },
            { flagCode: "br", name: "Remo" },
          ],
        },
        {
          type: "match",
          group: "Brasileirão",
          date: "22/08/2026",
          time: "18:30",
          when: "Sáb",
          teams: [
            { flagCode: "br", name: "Internacional" },
            { flagCode: "br", name: "Atlético-MG" },
          ],
        },
        {
          type: "match",
          group: "Brasileirão",
          date: "22/08/2026",
          time: "20:30",
          when: "Sáb",
          teams: [
            { flagCode: "br", name: "Cruzeiro" },
            { flagCode: "br", name: "Flamengo" },
          ],
        },
        {
          type: "match",
          group: "Brasileirão",
          date: "23/08/2026",
          time: "16:00",
          when: "Dom",
          teams: [
            { flagCode: "br", name: "Palmeiras" },
            { flagCode: "br", name: "Vasco" },
          ],
        },
      ],
    },
    {
      start: "2026-08-22",
      end: "2026-08-22",
      cards: [
        {
          type: "match",
          group: "Brasileirão",
          date: "22/08/2026",
          time: "16:00",
          when: "Hoje",
          teams: [
            { flagCode: "br", name: "Fluminense" },
            { flagCode: "br", name: "Remo" },
          ],
        },
        {
          type: "match",
          group: "Brasileirão",
          date: "22/08/2026",
          time: "18:30",
          when: "Hoje",
          teams: [
            { flagCode: "br", name: "Internacional" },
            { flagCode: "br", name: "Atlético-MG" },
          ],
        },
        {
          type: "match",
          group: "Brasileirão",
          date: "22/08/2026",
          time: "20:30",
          when: "Hoje",
          teams: [
            { flagCode: "br", name: "Cruzeiro" },
            { flagCode: "br", name: "Flamengo" },
          ],
        },
        {
          type: "match",
          group: "Brasileirão",
          date: "23/08/2026",
          time: "16:00",
          when: "Dom",
          teams: [
            { flagCode: "br", name: "Palmeiras" },
            { flagCode: "br", name: "Vasco" },
          ],
        },
        {
          type: "match",
          group: "Brasileirão",
          date: "23/08/2026",
          time: "16:00",
          when: "Dom",
          teams: [
            { flagCode: "br", name: "Bragantino" },
            { flagCode: "br", name: "Grêmio" },
          ],
        },
        {
          type: "match",
          group: "Brasileirão",
          date: "23/08/2026",
          time: "16:00",
          when: "Dom",
          teams: [
            { flagCode: "br", name: "Vitória" },
            { flagCode: "br", name: "Bahia" },
          ],
        },
      ],
    },
    {
      start: "2026-08-23",
      end: "2026-08-24",
      cards: [
        {
          type: "match",
          group: "Brasileirão",
          date: "23/08/2026",
          time: "16:00",
          when: "Hoje",
          teams: [
            { flagCode: "br", name: "Palmeiras" },
            { flagCode: "br", name: "Vasco" },
          ],
        },
        {
          type: "match",
          group: "Brasileirão",
          date: "23/08/2026",
          time: "16:00",
          when: "Hoje",
          teams: [
            { flagCode: "br", name: "Bragantino" },
            { flagCode: "br", name: "Grêmio" },
          ],
        },
        {
          type: "match",
          group: "Brasileirão",
          date: "23/08/2026",
          time: "16:00",
          when: "Hoje",
          teams: [
            { flagCode: "br", name: "Vitória" },
            { flagCode: "br", name: "Bahia" },
          ],
        },
        {
          type: "match",
          group: "Brasileirão",
          date: "23/08/2026",
          time: "18:30",
          when: "Hoje",
          teams: [
            { flagCode: "br", name: "Chapecoense" },
            { flagCode: "br", name: "São Paulo" },
          ],
        },
        {
          type: "match",
          group: "Brasileirão",
          date: "23/08/2026",
          time: "18:30",
          when: "Hoje",
          teams: [
            { flagCode: "br", name: "Santos" },
            { flagCode: "br", name: "Mirassol" },
          ],
        },
        {
          type: "match",
          group: "Brasileirão",
          date: "23/08/2026",
          time: "19:30",
          when: "Hoje",
          teams: [
            { flagCode: "br", name: "Coritiba" },
            { flagCode: "br", name: "Corinthians" },
          ],
        },
      ],
    },
  ];
  const fallbackCards = [
    { label: "Filmes", title: "Novidades", meta: "Atualizado", art: "superhero" },
    { label: "Família", title: "Animação", meta: "Para todos", art: "toy" },
    { label: "Ao vivo", title: "Futebol", meta: "Hoje", art: "field" },
    { label: "Séries", title: "Maratona", meta: "Top do dia", art: "series" },
    { label: "Cinema", title: "Clássicos", meta: "Sugestão", art: "fantasy" },
    { label: "Eventos", title: "Ao vivo", meta: "Na hora", art: "field" },
  ];
  const teamBadges = {
    Flamengo: { short: "FLA", image: "./Img/teams/flamengo.png" },
    Palmeiras: { short: "PAL", image: "./Img/teams/palmeiras.png" },
  };

  const getTeamBadge = (teamName) => {
    const badge = teamBadges[teamName];
    if (badge) return badge;

    return {
      short: teamName
        .split(/\s+/)
        .map((word) => word[0])
        .join("")
        .slice(0, 3)
        .toUpperCase(),
      colors: ["#17212b", "#ffe0a3"],
    };
  };

  const getActiveHighlights = () => {
    const activePeriod = highlightSchedule.find(
      (period) => today >= dateFromISO(period.start) && today <= dateEndFromISO(period.end)
    );

    return activePeriod?.cards ?? fallbackCards;
  };
  const hasScheduledEvent = highlightSchedule.some(
    (period) => today >= dateFromISO(period.start) && today <= dateEndFromISO(period.end)
  );

  const updatePosterHighlights = () => {
    getActiveHighlights().forEach((card, index) => {
      const tile = posterTiles[index];
      if (!tile) return;

      tile.classList.remove("art-superhero", "art-toy", "art-moana", "art-fantasy", "art-series", "art-field");

      if (card.type === "match") {
        tile.classList.add("is-match-card");
        tile.classList.remove("has-card-meta");
        tile.innerHTML = `
          <span class="match-group">${card.group}</span>
          <div class="match-teams">
            ${card.teams
              .map(
                (team) => {
                  const badge = getTeamBadge(team.name);

                  return `
                  <div class="match-team">
                    <span class="${badge.image ? "match-crest match-crest-real" : "match-crest match-crest-neutral"}" style="${badge.image ? "" : `--crest-primary: ${badge.colors[0]}; --crest-secondary: ${badge.colors[1]};`}">
                      ${badge.image ? `<img src="${badge.image}" alt="Escudo ${team.name}">` : badge.short}
                    </span>
                    <strong>${team.name}</strong>
                  </div>
                `;
                }
              )
              .join("")}
          </div>
          <div class="match-meta">
            <span>${card.when || "Hoje"}</span>
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

  if (isWorldCupSeason || hasScheduledEvent) {
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
