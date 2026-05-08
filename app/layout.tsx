import Header from "@/components/header/Header";
import "./globals.css";

export const metadata = {
  title: "Foodies",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
