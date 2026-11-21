import React, { useState, useEffect } from "react";
import {
  MapPin,
  Search,
  Star,
  Phone,
  Mail,
  Share2,
  MessageCircle,
  Info,
  Plus,
  ArrowLeft,
  MoreVertical,
  Clock,
  Briefcase,
  GraduationCap,
  Sparkles,
  Heart,
  ChevronRight,
  ShoppingCart,
} from "lucide-react";

const BrandColor = "#E23744";

const ResumeData = {
  experience: [
    {
      id: "exp1",
      title: "Marketing Executive",
      subtitle: "Niswey",
      date: "Sep 2024 - Jul 2025",
      desc: "Prepped end-to-end campaigns, plated crisp landing pages and demo videos, and set HubSpot email workflows on autopilot.",
      tag: "Bestseller",
      veg: true,
      logo: "/images/niswey.png",
    },
    {
      id: "exp2",
      title: "Social Media Manager Intern",
      subtitle: "Malikaka",
      date: "Jul 2023 - Aug 2024",
      desc: "Hand-crafted custom illustrations in Procreate and sliced up snappy short-form videos in LumaFusion",
      tag: "Must Try",
      veg: true,
      logo: "/images/malikaka.png",
    },
  ],
  education: [
    {
      id: "edu_masters",
      title: "MBA (2nd Semester)",
      subtitle: "Symbiosis International University",
      date: "2026 - 2028",
      desc: "Specialization in Digital and Telecom Management ",
      logo: "/images/symbiosis-logo.png",
    },
    {
      id: "edu1",
      title: "BBA (7.56 CGPA)",
      subtitle: "Amity University",
      date: "2021 - 2024",
      desc: "Completed Bachelor of Business Administration (Semester 6).",
      veg: true,
      logo: "/images/amity-logo.png",
    },
    {
      id: "edu2",
      title: "Class XII (79.8%)",
      subtitle: "New Horizon Scholars School",
      date: "2021",
      desc: "Higher Secondary Education.",
      veg: true,
      logo: "/images/nhss.png",
    },
    {
      id: "edu3",
      title: "Class X (92.8%)",
      subtitle: "DAV Public School",
      date: "2019",
      desc: "Secondary Education.",
      veg: true,
      logo: "/images/dav-logo.png",
    },
  ],
  skills: [
    {
      id: "sk1",
      title: "CRM Marketing Automation",
      subtitle: "HubSpot",
      date: "Pro",
      desc: "HubSpot Marketing Hub certified! Cooking up sleek landing pages and smooth workflows so leads never go cold.",
      tag: "Spicy",
      veg: true,
      logo: "/images/hubspot.png",
    },
    {
      id: "sk2",
      title: "Workflow Automation",
      subtitle: "n8n",
      date: "Intermediate",
      desc: "Cooking up clean, automated systems out of messy processes. Taste-test my workflows below!.",
      veg: true,
      link: "https://docs.google.com/presentation/d/1xEL5zlJBkbxnfqdY15UpToHsGw0nE5OeCbOHefBVZ1M/edit?usp=sharing",
      logo: "/images/n8n.png",
    },
    {
      id: "sk3",
      title: "Video Creation & Editing",
      subtitle: "Canva, Procreate, LumaFusion, CapCut",
      date: "Advanced",
      desc: "Plating up scroll-stopping graphic designs, custom illustrations, and crisp video edits.",
      veg: true,
      logo: "/images/canvacapcut.png",
    },
    {
      id: "sk4",
      title: "Languages",
      subtitle: "English, Hindi, German A1, Spanish A2.2",
      date: "Fluent",
      desc: "A multilingual combo platter: fluent in English & Hindi, with a side of beginner German and intermediate Spanish.",
      veg: true,
      logo: "/images/lang.png",
    },
  ],
  interests: [
    {
      id: "int1",
      title: "Music",
      subtitle: "Playing ukulele & guitar",
      date: "",
      desc: "Love strumming the ukulele, though sometimes the chords can be questionable.",
      veg: true,
      logo: "/images/uke.png",
    },
    {
      id: "int2",
      title: "Digital Art",
      subtitle: "Drawing & Animation",
      date: "",
      desc: "Big on digital art. One of my reels even hit 10M views on Insta (not to brag XD).",
      veg: true,
      logo: "/images/art.png",
    },

    {
      id: "int4",
      title: "Reading",
      subtitle: "Reading fiction",
      date: "",
      desc: "I often find comfort in reading murder novels.",
      veg: true,
      logo: "/images/novel.png",
    },
  ],
};

const VegIcon = () => (
  <div className="w-4 h-4 border border-green-600 flex items-center justify-center rounded-sm bg-white shrink-0">
    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
  </div>
);

export default function ZomatoResume() {
  const [activeTab, setActiveTab] = useState("Experience");
  const [scrolled, setScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleHire = () => {
    setCartCount((prev) => prev + 1);
  };

  const categories = [
    { name: "Experience", icon: Briefcase, id: "experience" },
    { name: "Education", icon: GraduationCap, id: "education" },
    { name: "Skills", icon: Sparkles, id: "skills" },
    { name: "Interests", icon: Heart, id: "interests" },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 140;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveTab(categories.find((c) => c.id === id).name);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 selection:bg-red-100 selection:text-red-900 pb-24">
      {/* Mobile App Container to constrain width on desktop */}
      <div className="max-w-md mx-auto bg-white min-h-screen shadow-2xl relative overflow-hidden">
        {/* Header - Sticky & Transparent over Banner */}
        <div
          className={`sticky top-0 z-50 transition-all duration-300 ${
            scrolled ? "bg-white shadow-md py-3" : "bg-transparent pt-4 pb-2"
          }`}
        >
          <div className="px-4 flex items-center justify-between gap-3">
            <button
              className={`p-2 rounded-full transition-colors ${
                scrolled
                  ? "hover:bg-gray-100 text-gray-700"
                  : "bg-black/40 text-white backdrop-blur-sm hover:bg-black/60"
              }`}
            >
              <ArrowLeft size={22} />
            </button>

            <div
              className={`flex-1 transition-all duration-300 ${
                scrolled ? "opacity-100" : "opacity-0 hidden"
              }`}
            >
              <h1 className="font-bold text-lg truncate text-gray-900">
                Kritika Bhandari
              </h1>
            </div>

            {!scrolled && (
              <div className="flex-1 flex flex-col justify-center">
                <div className="flex items-center gap-1 text-xs font-bold text-white drop-shadow-md">
                  <MapPin size={14} className="text-[#E23744] fill-white" />
                  <span>Home</span>
                  <ChevronRight size={14} />
                </div>
                <span className="text-[11px] text-gray-100 truncate drop-shadow-md">
                  Thane, Maharashtra, India
                </span>
              </div>
            )}

            <div className="flex items-center gap-2">
              <button
                className={`p-2 rounded-full transition-colors ${
                  scrolled
                    ? "hover:bg-gray-100 text-gray-700"
                    : "bg-black/40 text-white backdrop-blur-sm hover:bg-black/60"
                }`}
              >
                <Search size={20} />
              </button>
              <button
                className={`p-2 rounded-full transition-colors ${
                  scrolled
                    ? "hover:bg-gray-100 text-gray-700"
                    : "bg-black/40 text-white backdrop-blur-sm hover:bg-black/60"
                }`}
              >
                <MoreVertical size={20} />
              </button>
            </div>
          </div>

          {/* Sticky Category Nav */}
          <div
            className={`px-4 mt-3 flex overflow-x-auto hide-scrollbar gap-4 transition-all duration-300 ${
              scrolled ? "block border-t border-gray-100 pt-3" : "hidden"
            }`}
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => scrollToSection(cat.id)}
                className={`whitespace-nowrap pb-2 text-sm font-semibold border-b-2 transition-colors px-1 ${
                  activeTab === cat.name
                    ? "border-[#E23744] text-[#E23744]"
                    : "border-transparent text-gray-500 hover:text-gray-800"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Full-Width Rectangular Banner Image (Pulls up behind header) */}
        <div className="relative h-64 w-full -mt-16 bg-gray-900">
          <img
            src="/images/kritika.png" // <-- Paste your Cloudinary photo link here
            alt="Kritika Bhandari"
            className="w-full h-full object-cover object-center"
          />
          {/* Dark top gradient so white header icons stay readable */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/20" />
        </div>

        {/* Hero / Restaurant Info Section (Overlaps the banner with rounded top corners) */}
        <div className="relative z-10 -mt-6 bg-white rounded-t-3xl px-4 pt-6 pb-6 shadow-sm">
          {/* Search Bar */}
          <div className="mb-5">
            <div className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 flex items-center gap-3">
              <Search size={18} className="text-[#E23744]" />
              <input
                type="text"
                placeholder="Search 'n8n workflows' or 'CRM'..."
                className="w-full bg-transparent outline-none text-sm placeholder:text-gray-400"
                readOnly
              />
              <div className="border-l pl-3 border-gray-200">
                <Clock size={18} className="text-[#E23744]" />
              </div>
            </div>
          </div>

          <div className="flex justify-between items-start gap-4">
            <div>
              <h1 className="text-2xl font-black text-gray-900 leading-tight">
                KRITIKA BHANDARI
              </h1>
              <p className="text-gray-500 text-sm mt-1 mb-2 line-clamp-2">
                Aspiring Product Operations | CRM Implementation | AI Automation
                Enthusiast
              </p>
              <div className="flex items-center gap-1.5 text-xs text-gray-600 bg-gray-100 w-fit px-2 py-1 rounded-md">
                <Clock size={12} />
                <span>Available to Join (March-June 2027)</span>
                <span className="text-gray-300">|</span>
                <span>Thane, MH</span>
              </div>
            </div>

            {/* Rating Badge */}
            <div className="flex flex-col items-center justify-center bg-green-700 text-white rounded-lg px-2 py-1.5 shadow-md shrink-0">
              <div className="flex items-center gap-1 font-bold text-sm">
                <span>5.0</span>
                <Star size={12} className="fill-white" />
              </div>
              <div className="text-[9px] border-t border-green-600 pt-0.5 mt-0.5 w-full text-center uppercase tracking-wider">
                Top Rated
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-6 border-b border-gray-100 pb-6">
            <a
              href="tel:+917900020593"
              className="flex-1 bg-gray-50 border border-gray-200 rounded-xl py-2 flex flex-col items-center justify-center gap-1 hover:bg-gray-100 transition-colors"
            >
              <Phone size={18} className="text-gray-700" />
              <span className="text-xs font-semibold text-gray-700">Call</span>
            </a>
            <a
              href="mailto:kritikabhandari03@gmail.com"
              className="flex-1 bg-gray-50 border border-gray-200 rounded-xl py-2 flex flex-col items-center justify-center gap-1 hover:bg-gray-100 transition-colors"
            >
              <Mail size={18} className="text-gray-700" />
              <span className="text-xs font-semibold text-gray-700">Email</span>
            </a>
            <a
              href="https://wa.me/917900020593?text=Hi%20Kritika!%20I%20saw%20your%20Zomato%20CV."
              target="_blank"
              rel="noreferrer"
              className="flex-1 bg-gray-50 border border-gray-200 rounded-xl py-2 flex flex-col items-center justify-center gap-1 hover:bg-gray-100 transition-colors"
            >
              <MessageCircle size={18} className="text-green-600" />
              <span className="text-xs font-semibold text-gray-700">
                WhatsApp
              </span>
            </a>
          </div>

          {/* About Section styled as restaurant description */}
          <div className="py-4 border-b border-gray-100 flex gap-3">
            <Info size={20} className="text-gray-400 shrink-0 mt-0.5" />
            <p className="text-sm text-gray-600 leading-relaxed">
              I started out in marketing, noticed how messy things got behind
              the scenes, and realized I really enjoy making them run smoother.
              As a student exploring Product Operations and Automation, I’m
              currently wiring up n8n workflows, tinkering with CRM setups, and
              turning repetitive tasks into clean, AI-powered systems with a
              creative twist. I’m looking for a summer internship from March to
              June where I can jump in, stay creative, and learn pretty much
              everything and anything. Let’s build something cool! (Side note:
              my real top skill is ordering McDonald's on Zomato at 12 AM).
            </p>
          </div>
        </div>
        <div className="bg-gray-100/50 pt-2 pb-32">
          {/* Menu Categories - Inline Nav */}
          {!scrolled && (
            <div className="px-4 py-4 flex overflow-x-auto hide-scrollbar gap-3 bg-white mb-2 shadow-sm sticky top-[72px] z-40">
              {categories.map((cat) => (
                <button
                  key={`inline-${cat.id}`}
                  onClick={() => scrollToSection(cat.id)}
                  className={`whitespace-nowrap px-4 py-1.5 rounded-xl border text-sm font-semibold transition-all flex items-center gap-2 ${
                    activeTab === cat.name
                      ? "bg-red-50 border-[#E23744] text-[#E23744]"
                      : "bg-white border-gray-200 text-gray-600 shadow-sm"
                  }`}
                >
                  <cat.icon size={16} />
                  {cat.name}
                </button>
              ))}
            </div>
          )}

          {/* Dynamic Sections */}
          {Object.entries(ResumeData).map(([key, items]) => {
            const sectionTitle = key.charAt(0).toUpperCase() + key.slice(1);
            return (
              <div
                key={key}
                id={key}
                className="bg-white mb-3 pt-6 pb-2 px-4 shadow-sm scroll-mt-36"
              >
                <h2 className="text-lg font-black text-gray-900 mb-4 flex items-center gap-2">
                  {sectionTitle}
                  <span className="text-sm font-normal text-gray-400 ml-1">
                    ({items.length})
                  </span>
                </h2>

                <div className="flex flex-col">
                  {items.map((item, index) => (
                    <div
                      key={item.id}
                      className={`py-6 flex gap-4 ${
                        index !== items.length - 1
                          ? "border-b border-dashed border-gray-200"
                          : ""
                      }`}
                    >
                      {/* Left Content */}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1.5">
                          <VegIcon />
                          {item.tag && (
                            <span className="text-[10px] uppercase tracking-wider font-bold text-[#E23744] bg-red-50 px-1.5 py-0.5 rounded flex items-center gap-1">
                              <Star size={8} className="fill-[#E23744]" />
                              {item.tag}
                            </span>
                          )}
                        </div>
                        <h3 className="font-bold text-gray-800 text-[15px] leading-tight mb-1">
                          {item.title}
                        </h3>
                        <div className="text-sm font-medium text-gray-700 mb-1">
                          {item.subtitle}
                        </div>

                        {item.date && (
                          <div className="text-xs font-semibold text-gray-500 mb-2">
                            {item.date}
                          </div>
                        )}

                        {item.desc && (
                          <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">
                            {item.desc}
                          </p>
                        )}

                        {item.link && (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-block mt-2 text-[11px] font-bold text-[#E23744] border border-[#E23744] px-2 py-1 rounded-md hover:bg-red-50"
                          >
                            View Workflow →
                          </a>
                        )}
                      </div>

                      {/* Right Action / Image placeholder */}
                      <div className="w-[110px] shrink-0 flex flex-col items-center">
                        <div className="w-[110px] h-[110px] rounded-2xl bg-gradient-to-br from-red-50 to-orange-50 border border-gray-100 flex items-center justify-center shadow-sm relative overflow-hidden">
                          {/* If a logo exists, show it. Otherwise, show the icons */}
                          {item.logo ? (
                            <img
                              src={item.logo}
                              alt="Company Logo"
                              className="w-full h-full object-contain p-2 bg-white"
                            />
                          ) : (
                            <>
                              {key === "experience" && (
                                <Briefcase size={32} className="text-red-200" />
                              )}
                              {key === "education" && (
                                <GraduationCap
                                  size={32}
                                  className="text-red-200"
                                />
                              )}
                              {key === "skills" && (
                                <Sparkles size={32} className="text-red-200" />
                              )}
                              {key === "interests" && (
                                <Heart size={32} className="text-red-200" />
                              )}
                            </>
                          )}

                          {/* Add/Hire Button positioned overlapping the image bottom */}
                          <button
                            onClick={handleHire}
                            className="absolute -bottom-0 left-1/2 -translate-x-1/2 w-[85%] bg-white text-[#E23744] border border-gray-200 font-black text-sm py-1.5 rounded-lg shadow-md hover:bg-gray-50 active:scale-95 transition-transform flex items-center justify-center gap-1 uppercase tracking-wide"
                          >
                            Hire <Plus size={14} className="stroke-[3]" />
                          </button>
                        </div>
                        <div className="text-[10px] text-gray-400 mt-2 text-center">
                          customizable
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          {/* Footer branding */}
          <div className="py-8 flex flex-col items-center justify-center text-gray-400">
            <div className="text-2xl font-black italic tracking-tighter opacity-30 mb-2">
              zomato style
            </div>
            <p className="text-xs">End of Resume</p>
          </div>
        </div>

        {/* Floating Checkout/Contact Bar */}
        {cartCount > 0 && (
          <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-[calc(28rem-2rem)] z-50 animate-in slide-in-from-bottom-5 fade-in duration-300">
            <div className="bg-[#E23744] rounded-xl shadow-2xl p-3 flex items-center justify-between text-white">
              <div className="flex flex-col">
                <span className="font-bold text-sm flex items-center gap-1">
                  <ShoppingCart size={14} />
                  {cartCount} {cartCount === 1 ? "Skill Added" : "Skills Added"}
                </span>
                <span className="text-xs text-red-100">
                  Ready to make an offer?
                </span>
              </div>
              <button
                onClick={() =>
                  (window.location.href = "mailto:kritikabhandari03@gmail.com")
                }
                className="bg-white text-[#E23744] px-4 py-2 rounded-lg font-bold text-sm shadow-sm active:scale-95 transition-transform flex items-center gap-1"
              >
                Contact Now <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Global styles for hide-scrollbar */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `,
        }}
      />
    </div>
  );
}
