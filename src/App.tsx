import React from "react";

import Header from "./header";
import IntroSection from "./intro-section";
import PartnerSection from "./partner-section";
import ChartSection from "./chart-section";
import FunctionSection from "./function-section";
import SolutionSection from "./solution-section";
import DocumentSection from "./document-section";
import MapSection from "./map-section";
import Footer from "./footer";

function App() {
  return (
    <div>
      <Header />
      <IntroSection />
      <PartnerSection />
      <ChartSection />
      <FunctionSection />
      <SolutionSection />
      <DocumentSection />
      <MapSection />
      <Footer />
    </div>
  );
}

export default App;
