import {
  Award,
  Briefcase,
  Building2,
  Calendar,
  CheckCircle2,
  ClipboardCheck,
  Compass,
  DraftingCompass,
  GraduationCap,
  HardHat,
  Layers3,
  MapPin,
  Megaphone,
  Paintbrush,
  Phone,
  Ruler,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  Users,
  Wrench,
} from "lucide-react";

export type Locale = "ar" | "en";
export type NavItem = { label: string; href: string };
export type ServiceItem = { title: string; description: string; icon: unknown };
export type ProjectItem = {
  title: string;
  category: string;
  image: string;
  description: string;
  location: string;
  year: string;
  area: string;
  status: string;
  scope: string[];
  highlights: string[];
};
export type StatItem = { label: string; value: number; suffix: string; description: string };
export type WhyUsItem = { title: string; description: string; icon: unknown };
export type ProcessItem = { title: string; description: string; icon: unknown };
export type MemberItem = { name: string; role: string; summary: string; focus: string };
export type FaqItem = { q: string; a: string };

export type SiteContent = {
  company: {
    nameEn: string;
    nameAr: string;
    manager: string;
    specialization: string;
    address: string;
    email: string;
    phone: string;
    mobile: string;
    whatsapp: string;
  };
  branding: {
    colors: {
      primary: string;
      secondary: string;
      dark: string;
      gray: string;
      white: string;
    };
    font: string;
  };
  nav: NavItem[];
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: string;
    primaryHref: string;
    secondaryCta: string;
    secondaryHref: string;
  };
  texts: {
    whyUsTitle: string;
    processTitle: string;
    projectsTitle: string;
    projectsDescription: string;
    statsTitle: string;
    statsDescription: string;
    teamTitle: string;
    teamDescription: string;
    projectLabels: {
      location: string;
      area: string;
      year: string;
      status: string;
      scope: string;
      highlights: string;
    };
  };
  services: ServiceItem[];
  about: {
    intro: string;
    timeline: { year: string; title: string; description: string }[];
  };
  whyUs: WhyUsItem[];
  process: ProcessItem[];
  projects: ProjectItem[];
  stats: StatItem[];
  team: MemberItem[];
  cta: { title: string; description: string; button: string };
  contactForm: {
    title: string;
    fields: { name: string; phone: string; service: string; message: string };
    submit: string;
  };
  social: { label: string; href: string }[];
  faq: FaqItem[];
  seo: {
    siteUrl: string;
    defaultTitle: string;
    titleTemplate: string;
    description: string;
    keywords: string[];
  };
  footer: {
    quickLinksTitle: string;
    servicesTitle: string;
    contactTitle: string;
    rights: string;
  };
};

const sharedCompany = {
  nameEn: "Architecture Beats",
  nameAr: "أركيتكتشر بيتس",
  manager: "إيناس غزوان الطباع",
  specialization: "مهندسة معمارية",
  address: "حماة / ساحة العاصي - مقابل قيادة الشرطة",
  email: "Architecture.beats@gmail.com",
  phone: "033 2222428",
  mobile: "0997 418848",
  whatsapp: "963997418848",
};

const sharedBranding = {
  colors: {
    primary: "#A6D632",
    secondary: "#7DA716",
    dark: "#232323",
    gray: "#5A5C5B",
    white: "#FFFFFF",
  },
  font: "Cairo",
};

export const localizedSiteData: Record<Locale, SiteContent> = {
  ar: {
    company: sharedCompany,
    branding: sharedBranding,
    nav: [
      { label: "الرئيسية", href: "/" },
      { label: "من نحن", href: "/about" },
      { label: "الخدمات", href: "/services" },
      { label: "المشاريع", href: "/projects" },
      { label: "تواصل معنا", href: "/contact" },
    ],
    hero: {
      eyebrow: "Architecture • Construction • Fit-Out",
      title: "نحو مشاريع بناء حادّة التفاصيل وواضحة التنفيذ",
      description:
        "Architecture Beats تقدم حلولاً متكاملة في التصميم الداخلي والخارجي، أعمال التنفيذ والإكساء بالأمانة، إدارة الورشات، والإشراف الهندسي من الفكرة حتى التسليم.",
      primaryCta: "استعرض المشاريع",
      primaryHref: "/projects",
      secondaryCta: "ابدأ مشروعك",
      secondaryHref: "/contact",
    },
    texts: {
      whyUsTitle: "لماذا نحن",
      processTitle: "مراحل العمل",
      projectsTitle: "مشاريع مختارة",
      projectsDescription: "عرض المشاريع صار أقرب لطريقة شركات البناء: نوع المشروع، الموقع، المساحة، نطاق العمل، وحالة التنفيذ بشكل واضح.",
      statsTitle: "أرقام توضّح حجم العمل",
      statsDescription: "إحصائيات مختصرة تعطي الزائر ثقة أسرع عن الخبرة، التدريب، الإشراف، وحجم المشاريع المنفذة.",
      teamTitle: "الأعضاء والفِرق",
      teamDescription: "قسم مختصر في الصفحة الرئيسية يوضح من يقف خلف التصميم والتنفيذ والمتابعة.",
      projectLabels: {
        location: "الموقع",
        area: "المساحة",
        year: "السنة",
        status: "الحالة",
        scope: "نطاق العمل",
        highlights: "تفاصيل مهمة",
      },
    },
    services: [
      {
        title: "أعمال تنفيذ وإكساء بالأمانة",
        description: "تنفيذ وإدارة مشاريع الإكساء والبناء بشفافية كاملة في المواد، الكلفة، والجودة.",
        icon: HardHat,
      },
      {
        title: "التصميم الداخلي",
        description: "تصميم مساحات داخلية عملية وفاخرة تربط الجمال بالراحة والاستخدام اليومي.",
        icon: Layers3,
      },
      {
        title: "التصميم الخارجي",
        description: "واجهات معمارية قوية بهوية بصرية واضحة وتفاصيل قابلة للتنفيذ.",
        icon: Building2,
      },
      {
        title: "ورشات مهنية هندسية",
        description: "تنظيم الورشات ومتابعة الحرفيين والمراحل ضمن خطة تنفيذ واضحة.",
        icon: Wrench,
      },
      {
        title: "أعمال بناء وإنشاء",
        description: "حلول إنشاء متكاملة تشمل الدراسة، التنسيق، التنفيذ، والاستلام المرحلي.",
        icon: DraftingCompass,
      },
      {
        title: "بناء الهوية البصرية",
        description: "تشكيل هوية معمارية وتسويقية متماسكة للمشاريع السكنية والتجارية.",
        icon: Paintbrush,
      },
      {
        title: "التسويق الإلكتروني",
        description: "تقديم المشروع بصرياً ورقمياً بطريقة تساعده على الوصول والبيع بثقة.",
        icon: Megaphone,
      },
    ],
    about: {
      intro:
        "Architecture Beats شركة هندسية تجمع بين التصميم المعماري، إدارة التنفيذ، الإكساء، والهوية البصرية. نعامل كل مشروع كمنظومة كاملة: دراسة، تفاصيل، مواد، ورشات، تسليم، ثم حضور بصري يليق بالمكان.",
      timeline: [
        { year: "2018", title: "انطلاقة المكتب", description: "بداية تقديم خدمات التصميم المعماري والداخلي بمنهجية واضحة." },
        { year: "2020", title: "توسّع التنفيذ", description: "إضافة الإشراف الهندسي وأعمال الإكساء ضمن نطاق العمل." },
        { year: "2023", title: "تكامل الخدمات", description: "دمج التصميم، التنفيذ، الهوية البصرية، والتسويق الإلكتروني." },
        { year: "2026", title: "مرحلة المشاريع المتكاملة", description: "تثبيت أسلوب عمل حاد، احترافي، وقابل للقياس من البداية حتى التسليم." },
      ],
    },
    whyUs: [
      { title: "دراسة قبل التنفيذ", description: "كل قرار يمر على الوظيفة، الكلفة، الوقت، وقابلية التنفيذ.", icon: Compass },
      { title: "ضبط جودة واضح", description: "متابعة تفصيلية للمواد، المقاسات، التشطيبات، وتسلسل الورشات.", icon: ClipboardCheck },
      { title: "لغة تصميم حادة", description: "هوية بصرية معمارية قوية بدون ازدحام أو تفاصيل عشوائية.", icon: Sparkles },
      { title: "إدارة مشروع كاملة", description: "تنسيق بين التصميم، الورشات، الموردين، والعميل حتى التسليم.", icon: ShieldCheck },
      { title: "حلول حسب الميزانية", description: "اقتراح بدائل ذكية تحافظ على القيمة والشكل بدون هدر.", icon: Search },
      { title: "تدريب وتأهيل", description: "خبرة في تأهيل متدربين وفِرق على منهجيات التصميم والتنفيذ.", icon: GraduationCap },
    ],
    process: [
      { title: "استشارة", description: "فهم الفكرة، احتياج العميل، حدود الميزانية، والهدف النهائي.", icon: Phone },
      { title: "دراسة", description: "تحليل الموقع، المساحات، المخاطر، وتسلسل التنفيذ.", icon: Search },
      { title: "تصميم", description: "مخططات واضحة، تفاصيل قابلة للتنفيذ، ومود بورد للمواد.", icon: DraftingCompass },
      { title: "تنفيذ", description: "تنسيق الورشات ومتابعة الجودة والكلفة والزمن.", icon: HardHat },
      { title: "تسليم", description: "مراجعة نهائية وتوثيق الملاحظات والتسليم المنظم.", icon: CheckCircle2 },
    ],
    projects: [
      {
        title: "فيلا سكنية مودرن",
        category: "تصميم خارجي وتنفيذ",
        image: "/projects/project-1.svg",
        description: "مشروع فيلا يعتمد على كتل حادة، فتحات محسوبة، وحلول إنارة خارجية تعطي حضوراً واضحاً ليلاً ونهاراً.",
        location: "حماة",
        year: "2026",
        area: "420 م²",
        status: "قيد التنفيذ",
        scope: ["تصميم خارجي", "مخططات تنفيذية", "إشراف هندسي"],
        highlights: ["واجهة حجر وبورسلان", "توزيع إنارة معمارية", "متابعة مراحل الإكساء"],
      },
      {
        title: "شقة عائلية معاصرة",
        category: "تصميم داخلي وإكساء",
        image: "/projects/project-2.svg",
        description: "إعادة تنظيم المساحات الداخلية لتكون أكثر عملية مع لوحة ألوان هادئة وتفاصيل تخزين مخفية.",
        location: "حماة",
        year: "2025",
        area: "165 م²",
        status: "تم التسليم",
        scope: ["تصميم داخلي", "اختيار مواد", "تنفيذ إكساء"],
        highlights: ["غرفة معيشة مفتوحة", "مطابخ وخزائن مخصصة", "حلول إضاءة غير مباشرة"],
      },
      {
        title: "واجهة تجارية وهوية مكان",
        category: "واجهات وهوية بصرية",
        image: "/projects/project-3.svg",
        description: "تحويل واجهة تجارية إلى نقطة جذب واضحة تجمع بين العلامة، الخامة، الإضاءة، وحركة الزبائن.",
        location: "حماة - مركز المدينة",
        year: "2025",
        area: "95 م²",
        status: "تم التسليم",
        scope: ["تصميم واجهة", "هوية بصرية", "لوحات وإضاءة"],
        highlights: ["قراءة واضحة من الشارع", "مواد مقاومة للعوامل الجوية", "تنسيق مع أعمال الديكور"],
      },
      {
        title: "مشروع إكساء فاخر",
        category: "تنفيذ وإدارة ورشات",
        image: "/projects/project-4.svg",
        description: "إدارة تنفيذ تفصيلية لمشروع إكساء كامل مع ضبط المواد، الورشات، وجدول التسليم.",
        location: "ريف حماة",
        year: "2024",
        area: "310 م²",
        status: "تم التسليم",
        scope: ["إدارة تنفيذ", "إشراف ورشات", "ضبط جودة"],
        highlights: ["جدولة أعمال الكهرباء والسباكة", "متابعة توريد المواد", "استلام مرحلي لكل بند"],
      },
      {
        title: "مكتب هندسي إداري",
        category: "تصميم مكاتب",
        image: "/projects/project-5.svg",
        description: "تصميم مساحة عمل تعكس الاحتراف والوضوح مع توزيع مرن لمناطق الاجتماعات والعمل الفردي.",
        location: "حماة",
        year: "2024",
        area: "120 م²",
        status: "تصميم مكتمل",
        scope: ["تخطيط داخلي", "تصميم أثاث", "هوية مكان"],
        highlights: ["استقبال واضح", "غرفة اجتماعات عملية", "تفاصيل معدنية وخشبية"],
      },
      {
        title: "إعادة تأهيل مبنى قائم",
        category: "ترميم وتطوير",
        image: "/projects/project-6.svg",
        description: "تحسين مبنى قائم عبر معالجة الواجهة، تنظيم المداخل، وتحديث تفاصيل الإكساء دون فقدان شخصية المكان.",
        location: "حماة",
        year: "2023",
        area: "260 م²",
        status: "تم التسليم",
        scope: ["ترميم", "تطوير واجهة", "إشراف هندسي"],
        highlights: ["معالجة التشققات", "تحديث المداخل", "رفع جودة التشطيبات"],
      },
    ],
    stats: [
      { label: "مشروع تم تسليمه", value: 50, suffix: "+", description: "بين تصميم وتنفيذ وإكساء وإشراف" },
      { label: "متدرب تم تأهيله", value: 120, suffix: "+", description: "ضمن ورشات ومسارات تدريب هندسية" },
      { label: "سنوات خبرة", value: 8, suffix: "+", description: "في التصميم المعماري والداخلي والتنفيذ" },
      { label: "م² أعمال تصميم وإكساء", value: 12000, suffix: "+", description: "مساحات سكنية وتجارية ومكتبية" },
      { label: "ورشة تم الإشراف عليها", value: 35, suffix: "+", description: "تنسيق ومتابعة جودة وتسليم" },
      { label: "متابعة هندسية", value: 100, suffix: "%", description: "من الدراسة الأولى حتى التسليم النهائي" },
    ],
    team: [
      { name: "إيناس غزوان الطباع", role: "الإدارة والتصميم المعماري", summary: "قيادة الرؤية التصميمية وتحويل احتياج العميل إلى مخططات قابلة للتنفيذ.", focus: "تصميم • إشراف • جودة" },
      { name: "فريق التصميم", role: "تصميم داخلي وخارجي", summary: "تطوير الواجهات، المساقط، المود بورد، وتفاصيل المواد والإنارة.", focus: "واجهات • داخلي • مواد" },
      { name: "فريق التنفيذ", role: "إدارة ورشات وإكساء", summary: "متابعة الحرفيين، تسلسل الأعمال، ضبط الكميات، واستلام البنود.", focus: "ورشات • كلفة • تسليم" },
      { name: "فريق الهوية والتسويق", role: "هوية بصرية وحضور رقمي", summary: "تحويل المشروع إلى قصة بصرية واضحة للمبيعات والتواصل الرقمي.", focus: "Branding • Content • Ads" },
    ],
    cta: {
      title: "عندك مشروع بناء أو إكساء قادم؟",
      description: "خلينا نرتب الفكرة، الميزانية، التنفيذ، والتسليم ضمن مسار واضح من أول مكالمة.",
      button: "ابدأ الاستشارة الآن",
    },
    contactForm: {
      title: "دعنا نناقش مشروعك",
      fields: {
        name: "الاسم",
        phone: "رقم الهاتف",
        service: "نوع الخدمة",
        message: "اكتب تفاصيل المشروع والمساحة والموقع إن أمكن",
      },
      submit: "إرسال الطلب",
    },
    social: [
      { label: "واتساب", href: "https://wa.me/963997418848" },
      { label: "البريد الإلكتروني", href: "mailto:Architecture.beats@gmail.com" },
      { label: "اتصال", href: "tel:0332222428" },
    ],
    faq: [
      {
        q: "هل تقدّمون الإشراف الكامل على المشروع؟",
        a: "نعم، نوفّر متابعة هندسية كاملة من الدراسة حتى التسليم النهائي.",
      },
      {
        q: "هل يمكن تنفيذ المشروع حسب ميزانية محددة؟",
        a: "نقدّم بدائل مدروسة لتحقيق أفضل نتيجة ضمن الميزانية المتاحة.",
      },
    ],
    seo: {
      siteUrl: "https://architecture-beats.vercel.app",
      defaultTitle: "Architecture Beats | أركيتكتشر بيتس",
      titleTemplate: "%s | Architecture Beats",
      description:
        "شركة هندسية متكاملة في حماة تقدم التصميم الداخلي والخارجي، التنفيذ والإكساء، البناء والإنشاء، والهوية البصرية والتسويق الإلكتروني.",
      keywords: [
        "Architecture Beats",
        "أركيتكتشر بيتس",
        "تصميم داخلي",
        "تصميم خارجي",
        "إكساء",
        "مكتب هندسي",
        "حماة",
      ],
    },
    footer: {
      quickLinksTitle: "روابط سريعة",
      servicesTitle: "الخدمات",
      contactTitle: "بيانات التواصل",
      rights: "جميع الحقوق محفوظة",
    },
  },
  en: {
    company: {
      ...sharedCompany,
      specialization: "Architectural Engineer",
      address: "Hama / Al-Assi Square - Opposite Police Command",
    },
    branding: sharedBranding,
    nav: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Projects", href: "/projects" },
      { label: "Contact", href: "/contact" },
    ],
    hero: {
      eyebrow: "Architecture • Construction • Fit-Out",
      title: "Sharp construction projects with clear execution details",
      description:
        "Architecture Beats delivers integrated architectural design, interior and exterior design, fit-out execution, workshop management, and engineering supervision from concept to handover.",
      primaryCta: "View Projects",
      primaryHref: "/projects",
      secondaryCta: "Start Your Project",
      secondaryHref: "/contact",
    },
    texts: {
      whyUsTitle: "Why Us",
      processTitle: "Work Process",
      projectsTitle: "Selected Projects",
      projectsDescription: "Projects are presented like a professional construction portfolio: type, location, area, scope, delivery status, and practical project details.",
      statsTitle: "Numbers That Build Trust",
      statsDescription: "A focused statistics section covering delivered projects, trained people, supervised workshops, and execution scale.",
      teamTitle: "Members & Teams",
      teamDescription: "A homepage section that shows the design, execution, supervision, and branding teams behind every project.",
      projectLabels: {
        location: "Location",
        area: "Area",
        year: "Year",
        status: "Status",
        scope: "Scope",
        highlights: "Key Details",
      },
    },
    services: [
      {
        title: "Turnkey Fit-Out Execution",
        description: "Transparent construction and fit-out management with clear control over materials, budget, and quality.",
        icon: HardHat,
      },
      {
        title: "Interior Design",
        description: "Functional and refined interiors that balance visual quality with daily usability.",
        icon: Layers3,
      },
      {
        title: "Exterior Design",
        description: "Strong architectural facades with a clear identity and execution-ready details.",
        icon: Building2,
      },
      {
        title: "Engineering Workshops",
        description: "Professional workshop coordination and craft supervision across project phases.",
        icon: Wrench,
      },
      {
        title: "Construction Works",
        description: "Integrated construction solutions covering study, coordination, execution, and staged handover.",
        icon: DraftingCompass,
      },
      {
        title: "Visual Identity",
        description: "Architectural and brand identity systems for residential and commercial projects.",
        icon: Paintbrush,
      },
      {
        title: "Digital Marketing",
        description: "Visual and digital presentation that helps projects reach, sell, and communicate with confidence.",
        icon: Megaphone,
      },
    ],
    about: {
      intro:
        "Architecture Beats combines architectural design, execution management, fit-out works, and visual identity. Every project is treated as a complete system: study, details, materials, teams, handover, and the visual presence it deserves.",
      timeline: [
        { year: "2018", title: "Studio Launch", description: "Started delivering architectural and interior design with a clear working method." },
        { year: "2020", title: "Execution Expansion", description: "Added engineering supervision and fit-out execution to the service scope." },
        { year: "2023", title: "Integrated Services", description: "Merged design, execution, visual identity, and digital marketing into one workflow." },
        { year: "2026", title: "Complete Project Model", description: "A sharper and measurable delivery model from first brief to final handover." },
      ],
    },
    whyUs: [
      { title: "Study Before Execution", description: "Every decision is checked against function, cost, time, and buildability.", icon: Compass },
      { title: "Clear Quality Control", description: "Detailed follow-up for materials, measurements, finishes, and workshop sequence.", icon: ClipboardCheck },
      { title: "Sharp Design Language", description: "A strong architectural identity without visual noise or random detailing.", icon: Sparkles },
      { title: "Complete Management", description: "Coordination between design, teams, suppliers, and the client until handover.", icon: ShieldCheck },
      { title: "Budget-Based Solutions", description: "Smart alternatives that preserve value and visual quality without waste.", icon: Search },
      { title: "Training & Qualification", description: "Experience in qualifying trainees and teams in design and execution workflows.", icon: GraduationCap },
    ],
    process: [
      { title: "Consult", description: "Understand the idea, client needs, budget limits, and final objective.", icon: Phone },
      { title: "Study", description: "Analyze the site, spaces, risks, and execution sequence.", icon: Search },
      { title: "Design", description: "Clear drawings, buildable details, and a material moodboard.", icon: DraftingCompass },
      { title: "Execute", description: "Coordinate teams while controlling quality, cost, and time.", icon: HardHat },
      { title: "Handover", description: "Final review, punch-list documentation, and organized delivery.", icon: CheckCircle2 },
    ],
    projects: [
      {
        title: "Modern Residential Villa",
        category: "Exterior Design & Execution",
        image: "/projects/project-1.svg",
        description: "A villa project built around sharp volumes, calculated openings, and architectural lighting for a strong day-and-night presence.",
        location: "Hama",
        year: "2026",
        area: "420 m²",
        status: "In Progress",
        scope: ["Exterior Design", "Execution Drawings", "Engineering Supervision"],
        highlights: ["Stone and porcelain facade", "Architectural lighting layout", "Fit-out phase follow-up"],
      },
      {
        title: "Contemporary Family Apartment",
        category: "Interior Design & Fit-Out",
        image: "/projects/project-2.svg",
        description: "A redesigned apartment with more practical circulation, calm colors, and hidden storage details.",
        location: "Hama",
        year: "2025",
        area: "165 m²",
        status: "Delivered",
        scope: ["Interior Design", "Material Selection", "Fit-Out Execution"],
        highlights: ["Open living area", "Custom kitchen and cabinetry", "Indirect lighting solutions"],
      },
      {
        title: "Commercial Facade Identity",
        category: "Facade & Visual Identity",
        image: "/projects/project-3.svg",
        description: "A commercial frontage redesigned as a clear attraction point connecting brand, material, lighting, and customer flow.",
        location: "Hama - City Center",
        year: "2025",
        area: "95 m²",
        status: "Delivered",
        scope: ["Facade Design", "Visual Identity", "Signage & Lighting"],
        highlights: ["Street-readable identity", "Weather-resistant materials", "Interior decor coordination"],
      },
      {
        title: "Luxury Fit-Out Project",
        category: "Execution & Workshop Management",
        image: "/projects/project-4.svg",
        description: "A complete fit-out execution project with detailed control over materials, teams, and delivery schedule.",
        location: "Hama Countryside",
        year: "2024",
        area: "310 m²",
        status: "Delivered",
        scope: ["Execution Management", "Workshop Supervision", "Quality Control"],
        highlights: ["Electrical and plumbing sequencing", "Material supply follow-up", "Staged item handover"],
      },
      {
        title: "Administrative Engineering Office",
        category: "Office Design",
        image: "/projects/project-5.svg",
        description: "A workspace designed to express professionalism with flexible areas for meetings, focused work, and reception.",
        location: "Hama",
        year: "2024",
        area: "120 m²",
        status: "Design Completed",
        scope: ["Interior Planning", "Furniture Design", "Place Identity"],
        highlights: ["Clear reception zone", "Practical meeting room", "Metal and wood details"],
      },
      {
        title: "Existing Building Rehabilitation",
        category: "Renovation & Upgrade",
        image: "/projects/project-6.svg",
        description: "An upgrade for an existing building through facade treatment, entrance organization, and improved finishing details.",
        location: "Hama",
        year: "2023",
        area: "260 m²",
        status: "Delivered",
        scope: ["Renovation", "Facade Upgrade", "Engineering Supervision"],
        highlights: ["Crack treatment", "Entrance modernization", "Higher finishing quality"],
      },
    ],
    stats: [
      { label: "Delivered Projects", value: 50, suffix: "+", description: "Across design, execution, fit-out, and supervision" },
      { label: "Qualified Trainees", value: 120, suffix: "+", description: "Through engineering workshops and training paths" },
      { label: "Years of Experience", value: 8, suffix: "+", description: "In architecture, interiors, and execution" },
      { label: "m² Designed & Finished", value: 12000, suffix: "+", description: "Residential, commercial, and office spaces" },
      { label: "Supervised Workshops", value: 35, suffix: "+", description: "Coordination, quality control, and handover" },
      { label: "Engineering Follow-Up", value: 100, suffix: "%", description: "From first study to final delivery" },
    ],
    team: [
      { name: "Inas Ghazwan Al-Tabbaa", role: "Management & Architectural Design", summary: "Leads the design vision and turns client needs into buildable project documents.", focus: "Design • Supervision • Quality" },
      { name: "Design Team", role: "Interior & Exterior Design", summary: "Develops facades, layouts, moodboards, materials, and lighting details.", focus: "Facades • Interiors • Materials" },
      { name: "Execution Team", role: "Workshops & Fit-Out Management", summary: "Coordinates craftsmen, work sequence, quantities, and item handover.", focus: "Teams • Cost • Delivery" },
      { name: "Branding & Marketing Team", role: "Visual Identity & Digital Presence", summary: "Turns every project into a clear visual story for sales and communication.", focus: "Branding • Content • Ads" },
    ],
    cta: {
      title: "Do you have a construction or fit-out project coming up?",
      description: "Let us structure the idea, budget, execution, and handover through a clear path from the first call.",
      button: "Start Consultation",
    },
    contactForm: {
      title: "Let’s Discuss Your Project",
      fields: {
        name: "Name",
        phone: "Phone Number",
        service: "Service Type",
        message: "Write project details, area, and location if possible",
      },
      submit: "Send Request",
    },
    social: [
      { label: "WhatsApp", href: "https://wa.me/963997418848" },
      { label: "Email", href: "mailto:Architecture.beats@gmail.com" },
      { label: "Call", href: "tel:0332222428" },
    ],
    faq: [
      {
        q: "Do you provide full project supervision?",
        a: "Yes, we provide complete engineering follow-up from study to final handover.",
      },
      {
        q: "Can the project be executed within a fixed budget?",
        a: "We provide studied alternatives to achieve the best result within the available budget.",
      },
    ],
    seo: {
      siteUrl: "https://architecture-beats.vercel.app",
      defaultTitle: "Architecture Beats | Architecture & Construction Studio",
      titleTemplate: "%s | Architecture Beats",
      description:
        "An integrated engineering company in Hama offering interior and exterior design, fit-out execution, construction works, visual identity, and digital marketing.",
      keywords: [
        "Architecture Beats",
        "Interior Design",
        "Exterior Design",
        "Fit-Out",
        "Construction",
        "Engineering Office",
        "Hama",
      ],
    },
    footer: {
      quickLinksTitle: "Quick Links",
      servicesTitle: "Services",
      contactTitle: "Contact Details",
      rights: "All rights reserved",
    },
  },
};

export const siteData = localizedSiteData.ar;

export function getSiteData(locale: Locale) {
  return localizedSiteData[locale];
}
