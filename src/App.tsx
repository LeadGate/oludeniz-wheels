import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import Index from "./pages/Index";

const DalamanAirport = lazy(() => import("./pages/DalamanAirport"));
const ScenicDrives = lazy(() => import("./pages/ScenicDrives"));
const ParkingFuel = lazy(() => import("./pages/ParkingFuel"));
const TipsInsurance = lazy(() => import("./pages/TipsInsurance"));
const FAQ = lazy(() => import("./pages/FAQ"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const NotFound = lazy(() => import("./pages/NotFound"));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center"><div className="text-muted-foreground">Loading...</div></div>}>
      <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/dalaman-airport-car-rental" element={<DalamanAirport />} />
            <Route path="/scenic-drives-from-oludeniz" element={<ScenicDrives />} />
            <Route path="/parking-fuel-guide" element={<ParkingFuel />} />
            <Route path="/rental-tips-insurance" element={<TipsInsurance />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;
