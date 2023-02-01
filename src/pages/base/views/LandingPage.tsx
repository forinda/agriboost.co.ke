import HomeAboutSection from "@base-pages/components/Home/HomeAboutSection";
import HomeBanner from "@base-pages/components/Home/HomeBanner";
import HomeHeaderMeta from "@base-pages/components/Home/HomeHeaderMeta";
import HomeServicesSection from "@base-pages/components/Home/HomeServicesSection";
import React from "react";

const LandingPage = () => {
  return (
    <div>
      <HomeHeaderMeta />
      <HomeBanner />
      <HomeAboutSection />
      <HomeServicesSection />
    </div>
  );
};

export default LandingPage;
