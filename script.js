// Dark mode: system preference + manual toggle
(function () {
  const saved = localStorage.getItem("theme");
  if (saved) {
    document.documentElement.setAttribute("data-theme", saved);
  }
})();

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  let newTheme;
  if (current === "dark") {
    newTheme = "light";
  } else if (current === "light") {
    newTheme = prefersDark ? null : "dark";
  } else {
    newTheme = prefersDark ? "light" : "dark";
  }

  if (newTheme) {
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  } else {
    localStorage.removeItem("theme");
    document.documentElement.removeAttribute("data-theme");
  }
}

// Anchor navigation offset correction
document.addEventListener("DOMContentLoaded", function () {
  if (window.location.hash) {
    setTimeout(function () {
      const element = document.getElementById(window.location.hash.slice(1));
      if (element) {
        const offset = 32;
        const elementPosition =
          element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: elementPosition - offset, behavior: "instant" });
      }
    }, 0);
  }

  // Mobile nav behavior: focus-first, close on link click, Escape to close, body scroll lock
  (function () {
    const navToggle = document.querySelector(".nav-toggle");
    const nav = document.getElementById("site-navigation");
    if (!navToggle || !nav) return;

    const firstLink = nav.querySelector("a");

    function setOpen(open) {
      nav.setAttribute("data-open", open.toString());
      navToggle.setAttribute("aria-expanded", open.toString());
      navToggle.classList.toggle("open", open);
      document.body.style.overflow = open ? "hidden" : "";
      if (open) {
        firstLink && firstLink.focus();
      }
    }

    navToggle.addEventListener("click", function () {
      const open = nav.getAttribute("data-open") === "true";
      setOpen(!open);
    });

    // Close when a link is clicked (mobile)
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        if (window.innerWidth <= 640) setOpen(false);
      });
    });

    // Close on Escape
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.getAttribute("data-open") === "true") {
        setOpen(false);
        navToggle.focus();
      }
    });

    // Ensure menu state resets at larger widths
    window.addEventListener("resize", function () {
      if (window.innerWidth > 640) {
        setOpen(false);
      }
    });
  })();
});
