import { ContactSection } from "@/components/Index/ContactSection";
import { HeroSection } from "@/components/Index/HeroSection";
import { JourneySection } from "@/components/Index/JourneySection";
import { PortofolioSection } from "@/components/Index/PortofolioSection";
import { ServiceSection } from "@/components/Index/ServiceSection";
import Head from "next/head";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Yudis Aditya",
    "url": "https://personal-website-2-lovat.vercel.app/",
    "image": "https://personal-website-2-lovat.vercel.app/path-to-your-profile-image.jpg",
    "sameAs": [
      "https://www.linkedin.com/in/your-linkedin-profile",
      "https://github.com/your-github-username",
      "https://twitter.com/your-twitter-handle"
    ],
    "jobTitle": "Software Developer, Tech Educator, and Tech Enthusiast",
    "worksFor": {
      "@type": "Organization",
      "name": "Akses Kerja Utama"
    },
    "alumniOf": "Bina Nusantara University",
    "knowsAbout": [
      "Mobile App Development", "Website Development", 
      "Automation Testing", "Data Analysis", "Machine Learning", 
      "Teaching Technology", "Coding"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Software Developer",
      "description": "Develops and maintains software applications, specializing in web and mobile platforms."
    }
  };
  return (
    <>
      <Head>
        <title>Personal Website | Yudis Aditya</title>
        <meta name="msvalidate.01" content="78015F20BFCF20160BBBD49EC5FC17F8" />
        <meta name="description" content="Personal website of Yudis Aditya, a Software Developer and Tech Educator." />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>
      <HeroSection />
      <ServiceSection />
      <JourneySection />
      <PortofolioSection />
      <ContactSection />
    </>
  );
}
