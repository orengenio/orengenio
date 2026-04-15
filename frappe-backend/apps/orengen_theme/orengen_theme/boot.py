"""
Boot-session hook: inject OrenGen brand values into frappe.boot so the JS
code in orengen_desk.js can access them client-side.
"""

LOGO = "https://cdn.content360.io/ea2381f4-12e0-4efd-b95b-6012c981eae0/uploads/04-2026/JkgbWmauRB7suRUl6bVem2msNPATeMS2h4iWgdcR.png"
FAVICON = "https://cdn.content360.io/ea2381f4-12e0-4efd-b95b-6012c981eae0/uploads/04-2026/GLBjK33zIX9uoJqAHz4c8kGhtn0mXn1bNtVzpUNU.png"


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
