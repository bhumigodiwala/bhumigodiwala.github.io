import React, { useState, useEffect } from 'react';
import bhumiPhoto from './assets/images/profile.jpg';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FocusSection } from './components/FocusSection';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationSection } from './components/EducationSection';
import { StackSection } from './components/StackSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ContactSection } from './components/ContactSection';
import { CvModal } from './components/CvModal';

export default function App() {
  // Default to Light Mode per user request
  const [isLight, setIsLight] = useState<boolean>(() => {
    try {
      const savedTheme = localStorage.getItem('portfolio-theme');
      if (savedTheme === 'dark') return false;
      return true; // Default is light mode
    } catch {
      return true;
    }
  });

  const [cvModalOpen, setCvModalOpen] = useState<boolean>(false);

  // Sync DOM classes with theme state
  useEffect(() => {
    try {
      if (isLight) {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
        document.body.classList.remove('dark');
        document.body.classList.add('light');
        localStorage.setItem('portfolio-theme', 'light');
      } else {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
        document.body.classList.add('dark');
        document.body.classList.remove('light');
        localStorage.setItem('portfolio-theme', 'dark');
      }
    } catch {
      // Ignore storage errors
    }
  }, [isLight]);

  const toggleTheme = () => {
    setIsLight((prev) => !prev);
  };

  return (
    <div className={`min-h-screen ${isLight ? 'light' : 'dark'} bg-[#f4f8fb] text-[#0f172a] dark:bg-[#0d131f] dark:text-[#f0f4f8] antialiased selection:bg-[var(--brass)]/30 selection:text-slate-900 dark:selection:text-white transition-colors duration-200`}>
      {/* Background radial gradients for ambient texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 opacity-60 dark:opacity-70 [background-image:radial-gradient(circle_at_85%_5%,rgba(78,181,159,0.1),transparent_35%),radial-gradient(circle_at_8%_42%,rgba(197,158,94,0.08),transparent_30%)] dark:[background-image:radial-gradient(circle_at_85%_5%,rgba(78,181,159,0.12),transparent_30%),radial-gradient(circle_at_8%_42%,rgba(197,158,94,0.09),transparent_28%)]"
      />

      {/* Main Navigation Header */}
      <Header
        isLight={isLight}
        onToggleTheme={toggleTheme}
        onOpenCvModal={() => setCvModalOpen(true)}
      />

      <main id="top" className="relative z-10">
        {/* Hero Section with static user photo, relaxing playground, and CV modal trigger */}
        <Hero
          photoUrl={bhumiPhoto}
          onOpenCvModal={() => setCvModalOpen(true)}
        />

        {/* 01 — Focus: What I work on */}
        <FocusSection />

        {/* 02 — Background: Where I have worked */}
        <ExperienceSection />

        {/* 03 — Academia: Where I studied */}
        <EducationSection />

        {/* 04 — Stack: Tools / What I reach for */}
        <StackSection />

        {/* 05 — Portfolio: Selected work (6 projects opened up) */}
        <PortfolioSection />

        {/* 06 — Contact: Inquiries and direct reach out */}
        <ContactSection onOpenCvModal={() => setCvModalOpen(true)} />
      </main>

      {/* CV Preview & Download Modal */}
      <CvModal
        isOpen={cvModalOpen}
        onClose={() => setCvModalOpen(false)}
      />
    </div>
  );
}
