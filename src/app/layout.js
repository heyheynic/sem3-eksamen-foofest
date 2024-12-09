import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Hind_Madurai, Germania_One, Caesar_Dressing } from "next/font/google";

const germania_one = Germania_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-germania-one",
});

const hind_madurai = Hind_Madurai({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-hind-madurai",
});

const caesar_dressing = Caesar_Dressing({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-caesar-dressing",
});

export const metadata = {
  title: "Foo Fest",
  description: "School project by Nicole, Jules and Julie",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${germania_one.variable} ${hind_madurai.variable} ${caesar_dressing.variable}`}
    >
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
