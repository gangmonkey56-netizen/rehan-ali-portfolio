// ===============================
// FULL NEXT.JS PORTFOLIO SETUP
// Inspired by muhammadzuhaib.vercel.app
// Stack: Next.js + Tailwind CSS + Framer Motion
// ===============================

// ---------- 1. package.json ----------
{
  "name": "rehan-portfolio",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "14.1.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "framer-motion": "^11.0.0"
  }
}

// ---------- 2. tailwind.config.js ----------
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {}
  },
  plugins: []
};

// ---------- 3. app/globals.css ----------
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  @apply bg-white text-gray-800;
}

// ---------- 4. app/layout.js ----------
import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Rehan Ali | Digital Marketer",
  description: "Portfolio of Rehan Ali"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

// ---------- 5. components/Navbar.js ----------
export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white border-b z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between">
        <span className="font-bold">Rehan Ali</span>
        <div className="space-x-6 text-sm">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}

// ---------- 6. app/page.js ----------
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="pt-32 max-w-6xl mx-auto px-6">
      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold">Digital Marketer</h1>
        <p className="mt-4 text-gray-600">
          I help businesses get leads, not likes.
        </p>
      </motion.section>

      {/* ABOUT */}
      <section id="about" className="mt-32">
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p className="mt-4 max-w-2xl text-gray-600">
          I’m Rehan Ali, a digital marketer with experience in Facebook Ads,
          graphic design, video editing, and lead generation for service-based
          businesses.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="mt-32">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {["Facebook Ads", "SEO", "Graphic Design", "Video Editing"].map(
            (skill) => (
              <div key={skill} className="border rounded p-4 text-center">
                {skill}
              </div>
            )
          )}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mt-32">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="border rounded p-6">
            <h3 className="font-semibold">Experto de Citas</h3>
            <p className="text-gray-600 mt-2">
              Lead generation and appointment booking service in Spain.
            </p>
          </div>
          <div className="border rounded p-6">
            <h3 className="font-semibold">Client Ad Campaigns</h3>
            <p className="text-gray-600 mt-2">
              Facebook ad funnels for service businesses.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mt-32 mb-32 text-center">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="mt-4">rehanjee16@gmail.com</p>
        <p>+92 300 4154882</p>
      </section>
    </main>
  );
}
