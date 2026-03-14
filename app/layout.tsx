import "./globals.css";
import Providers from "./providers";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Teachers,Jost } from "next/font/google";
import NavContact from "@/components/NavContact";
const teachers = Teachers({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-teachers",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jost",
});
export { teachers, jost };

export const metadata = {
  title: "Jyotishna Enterprises",
  description: "Jyotishna Enterprises",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en"
     className={`${teachers.variable} ${jost.variable}`}>
      <body>
        <Providers>
          <div className="app-layout">
            {/* <NavContact/> */}
            <Navbar />
            <main className="page-content">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
