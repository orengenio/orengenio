export const metadata = {
  title: "OrenGen Sitebuild",
  description: "Payload CMS for orengen.io content",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
