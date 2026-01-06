import "./globals.css";
import ClientProviders from "./components/ClientProviders";
import SmoothScrollWrapper from "./components/SmoothScrollWrapper";
import ClientLayout from "./components/ClientLayout";
import Contact from "./components/contact/Contact";
import Navbar2 from "./sections/navbar/Navbar2";
import Cursor from "./components/Cursor";
import Footer from "./sections/footer/Footer";
export const metadata = {
  title: "Bugge Digital",
  description: "Bugge Digital - Din digitale partner",
};

// SmoothScrolling håndteres nå av en egen klientkomponent

export default function RootLayout({ children }) {
  return (
    <html lang="no" suppressHydrationWarning>
      <body>
        <ClientProviders>
          <SmoothScrollWrapper>
            <ClientLayout>
              <Cursor />
              <Navbar2 />
              {children}
              <Contact />
              <Footer />
            </ClientLayout>
          </SmoothScrollWrapper>
        </ClientProviders>
      </body>
    </html>
  );
}
