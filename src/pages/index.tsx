import { Navbar } from "@/components/Navbar";
import { SectionCertifications } from "@/components/pages/Home/SectionCertifications/SectionCertifications";
import { SectionExperiences } from "@/components/pages/Home/SectionExperiences/SectionExperiences";
import { SectionHero } from "@/components/pages/Home/SectionHero";
import { SectionProjects } from "@/components/pages/Home/SectionProjects/SectionProjects";
import { SectionStacks } from "@/components/pages/Home/SectionStacks/SectionStacks";
import { Poppins } from "next/font/google";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export default function Home() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  console.log(visible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (target === ref.current) {
            setVisible(isIntersecting);
          }
        });
      },
      {
        rootMargin: "200px",
        threshold: 1,
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Head>
        <title>Jackson Magalhães</title>
        <meta name="description" content="Portfólio Jackson Magalhães" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={`${poppins.className}`}>
        <SectionHero />
        <SectionStacks />
        <SectionCertifications />
        <SectionExperiences />
        <SectionProjects />
      </main>
    </>
  );
}
