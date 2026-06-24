import { type Locale } from "./siteData";

export const teamSlugs = ["inas-al-tabbaa", "abdulrahman-hares", "mohammad-al-droubi", "lana-al-hassan", "ahmad-al-khatib"] as const;

export type TeamSlug = (typeof teamSlugs)[number];

export type TeamMemberProfile = {
  slug: TeamSlug;
  name: string;
  position: string;
  jobTitle: string;
  summary: string;
  bio: string;
  image: string;
  location: string;
  badges: string[];
  skills: string[];
  responsibilities: string[];
  experience: string[];
  cv: {
    headline: string;
    summary: string;
    highlights: string[];
    languages?: string[];
    contact?: string;
  };
};

export const teamLabels: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    description: string;
    viewProfile: string;
    viewAll: string;
    backToTeam: string;
    position: string;
    jobTitle: string;
    skills: string;
    responsibilities: string;
    experience: string;
    cv: string;
    highlights: string;
    languages: string;
    contact: string;
  }
> = {
  ar: {
    eyebrow: "Team",
    title: "الفريق",
    description: "تعرف على الأشخاص الذين يجمعون بين الهندسة، التنفيذ، التصميم، والبرمجيات لتقديم مشروع واضح من الفكرة حتى الظهور الرقمي.",
    viewProfile: "عرض الملف الشخصي",
    viewAll: "مشاهدة الفريق كامل",
    backToTeam: "العودة إلى الفريق",
    position: "المركز",
    jobTitle: "الوظيفة",
    skills: "المهارات",
    responsibilities: "المهام الأساسية",
    experience: "الخبرة العملية",
    cv: "السيرة المهنية",
    highlights: "أبرز النقاط",
    languages: "اللغات",
    contact: "التواصل",
  },
  en: {
    eyebrow: "Team",
    title: "The Team",
    description: "Meet the people combining engineering, execution, design, and software to deliver clear projects from concept to digital presence.",
    viewProfile: "View Profile",
    viewAll: "View Full Team",
    backToTeam: "Back to Team",
    position: "Position",
    jobTitle: "Job Title",
    skills: "Skills",
    responsibilities: "Core Responsibilities",
    experience: "Experience",
    cv: "Professional CV",
    highlights: "Highlights",
    languages: "Languages",
    contact: "Contact",
  },
};

export const localizedTeamProfiles: Record<Locale, TeamMemberProfile[]> = {
  ar: [
    {
      slug: "inas-al-tabbaa",
      name: "م. إيناس غزوان الطباع",
      position: "مديرة المكتب",
      jobTitle: "مهندسة معمارية ومشرفة تصميم",
      summary: "تقود الرؤية المعمارية وتحوّل احتياج العميل إلى مخططات وتفاصيل قابلة للتنفيذ.",
      bio: "تعمل على ربط الجمال المعماري بواقعية التنفيذ، من دراسة الكتلة والواجهات حتى مراجعة المخططات والتفاصيل قبل تسليمها للورشات.",
      image: "/team/inas.jpg",
      location: "حماة، سوريا",
      badges: ["Architecture", "Design Lead", "Supervision"],
      skills: ["التصميم المعماري", "تصميم الواجهات", "مراجعة المخططات", "اختيار المواد", "الإشراف الهندسي", "ضبط الجودة"],
      responsibilities: ["تحديد اتجاه المشروع التصميمي", "مراجعة المخططات التنفيذية", "تنسيق التصميم مع قابلية التنفيذ", "متابعة جودة التفاصيل قبل التنفيذ"],
      experience: ["قيادة مشاريع تصميم داخلي وخارجي", "متابعة مراحل الإكساء والتنفيذ", "بناء لغة تصميم واضحة للمشاريع السكنية والتجارية"],
      cv: {
        headline: "Architectural Engineer / Design Director",
        summary: "خبرة في تحويل الفكرة المعمارية إلى مشروع قابل للتنفيذ عبر مخططات واضحة، مواد مدروسة، وتنسيق مستمر مع الورشات.",
        highlights: ["إدارة الرؤية التصميمية للمكتب", "إشراف على مشاريع سكنية وتجارية", "بناء تفاصيل قابلة للتطبيق في الموقع"],
        languages: ["العربية", "الإنكليزية المهنية"],
      },
    },
    {
      slug: "abdulrahman-hares",
      name: "عبدالرحمن حارس",
      position: "قائد الفريق التقني في الشركة",
      jobTitle: "مهندس برمجيات / Technical Team Lead",
      summary: "يقود الجانب التقني في الشركة، ويبني أنظمة ومواقع وتطبيقات تساعد المشاريع على الظهور والعمل بشكل احترافي وواضح.",
      bio: "مهندس برمجيات وTechnical Team Lead بخبرة في تحويل الأفكار إلى منتجات رقمية قابلة للاستخدام: مواقع شركات، مواقع شخصية، أنظمة إدارة، تطبيقات موبايل، وصفحات تعريفية للمشاريع. يركز على قيادة الفريق، تنظيم العمل، تدريب المبتدئين، وتقديم حلول رقمية مفهومة للعميل وليست مجرد كود.",
      image: "/team/abdulrahman.jpg",
      location: "حلب، سوريا / عمل عن بعد",
      badges: ["Software Engineer", "Technical Team Lead", "Digital Products"],
      skills: [
        "بناء أنظمة رقمية",
        "بناء مواقع شركات",
        "تطوير تطبيقات موبايل",
        "تحويل الأفكار إلى منتجات",
        "قيادة الفريق التقني",
        "تدريب المبتدئين",
        "مراجعة جودة العمل",
        "تحسين حضور المشاريع رقمياً",
        "التواصل مع العميل وفهم احتياجه"
      ],
      responsibilities: [
        "قيادة الفريق التقني داخل الشركة وتوجيه طريقة العمل",
        "تحويل احتياج العميل إلى موقع أو نظام أو تطبيق واضح",
        "بناء مواقع تعريفية للشركات والمشاريع والأفراد",
        "بناء أنظمة تساعد على إدارة البيانات والعمليات اليومية",
        "تطوير تطبيقات موبايل مناسبة لفكرة المشروع",
        "تدريب المطورين المبتدئين ومساعدتهم على بناء طريقة تفكير عملية",
        "تنظيم المراحل بين التصميم، التطوير، الاختبار، والتسليم",
        "ضمان أن المنتج النهائي سريع، مرتب، وسهل الاستخدام"
      ],
      experience: [
        "بناء مواقع وأنظمة وتطبيقات لمشاريع في سوريا والإمارات والسويد",
        "تجربة في قيادة فرق صغيرة، مراجعة العمل، وتحديد معايير التسليم",
        "بناء تطبيق Quizy التعليمي كتجربة منتج موبايل متكامل للطلاب",
        "تدريب ومساعدة مطورين مبتدئين على فهم بناء الواجهات والمنتجات الرقمية"
      ],
      cv: {
        headline: "Software Engineer / Technical Team Lead",
        summary: "مهندس برمجيات بخبرة 3+ سنوات في بناء المنتجات الرقمية وقيادة فرق Frontend. يركز على بناء مواقع وأنظمة وتطبيقات واضحة، قابلة للتوسع، وسهلة الاستخدام، مع قدرة على تدريب المبتدئين وتحويل الأفكار إلى حلول عملية تخدم أهداف الشركة والعميل.",
        highlights: [
          "قيادة فريق تقني وتوزيع المهام ومراجعة جودة التسليم",
          "بناء مواقع شركات، مواقع شخصية، صفحات هبوط، وأنظمة إدارة",
          "تطوير تطبيقات موبايل ومنتجات تعليمية مثل Quizy",
          "تحويل الهوية البصرية إلى تجربة رقمية احترافية",
          "تدريب مطورين مبتدئين ومساعدتهم على فهم بناء المنتجات خطوة بخطوة",
          "خبرة عمل مع مشاريع وجهات في سوريا، الإمارات، والسويد"
        ],
        languages: ["العربية: لغة أم", "الإنكليزية: متقدم"],
        contact: "hares.abdalrahman@gmail.com",
      },
    },
    {
      slug: "mohammad-al-droubi",
      name: "م. محمد الدروبي",
      position: "إدارة التنفيذ",
      jobTitle: "مهندس موقع وإدارة ورشات",
      summary: "يتابع تسلسل الورشات، جودة البنود، الكميات، والاستلام المرحلي حتى تسليم منظم.",
      bio: "يركز على تحويل المخططات إلى خطوات تنفيذ واضحة، وتنسيق الأعمال بين الحرفيين والموردين لتخفيف الهدر والأخطاء بالموقع.",
      image: "/team/mohammad.jpg",
      location: "حماة، سوريا",
      badges: ["Site Engineer", "Fit-Out", "Quality"],
      skills: ["إدارة الورشات", "قراءة المخططات", "تسلسل الأعمال", "ضبط الكميات", "استلام البنود", "حل مشاكل الموقع"],
      responsibilities: ["تنسيق الحرفيين والموردين", "متابعة مراحل التنفيذ", "توثيق الملاحظات", "ضبط جودة التشطيبات"],
      experience: ["متابعة مشاريع إكساء كاملة", "تنسيق أعمال كهرباء وسباكة وتشطيبات", "استلام مرحلي للبنود الحساسة"],
      cv: {
        headline: "Site Engineer / Execution Lead",
        summary: "خبرة عملية في إدارة أعمال الموقع والإكساء، مع تركيز على الجودة وتسلسل التنفيذ وتقليل الأخطاء أثناء العمل.",
        highlights: ["تنظيم الورشات حسب الأولويات", "متابعة جودة التشطيبات", "ربط المخططات بواقع التنفيذ"],
        languages: ["العربية", "الإنكليزية الأساسية"],
      },
    },
    {
      slug: "lana-al-hassan",
      name: "م. لانا الحسن",
      position: "قسم التصميم الداخلي",
      jobTitle: "مصممة داخلية واختيار مواد",
      summary: "تعمل على تطوير المساحات الداخلية، لوحات المواد، الإضاءة، والتفاصيل العملية للمستخدم.",
      bio: "تهتم بتحويل المساحة الداخلية إلى تجربة مريحة وعملية عبر توزيع واضح، خامات مناسبة، وإنارة تخدم الاستخدام اليومي والشكل النهائي.",
      image: "/team/lana.jpg",
      location: "حماة، سوريا",
      badges: ["Interior", "Materials", "Lighting"],
      skills: ["التصميم الداخلي", "Moodboards", "اختيار المواد", "توزيع الإنارة", "تصميم الأثاث", "تجربة الاستخدام"],
      responsibilities: ["إعداد لوحات المواد والألوان", "تطوير حلول التخزين", "اقتراح إنارة مناسبة", "تنسيق التفاصيل مع التنفيذ"],
      experience: ["تصميم شقق ومساحات سكنية", "اختيار مواد وتشطيبات", "تنسيق أثاث وإنارة حسب هوية المشروع"],
      cv: {
        headline: "Interior Designer / Material Specialist",
        summary: "خبرة في تصميم المساحات الداخلية العملية، واختيار مواد وإنارة تناسب الاستخدام اليومي والهوية البصرية للمكان.",
        highlights: ["Moodboards واضحة وقابلة للتنفيذ", "حلول تخزين ذكية", "تنسيق الألوان والخامات"],
        languages: ["العربية", "الإنكليزية المهنية"],
      },
    },
    {
      slug: "ahmad-al-khatib",
      name: "أحمد الخطيب",
      position: "الهوية والتسويق",
      jobTitle: "منسق هوية بصرية وحضور رقمي",
      summary: "يحوّل المشروع إلى عرض بصري واضح يصلح للواجهات، السوشال، والعرض أمام العملاء.",
      bio: "يربط بين المشروع كمساحة حقيقية وبين حضوره الرقمي، عبر تنظيم الصور، النصوص، الهوية، وطريقة عرض المشروع للعميل أو الجمهور.",
      image: "/team/ahmad.jpg",
      location: "حماة، سوريا",
      badges: ["Branding", "Content", "Digital"],
      skills: ["الهوية البصرية", "تنسيق المحتوى", "كتابة عروض المشاريع", "إدارة السوشال", "إعلانات رقمية", "تحضير بروفايل الشركات"],
      responsibilities: ["تحضير محتوى المشروع", "تنظيم الصور قبل النشر", "كتابة النصوص التسويقية", "توحيد الهوية البصرية"],
      experience: ["عرض مشاريع هندسية بصرياً", "تنظيم حضور رقمي للشركات", "بناء محتوى مناسب للبيع والتواصل"],
      cv: {
        headline: "Brand & Digital Presence Coordinator",
        summary: "خبرة في تحويل المشاريع إلى قصة بصرية وتسويقية واضحة تساعد على تقديم العمل باحتراف وجذب العملاء المناسبين.",
        highlights: ["تنسيق محتوى قبل/بعد", "تحضير بروفايل بصري", "كتابة نصوص مناسبة للمشاريع الهندسية"],
        languages: ["العربية", "الإنكليزية الأساسية"],
      },
    },
  ],
  en: [
    {
      slug: "inas-al-tabbaa",
      name: "Eng. Inas Ghazwan Al-Tabbaa",
      position: "Studio Director",
      jobTitle: "Architectural Engineer & Design Lead",
      summary: "Leads architectural direction and turns client needs into buildable drawings and execution-ready details.",
      bio: "Connects architectural beauty with execution reality, from massing and facades to drawing review and construction details.",
      image: "/team/inas.jpg",
      location: "Hama, Syria",
      badges: ["Architecture", "Design Lead", "Supervision"],
      skills: ["Architectural Design", "Facade Design", "Drawing Review", "Material Selection", "Engineering Supervision", "Quality Control"],
      responsibilities: ["Define project design direction", "Review execution drawings", "Align design with buildability", "Control detail quality before execution"],
      experience: ["Led interior and exterior design projects", "Supervised fit-out and execution phases", "Built a clear design language for residential and commercial work"],
      cv: {
        headline: "Architectural Engineer / Design Director",
        summary: "Experience turning architectural concepts into executable projects through clear drawings, studied materials, and workshop coordination.",
        highlights: ["Leads the studio design vision", "Supervises residential and commercial projects", "Builds details that can be applied on site"],
        languages: ["Arabic", "Professional English"],
      },
    },
    {
      slug: "abdulrahman-hares",
      name: "Abdulrahman Hares",
      position: "Company Technical Team Lead",
      jobTitle: "Software Engineer / Technical Team Lead",
      summary: "Leads the company’s technical side and builds systems, websites, and apps that make projects work and appear professionally online.",
      bio: "Software Engineer and Technical Team Lead with experience turning ideas into usable digital products: company websites, personal portfolios, management systems, mobile apps, and project landing pages. Focused on team leadership, work organization, beginner training, and practical digital solutions that clients can understand and use.",
      image: "/team/abdulrahman.jpg",
      location: "Aleppo, Syria / Remote",
      badges: ["Software Engineer", "Technical Team Lead", "Digital Products"],
      skills: [
        "Digital systems development",
        "Company websites",
        "Personal websites and portfolios",
        "Mobile app development",
        "Clear user experience",
        "Turning ideas into products",
        "Technical team leadership",
        "Task planning and work distribution",
        "Beginner developer training",
        "Delivery quality review",
        "Improving digital project presence",
        "Client communication and requirement analysis"
      ],
      responsibilities: [
        "Lead the company’s technical team and guide the work process",
        "Turn client needs into a clear website, system, or application",
        "Build websites for companies, projects, and personal brands",
        "Build systems that help manage data and daily operations",
        "Develop mobile apps that fit the project idea",
        "Train beginner developers and help them think practically",
        "Organize stages between design, development, testing, and delivery",
        "Ensure the final product is fast, organized, and easy to use"
      ],
      experience: [
        "Technical Team Lead / Frontend Team Lead at Kawarem since 2025",
        "Built websites, systems, and apps for projects in Syria, UAE, and Sweden",
        "Experience leading small teams, reviewing work, and setting delivery standards",
        "Built Quizy as a complete educational mobile product for students",
        "Trained and supported beginner developers in building interfaces and digital products"
      ],
      cv: {
        headline: "Software Engineer / Technical Team Lead",
        summary: "Software Engineer with 3+ years of experience building digital products and leading frontend teams. Focused on creating clear, scalable, and user-friendly websites, systems, and apps, while training beginners and turning ideas into practical solutions for the company and its clients.",
        highlights: [
          "Leads technical teams, distributes tasks, and reviews delivery quality",
          "Builds company websites, personal portfolios, landing pages, and management systems",
          "Develops mobile apps and educational products such as Quizy",
          "Turns visual identity into a professional digital experience",
          "Trains beginner developers and guides them through product building step by step",
          "Experience with projects and teams in Syria, UAE, and Sweden"
        ],
        languages: ["Arabic: Native", "English: Advanced"],
        contact: "hares.abdalrahman@gmail.com",
      },
    },
    {
      slug: "mohammad-al-droubi",
      name: "Eng. Mohammad Al-Droubi",
      position: "Execution Management",
      jobTitle: "Site Engineer & Workshop Manager",
      summary: "Manages workshop sequence, item quality, quantities, and staged handover for organized delivery.",
      bio: "Turns drawings into clear execution steps and coordinates craftsmen and suppliers to reduce waste and site mistakes.",
      image: "/team/mohammad.jpg",
      location: "Hama, Syria",
      badges: ["Site Engineer", "Fit-Out", "Quality"],
      skills: ["Workshop Management", "Drawing Reading", "Work Sequencing", "Quantity Control", "Item Handover", "Site Problem Solving"],
      responsibilities: ["Coordinate craftsmen and suppliers", "Follow execution stages", "Document site notes", "Control finishing quality"],
      experience: ["Managed complete fit-out projects", "Coordinated electrical, plumbing, and finishing work", "Handled staged handover for sensitive items"],
      cv: {
        headline: "Site Engineer / Execution Lead",
        summary: "Practical experience in site and fit-out management, with a focus on quality, sequencing, and reducing errors during execution.",
        highlights: ["Organizes workshops by priority", "Follows finishing quality", "Connects drawings with site reality"],
        languages: ["Arabic", "Basic English"],
      },
    },
    {
      slug: "lana-al-hassan",
      name: "Eng. Lana Al-Hassan",
      position: "Interior Design Department",
      jobTitle: "Interior Designer & Material Specialist",
      summary: "Develops interior spaces, material boards, lighting moods, and practical details for everyday use.",
      bio: "Transforms interiors into comfortable, practical experiences through clear layouts, suitable materials, and lighting that supports daily use and the final look.",
      image: "/team/lana.jpg",
      location: "Hama, Syria",
      badges: ["Interior", "Materials", "Lighting"],
      skills: ["Interior Design", "Moodboards", "Material Selection", "Lighting Layout", "Furniture Design", "User Experience"],
      responsibilities: ["Prepare material and color boards", "Develop storage solutions", "Suggest suitable lighting", "Coordinate details with execution"],
      experience: ["Designed apartments and residential spaces", "Selected materials and finishes", "Coordinated furniture and lighting based on project identity"],
      cv: {
        headline: "Interior Designer / Material Specialist",
        summary: "Experience designing practical interior spaces and choosing materials and lighting that match daily use and place identity.",
        highlights: ["Clear executable moodboards", "Smart storage solutions", "Color and material coordination"],
        languages: ["Arabic", "Professional English"],
      },
    },
    {
      slug: "ahmad-al-khatib",
      name: "Ahmad Al-Khatib",
      position: "Branding & Marketing",
      jobTitle: "Visual Identity & Digital Presence Coordinator",
      summary: "Turns projects into clear visual presentations for facades, social media, and client communication.",
      bio: "Connects the real project with its digital presence by organizing visuals, copy, identity, and presentation style for clients and audiences.",
      image: "/team/ahmad.jpg",
      location: "Hama, Syria",
      badges: ["Branding", "Content", "Digital"],
      skills: ["Visual Identity", "Content Coordination", "Project Copywriting", "Social Media", "Digital Ads", "Company Profiles"],
      responsibilities: ["Prepare project content", "Organize images before publishing", "Write marketing copy", "Unify visual identity"],
      experience: ["Presented engineering projects visually", "Organized digital presence for companies", "Built content suitable for sales and communication"],
      cv: {
        headline: "Brand & Digital Presence Coordinator",
        summary: "Experience turning projects into a clear visual and marketing story that helps present work professionally and attract the right clients.",
        highlights: ["Before/after content coordination", "Visual profile preparation", "Copywriting for engineering projects"],
        languages: ["Arabic", "Basic English"],
      },
    },
  ],
};

export function getTeamMember(locale: Locale, slug: string) {
  return localizedTeamProfiles[locale].find((member) => member.slug === slug);
}

export function getTeamMemberFallback(slug: string) {
  return localizedTeamProfiles.ar.find((member) => member.slug === slug);
}
