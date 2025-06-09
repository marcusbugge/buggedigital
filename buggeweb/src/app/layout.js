import "./globals.css";
import ClientProviders from "./components/ClientProviders";
import SmoothScrolling from "./components/SmoothScrolling";
import ClientLayout from "./components/ClientLayout";
import Contact from "./components/contact/Contact";
import Navbar2 from "./sections/navbar/Navbar2";
import Cursor from "./components/Cursor";
import Footer from "./sections/footer/Footer";
export const metadata = {
  title: "Bugge Digital",
  description: "Bugge Digital - Din digitale partner",
};

export default function RootLayout({ children }) {
  return (
    <html lang="no" className="dark" style={{ colorScheme: "dark" }}>
      <body>
        <ClientProviders>
          <SmoothScrolling>
            <ClientLayout>
              <Cursor />
              <Navbar2 />
              {children}
              <Contact />
              <Footer />
            </ClientLayout>
          </SmoothScrolling>
        </ClientProviders>
      </body>
    </html>
  );
}
