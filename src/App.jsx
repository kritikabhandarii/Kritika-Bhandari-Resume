import React, { useState, useEffect } from "react";
import {
  MapPin,
  Search,
  Star,
  Phone,
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
      veg: true,
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
    },
  ],
};

const DefaultPointers = [
  {
    text: "Elite 12 AM McDonald's on Zomato ordering instincts 🍔",
  },
  {
    text: "Comes with 10M-view Insta reel energy (no extra charge) ✨",
  },
];

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  // Gather any custom bonusNotes from added items, plus default fun pointers
  const itemNotes = cartItems.flatMap((item) => item.bonusNotes || []);
  const activePointers = [...itemNotes, ...DefaultPointers];

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
    window.location.href = `mailto:kritikabhandari03@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleWhatsAppCheckout = () => {
    const text = encodeURIComponent(buildOrderMessage());
    window.open(`https://wa.me/917900020593?text=${text}`, "_blank");
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
            src="/images/kritika.png"
            alt="Kritika Bhandari"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/20" />
        </div>

        {/* Hero / Restaurant Info Section */}
        <div className="relative z-10 -mt-6 bg-white rounded-t-3xl px-4 pt-6 pb-6 shadow-sm">
          {/* Search Bar */}
          <div className="mb-5">
            <div className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 flex items-center gap-3">
              <Search size={18} className="text-[#E23744]" />
              <input
                type="text"
                placeholder="Search 'n8n workflows' or 'CRM'..."
                className="w-full bg-transparent
