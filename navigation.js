
/* Elite Matrimony Navigation Fix */
(function () {
  "use strict";

  // બધા Sections દેખાતા રાખો
  document.body.classList.remove("em-screen-mode");

  document.querySelectorAll("main > section[id]").forEach(function (section) {
    section.classList.remove("em-screen-active", "em-screen-hidden");
    section.removeAttribute("aria-hidden");
    section.style.removeProperty("display");
  });

  // Navigation Links
  document.addEventListener("click", function (event) {
    const link = event.target.closest('a[href^="#"]');
    if (!link) return;

    const id = link.getAttribute("href").slice(1);
    const target = document.getElementById(id);

    if (!target) return;

    event.preventDefault();
    history.pushState(null, "", "#" + id);
    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });

  // Back Button
  window.addEventListener("popstate", function () {
    const target = document.getElementById(location.hash.slice(1));

    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });
})();
