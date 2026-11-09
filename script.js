(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  // ---------- Theme ----------
  const root = document.documentElement;
  try { const t = localStorage.getItem("theme"); if (t) root.dataset.theme = t; } catch {}
  $("#themeToggle").addEventListener("click", () => {
    const dark = root.dataset.theme
      ? root.dataset.theme === "dark"
      : matchMedia("(prefers-color-scheme: dark)").matches;
    root.dataset.theme = dark ? "light" : "dark";
    try { localStorage.setItem("theme", root.dataset.theme); } catch {}
  });

  // ---------- Nav border on scroll ----------
  const nav = $(".nav");
  addEventListener("scroll", () => nav.classList.toggle("scrolled", scrollY > 8), { passive: true });

  $("#year").textContent = new Date().getFullYear();

  // ---------- Typed line ----------
  const lines = [
    "> compiling ideas into software…",
    "> finding the story inside the data…",
    "> designing worlds people can walk into…",
    "> open to Summer 2027 internships."
  ];
  const typedEl = $("#typed");
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) typedEl.textContent = lines[lines.length - 1];
  else {
    let li = 0, ci = 0, del = false;
    (function tick() {
      const line = lines[li];
      typedEl.textContent = line.slice(0, ci);
      if (!del && ci < line.length) { ci++; setTimeout(tick, 38); }
      else if (!del) { del = true; setTimeout(tick, 1800); }
      else if (ci > 0) { ci--; setTimeout(tick, 16); }
      else { del = false; li = (li + 1) % lines.length; setTimeout(tick, 300); }
    })();
  }

  // ---------- Projects ----------
  const COLORS = { cs: "--cs", data: "--data", narr: "--narr" };
  const css = (v) => getComputedStyle(root).getPropertyValue(v).trim();
  const thumb = (p) => {
    if (p.image) return `<div class="thumb"><img src="${esc(p.image)}" alt="" loading="lazy"></div>`;
    const cols = p.disciplines.map((d) => `var(${COLORS[d]})`);
    const bg = cols.length > 1
      ? `linear-gradient(135deg, ${cols.join(", ")})`
      : `linear-gradient(135deg, ${cols[0]}, color-mix(in srgb, ${cols[0]} 55%, #000))`;
    return `<div class="thumb" style="background:${bg}"><span class="glyph">${esc(p.glyph || p.title[0])}</span></div>`;
  };

  const projects = [...(window.PROJECTS || [])].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  const grid = $("#projectGrid");
  grid.innerHTML = projects.map((p, i) => `
    <button class="card reveal" data-i="${i}" data-disc="${p.disciplines.join(" ")}" aria-label="Open details: ${esc(p.title)}">
      ${thumb(p)}
      <div class="card-body">
        <div class="disc">${p.disciplines.map((d) => `<span class="dot ${d}"></span>`).join("")}
          ${p.featured ? `<span class="featured">&nbsp;Featured</span>` : ""}</div>
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.summary)}</p>
        <div class="meta">${p.tags.map((t) => `<span class="pill">${esc(t)}</span>`).join("")}</div>
      </div>
    </button>`).join("");

  // Filters
  document.querySelectorAll(".chip").forEach((chip) => chip.addEventListener("click", () => {
    document.querySelectorAll(".chip").forEach((c) => c.classList.toggle("active", c === chip));
    const f = chip.dataset.filter;
    grid.querySelectorAll(".card").forEach((card) => {
      card.classList.toggle("hidden", f !== "all" && !card.dataset.disc.split(" ").includes(f));
    });
  }));

  // Dialog
  const dlg = $("#projectDialog");
  const NAMES = { cs: "Software", data: "Data", narr: "Interactive & Narrative" };
  grid.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    if (!card) return;
    const p = projects[+card.dataset.i];
    $("#dlgBody").innerHTML = `
      ${thumb(p)}
      <div class="dlg-content">
        <p class="mono" style="margin:0;color:var(--muted);font-size:13px">${esc(p.year || "")} · ${p.disciplines.map((d) => NAMES[d]).join(" / ")}</p>
        <h3 id="dlgTitle">${esc(p.title)}</h3>
        <p>${esc(p.summary)}</p>
        ${p.role ? `<h4>Role</h4><p style="margin:0">${esc(p.role)}</p>` : ""}
        ${p.details?.length ? `<h4>Details</h4><ul>${p.details.map((d) => `<li>${esc(d)}</li>`).join("")}</ul>` : ""}
        <h4>Built with</h4><div class="meta" style="padding:0">${p.tags.map((t) => `<span class="pill">${esc(t)}</span>`).join("")}</div>
        ${p.links ? `<div class="dlg-links">${Object.entries(p.links).map(([l, u], i) =>
          `<a class="btn${i === 0 ? " primary" : ""}" href="${esc(u)}" target="_blank" rel="noopener">${esc(l)} ↗</a>`).join("")}</div>` : ""}
      </div>`;
    dlg.showModal();
  });
  $("#dlgClose").addEventListener("click", () => dlg.close());
  dlg.addEventListener("click", (e) => { if (e.target === dlg) dlg.close(); });

  // ---------- Reveal on scroll ----------
  document.querySelectorAll(".section h2, .about > div, .timeline li").forEach((el) => el.classList.add("reveal"));
  const io = new IntersectionObserver((entries) => entries.forEach((en) => {
    if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
  }), { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
})();
