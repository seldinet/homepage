import React from "react";

import Header from "../header";
import IntroSection from "../home/intro-section";
import PartnerSection from "../home/partner-section";
import ChartSection from "../home/chart-section";
import FunctionSection from "../home/function-section";
import SolutionSection from "../home/solution-section";
import DocumentSection from "../home/document-section";
import MapSection from "../home/map-section";
import Footer from "../footer";

import RequestModal, { RequestModalProvider } from "../request-modal";

function Home() {
  return (
    <div>
      <RequestModalProvider>
        <Header />
        <IntroSection />
        <PartnerSection />
        <ChartSection />
        <FunctionSection />
        <SolutionSection />
        <DocumentSection />
        <MapSection />
        <Footer />
        <RequestModal />
      </RequestModalProvider>
    </div>
  );
}

export default Home;
