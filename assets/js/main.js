import { CONTACT, WORK, GA4_MEASUREMENT_ID, BRAND_LOGOS } from "./config.js";

const waLink = (message) =>
  `https://wa.me/${CONTACT.whatsappNumber}${message ? `?text=${encodeURIComponent(message)}` : ""}`;

// ---------- Wire up contact details from config ----------
document.querySelectorAll("[data-whatsapp-link]").forEach((el) => {
  const msg = el.dataset.whatsappMessage || "";
  el.href = waLink(msg);
});
document.querySelectorAll("[data-phone-link]").forEach((el) => {
  el.href = `tel:${CONTACT.phoneNumber}`;
});
document.querySelectorAll("[data-phone-text]").forEach((el) => {
  el.textContent = CONTACT.phoneDisplay;
});
document.querySelectorAll("[data-whatsapp-text]").forEach((el) => {
  el.textContent = CONTACT.whatsappDisplay;
});
document.querySelectorAll("[data-location-text]").forEach((el) => {
  el.textContent = CONTACT.location;
});
if (CONTACT.instagramUrl) {
  document.querySelectorAll("[data-instagram-link]").forEach((el) => {
    el.href = CONTACT.instagramUrl;
    el.style.display = "";
  });
} else {
  document.querySelectorAll("[data-instagram-link]").forEach((el) => {
    el.style.display = "none";
  });
}

// ---------- Render Work section from config ----------
const workList = document.getElementById("workList");
if (workList) {
  workList.innerHTML = WORK.map(
    (p, i) => `
    <a class="work-feature reveal${i ? ` d${Math.min(i, 3)}` : ""}" href="${p.url}" target="_blank" rel="noopener">
      <div class="work-feature-visual">
        <img src="${p.image}" alt="${p.name} website screenshot" loading="lazy">
      </div>
      <div class="work-feature-text">
        <div class="work-tag">${p.industry}</div>
        <div class="work-feature-name">${p.name}</div>
        <p class="work-feature-desc">${p.description}</p>
        <span class="work-link">Visit live site →</span>
      </div>
    </a>`
  ).join("");
}

// ---------- Render "Worked with" logos ----------
// Generic abstract marks shown until real brand logos are supplied in config.js —
// these represent no specific company, so nothing here implies a real endorsement.
const PLACEHOLDER_MARKS = [
  '<circle cx="12" cy="12" r="8"/>',
  '<rect x="4" y="4" width="16" height="16" rx="3"/>',
  '<path d="M12 3l9 16H3z"/>',
  '<path d="M12 2l3.5 6.5L22 12l-6.5 3.5L12 22l-3.5-6.5L2 12l6.5-3.5z"/>',
  '<path d="M12 3L21 12 12 21 3 12z"/>',
  '<path d="M12 4v16M4 12h16"/>',
];
const brandsMarquee = document.getElementById("brandsMarquee");
if (brandsMarquee) {
  const tilesHtml = BRAND_LOGOS.length
    ? BRAND_LOGOS.map(
        (b) => `
        <div class="brand-tile" title="${b.name}">
          <img class="brand-logo" src="${b.logoSrc}" alt="${b.name}" loading="lazy">
        </div>`
      ).join("")
    : PLACEHOLDER_MARKS.map(
        (mark) => `
        <div class="brand-tile" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${mark}</svg>
        </div>`
      ).join("");
  // two identical groups back to back so the marquee can loop seamlessly at -50%
  brandsMarquee.innerHTML = `<div class="brands-track"><div class="brands-group">${tilesHtml}</div><div class="brands-group">${tilesHtml}</div></div>`;
}

// ---------- Mobile menu ----------
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
function toggleMenu() {
  hamburger.classList.toggle("open");
  mobileMenu.classList.toggle("open");
  document.body.style.overflow = mobileMenu.classList.contains("open") ? "hidden" : "";
}
function closeMenu() {
  hamburger.classList.remove("open");
  mobileMenu.classList.remove("open");
  document.body.style.overflow = "";
}
hamburger?.addEventListener("click", toggleMenu);
mobileMenu?.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMenu));

// ---------- Nav scroll state ----------
const nav = document.getElementById("nav");
window.addEventListener("scroll", () => nav.classList.toggle("scrolled", scrollY > 40), { passive: true });

// ---------- Reveal on scroll ----------
const ro = new IntersectionObserver(
  (entries) => entries.forEach((x) => x.isIntersecting && x.target.classList.add("in")),
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => ro.observe(el));

// ---------- Service enquiry buttons (contextual WhatsApp message) ----------
document.querySelectorAll("[data-service-enquiry]").forEach((btn) => {
  btn.href = waLink(`Hi, I'm interested in ${btn.dataset.serviceEnquiry}. Could you share more details?`);
});

// ---------- Contact form -> WhatsApp ----------
const form = document.getElementById("enquiryForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fields = {
      name: form.querySelector("#f-name"),
      business: form.querySelector("#f-business"),
      phone: form.querySelector("#f-phone"),
      type: form.querySelector("#f-type"),
      details: form.querySelector("#f-details"),
    };
    let valid = true;
    [fields.name, fields.phone, fields.type].forEach((input) => {
      const group = input.closest(".f-group");
      if (!input.value.trim()) {
        group.classList.add("has-error");
        valid = false;
      } else {
        group.classList.remove("has-error");
      }
    });
    if (!valid) return;

    const lines = [
      `Hi, I'd like to enquire about a website.`,
      `Name: ${fields.name.value.trim()}`,
      fields.business.value.trim() ? `Business: ${fields.business.value.trim()}` : null,
      `Phone: ${fields.phone.value.trim()}`,
      `Type of website: ${fields.type.value}`,
      fields.details.value.trim() ? `Details: ${fields.details.value.trim()}` : null,
    ].filter(Boolean);

    window.open(waLink(lines.join("\n")), "_blank", "noopener");
  });
}

// ---------- Google Analytics (only if a measurement ID is configured) ----------
if (GA4_MEASUREMENT_ID) {
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  gtag("js", new Date());
  gtag("config", GA4_MEASUREMENT_ID);
}

// ---------- Footer year ----------
document.querySelectorAll("[data-year]").forEach((el) => {
  el.textContent = new Date().getFullYear();
});
