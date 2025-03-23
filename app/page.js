"use client";

import { useCurrentPage } from "@/components/CurrentPageProvider";
import { AnimatePresence, motion } from "framer-motion";
import LightBeam from "@/components/LightBeam/LightBeam";
import NavBar from "@/components/NavBar/NavBar";
import ContactPage from "@/components/ContactPage/ContactPage";
import HeroSection from "@/components/HeroSection/HeroSection";
import useDeviceType from "@/hooks/useDeviceType";
import MobileNavBar from "@/components/MobileNavbar/MobileNavBar";
import AboutPage from "@/components/AboutPage/AboutPage";
import WorksPage from "@/components/WorksPage/WorksPage";
import ExperiencePage from "@/components/ExperiencePage/ExperiencePage";
import Image from "next/image";
import { useState, useEffect } from "react";

const transition = { duration: 0.3, ease: "easeInOut" };

const variants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition },
  exit: { opacity: 0, y: -10, transition },
};

const Page = () => {
  const { currentPage } = useCurrentPage();
  const deviceType = useDeviceType();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Simulate the logo animation delay
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 3000); // Total duration: 3 seconds (1s fade in, 1s stay, 1s fade out)

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {deviceType === 'mobile' && (<MobileNavBar />)}
      {deviceType !== 'mobile' && (<NavBar />)}
      <div style={{
        width: '100%',
        height: '100vh', // Ensure the container takes the full viewport height
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: 'transparent',
        overflow: 'auto', // Allow scrolling
      }}>
        {/* Logo Animation */}
        <AnimatePresence>
          {!showContent && (
            <motion.div
              key="logo"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 11,
                width: '100vw',
                height: '100vh',
                backgroundColor: 'black',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <motion.div
                key="logoImage"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ x: '100vw', opacity: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                style={{
                  position: 'relative',
                  width: '250px',
                  height: '250px',
                }}
              >
                <Image
                  src="/images/logo4.png" // Replace with your logo
                  alt="ChikeCreates Studios Logo"
                  width={250 * 1.284}
                  height={250}
                  style={{
                    objectFit: 'contain',
                  }}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <AnimatePresence mode="wait">
          {showContent && (
            <>
              {currentPage === "/" && (
                <motion.div
                  key="home"
                  variants={variants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  style={{ width: '100%', height: '100%' }} // Ensure the motion div takes full space
                >
                  <HeroSection />
                </motion.div>
              )}
              {currentPage === "/about" && (
                <motion.div
                  key="about"
                  variants={variants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  style={{ width: '100%', height: '100%', overflow: 'auto' }} // Allow scrolling
                >
                  <AboutPage />
                </motion.div>
              )}
              {currentPage === "/experience" && (
                <motion.div
                  key="works"
                  variants={variants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  style={{ width: '100%', height: '100%', overflow: 'auto' }} // Allow scrolling
                >
                  <ExperiencePage />
                </motion.div>
              )}
              {currentPage === "/works" && (
                <motion.div
                  key="works"
                  variants={variants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  style={{ width: '100%', height: '100%', overflow: 'auto' }} // Allow scrolling
                >
                  <WorksPage />
                </motion.div>
              )}
              {currentPage === "/contact" && (
                <motion.div
                  key="contact"
                  variants={variants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  style={{ width: '100%', height: '100%', overflow: 'auto' }} // Allow scrolling
                >
                  <ContactPage />
                </motion.div>
              )}
            </>
          )}
        </AnimatePresence>
      </div>
      <LightBeam />
    </>
  );
};

export default Page;