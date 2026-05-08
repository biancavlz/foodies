import "./globals.css";

export const metadata = {
  title: "Foodies",
  description: "Foodies app!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
