"""
Boot-session hook: inject OrenGen brand values into frappe.boot so the JS
code in orengen_desk.js can access them client-side.
"""

LOGO = "/assets/orengen_theme/images/oren_logo.png"
FAVICON = "/assets/orengen_theme/images/oren_favicon.png"


def boot_session(bootinfo):
    bootinfo.setdefault("orengen", {})
    bootinfo["orengen"].update({
        "logo_url": LOGO,
        "favicon_url": FAVICON,
        "brand_name": "OrenGen",
        "support_email": "support@orengen.io",
        "website": "https://orengen.io",
        "book_url": "https://book.orengen.io/coffeechat",
    })
    # Push brand into navbar settings so the desk UI picks it up.
    nav = bootinfo.get("navbar_settings") or {}
    nav["app_logo"] = LOGO
    nav["brand_html"] = '<img src="{}" alt="OrenGen" style="height:26px;">'.format(LOGO)
    bootinfo["navbar_settings"] = nav
