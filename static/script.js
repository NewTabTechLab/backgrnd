// Dark mode: system preference + manual toggle
(function() {
  const saved = localStorage.getItem('theme');
  if (saved) {
    document.documentElement.setAttribute('data-theme', saved);
  }
})();

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  let newTheme;
  if (current === 'dark') {
    newTheme = 'light';
  } else if (current === 'light') {
    newTheme = prefersDark ? null : 'dark';
  } else {
    newTheme = prefersDark ? 'light' : 'dark';
  }
  
  if (newTheme) {
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  } else {
    localStorage.removeItem('theme');
    document.documentElement.removeAttribute('data-theme');
  }
}

// Anchor navigation offset correction
document.addEventListener('DOMContentLoaded', function() {
  if (window.location.hash) {
    setTimeout(function() {
      const element = document.getElementById(window.location.hash.slice(1));
      if (element) {
        const offset = 32;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: elementPosition - offset, behavior: 'instant' });
      }
    }, 0);
  }
});
