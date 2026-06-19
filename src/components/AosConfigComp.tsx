"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AosConfigComp = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return <></>;
};

export default AosConfigComp;
