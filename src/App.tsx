import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProgrammePage from "./pages/ProgrammePage";
import CampagneDeViePage from "./pages/CampagneDeViePage";
import ConventionSinaiPage from "./pages/ConventionSinaiPage";
import SinaiFCPage from "./pages/SinaiFCPage";
import SinaiComPage from "./pages/SinaiComPage";
import EcrivainSpirituelPage from "./pages/EcrivainSpirituelPage";
import MaisaCiShopPage from "./pages/MaisaCiShopPage";
import EcolePastoralePage from "./pages/EcolePastoralePage";
import EducationPage from "./pages/EducationPage";
import HotelSinaiPage from "./pages/HotelSinaiPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/programme" element={<ProgrammePage />} />
          <Route path="/campagne-de-vie" element={<CampagneDeViePage />} />
          <Route path="/convention-sinai" element={<ConventionSinaiPage />} />
          <Route path="/sinai-fc" element={<SinaiFCPage />} />
          <Route path="/sinai-com" element={<SinaiComPage />} />
          <Route path="/ecrivain-spirituel" element={<EcrivainSpirituelPage />} />
          <Route path="/maisa-ci-shop" element={<MaisaCiShopPage />} />
          <Route path="/ecole-pastorale" element={<EcolePastoralePage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/hotel-sinai" element={<HotelSinaiPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
