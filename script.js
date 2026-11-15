(function () {
  var root = document.documentElement;
  var btn = document.getElementById("theme-toggle");
  var saved = null;
  try { saved = localStorage.getItem("theme"); } catch (e) {}
  if (!saved) {
    saved = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  apply(saved);
  btn.addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    apply(next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  });
  function apply(theme) {
    root.setAttribute("data-theme", theme);
    btn.textContent = theme === "dark" ? "☀️" : "🌙";
  }
})();