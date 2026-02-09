import "./globals.css";
import Providers from "./providers";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "BioTech",
  description: "BioTech Client Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="app-layout">
            <Navbar />
            <main className="page-content">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
