ELITE MATRIMONY SCREEN NAVIGATION PATCH

CSS (inside existing <style>):

/* Screen navigation */
body.em-screen-mode main > section.em-screen-hidden { display:none !important; }
body.em-screen-mode main > section.em-screen-active { display:block; min-height:calc(100vh - 80px); }
body.em-screen-mode main > section.em-screen-active { scroll-margin-top:0; }
body.em-screen-mode main > section.em-screen-active > .container { padding-bottom:24px; }

JavaScript (before </body>):

<script>
(function () {
  const main = document.querySelector("main");
  if (!main) return;
  const sections = Array.from(main.querySelectorAll(":scope > section[id]"));
  const navLinks = Array.from(document.querySelectorAll('a[href^="#"]'));
  const known = new Set(sections.map(s => s.id));

  function showScreen(id, push) {
    if (!known.has(id)) return false;
    document.body.classList.add("em-screen-mode");
    sections.forEach(section => {
      const active = section.id === id;
      section.classList.toggle("em-screen-active", active);
      section.classList.toggle("em-screen-hidden", !active);
      section.setAttribute("aria-hidden", active ? "false" : "true");
    });
    navLinks.forEach(link => {
      const active = link.getAttribute("href") === "#" + id;
      if (active) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
    window.scrollTo({top: 0, behavior: "instant"});
    if (push && location.hash !== "#" + id) history.pushState({emScreen:id}, "", "#" + id);
    return true;
  }

  document.addEventListener("click", function (event) {
    const link = event.target.closest('a[href^="#"]');
    if (!link) return;
    const id = link.getAttribute("href").slice(1);
    if (!known.has(id)) return;
    event.preventDefault();
    showScreen(id, true);
  });

  window.addEventListener("popstate", function () {
    const id = location.hash.slice(1);
    showScreen(known.has(id) ? id : "home", false);
  });

  const initial = location.hash.slice(1);
  showScreen(known.has(initial) ? initial : "home", false);
})();
</script>
