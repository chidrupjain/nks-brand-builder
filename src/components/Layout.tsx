import { ReactNode } from "react";
import ComplianceStrip from "./ComplianceStrip";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingElements from "./FloatingElements";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <ComplianceStrip />
    <Navbar />
    <main className="flex-1">{children}</main>
    <Footer />
    <FloatingElements />
  </div>
);

export default Layout;
