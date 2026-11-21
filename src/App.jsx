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
          text: "Built automated HubSpot email workflows & high-converting landing pages 🚀",
        },
        {
          text: "Turned messy marketing ops into smooth, repeatable systems ⚙️",
        },
      ],
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
          text: "HubSpot Marketing Hub Certified — zero cold leads left behind 🔥",
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
        { text: "Always down for murder-mystery book recommendations 🔪📖" },
      ],
    },
  ],
};

const VegIcon = () => (
  <div className="w-4 h-4 border border-green-60
