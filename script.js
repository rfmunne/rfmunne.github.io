const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}

const navigationEntry = performance.getEntriesByType("navigation")[0];

if (navigationEntry?.type === "reload" && window.location.hash) {
  history.replaceState(null, "", window.location.pathname + window.location.search);
  window.scrollTo(0, 0);
}
