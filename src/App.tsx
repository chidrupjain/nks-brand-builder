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
import GalleryPage from "./pages/GalleryPage";
import StubPage from "@/components/StubPage";
import NotFound from "./pages/NotFound";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import CommissionDisclosurePage from "./pages/CommissionDisclosurePage";
import FundSelectionPolicyPage from "./pages/FundSelectionPolicyPage";
import InvestorGrievancePage from "./pages/InvestorGrievancePage";
import RightsObligationsPage from "./pages/RightsObligationsPage";
import DisclaimerPage from "./pages/DisclaimerPage";
import TermsConditionsPage from "./pages/TermsConditionsPage";
import ImportantLinksPage from "./pages/ImportantLinksPage";

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
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/mutual-funds" element={<ServicesPage />} />
            <Route path="/services/insurance" element={<ServicesPage />} />
            <Route path="/services/goal-planning" element={<ServicesPage />} />
            <Route path="/services/pms-aif" element={<ServicesPage />} />
            <Route path="/services/global-investments" element={<ServicesPage />} />
            <Route path="/services/estate-planning" element={<ServicesPage />} />
            <Route path="/services/loans" element={<ServicesPage />} />
            <Route path="/tools" element={<ToolsPage />} />
            <Route path="/testimonials" element={<StubPage title="Testimonials" />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/disclaimer" element={<DisclaimerPage />} />
            <Route path="/commission-disclosure" element={<CommissionDisclosurePage />} />
            <Route path="/fund-selection-policy" element={<FundSelectionPolicyPage />} />
            <Route path="/investor-grievance" element={<InvestorGrievancePage />} />
            <Route path="/rights-and-obligations" element={<RightsObligationsPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-and-conditions" element={<TermsConditionsPage />} />
            <Route path="/important-links" element={<ImportantLinksPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
