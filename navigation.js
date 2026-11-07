/* Elite Matrimony Screen Navigation */
(function () {
  "use strict";

  const main = document.querySelector("main");
  if (!main) return;

  const sections = Array.from(main.querySelectorAll(":scope > section[id]"));
  const ids = new Set(sections.map(s => s.id));

  const style = document.createElement("style");
  style.textContent = `
    body.em-screen-mode main > section.em-screen-hidden {
      display: none !important;
    }
    body.em-screen-mode main > section.em-screen-active {
      display: block;
      min-height: calc(100vh - 80px);
    }
    body.em-screen-mode main > section.em-screen-active > .container {
      padding-bottom: 24px;
    }
  `;
  document.head.appendChild(style);

  function showScreen(id, push) {
    if (!ids.has(id)) id = "home";

    document.body.classList.add("em-screen-mode");

    sections.forEach(function (s) {
      const active = s.id === id;
      s.classList.toggle("em-screen-active", active);
      s.classList.toggle("em-screen-hidden", !active);
      s.setAttribute("aria-hidden", active ? "false" : "true");
    });

    window.scrollTo(0, 0);

    if (push && location.hash !== "#" + id) {
      history.pushState({ screen: id }, "", "#" + id);
    }
  }

  document.addEventListener("click", function (e) {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;

    const id = link.getAttribute("href").slice(1);
    if (!ids.has(id)) return;

    e.preventDefault();
    showScreen(id, true);
  });

  window.addEventListener("popstate", function () {
    showScreen(location.hash.slice(1), false);
  });

  showScreen(ids.has(location.hash.slice(1)) ? location.hash.slice(1) : "home", false);
})();
