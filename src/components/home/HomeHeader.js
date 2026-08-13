"use client";
import Menu from "@/components/common/header/Menu";
import HeaderActions from "../common/header/HeaderActions";
import { SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { LayoutGroup, motion } from "motion/react";
import Logo from "../ui/Logo";

function HomeHeader() {
  const [onSection, setIsOnSection] = useState(true);
  const colorIcon = onSection ? "text-white" : "text-primary";
  const [scrolling, setScrolling] = useState(0);
  const isScrolled = scrolling > 80;

  useEffect(() => {
    function handelScroling() {
      setScrolling(window.scrollY);
    }
    handelScroling();

    window.addEventListener("scroll", handelScroling);
    return () => {
      window.removeEventListener("scroll", handelScroling);
    };
  }, []);

  useEffect(() => {
    const section = document.getElementById("hero");
    const observer = new IntersectionObserver(([entry]) => {
      setIsOnSection(entry.isIntersecting);
    });

    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <LayoutGroup>
      <header
        className={`fixed top-0 left-0 right-0 bottom-auto inset-x-[0%] z-50 flex justify-between py-5 px-5 ${colorIcon}
      lg:py-7
      lg:grid 
      lg:grid-cols-[1fr_auto_1fr]
      lg:px-12 items-center  `}
      >
        <div className={`flex items-center gap-5 ${colorIcon}`}>
          <Menu />
          <div className="lg:hidden">
            <SearchIcon strokeWidth={1.5} size={24} />
          </div>
        </div>
        <div className="w-17.5">
          {isScrolled && (
            <motion.div
              layoutId="griffin-id"
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Logo variant={onSection ? "white" : "black"} />
            </motion.div>
          )}
        </div>
        <div className={`justify-self-end ${colorIcon} `}>
          <HeaderActions />
        </div>
      </header>

      <div className="fixed w-[clamp(220px,50vw,700px)] bottom-4 left-1/2 -translate-x-1/2 z-50">
        {!isScrolled && (
          <motion.div
            layoutId="griffin-id"
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Logo variant={onSection ? "white" : "black"} />
          </motion.div>
        )}
      </div>
    </LayoutGroup>
  );
}

export default HomeHeader;
