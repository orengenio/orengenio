// OrenGen ERP - Desk Branding JS
// Removes ERPNext/Frappe branding from help menu, about dialog, and title

frappe.ready(function() {
  // Override the navbar help dropdown to remove Frappe/ERPNext links
  if (frappe.boot && frappe.boot.navbar_settings) {
    var helpItems = frappe.boot.navbar_settings.help_dropdown || [];
    // Keep only non-Frappe/ERPNext links
    frappe.boot.navbar_settings.help_dropdown = helpItems.filter(function(item) {
      var label = (item.item_label || '').toLowerCase();
      var route = (item.route || '').toLowerCase();
      // Remove Frappe-branded items
      if (label.includes('frappe') || route.includes('frappe.io') || route.includes('frappe/erpnext') || route.includes('discuss.frappe')) return false;
      if (label.includes('user forum') || label.includes('frappe school') || label.includes('frappe support')) return false;
      // Remove ERPNext documentation link (replace with OrenGen support)
      if (route.includes('docs.erpnext.com')) return false;
      return true;
    });
  }

  // Remove "Powered by" text from any footer
  var removePoweredBy = function() {
    document.querySelectorAll('.powered-by, .footer-powered').forEach(function(el) {
      el.remove();
    });
    // Remove any text nodes containing "powered by"
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    var node;
    while (node = walker.nextNode()) {
      if (node.textContent.toLowerCase().includes('powered by frappe') || node.textContent.toLowerCase().includes('powered by erpnext')) {
        if (node.parentNode) node.parentNode.remove();
      }
    }
  };

  // Run on load and after each route change
  removePoweredBy();
  $(document).on('page-change', removePoweredBy);
  $(document).on('after-ajax', removePoweredBy);
});

// Override document title to remove "Frappe" or "ERPNext"
var _originalTitle = Object.getOwnPropertyDescriptor(Document.prototype, 'title');
if (_originalTitle && _originalTitle.set) {
  Object.defineProperty(document, 'title', {
    set: function(val) {
      _originalTitle.set.call(this, val.replace(/ - ERPNext$/, ' - OrenGen').replace(/ - Frappe$/, ' - OrenGen'));
    },
    get: _originalTitle.get
  });
}
