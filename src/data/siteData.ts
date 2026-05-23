import {
  Briefcase,
  Building2,
  CheckCircle2,
  Compass,
  DraftingCompass,
  HardHat,
  Layers3,
  Megaphone,
  Paintbrush,
  Phone,
  Search,
  Send,
  Sparkles,
  ClipboardCheck,
} from "lucide-react";

export type NavItem = { label: string; href: string };
export type ServiceItem = { title: string; description: string; icon: unknown };
export type ProjectItem = { title: string; category: string; image: string };
export type StatItem = { label: string; value: number; suffix: string };
export type WhyUsItem = { title: string; description: string; icon: unknown };
export type ProcessItem = { title: string; description: string; icon: unknown };
export type FaqItem = { q: string; a: string };

export const siteData = {
  company: {
    nameEn: "Architecture Beats",
    nameAr: "أركيتكتشر بيتس",
    manager: "إيناس غزوان الطباع",
    specialization: "مهندسة معمارية",
    address: "حماة / ساحة العاصي - مقابل قيادة الشرطة",
    email: "Architecture.beats@gmail.com",
    phone: "033 2222428",
    mobile: "0997 418848",
    whatsapp: "963997418848",
  },
  branding: {
    colors: {
      primary: "#A6D632",
      secondary: "#7DA716",
      dark: "#232323",
      gray: "#5A5C5B",
      white: "#FFFFFF",
    },
    font: "Cairo",
  },
  nav: [
    { label: "الرئيسية", href: "/" },
    { label: "من نحن", href: "/about" },
    { label: "الخدمات", href: "/services" },
    { label: "المشاريع", href: "/projects" },
    { label: "تواصل معنا", href: "/contact" },
  ] as NavItem[],
  hero: {
    title: "نحو مساحات معمارية تنبض بالحياة",
    description:
      "Architecture Beats تقدم حلولاً متكاملة في التصميم الداخلي والخارجي، أعمال التنفيذ والإكساء بالأمانة، وأعمال البناء والإشراف الهندسي.",
    primaryCta: "استعرض خدماتنا",
    primaryHref: "/services",
    secondaryCta: "تواصل معنا",
    secondaryHref: "/contact",
  },
  texts: {
    whyUsTitle: "لماذا نحن",
    processTitle: "مراحل العمل",
  },
  services: [
    {
      title: "أعمال تنفيذ وإكساء بالأمانة",
      description: "تنفيذ وإدارة مشاريع الإكساء والبناء بأعلى درجات الدقة والشفافية.",
      icon: HardHat,
    },
    {
      title: "التصميم الداخلي",
      description: "تصميم داخلي عصري يوازن بين الجمال والوظيفة.",
      icon: Layers3,
    },
    {
      title: "التصميم الخارجي",
      description: "واجهات معمارية قوية وهوية بصرية متماسكة للمبنى.",
      icon: Building2,
    },
    {
      title: "ورشات مهنية هندسية",
      description: "إدارة وإشراف احترافي للورشات مع متابعة جودة التنفيذ.",
      icon: Briefcase,
    },
    {
      title: "أعمال بناء وإنشاء",
      description: "حلول إنشاء متكاملة من الفكرة حتى التسليم.",
      icon: DraftingCompass,
    },
    {
      title: "بناء الهوية البصرية",
      description: "تشكيل هوية بصرية معمارية متفرّدة تعكس شخصية المشروع.",
      icon: Paintbrush,
    },
    {
      title: "التسويق الإلكتروني",
      description: "حلول تسويق إلكتروني وهوية بصرية متكاملة للمشاريع والشركات.",
      icon: Megaphone,
    },
  ] as ServiceItem[],
  about: {
    intro:
      "Architecture Beats شركة هندسية إبداعية تقدم حلولاً متكاملة في التصميم الداخلي والخارجي، أعمال التنفيذ والإكساء بالأمانة، إدارة الورشات المهنية الهندسية، أعمال البناء والإنشاء، إضافة إلى بناء الهوية البصرية والتسويق الإلكتروني للمشاريع.",
    timeline: [
      { year: "2018", title: "انطلاقة المكتب", description: "بداية تقديم خدمات التصميم المعماري المتكامل." },
      { year: "2020", title: "توسّع الخدمات", description: "إضافة التنفيذ والإشراف الهندسي ضمن نطاق العمل." },
      { year: "2023", title: "حلول متكاملة", description: "دمج التصميم مع الهوية البصرية والتسويق الإلكتروني." },
      { year: "2026", title: "مرحلة الريادة", description: "ترسيخ نموذج عمل هندسي يجمع الإبداع والدقة." },
    ],
  },
  whyUs: [
    { title: "خبرة هندسية", description: "منهجية هندسية واضحة في كل قرار تصميمي.", icon: Compass },
    { title: "تنفيذ دقيق", description: "متابعة يومية للتفاصيل وضبط الجودة.", icon: ClipboardCheck },
    { title: "تصاميم عصرية", description: "لغة معمارية حديثة متوازنة مع الوظيفة.", icon: Sparkles },
    { title: "متابعة كاملة للمشروع", description: "تواصل مستمر من البداية حتى التسليم.", icon: CheckCircle2 },
    { title: "حلول حسب الميزانية", description: "خيارات ذكية تحقق أفضل قيمة ممكنة.", icon: Search },
    { title: "فريق متخصص", description: "خبرات متكاملة في التصميم والتنفيذ والإدارة.", icon: Send },
  ] as WhyUsItem[],
  process: [
    { title: "الاستشارة", description: "فهم المتطلبات وتحديد الأولويات.", icon: Phone },
    { title: "دراسة المشروع", description: "تحليل الموقع والوظيفة والميزانية.", icon: Search },
    { title: "التصميم", description: "تقديم رؤية معمارية واضحة وقابلة للتنفيذ.", icon: DraftingCompass },
    { title: "التنفيذ", description: "إدارة وتنفيذ احترافي مع ضبط جودة مستمر.", icon: HardHat },
    { title: "التسليم", description: "تسليم نهائي مطابق للاتفاق والمعايير.", icon: CheckCircle2 },
  ] as ProcessItem[],
  projects: [
    { title: "فيلا مودرن", category: "تصميم خارجي", image: "/projects/project-1.svg" },
    { title: "تصميم داخلي لشقة", category: "تصميم داخلي", image: "/projects/project-2.svg" },
    { title: "واجهة تجارية", category: "هوية واجهات", image: "/projects/project-3.svg" },
    { title: "مشروع إكساء فاخر", category: "تنفيذ وإكساء", image: "/projects/project-4.svg" },
    { title: "مكتب هندسي", category: "تصميم مكاتب", image: "/projects/project-5.svg" },
    { title: "ترميم مبنى", category: "ترميم وإعادة تأهيل", image: "/projects/project-6.svg" },
  ] as ProjectItem[],
  stats: [
    { label: "مشروع", value: 50, suffix: "+" },
    { label: "سنوات خبرة", value: 8, suffix: "+" },
    { label: "عميل", value: 30, suffix: "+" },
    { label: "متابعة هندسية", value: 100, suffix: "%" },
  ] as StatItem[],
  cta: {
    title: "هل لديك مشروع قادم؟",
    button: "ابدأ مشروعك الآن",
  },
  contactForm: {
    title: "دعنا نناقش مشروعك",
    fields: {
      name: "الاسم",
      phone: "رقم الهاتف",
      service: "نوع الخدمة",
      message: "الرسالة",
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
  ] as FaqItem[],
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
};
