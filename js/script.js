/* ==========================================================================
   script.js — comportement global du site
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ---------- Navigation mobile ---------- */
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const isOpen = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    // ferme le menu après un clic sur un lien (mobile)
    links.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => links.classList.remove("open"));
    });
  }

  /* ---------- Apparition progressive au scroll ---------- */
  const revealTargets = document.querySelectorAll(".project-card, .skill-cat, .about-photo");
  if ("IntersectionObserver" in window && revealTargets.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealTargets.forEach(el => io.observe(el));
  } else {
    revealTargets.forEach(el => el.classList.add("in-view"));
  }

  /* ---------- Rendu des cartes projets (index + page projets) ---------- */
  const grid = document.querySelector("[data-project-grid]");
  if (grid && window.PROJECTS) {
    const onlyFeatured = grid.dataset.projectGrid === "featured";
    const list = onlyFeatured ? window.PROJECTS.filter(p => p.featured) : window.PROJECTS;
    renderCards(grid, list);

    /* ---------- Filtres par catégorie (page projets uniquement) ---------- */
    const filterBar = document.querySelector("[data-filters]");
    if (filterBar) {
      filterBar.addEventListener("click", (e) => {
        const btn = e.target.closest(".filter-btn");
        if (!btn) return;
        filterBar.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const cat = btn.dataset.category;
        const filtered = cat === "all" ? window.PROJECTS : window.PROJECTS.filter(p => p.category === cat);
        renderCards(grid, filtered);
      });
    }
  }

  function renderCards(container, projects) {
    container.innerHTML = "";
    projects.forEach(p => {
      const card = document.createElement("article");
      card.className = "project-card";
      card.innerHTML = `
        <a href="${adjustPath(p.link)}" aria-label="Voir le projet ${escapeHtml(p.name)}">
          <div class="card-media">
            <img src="${adjustPath(p.image)}" alt="${escapeHtml(p.name)}" loading="lazy">
          </div>
          <div class="card-body">
            <span class="card-meta">${escapeHtml(p.category)} · ${escapeHtml(p.year)}</span>
            <h3 class="card-title">${escapeHtml(p.name)}</h3>
            <p class="card-desc">${escapeHtml(p.description)}</p>
            <div class="card-foot"><span>Voir le projet →</span>${p.downloadLabel ? `<span>${p.downloadLabel}</span>` : ""}</div>
          </div>
        </a>`;
      container.appendChild(card);
      // Repli propre si l'image de couverture n'existe pas encore
      const coverImg = card.querySelector(".card-media img");
      coverImg.addEventListener("error", () => {
        const media = coverImg.parentElement;
        media.classList.add("placeholder");
        media.innerHTML = `Image à ajouter<br>(${escapeHtml(p.image.split("/").pop())})`;
      }, { once: true });
    });
    // (ré)observe les nouvelles cartes pour l'animation
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) { entry.target.classList.add("in-view"); io.unobserve(entry.target); }
        });
      }, { threshold: 0.15 });
      container.querySelectorAll(".project-card").forEach(el => io.observe(el));
    } else {
      container.querySelectorAll(".project-card").forEach(el => el.classList.add("in-view"));
    }
  }

  // Les data-liens dans projects-data.js sont écrits depuis la racine (projets/xxx.html).
  // Sur la page d'accueil (racine), on garde tel quel ; corrige seulement si on est déjà dans /projets/.
  function adjustPath(link){
    const inProjectsFolder = window.location.pathname.includes("/projets/");
    if (inProjectsFolder && link.startsWith("projets/")) {
      return link.replace("projets/", "");
    }
    return link;
  }

  function escapeHtml(str){
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  /* ---------- Affiches : zoom plein écran au clic ---------- */
  const posters = document.querySelectorAll(".media-poster img");
  if (posters.length) {
    const box = document.createElement("div");
    box.className = "lightbox";
    box.setAttribute("role", "dialog");
    box.setAttribute("aria-label", "Affiche en plein écran");
    box.innerHTML = '<button class="lightbox-close" aria-label="Fermer">&times;</button><img alt="">';
    document.body.appendChild(box);
    const boxImg = box.querySelector("img");
    const close = () => { box.classList.remove("open"); document.body.style.overflow = ""; };
    posters.forEach(img => {
      img.addEventListener("click", () => {
        boxImg.src = img.dataset.full || img.src;
        boxImg.alt = img.alt;
        box.classList.add("open");
        box.scrollTop = 0;
        document.body.style.overflow = "hidden";
      });
    });
    box.addEventListener("click", close);
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
  }

  /* ---------- Formulaire de contact (démo — à relier à un service d'envoi) ---------- */
  const form = document.querySelector("[data-contact-form]");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const status = form.querySelector("[data-form-status]");
      // MODIFIER ICI : brancher un vrai service d'envoi (Formspree, EmailJS, etc.)
      if (status) status.textContent = "Merci ! Ton message a été noté (formulaire de démonstration — à relier à un service d'envoi réel).";
      form.reset();
    });
  }
});
