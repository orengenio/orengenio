// OrenGen ERP — Desk Branding JS
// Swaps logos/titles at runtime + strips residual Frappe/ERPNext branding.

(function () {
  var BRAND = (window.frappe && frappe.boot && frappe.boot.orengen) || {
    logo_url: "https://cdn.content360.io/ea2381f4-12e0-4efd-b95b-6012c981eae0/uploads/04-2026/JkgbWmauRB7suRUl6bVem2msNPATeMS2h4iWgdcR.png",
    brand_name: "OrenGen",
  };

  function onReady(fn) {
    if (window.frappe && frappe.ready) frappe.ready(fn);
    else if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  }

  function makeLogoImg() {
    var img = document.createElement("img");
    img.src = BRAND.logo_url;
    img.alt = BRAND.brand_name;
    img.style.maxHeight = "28px";
    return img;
  }

  // Filter Frappe/ERPNext items out of the help dropdown
  onReady(function () {
    try {
      if (frappe.boot && frappe.boot.navbar_settings) {
        var items = frappe.boot.navbar_settings.help_dropdown || [];
        frappe.boot.navbar_settings.help_dropdown = items.filter(function (item) {
          var label = (item.item_label || "").toLowerCase();
          var route = (item.route || "").toLowerCase();
          if (label.indexOf("frappe") !== -1) return false;
          if (route.indexOf("frappe.io") !== -1 || route.indexOf("discuss.frappe") !== -1) return false;
          if (label.indexOf("user forum") !== -1 || label.indexOf("frappe school") !== -1 || label.indexOf("frappe support") !== -1) return false;
          if (route.indexOf("docs.erpnext.com") !== -1) return false;
          return true;
        });
      }
    } catch (e) {}
  });

  // Swap navbar brand logo (DOM methods only — no innerHTML)
  function swapBrand() {
    try {
      document.querySelectorAll(".navbar-brand img, .app-logo, .erpnext-logo").forEach(function (img) {
        img.src = BRAND.logo_url;
        img.alt = BRAND.brand_name;
        img.style.maxHeight = "28px";
      });
      document.querySelectorAll(".navbar-brand").forEach(function (el) {
        if (!el.querySelector("img")) {
          while (el.firstChild) el.removeChild(el.firstChild);
          el.appendChild(makeLogoImg());
        }
      });
    } catch (e) {}
  }

  // Remove "Powered by" text and strip Frappe/ERPNext from page titles
  function strip() {
    document.querySelectorAll(".powered-by, .footer-powered").forEach(function (el) { el.remove(); });
    try {
      var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      var node;
      var kill = [];
      while ((node = walker.nextNode())) {
        var t = (node.textContent || "").toLowerCase();
        if (t.indexOf("powered by frappe") !== -1 || t.indexOf("powered by erpnext") !== -1) {
          if (node.parentNode) kill.push(node.parentNode);
        }
      }
      kill.forEach(function (el) { try { el.remove(); } catch (e) {} });
    } catch (e) {}
  }

  onReady(function () {
    swapBrand();
    strip();
    if (window.$) {
      $(document).on("page-change", function () { swapBrand(); strip(); });
      $(document).on("after-ajax", strip);
    }
  });

  // Override document title to strip " - ERPNext" / " - Frappe"
  try {
    var d = Object.getOwnPropertyDescriptor(Document.prototype, "title");
    if (d && d.set) {
      Object.defineProperty(document, "title", {
        set: function (val) {
          d.set.call(this, (val || "").replace(/ - ERPNext$/, " - " + BRAND.brand_name).replace(/ - Frappe$/, " - " + BRAND.brand_name));
        },
        get: d.get,
      });
    }
  } catch (e) {}
})();
