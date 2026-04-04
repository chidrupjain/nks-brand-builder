import { ReactNode } from "react";
import ComplianceStrip from "./ComplianceStrip";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingElements from "./FloatingElements";
import CookieConsent from "./CookieConsent";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <ComplianceStrip />
    <Navbar />
    <main className="flex-1">{children}</main>
    <Footer />
    <FloatingElements />
    <CookieConsent />
  </div>
);

export default Layout;
