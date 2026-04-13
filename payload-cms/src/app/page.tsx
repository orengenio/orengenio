export default function Home() {
  return (
    <main style={{
      fontFamily: "system-ui, sans-serif",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      background: "linear-gradient(165deg, #081628 0%, #0B1D3A 30%, #0F2847 60%, #0D2240 100%)",
      color: "#F0F4FA",
      padding: 40,
    }}>
      <h1 style={{ fontSize: 48, margin: 0 }}>
        OrenGen <span style={{ color: "#CC5500" }}>Sitebuild</span>
      </h1>
      <p style={{ marginTop: 12, opacity: 0.7 }}>Payload 3.0 CMS</p>
      <a
        href="/admin"
        style={{
          marginTop: 28,
          padding: "14px 32px",
          borderRadius: 9999,
          background: "linear-gradient(135deg, #CC5500, #E8762B)",
          color: "#fff",
          fontWeight: 700,
          textDecoration: "none",
        }}
      >
        Open Admin →
      </a>
    </main>
  );
}
