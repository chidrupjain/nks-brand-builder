import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ToolsPage from "./pages/ToolsPage";
import ContactPage from "./pages/ContactPage";
import StubPage from "@/components/StubPage";
import NotFound from "./pages/NotFound";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/services/mutual-funds" element={<StubPage title="Mutual Fund Investments" />} />
            <Route path="/services/insurance" element={<StubPage title="Insurance Services" />} />
            <Route path="/services/goal-planning" element={<StubPage title="Goal-Based Planning" />} />
            <Route path="/services/pms-aif" element={<StubPage title="PMS & AIF & SIF" />} />
            <Route path="/services/global-investments" element={<StubPage title="Global Investments & GIFT City" />} />
            <Route path="/services/estate-planning" element={<StubPage title="Will & Estate Planning" />} />
            <Route path="/services/loans" element={<StubPage title="Loan & Financing Solutions" />} />
            <Route path="/tools" element={<StubPage title="Financial Tools" description="SIP Calculator, Lumpsum Calculator, Goal Planner, Risk Profiler and more — coming soon." />} />
            <Route path="/market-watch" element={<StubPage title="Market Watch" />} />
            <Route path="/testimonials" element={<StubPage title="Testimonials" />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/disclaimer" element={<StubPage title="Disclaimer" badge="Legal" />} />
            <Route path="/commission-disclosure" element={<StubPage title="Commission Disclosure" badge="Legal" />} />
            <Route path="/fund-selection-policy" element={<StubPage title="Fund Selection Policy" badge="Legal" />} />
            <Route path="/investor-grievance" element={<StubPage title="Investor Grievance" badge="Legal" />} />
            <Route path="/rights-and-obligations" element={<StubPage title="Rights & Obligations" badge="Legal" />} />
            <Route path="/privacy-policy" element={<StubPage title="Privacy Policy" badge="Legal" />} />
            <Route path="/terms-and-conditions" element={<StubPage title="Terms & Conditions" badge="Legal" />} />
            <Route path="/important-links" element={<StubPage title="Important Links" badge="Resources" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
