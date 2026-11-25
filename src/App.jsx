import React, { useState, useEffect } from "react";
import {
  MapPin,
  Search,
  Star,
  Mail,
  MessageCircle,
  Info,
  Plus,
  Check,
  X,
  Trash2,
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

const ResumeData = {
  experience: [
    {
      id: "exp1",
      title: "Marketing Executive",
      subtitle: "Niswey",
      date: "Sep 2024 - Jul 2025",
      desc: "Plated and optimized end-to-end marketing campaigns, whipped up product demo videos, landing pages, and lead-gen assets, and set HubSpot email workflows on autopilot while keeping social media engagement fresh.",
      tag: "Bestseller",
      veg: true,
      logo: "/images/niswey.png",
      bonusNotes: [
        {
          text: "Planned, executed, and optimized end-to-end performance marketing campaigns.",
        },
        {
          text: "Produced product demo videos, landing pages, forms, and email assets to drive lead generation.",
        },
        {
          text: "Automated HubSpot email workflows and managed social media content to boost engagement.",
        },
      ],
    },
    {
      id: "exp2",
      title: "Social Media Manager Intern",
      subtitle: "Malikaka",
      date: "Jul 2023 - Aug 2023",
      desc: "Hand-crafted custom illustrations in Procreate and sliced up snappy short-form videos in LumaFusion",
      tag: "Must Try",
      veg: true,
      logo: "/images/malikaka.png",
      bonusNotes: [
        {
          text: "Custom Procreate illustrations + snappy LumaFusion reels from scratch 🎨",
        },
      ],
    },
  ],
  education: [
    {
      id: "edu_masters",
      title: "MBA (2nd Semester)",
      subtitle: "Symbiosis International University",
      date: "2026 - 2028",
      desc: "Specialization in Digital and Telecom Management ",
      veg: true,
      logo: "/images/symbiosis-logo.png",
      bonusNotes: [
        {
          text: "Available for a full-time Summer Internship from March to June 2027 📅",
        },
      ],
    },
    {
      id: "edu1",
      title: "BBA (7.56 CGPA)",
      subtitle: "Amity University",
      date: "2021 - 2024",
      desc: "Completed Bachelor of Business Administration (Semester 6).",
      veg: true,
      logo: "/images/amity-logo.png",
      bonusNotes: [
        {
          text: "Survived 6 semesters of presentations, group projects, and campus coffee ☕",
        },
      ],
    },
    {
      id: "edu2",
      title: "Class XII (79.8%)",
      subtitle: "New Horizon Scholars School",
      date: "2021",
      desc: "Higher Secondary Education.",
      veg: true,
      logo: "/images/nhss.png",
      bonusNotes: [
        {
          text: "Graduated Class XII during the peak online-era batch 🎓",
        },
      ],
    },
    {
      id: "edu3",
      title: "Class X (92.8%)",
      subtitle: "DAV Public School",
      date: "2019",
      desc: "Secondary Education.",
      veg: true,
      logo: "/images/dav-logo.png",
      bonusNotes: [
        { text: "92.8% Club — peak academic weapon era 📚" },
      ],
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
      bonusNotes: [
        {
          text: "HubSpot Marketing Hub Certified. Familiar with setting up landing pages, marketing workflows, email sequences, and WhatsApp marketing",
        },
      ],
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
      bonusNotes: [
        {
          before: "Taste-test my live n8n automation deck ",
          linkText: "right here",
          after: " ⚡",
          url: "https://docs.google.com/presentation/d/1xEL5zlJBkbxnfqdY15UpToHsGw0nE5OeCbOHefBVZ1M/edit?usp=sharing",
        },
      ],
    },
    {
      id: "sk3",
      title: "Video Creation & Editing",
      subtitle: "Canva, Procreate, LumaFusion, CapCut",
      date: "Advanced",
      desc: "Plating up scroll-stopping graphic designs, custom illustrations, and crisp video edits.",
      veg: true,
      logo: "/images/canvacapcut.png",
      bonusNotes: [
        {
          before:
            "You see.. I love creativity and video editing so much that I even created a video-spotify-wrapped cv. You can check it out ",
          linkText: "here",
          after: ".",
          url: "https://vimeo.com/1152148247?fl=ip&fe=ec",
        },
      ],
    },
    {
      id: "sk4",
      title: "Languages",
      subtitle: "English, Hindi, German A1, Spanish A2.2",
      date: "Fluent",
      desc: "A multilingual combo platter: fluent in English & Hindi, with a side of beginner German and intermediate Spanish.",
      veg: true,
      logo: "/images/lang.png",
      bonusNotes: [
        { text: "Can sing Doraemon in Japanese 🎶" },
        {
          text: 'Can order a whole meal in Spanish — "¿Cuál es la especialidad de la casa?" 🌮',
        },
        {
          text: 'Jamming to German metal bands — "Hier kommt die Sonne" Rammstein! 🤘',
        },
      ],
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
      bonusNotes: [
        { text: "Questionable ukulele chords included free of charge 🎸" },
      ],
    },
    {
      id: "int2",
      title: "Digital Art",
      subtitle: "Drawing & Animation",
      date: "",
      desc: "Big on digital art. One of my reels even hit 10M views on Insta (not to brag XD).",
      veg: true,
      logo: "/images/art.png",
      bonusNotes: [
        {
          before: "You can check out my art account ",
          linkText: "here",
          after: " ✨",
          url: "https://www.instagram.com/gakiart?evlk=MWJuOWI0MmJ3bGwzbg%3D%3D&utm_source=qr",
        },
      ],
    },
    {
      id: "int4",
      title: "Reading",
      subtitle: "Reading fiction",
      date: "",
      desc: "I often find comfort in reading murder novels.",
      veg: true,
      logo: "/images/novel.png",
      bonusNotes: [
        {
          text: "Always down for murder-mystery book recommendations, The Silent Patient and Never Lie are my all time favs!",
        },
      ],
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
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showBackPopup, setShowBackPopup] = useState(false);
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const [copiedToast, setCopiedToast] = useState(false);

  const categories = [
    { name: "Experience", icon: Briefcase, id: "experience" },
    { name: "Education", icon: GraduationCap, id: "education" },
    { name: "Skills", icon: Sparkles, id: "skills" },
    { name: "Interests", icon: Heart, id: "interests" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);

      const scrollPosition =
        window.scrollY + (window.innerWidth >= 1024 ? 140 : 180);
      for (let i = categories.length - 1; i >= 0; i--) {
        const section = document.getElementById(categories[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveTab(categories[i].name);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isCartOpen || showBackPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isCartOpen, showBackPopup]);

  const toggleCartItem = (item) => {
    setCartItems((prev) => {
      const exists = prev.some((i) => i.id === item.id);
      if (exists) {
        const updated = prev.filter((i) => i.id !== item.id);
        if (updated.length === 0) setIsCartOpen(false);
        return updated;
      }
      return [...prev, item];
    });
  };

  const activePointers = cartItems.flatMap((item) => item.bonusNotes || []);

  const buildOrderMessage = () => {
    const itemLines = cartItems
      .map((item) => `• ${item.title} (${item.subtitle})`)
      .join("\n");

    return `Hi Kritika! I checked out your Zomato-style resume and added these to my order:\n\n${itemLines}\n\nLet's connect for a chat!`;
  };

  const handleEmailCheckout = () => {
    const subject = encodeURIComponent(
      `Zomato CV Order (${cartItems.length} items) – Kritika Bhandari`
    );
    const body = encodeURIComponent(buildOrderMessage());
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=kritikabhandari03@gmail.com&su=${subject}&body=${body}`,
      "_blank"
    );
  };

  const handleWhatsAppCheckout = () => {
    const text = encodeURIComponent(buildOrderMessage());
    window.open(`https://wa.me/917900020593?text=${text}`, "_blank");
  };

  const handleShareResume = () => {
    navigator.clipboard.writeText("https://kritika-bhandari-resume.vercel.app/");
    setShowMoreMenu(false);
    setCopiedToast(true);
    setTimeout(() => setCopiedToast(false), 2500);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = window.innerWidth >= 1024 ? 105 : 135;
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

  const trimmedQuery = searchQuery.trim().toLowerCase();

  return (
    <div className="min-h-dvh bg-white font-sans text-gray-800 selection:bg-red-100 selection:text-red-900 pb-24">
      <div className="w-full bg-white min-h-dvh relative">
        {/* Sticky Top Navbar */}
        <div
          className={`sticky top-0 z-50 transition-all duration-300 ${
            scrolled
              ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-3"
              : "bg-transparent pt-4 pb-2"
          }`}
        >
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-3">
            <button
              onClick={() => {
                if (searchQuery) {
                  setSearchQuery("");
                } else {
                  setShowBackPopup(true);
                }
              }}
              className={`p-2 rounded-full transition-colors shrink-0 ${
                scrolled
                  ? "hover:bg-gray-100 text-gray-700"
                  : "bg-black/40 text-white backdrop-blur-sm hover:bg-black/60"
              }`}
            >
              <ArrowLeft size={20} className="sm:w-[22px] sm:h-[22px]" />
            </button>

            {scrolled ? (
              <div className="flex-1 min-w-0 flex items-center justify-between gap-4">
                <h1 className="font-bold text-base sm:text-lg truncate text-gray-900 lg:hidden">
                  Kritika Bhandari
                </h1>

                {!trimmedQuery && (
                  <div className="hidden lg:flex items-center gap-6">
                    <span className="font-black text-base text-gray-900 tracking-tight pr-4 border-r border-gray-200">
                      Kritika Bhandari
                    </span>
                    {categories.map((cat) => (
                      <button
                        key={`desk-nav-${cat.id}`}
                        onClick={() => scrollToSection(cat.id)}
                        className={`py-1 text-sm font-semibold border-b-2 transition-colors ${
                          activeTab === cat.name
                            ? "border-[#E23744] text-[#E23744]"
                            : "border-transparent text-gray-500 hover:text-gray-900"
                        }`}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div className="flex-1 min-w-0 flex flex-col justify-center">
                <div className="flex items-center gap-1 text-xs sm:text-sm font-bold text-white drop-shadow-md">
                  <MapPin
                    size={14}
                    className="text-[#E23744] fill-white shrink-0"
                  />
                  <span>Home</span>
                  <ChevronRight size={14} className="shrink-0" />
                </div>
                <span className="text-[11px] sm:text-xs text-gray-100 truncate drop-shadow-md">
                  Thane, Maharashtra, India
                </span>
              </div>
            )}

            <div className="relative flex items-center gap-2 shrink-0">
              <button
                onClick={() => setShowMoreMenu((prev) => !prev)}
                className={`relative z-50 p-2 rounded-full transition-colors ${
                  scrolled
                    ? "hover:bg-gray-100 text-gray-700"
                    : "bg-black/40 text-white backdrop-blur-sm hover:bg-black/60"
                }`}
              >
                <MoreVertical size={20} />
              </button>

              {showMoreMenu && (
                <>
                  <div
                    onClick={() => setShowMoreMenu(false)}
                    className="fixed inset-0 z-40"
                  />
                  <div className="absolute right-0 top-11 w-52 bg-white rounded-2xl shadow-xl border border-gray-100 py-1.5 z-50 text-left">
                    <a
                      href="/kritika_bhandari_resume.pdf"
                      download="Kritika_Bhandari_Resume.pdf"
                      onClick={() => setShowMoreMenu(false)}
                      className="w-full px-4 py-2.5 text-xs font-semibold text-gray-700 hover:bg-red-50 hover:text-[#E23744] flex items-center gap-2.5 transition-colors"
                    >
                      <span>📄</span> Download Resume
                    </a>
                    <button
                      onClick={handleShareResume}
                      className="w-full px-4 py-2.5 text-xs font-semibold text-gray-700 hover:bg-red-50 hover:text-[#E23744] flex items-center gap-2.5 transition-colors"
                    >
                      <span>🔗</span> Share Menu Link
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>

          {!trimmedQuery && (
            <div
              className={`lg:hidden px-3 sm:px-6 mt-3 flex overflow-x-auto hide-scrollbar gap-4 sm:gap-6 transition-all duration-300 ${
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
          )}
        </div>

        {/* Hero Cover Banner */}
        <div
          className={`relative z-0 w-full -mt-16 bg-gray-900 transition-all duration-300 overflow-hidden ${
            trimmedQuery ? "h-28" : "h-64 md:h-64 lg:h-72"
          }`}
        >
          <img
            src="/images/kritika.png"
            alt=""
            aria-hidden="true"
            className="hidden md:block w-full h-full object-cover object-[center_15%] scale-150 blur-md brightness-75"
          />

          <img
            src="/images/kritika.png"
            alt="Kritika Bhandari"
            className="md:hidden w-full h-full object-cover object-[center_35%]"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/15 to-black/40 pointer-events-none" />
        </div>

        {/* Main Content Area */}
        <div className="relative z-10 -mt-6 bg-white rounded-t-3xl lg:rounded-none">
          <div className="max-w-3xl lg:max-w-7xl mx-auto lg:flex lg:items-start lg:gap-10 lg:px-8 lg:pb-8">
            {/* LEFT COLUMN (lg:top-36 ensures -mt-16 avatar stays completely clear below the sticky navbar when scrolled) */}
            <div
              className={`px-4 sm:px-6 lg:px-0 pt-6 lg:pt-0 lg:w-[340px] xl:w-[380px] lg:shrink-0 lg:sticky lg:top-36 ${
                trimmedQuery ? "pb-3" : "pb-6"
              }`}
            >
              {/* Overlapping Portrait Avatar */}
              {!trimmedQuery && (
                <div className="hidden md:block relative z-30 -mt-16 lg:-mt-16 mb-4">
                  <div className="w-28 h-28 lg:w-32 lg:h-32 rounded-3xl overflow-hidden border-4 border-white shadow-xl bg-gray-100">
                    <img
                      src="/images/kritika.png"
                      alt="Kritika Bhandari"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              )}

              {/* Mobile/Tablet Search Input */}
              <div className={`lg:hidden ${trimmedQuery ? "mb-1" : "mb-5"}`}>
                <div className="bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 flex items-center gap-2.5 focus-within:border-[#E23744] focus-within:bg-white transition-colors">
                  <Search size={18} className="text-[#E23744] shrink-0" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search 'n8n workflows' or 'CRM'..."
                    className="w-full min-w-0 bg-transparent outline-none text-base sm:text-sm text-gray-800 placeholder:text-gray-400"
                  />
                  {searchQuery ? (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="text-gray-400 hover:text-gray-600 p-1 shrink-0"
                    >
                      <X size={16} />
                    </button>
                  ) : (
                    <a
                      href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Chat%20with%20Kritika%20Bhandari&add=kritikabhandari03@gmail.com&details=Let's%20connect%20regarding%20Product%20Operations%20/%20Summer%20Internship!"
                      target="_blank"
                      rel="noreferrer"
                      title="Schedule a quick chat on Google Calendar"
                      className="border-l pl-2.5 border-gray-200 hover:opacity-75 transition-opacity flex items-center shrink-0"
                    >
                      <Clock size={18} className="text-[#E23744]" />
                    </a>
                  )}
                </div>
              </div>

              <div className={trimmedQuery ? "hidden lg:block" : "block"}>
                <div className="flex justify-between items-start gap-3">
                  <div className="min-w-0">
                    <h1 className="text-xl sm:text-2xl lg:text-[26px] font-black text-gray-900 leading-tight">
                      KRITIKA BHANDARI
                    </h1>
                    <p className="text-gray-500 text-xs sm:text-sm mt-1.5 mb-3">
                      Aspiring Product Operations | CRM Implementation | AI
                      Automation Enthusiast
                    </p>
                    <div className="flex flex-wrap items-center gap-1.5 text-[11px] sm:text-xs text-gray-600 bg-gray-100 w-fit px-2.5 py-1 rounded-md">
                      <Clock size={12} className="shrink-0" />
                      <span>Available to Join (March–June 2027)</span>
                      <span className="text-gray-300">|</span>
                      <span>Thane, MH</span>
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center bg-green-700 text-white rounded-lg px-2.5 py-1.5 shadow-md shrink-0">
                    <div className="flex items-center gap-1 font-bold text-sm">
                      <span>5.0</span>
                      <Star size={12} className="fill-white" />
                    </div>
                    <div className="text-[9px] border-t border-green-600 pt-0.5 mt-0.5 w-full text-center uppercase tracking-wider">
                      Top Rated
                    </div>
                  </div>
                </div>

                {/* Contact Action Buttons */}
                <div className="flex items-center gap-2.5 sm:gap-3 mt-5 border-b border-gray-100 pb-5 md:max-w-md lg:max-w-none">
                  <a
                    href="https://www.linkedin.com/in/kritika-bhandari/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 bg-gray-50 border border-gray-200 rounded-xl py-2.5 flex flex-col items-center justify-center gap-1 hover:bg-gray-100 transition-colors"
                  >
                    <Briefcase size={18} className="text-[#0A66C2]" />
                    <span className="text-xs font-semibold text-gray-700">
                      LinkedIn
                    </span>
                  </a>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=kritikabhandari03@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 bg-gray-50 border border-gray-200 rounded-xl py-2.5 flex flex-col items-center justify-center gap-1 hover:bg-gray-100 transition-colors"
                  >
                    <Mail size={18} className="text-gray-700" />
                    <span className="text-xs font-semibold text-gray-700">
                      Email
                    </span>
                  </a>
                  <a
                    href="https://wa.me/917900020593?text=Hi%20Kritika!%20I%20saw%20your%20Zomato%20CV."
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 bg-gray-50 border border-gray-200 rounded-xl py-2.5 flex flex-col items-center justify-center gap-1 hover:bg-gray-100 transition-colors"
                  >
                    <MessageCircle size={18} className="text-green-600" />
                    <span className="text-xs font-semibold text-gray-700">
                      WhatsApp
                    </span>
                  </a>
                </div>

                {/* Bio */}
                <div className="py-4 border-b border-gray-100 lg:border-none flex gap-3">
                  <Info size={18} className="text-gray-400 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed">
                    Hi! I’m an MBA student looking for a summer internship from
                    March to June. I started out in marketing but found myself
                    increasingly curious about everything happening behind the
                    scenes, from processes and operations to technology and
                    automation. I’m currently experimenting with n8n, CRM setups,
                    AI workflows, and finding ways to make things run a little
                    smoother. I love creativity, problem-solving, trying new
                    things, and learning by doing. I’m open to exploring pretty
                    much anything across marketing, product, tech, operations,
                    automation, or wherever I can contribute, learn, and get my
                    hands dirty. Always up for interesting ideas and building cool
                    things! (P.S. Pizza By The Bay is my go-to restaurant
                    recommendation. No debate.)
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN (Search Bar on Desktop, Category Pills & Menu List) */}
            <div className="flex-1 min-w-0 bg-gray-100/50 lg:bg-transparent pt-2 lg:pt-8 pb-28 lg:pb-4">
              {/* Desktop Search Bar */}
              <div className="hidden lg:block mb-5">
                <div className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 flex items-center gap-3 focus-within:border-[#E23744] focus-within:bg-white transition-colors shadow-sm">
                  <Search size={18} className="text-[#E23744] shrink-0" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search 'n8n workflows', 'CRM', 'MBA', or 'Procreate'..."
                    className="w-full bg-transparent outline-none text-sm text-gray-800 placeholder:text-gray-400"
                  />
                  {searchQuery ? (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="text-gray-400 hover:text-gray-600 p-1"
                    >
                      <X size={16} />
                    </button>
                  ) : (
                    <a
                      href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Chat%20with%20Kritika%20Bhandari&add=kritikabhandari03@gmail.com&details=Let's%20connect%20regarding%20Product%20Operations%20/%20Summer%20Internship!"
                      target="_blank"
                      rel="noreferrer"
                      title="Schedule a quick chat on Google Calendar"
                      className="border-l pl-3 border-gray-200 hover:opacity-75 transition-opacity flex items-center gap-1.5 text-xs font-semibold text-[#E23744] shrink-0"
                    >
                      <Clock size={16} />
                      <span>Book Chat</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Inline Category Filter Chips */}
              {!scrolled && !trimmedQuery && (
                <div className="px-4 sm:px-6 lg:px-0 py-3.5 flex overflow-x-auto hide-scrollbar gap-2.5 sm:gap-3 bg-white lg:bg-transparent mb-2 shadow-sm lg:shadow-none sticky top-[68px] lg:static z-40">
                  {categories.map((cat) => (
                    <button
                      key={`inline-${cat.id}`}
                      onClick={() => scrollToSection(cat.id)}
                      className={`whitespace-nowrap px-3.5 sm:px-4 py-1.5 rounded-xl border text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                        activeTab === cat.name
                          ? "bg-red-50 border-[#E23744] text-[#E23744]"
                          : "bg-white border-gray-200 text-gray-600 shadow-sm hover:border-gray-300"
                      }`}
                    >
                      <cat.icon size={15} />
                      {cat.name}
                    </button>
                  ))}
                </div>
              )}

              {/* Menu Sections */}
              {Object.entries(ResumeData).map(([key, items]) => {
                const filteredItems = trimmedQuery
                  ? items.filter(
                      (item) =>
                        item.title.toLowerCase().includes(trimmedQuery) ||
                        item.subtitle.toLowerCase().includes(trimmedQuery) ||
                        (item.desc &&
                          item.desc.toLowerCase().includes(trimmedQuery)) ||
                        (item.tag &&
                          item.tag.toLowerCase().includes(trimmedQuery))
                    )
                  : items;

                if (filteredItems.length === 0) return null;
                const sectionTitle = key.charAt(0).toUpperCase() + key.slice(1);

                return (
                  <div
                    key={key}
                    id={key}
                    className="bg-white mb-3 lg:mb-6 pt-6 pb-2 lg:pb-6 px-4 sm:px-6 lg:p-6 shadow-sm lg:border lg:border-gray-100 lg:rounded-2xl scroll-mt-28"
                  >
                    <h2 className="text-lg sm:text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
                      {sectionTitle}
                      <span className="text-sm font-normal text-gray-400 ml-1">
                        ({filteredItems.length})
                      </span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 md:gap-4 lg:gap-0">
                      {filteredItems.map((item, index) => {
                        const isAdded = cartItems.some((i) => i.id === item.id);
                        return (
                          <div
                            key={item.id}
                            className={`py-5 md:p-4 lg:px-2 lg:py-5 flex gap-3 sm:gap-4 md:border md:border-gray-100 md:rounded-2xl lg:border-x-0 lg:border-t-0 lg:rounded-none lg:hover:bg-gray-50/70 transition-colors bg-white ${
                              index !== filteredItems.length - 1
                                ? "border-b border-dashed border-gray-200 md:border-solid lg:border-dashed"
                                : "lg:border-b-0"
                            }`}
                          >
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1.5">
                                <VegIcon />
                                {item.tag && (
                                  <span className="text-[10px] uppercase tracking-wider font-bold text-[#E23744] bg-red-50 px-1.5 py-0.5 rounded flex items-center gap-1">
                                    <Star size={8} className="fill-[#E23744]" />
                                    {item.tag}
                                  </span>
                                )}
                              </div>
                              <h3 className="font-bold text-gray-800 text-[15px] lg:text-base leading-tight mb-1">
                                {item.title}
                              </h3>
                              <div className="text-xs sm:text-sm font-medium text-gray-700 mb-1">
                                {item.subtitle}
                              </div>

                              {item.date && (
                                <div className="text-xs font-semibold text-gray-500 mb-2">
                                  {item.date}
                                </div>
                              )}

                              {item.desc && (
                                <p className="text-xs sm:text-[13px] text-gray-500 leading-relaxed line-clamp-3 lg:line-clamp-none">
                                  {item.desc}
                                </p>
                              )}

                              {item.link && (
                                <a
                                  href={item.link}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="inline-block mt-2.5 text-[11px] font-bold text-[#E23744] border border-[#E23744] px-2.5 py-1 rounded-md hover:bg-red-50 transition-colors"
                                >
                                  View Workflow →
                                </a>
                              )}
                            </div>

                            <div className="w-24 sm:w-[110px] shrink-0 flex flex-col items-center">
                              <div className="w-24 h-24 sm:w-[110px] sm:h-[110px] rounded-2xl bg-gradient-to-br from-red-50 to-orange-50 border border-gray-100 flex items-center justify-center shadow-sm relative overflow-hidden">
                                {item.logo ? (
                                  <img
                                    src={item.logo}
                                    alt={item.subtitle}
                                    className="w-full h-full object-contain p-2 bg-white"
                                  />
                                ) : (
                                  <>
                                    {key === "experience" && (
                                      <Briefcase
                                        size={30}
                                        className="text-red-200"
                                      />
                                    )}
                                    {key === "education" && (
                                      <GraduationCap
                                        size={30}
                                        className="text-red-200"
                                      />
                                    )}
                                    {key === "skills" && (
                                      <Sparkles
                                        size={30}
                                        className="text-red-200"
                                      />
                                    )}
                                    {key === "interests" && (
                                      <Heart
                                        size={30}
                                        className="text-red-200"
                                      />
                                    )}
                                  </>
                                )}

                                <button
                                  onClick={() => toggleCartItem(item)}
                                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[88%] font-black text-[11px] sm:text-xs py-1 sm:py-1.5 rounded-lg shadow-md active:scale-95 transition-all flex items-center justify-center gap-1 uppercase tracking-wide ${
                                    isAdded
                                      ? "bg-[#E23744] text-white border border-[#E23744]"
                                      : "bg-white text-[#E23744] border border-red-200 hover:bg-red-50"
                                  }`}
                                >
                                  {isAdded ? (
                                    <>
                                      Added{" "}
                                      <Check size={13} className="stroke-[3]" />
                                    </>
                                  ) : (
                                    <>
                                      Add{" "}
                                      <Plus size={13} className="stroke-[3]" />
                                    </>
                                  )}
                                </button>
                              </div>
                              <div className="text-[10px] text-gray-400 mt-1.5 text-center">
                                {isAdded ? "in your plate" : "customizable"}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}

              {trimmedQuery &&
                Object.values(ResumeData).every(
                  (items) =>
                    !items.some(
                      (item) =>
                        item.title.toLowerCase().includes(trimmedQuery) ||
                        item.subtitle.toLowerCase().includes(trimmedQuery) ||
                        (item.desc &&
                          item.desc.toLowerCase().includes(trimmedQuery)) ||
                        (item.tag &&
                          item.tag.toLowerCase().includes(trimmedQuery))
                    )
                ) && (
                  <div className="bg-white py-12 px-4 text-center rounded-2xl border border-gray-100">
                    <p className="text-sm font-bold text-gray-700">
                      No dishes found for "{searchQuery}"
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      Try searching "HubSpot", "n8n", "Procreate", or "MBA"
                    </p>
                  </div>
                )}

              <div className="py-8 lg:pb-2 flex flex-col items-center justify-center text-gray-400">
                <div className="text-2xl font-black italic tracking-tighter opacity-30 mb-2">
                  zomato style
                </div>
                <p className="text-xs">End of Resume</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sticky Floating Cart Bar */}
        {cartItems.length > 0 && !isCartOpen && (
          <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-1.5rem)] sm:w-[calc(100%-2rem)] max-w-[calc(28rem-2rem)] md:max-w-xl z-40 pb-[env(safe-area-inset-bottom)]">
            <button
              onClick={() => setIsCartOpen(true)}
              className="w-full bg-[#E23744] hover:bg-[#d32f3c] rounded-xl shadow-2xl p-3.5 flex items-center justify-between text-white active:scale-[0.99] transition-all text-left"
            >
              <div className="flex flex-col min-w-0 pr-2">
                <span className="font-bold text-sm flex items-center gap-1.5">
                  <ShoppingCart size={15} className="shrink-0" />
                  {cartItems.length}{" "}
                  {cartItems.length === 1 ? "Item Added" : "Items Added"}
                </span>
                <span className="text-xs text-red-100 truncate">
                  Tap to view plate & bonus lore
                </span>
              </div>
              <span className="bg-white text-[#E23744] px-3 sm:px-3.5 py-2 rounded-lg font-bold text-xs shadow-sm flex items-center gap-1 uppercase tracking-wide shrink-0">
                View Cart <ChevronRight size={15} />
              </span>
            </button>
          </div>
        )}

        {/* Cart Drawer */}
        {isCartOpen && (
          <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/60 backdrop-blur-[1px] md:p-4">
            <div className="w-full max-w-md md:max-w-lg bg-gray-50 rounded-t-3xl md:rounded-3xl shadow-2xl max-h-[85dvh] flex flex-col overflow-hidden">
              <div className="bg-white px-5 py-4 border-b border-gray-100 flex items-center justify-between">
                <div>
                  <h3 className="font-black text-gray-900 text-base flex items-center gap-2">
                    <ShoppingCart size={18} className="text-[#E23744]" />
                    Your Candidate Order
                  </h3>
                  <p className="text-xs text-gray-500">
                    Kritika Bhandari • Freshly Plated for Your Team
                  </p>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="p-4 overflow-y-auto space-y-4 flex-1">
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Items in Plate ({cartItems.length})
                    </span>
                    <button
                      onClick={() => {
                        setCartItems([]);
                        setIsCartOpen(false);
                      }}
                      className="text-xs font-semibold text-[#E23744] hover:underline flex items-center gap-1"
                    >
                      <Trash2 size={12} /> Clear all
                    </button>
                  </div>

                  <div className="divide-y divide-dashed divide-gray-200">
                    {cartItems.map((item) => (
                      <div
                        key={`cart-${item.id}`}
                        className="py-3 first:pt-0 last:pb-0 flex items-center justify-between gap-3"
                      >
                        <div className="flex items-start gap-2.5 min-w-0">
                          <div className="mt-1">
                            <VegIcon />
                          </div>
                          <div className="min-w-0">
                            <div className="font-bold text-sm text-gray-800 truncate">
                              {item.title}
                            </div>
                            <div className="text-xs text-gray-500 truncate">
                              {item.subtitle}
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={() => toggleCartItem(item)}
                          className="text-xs font-bold text-[#E23744] border border-red-200 bg-red-50/50 hover:bg-red-100 px-2.5 py-1 rounded-lg shrink-0"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {activePointers.length > 0 && (
                  <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-2.5">
                      Chef's Special Notes & Bonus Lore
                    </span>
                    <ul className="space-y-2 text-xs text-gray-700">
                      {activePointers.map((note, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 leading-relaxed"
                        >
                          <span className="text-[#E23744] font-black mt-0.5">
                            •
                          </span>
                          {note.url ? (
                            <span>
                              {note.before}
                              <a
                                href={note.url}
                                target="_blank"
                                rel="noreferrer"
                                className="text-[#E23744] font-bold underline hover:text-red-700"
                              >
                                {note.linkText}
                              </a>
                              {note.after}
                            </span>
                          ) : (
                            <span>{note.text}</span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 space-y-2 text-xs">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-2">
                    Bill Details
                  </span>
                  <div className="flex justify-between text-gray-600">
                    <span>Selected Highlights</span>
                    <span className="font-semibold text-gray-900">
                      {cartItems.length} items
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Estimated Delivery</span>
                    <span className="font-semibold text-gray-900">
                      March – June 2027
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Good Vibes & Meme Tax</span>
                    <span className="font-bold text-green-600">₹0 (FREE)</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 pb-[calc(1rem+env(safe-area-inset-bottom))] border-t border-gray-200 flex flex-col sm:flex-row gap-2.5">
                <button
                  onClick={handleWhatsAppCheckout}
                  className="flex-1 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold text-xs py-3 rounded-xl shadow-sm flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
                >
                  <MessageCircle size={16} />
                  WhatsApp Order
                </button>
                <button
                  onClick={handleEmailCheckout}
                  className="flex-1 bg-[#E23744] hover:bg-[#d32f3c] text-white font-bold text-xs py-3 rounded-xl shadow-sm flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
                >
                  <Mail size={16} />
                  Email Order
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Share Toast */}
        {copiedToast && (
          <div className="fixed top-16 left-1/2 -translate-x-1/2 z-50 bg-gray-900 text-white text-xs font-semibold px-4 py-2.5 rounded-full shadow-lg whitespace-nowrap">
            Menu link copied! Ready to share with your team 📋
          </div>
        )}

        {/* Back Button Easter Egg Modal */}
        {showBackPopup && (
          <div
            onClick={() => setShowBackPopup(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-[1px] px-4"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl p-6 max-w-xs sm:max-w-sm w-full text-center shadow-2xl border border-gray-100"
            >
              <div className="w-12 h-12 bg-red-50 text-[#E23744] rounded-full flex items-center justify-center mx-auto mb-3 text-2xl">
                🍽️
              </div>
              <h3 className="font-black text-gray-900 text-base mb-1.5">
                No other restaurants open nearby!
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-5">
                You’ve already found the 5.0★ top-rated candidate on the menu.
                Why browse anywhere else?
              </p>
              <button
                onClick={() => setShowBackPopup(false)}
                className="w-full bg-[#E23744] hover:bg-[#d32f3c] text-white font-bold text-xs py-3 rounded-xl shadow-sm active:scale-95 transition-transform uppercase tracking-wide"
              >
                Stay & Order Here
              </button>
            </div>
          </div>
        )}
      </div>

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
