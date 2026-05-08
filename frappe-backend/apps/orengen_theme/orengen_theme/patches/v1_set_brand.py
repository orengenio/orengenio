"""Pin OrenGen brand assets into the Frappe DB on every migrate.

Frappe v15 reads the navbar logo from the `Navbar Settings` single doctype
and the portal logo/favicon from `Website Settings`. If those fields are
blank, the desk shows nothing or a placeholder regardless of what
`hooks.py` declares.

This patch idempotently writes the bundled local asset paths so the brand
survives fresh installs, container rebuilds, and admin tampering.
"""

import frappe

LOGO = "/assets/orengen_theme/images/oren_logo.png"
FAVICON = "/assets/orengen_theme/images/oren_favicon.png"
BRAND_NAME = "OrenGen"
BRAND_HTML = '<img src="{}" alt="{}" style="height:26px;">'.format(LOGO, BRAND_NAME)


def _set_single(doctype, fields):
    """Set fields on a Single doctype only when current value differs."""
    try:
        doc = frappe.get_single(doctype)
    except Exception as exc:
        frappe.log_error(f"orengen_theme: cannot load {doctype}: {exc}")
        return
    changed = False
    for field, value in fields.items():
        if not hasattr(doc, field):
            continue
        if getattr(doc, field) != value:
            doc.set(field, value)
            changed = True
    if changed:
        doc.flags.ignore_permissions = True
        doc.flags.ignore_mandatory = True
        doc.save(ignore_permissions=True)


def execute():
    _set_single("Navbar Settings", {
        "app_logo": LOGO,
        "brand_html": BRAND_HTML,
    })
    _set_single("Website Settings", {
        "brand_html": BRAND_HTML,
        "banner_image": LOGO,
        "favicon": FAVICON,
        "splash_image": LOGO,
        "app_name": BRAND_NAME,
        "app_logo": LOGO,
    })
    frappe.clear_cache()
