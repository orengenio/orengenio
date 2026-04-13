// OrenGen portal/website — replace page titles and strip Frappe branding on load.
(function () {
  function strip() {
    document.querySelectorAll('.powered, .powered-by-frappe, [class*="powered-by"]').forEach(function (el) {
      el.remove();
    });
    document.title = document.title
      .replace(/\s*-\s*ERPNext\s*$/, " - OrenGen")
      .replace(/\s*-\s*Frappe\s*$/, " - OrenGen");
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", strip);
  } else {
    strip();
  }
})();
