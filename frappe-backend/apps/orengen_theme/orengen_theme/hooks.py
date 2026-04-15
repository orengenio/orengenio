app_name = "orengen_theme"
app_title = "OrenGen"
app_publisher = "OrenGen Worldwide"
app_description = "Full branding theme for OrenGen ERP (app.orengen.io)"
app_email = "support@orengen.io"
app_license = "MIT"
app_version = "1.1.0"

# ─── Brand assets ─────────────────────────────────────────────────────────────
# Served from the orengen.io CDN so they stay in sync with the marketing site.
OREN_LOGO_URL = "https://cdn.content360.io/ea2381f4-12e0-4efd-b95b-6012c981eae0/uploads/04-2026/JkgbWmauRB7suRUl6bVem2msNPATeMS2h4iWgdcR.png"
OREN_FAVICON_URL = "https://cdn.content360.io/ea2381f4-12e0-4efd-b95b-6012c981eae0/uploads/04-2026/GLBjK33zIX9uoJqAHz4c8kGhtn0mXn1bNtVzpUNU.png"

# Navbar / desk logo (appears top-left in ERPNext)
app_logo_url = OREN_LOGO_URL

# Splash screen on desk load
splash_image = OREN_LOGO_URL

# Favicon
website_context = {
    "favicon": OREN_FAVICON_URL,
    "splash_image": OREN_LOGO_URL,
    "brand_html": '<img src="{}" alt="OrenGen" style="height:28px;">'.format(OREN_LOGO_URL),
    "top_bar_items": [],
    "footer_items": [
        {"label": "Support", "url": "mailto:support@orengen.io"},
        {"label": "orengen.io", "url": "https://orengen.io"},
    ],
    "copyright": "OrenGen Worldwide",
}

# ─── Desk (internal app) assets ──────────────────────────────────────────────
app_include_css = ["/assets/orengen_theme/css/orengen_desk.css"]
app_include_js = ["/assets/orengen_theme/js/orengen_desk.js"]

# ─── Website / portal assets ─────────────────────────────────────────────────
web_include_css = [
    "/assets/orengen_theme/css/orengen_desk.css",
    "/assets/orengen_theme/css/orengen_website.css",
]
web_include_js = ["/assets/orengen_theme/js/orengen_website.js"]

# ─── Login page ───────────────────────────────────────────────────────────────
# The login page is styled via web_include_css + JS rather than a full template
# override (safer: keeps Frappe's login flow logic intact — OAuth, 2FA, password
# reset, etc.). See orengen_theme/www/login.html for a reference custom template
# if you want to fully override later.

# ─── Email template branding ──────────────────────────────────────────────────
# Override the default email template header/footer with OrenGen branding.
default_mail_footer = """
<div style="padding:16px 24px;background:#0B1D3A;color:#F0F4FA;font-family:'Roboto',sans-serif;font-size:12px;line-height:1.6;">
  <div style="max-width:600px;margin:0 auto;">
    <img src="{logo}" alt="OrenGen" style="height:24px;margin-bottom:10px;">
    <div>OrenGen Worldwide &middot; <a href="https://orengen.io" style="color:#CC5500;text-decoration:none;">orengen.io</a></div>
    <div style="margin-top:6px;color:rgba(240,244,250,0.5);">This email was sent from app.orengen.io (OrenGen ERP).</div>
  </div>
</div>
""".format(logo=OREN_LOGO_URL)

# ─── Boot session — inject brand config into frappe.boot ──────────────────────
boot_session = "orengen_theme.boot.boot_session"

# ─── Standard Frappe metadata ─────────────────────────────────────────────────
doctype_js = {}
doctype_list_js = {}
doctype_tree_js = {}
doctype_calendar_js = {}

fixtures = []
