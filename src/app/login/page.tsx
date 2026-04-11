import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Login — OrenGen Worldwide",
  description: "Sign in to your OrenGen account to access your AI workforce, CRM, and website builder.",
};

export default function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  return <LoginContent searchParamsPromise={searchParams} />;
}

async function LoginContent({
  searchParamsPromise,
}: {
  searchParamsPromise: Promise<{ error?: string }>;
}) {
  const { error } = await searchParamsPromise;

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(165deg, #081628 0%, #0B1D3A 30%, #0F2847 60%, #0D2240 100%)",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 440,
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 20,
          padding: "48px 36px",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          textAlign: "center",
        }}
      >
        {/* Logo */}
        <Link href="/">
          <img
            src="https://cdn.content360.io/ea2381f4-12e0-4efd-b95b-6012c981eae0/uploads/04-2026/JkgbWmauRB7suRUl6bVem2msNPATeMS2h4iWgdcR.png"
            alt="OrenGen Worldwide"
            style={{ height: 40, marginBottom: 32 }}
          />
        </Link>

        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 28,
            fontWeight: 800,
            color: "#F0F4FA",
            marginBottom: 8,
          }}
        >
          Welcome Back
        </h1>
        <p
          style={{
            fontFamily: "'Roboto', sans-serif",
            fontSize: 15,
            color: "rgba(210,225,245,0.55)",
            marginBottom: 36,
            lineHeight: 1.5,
          }}
        >
          Sign in to access your AI workforce, CRM, and website builder.
        </p>

        {error && (
          <div
            style={{
              background: "rgba(239,68,68,0.1)",
              border: "1px solid rgba(239,68,68,0.3)",
              borderRadius: 10,
              padding: "12px 16px",
              marginBottom: 24,
              color: "#f87171",
              fontSize: 13,
              fontFamily: "'Roboto', sans-serif",
            }}
          >
            Sign in failed. Please try again.
          </div>
        )}

        {/* Google Sign-In Button */}
        <a
          href="/api/auth/google"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
            width: "100%",
            padding: "14px 24px",
            background: "#ffffff",
            border: "none",
            borderRadius: 12,
            cursor: "pointer",
            textDecoration: "none",
            fontSize: 15,
            fontWeight: 600,
            color: "#1a1a1a",
            fontFamily: "'Roboto', sans-serif",
            transition: "transform 0.2s, box-shadow 0.2s",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>
          Continue with Google
        </a>

        {/* Divider */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            margin: "28px 0",
          }}
        >
          <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.08)" }} />
          <span
            style={{
              fontSize: 12,
              color: "rgba(210,225,245,0.35)",
              fontFamily: "'Roboto', sans-serif",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            or
          </span>
          <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.08)" }} />
        </div>

        {/* Direct Simvoly Login */}
        <a
          href="https://app.orengen.io"
          style={{
            display: "block",
            width: "100%",
            padding: "14px 24px",
            background: "transparent",
            border: "1px solid rgba(204,85,0,0.4)",
            borderRadius: 12,
            cursor: "pointer",
            textDecoration: "none",
            fontSize: 15,
            fontWeight: 600,
            color: "#CC5500",
            fontFamily: "'Roboto', sans-serif",
            transition: "background 0.2s, border-color 0.2s",
          }}
        >
          Sign in with Email
        </a>

        {/* Footer */}
        <p
          style={{
            marginTop: 32,
            fontSize: 12,
            color: "rgba(210,225,245,0.35)",
            fontFamily: "'Roboto', sans-serif",
            lineHeight: 1.6,
          }}
        >
          Don&apos;t have an account?{" "}
          <Link
            href="/#pricing"
            style={{ color: "#CC5500", textDecoration: "none" }}
          >
            View Plans
          </Link>
        </p>
      </div>
    </div>
  );
}
