import { type Locale, type ProjectItem } from "./siteData";

export const projectSlugs = [
  "modern-residential-villa",
  "contemporary-family-apartment",
  "commercial-facade-identity",
  "luxury-fit-out-project",
  "administrative-engineering-office",
  "existing-building-rehabilitation",
] as const;

export type ProjectSlug = (typeof projectSlugs)[number];

type ProjectGalleryImage = string;

type ProjectDetail = {
  overview: string;
  clientType: string;
  duration: string;
  siteCondition: string;
  deliverables: string[];
  challenges: string[];
  solutions: string[];
  results: string[];
  gallery: ProjectGalleryImage[];
  mapTitle: string;
  mapEmbedUrl: string;
  mapOpenUrl: string;
};

const mapFor = (query: string, zoom = 13) => ({
  mapTitle: query,
  mapEmbedUrl: `https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=${zoom}&output=embed`,
  mapOpenUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`,
});

const galleries: Record<ProjectSlug, ProjectGalleryImage[]> = {
  "modern-residential-villa": ["/projects/project-1.jpg", "/projects/project-2.jpg", "/projects/project-3.jpg"],
  "contemporary-family-apartment": ["/projects/project-2.jpg", "/projects/project-5.jpg", "/projects/project-4.jpg"],
  "commercial-facade-identity": ["/projects/project-3.jpg", "/projects/project-1.jpg", "/projects/project-6.jpg"],
  "luxury-fit-out-project": ["/projects/project-4.jpg", "/projects/project-2.jpg", "/projects/project-5.jpg"],
  "administrative-engineering-office": ["/projects/project-5.jpg", "/projects/project-3.jpg", "/projects/project-1.jpg"],
  "existing-building-rehabilitation": ["/projects/project-6.jpg", "/projects/project-4.jpg", "/projects/project-3.jpg"],
};

export const projectDetailLabels: Record<
  Locale,
  {
    back: string;
    overview: string;
    quickFacts: string;
    clientType: string;
    duration: string;
    siteCondition: string;
    deliverables: string;
    challenges: string;
    solutions: string;
    results: string;
    gallery: string;
    map: string;
    openMap: string;
    discussProject: string;
    detailsCta: string;
  }
> = {
  ar: {
    back: "العودة إلى المشاريع",
    overview: "نظرة عامة",
    quickFacts: "معلومات المشروع",
    clientType: "نوع العميل",
    duration: "مدة العمل",
    siteCondition: "حالة الموقع",
    deliverables: "المخرجات",
    challenges: "التحديات",
    solutions: "طريقة المعالجة",
    results: "النتائج",
    gallery: "معرض المشروع",
    map: "موقع المشروع على الخريطة",
    openMap: "فتح في Google Maps",
    discussProject: "ناقش مشروع مشابه",
    detailsCta: "تفاصيل المشروع",
  },
  en: {
    back: "Back to projects",
    overview: "Overview",
    quickFacts: "Project facts",
    clientType: "Client type",
    duration: "Duration",
    siteCondition: "Site condition",
    deliverables: "Deliverables",
    challenges: "Challenges",
    solutions: "Execution approach",
    results: "Results",
    gallery: "Project gallery",
    map: "Project location map",
    openMap: "Open in Google Maps",
    discussProject: "Discuss a similar project",
    detailsCta: "Project details",
  },
};

export const localizedProjectDetails: Record<Locale, Record<ProjectSlug, ProjectDetail>> = {
  ar: {
    "modern-residential-villa": {
      overview: "تفاصيل فيلا سكنية تم التعامل معها كمنظومة متكاملة: كتلة معمارية واضحة، واجهة قابلة للتنفيذ، إنارة خارجية محسوبة، ومتابعة هندسية لكل مرحلة حتى الوصول لشكل نهائي متوازن.",
      clientType: "مالك فيلا سكنية خاصة",
      duration: "12 أسبوع دراسة وتنفيذ مرحلي",
      siteCondition: "هيكل قائم مع حاجة لتطوير الواجهة ومسارات الحركة الخارجية",
      deliverables: ["تصميم واجهات", "مخططات تنفيذية", "جدول مواد", "خطة إنارة خارجية", "متابعة إشراف"],
      challenges: ["تحقيق شكل مودرن بدون مبالغة في الكلفة", "تنسيق الفتحات مع الخصوصية والإنارة", "توحيد الخامات بين الواجهة والأسوار"],
      solutions: ["تقسيم الواجهة إلى كتل هندسية حادة", "استخدام خامات قليلة لكن واضحة الحضور", "توزيع إنارة خطية ونقطية لإبراز العمق ليلاً"],
      results: ["واجهة أوضح وأكثر فخامة", "تنفيذ قابل للضبط بالموقع", "رفع قيمة المشروع بصرياً ووظيفياً"],
      gallery: galleries["modern-residential-villa"],
      ...mapFor("Hama, Syria"),
    },
    "contemporary-family-apartment": {
      overview: "مشروع داخلي لشقة عائلية ركّز على إعادة تنظيم الحركة اليومية، تقليل الازدحام البصري، وخلق مساحات تخزين ذكية بدون التضحية بجمالية المكان.",
      clientType: "عائلة تبحث عن سكن عملي ومعاصر",
      duration: "8 أسابيع تصميم وإكساء",
      siteCondition: "شقة قائمة تحتاج إعادة توزيع داخلي وتحسين الإضاءة والتخزين",
      deliverables: ["مخطط توزيع داخلي", "مود بورد مواد وألوان", "تصميم خزائن ومطبخ", "خطة إنارة", "إشراف إكساء"],
      challenges: ["المساحة محدودة وتحتاج استخدام ذكي", "إخفاء التخزين بدون إغلاق المكان", "الحفاظ على ألوان هادئة مناسبة للعائلة"],
      solutions: ["فتح منطقة المعيشة بصرياً", "إضافة وحدات تخزين مدمجة", "استخدام إنارة غير مباشرة لتخفيف الحدة"],
      results: ["مساحة أوسع بصرياً", "حركة يومية أسهل", "تنفيذ نظيف مناسب للاستخدام الطويل"],
      gallery: galleries["contemporary-family-apartment"],
      ...mapFor("Hama, Syria"),
    },
    "commercial-facade-identity": {
      overview: "تحويل واجهة تجارية إلى عنصر جذب واضح يربط التصميم المعماري مع الهوية البصرية، ويجعل المشروع مقروءاً بسرعة من الشارع.",
      clientType: "نشاط تجاري بحاجة لواجهة وهوية مكان",
      duration: "5 أسابيع تصميم وتنفيذ واجهة",
      siteCondition: "واجهة قائمة غير واضحة الهوية وتحتاج تنظيم إعلانات وإنارة",
      deliverables: ["تصميم واجهة", "تصور هوية بصرية", "لوحات وإشارات", "تفاصيل خامات", "تنسيق إنارة"],
      challenges: ["قراءة المشروع بسرعة من الشارع", "تخفيف ازدحام اللوحات", "اختيار خامات تتحمل العوامل الجوية"],
      solutions: ["بناء واجهة بطبقات واضحة", "تحديد مناطق اللوغو والإضاءة", "استخدام تباين قوي بين الخامة والكتابة"],
      results: ["واجهة أكثر احترافية", "هوية أوضح للزبائن", "حضور أقوى ليلاً ونهاراً"],
      gallery: galleries["commercial-facade-identity"],
      ...mapFor("Hama city center, Syria", 14),
    },
    "luxury-fit-out-project": {
      overview: "إدارة مشروع إكساء فاخر مع متابعة الورشات، ضبط المواد، تسلسل البنود، وتوثيق الاستلامات المرحلية لضمان نتيجة نهائية منظمة.",
      clientType: "مالك عقار سكني فاخر",
      duration: "14 أسبوع تنفيذ ومتابعة",
      siteCondition: "مشروع يحتاج تنسيق كهرباء وسباكة وتشطيبات قبل الإكساء النهائي",
      deliverables: ["جدول تنفيذ", "تنسيق ورشات", "استلام مرحلي", "قائمة مواد", "ضبط جودة"],
      challenges: ["تداخل أعمال الكهرباء والسباكة والتشطيبات", "تأمين المواد بالوقت المناسب", "المحافظة على مستوى تشطيب ثابت"],
      solutions: ["تقسيم التنفيذ إلى مراحل واضحة", "متابعة يومية للبنود الحساسة", "توثيق الملاحظات قبل الانتقال للمرحلة التالية"],
      results: ["تسليم أكثر انتظاماً", "تقليل الهدر والأخطاء", "جودة تشطيب أعلى"],
      gallery: galleries["luxury-fit-out-project"],
      ...mapFor("Hama Governorate, Syria", 12),
    },
    "administrative-engineering-office": {
      overview: "تصميم مكتب هندسي إداري يعكس الثقة والاحتراف، مع توزيع واضح للاستقبال والاجتماعات والعمل اليومي، وهوية مكان قابلة للتطبيق على الأثاث والتفاصيل.",
      clientType: "مكتب إداري / هندسي",
      duration: "6 أسابيع تصميم تفصيلي",
      siteCondition: "مساحة مكتبية تحتاج تنظيم مناطق العمل والاستقبال والاجتماعات",
      deliverables: ["تخطيط داخلي", "تصميم أثاث", "Moodboard", "تفاصيل استقبال", "دليل خامات"],
      challenges: ["الموازنة بين الجدية والراحة", "توفير خصوصية للاجتماعات", "استغلال مساحة محدودة"],
      solutions: ["اعتماد توزيع مرن", "إبراز منطقة الاستقبال كواجهة للمكتب", "استخدام خامات خشبية ومعدنية بهدوء"],
      results: ["مكتب أكثر وضوحاً وتنظيماً", "تجربة زائر أفضل", "هوية مكان احترافية"],
      gallery: galleries["administrative-engineering-office"],
      ...mapFor("Hama, Syria"),
    },
    "existing-building-rehabilitation": {
      overview: "مشروع تأهيل لمبنى قائم عبر معالجة الواجهة والمداخل والتشققات وتحسين التفاصيل دون إزالة شخصية المكان الأساسية.",
      clientType: "مالك مبنى قائم",
      duration: "10 أسابيع دراسة وتنفيذ",
      siteCondition: "مبنى قائم يحتاج معالجة تشققات وتحديث مدخل وواجهة",
      deliverables: ["تقييم حالة", "تصميم معالجة واجهة", "خطة ترميم", "إشراف هندسي", "استلام بنود"],
      challenges: ["العمل على مبنى قائم بدون تعطيل كامل", "معالجة مشاكل قديمة", "تحسين الشكل بدون تغييرات إنشائية كبيرة"],
      solutions: ["تحديد مناطق التدخل بدقة", "اختيار خامات متناسبة مع القديم والجديد", "تنفيذ مرحلي يحافظ على استخدام المكان"],
      results: ["واجهة أنظف وأكثر ثباتاً", "مدخل أوضح", "عمر تشغيلي أفضل للمبنى"],
      gallery: galleries["existing-building-rehabilitation"],
      ...mapFor("Hama, Syria"),
    },
  },
  en: {
    "modern-residential-villa": {
      overview: "A private villa treated as a complete system: clear architectural massing, buildable facade details, calculated exterior lighting, and engineering supervision through each delivery phase.",
      clientType: "Private villa owner",
      duration: "12 weeks of study and phased execution",
      siteCondition: "Existing structure requiring facade development and exterior circulation planning",
      deliverables: ["Facade design", "Execution drawings", "Material schedule", "Exterior lighting plan", "Supervision follow-up"],
      challenges: ["Achieving a modern look without cost inflation", "Coordinating openings with privacy and light", "Unifying facade and boundary materials"],
      solutions: ["Divided the elevation into sharp architectural volumes", "Used fewer materials with stronger visual presence", "Balanced linear and point lighting for night depth"],
      results: ["Clearer and more premium facade", "Buildable site details", "Higher visual and functional project value"],
      gallery: galleries["modern-residential-villa"],
      ...mapFor("Hama, Syria"),
    },
    "contemporary-family-apartment": {
      overview: "An interior apartment project focused on daily movement, reduced visual noise, and smart storage without losing the warmth of a family home.",
      clientType: "Family residential client",
      duration: "8 weeks of design and fit-out",
      siteCondition: "Existing apartment requiring layout, lighting, and storage improvements",
      deliverables: ["Interior layout", "Material and color moodboard", "Kitchen and cabinetry design", "Lighting plan", "Fit-out supervision"],
      challenges: ["Limited area with high daily use", "Adding storage without closing the space", "Keeping the palette calm and family-friendly"],
      solutions: ["Opened the living area visually", "Added integrated storage units", "Used indirect lighting to soften the interior"],
      results: ["Visually larger space", "Easier daily circulation", "Clean execution for long-term use"],
      gallery: galleries["contemporary-family-apartment"],
      ...mapFor("Hama, Syria"),
    },
    "commercial-facade-identity": {
      overview: "A commercial frontage redesigned as a clear attraction point that connects architecture with brand identity and makes the business readable from the street.",
      clientType: "Commercial business owner",
      duration: "5 weeks of facade design and execution",
      siteCondition: "Existing frontage with weak identity and scattered signage",
      deliverables: ["Facade design", "Brand identity direction", "Signage system", "Material details", "Lighting coordination"],
      challenges: ["Fast street readability", "Reducing signage clutter", "Choosing weather-resistant materials"],
      solutions: ["Built a layered facade composition", "Defined logo and lighting zones", "Used strong contrast between material and typography"],
      results: ["More professional frontage", "Clearer customer identity", "Stronger day-and-night presence"],
      gallery: galleries["commercial-facade-identity"],
      ...mapFor("Hama city center, Syria", 14),
    },
    "luxury-fit-out-project": {
      overview: "A luxury fit-out management project with workshop coordination, material control, execution sequencing, and staged handover documentation.",
      clientType: "Luxury residential property owner",
      duration: "14 weeks of execution and supervision",
      siteCondition: "Project requiring electrical, plumbing, and finishing coordination before final fit-out",
      deliverables: ["Execution schedule", "Workshop coordination", "Staged handover", "Material list", "Quality control"],
      challenges: ["Overlapping MEP and finishing works", "Delivering materials at the right time", "Maintaining consistent finishing quality"],
      solutions: ["Separated execution into clear phases", "Tracked sensitive items daily", "Documented notes before moving to the next phase"],
      results: ["More organized handover", "Less waste and rework", "Higher finishing quality"],
      gallery: galleries["luxury-fit-out-project"],
      ...mapFor("Hama Governorate, Syria", 12),
    },
    "administrative-engineering-office": {
      overview: "An administrative engineering office designed to communicate trust and clarity, with defined zones for reception, meetings, focused work, and a refined place identity.",
      clientType: "Administrative / engineering office",
      duration: "6 weeks of detailed design",
      siteCondition: "Office area requiring better work, reception, and meeting zoning",
      deliverables: ["Interior planning", "Furniture design", "Moodboard", "Reception details", "Material guide"],
      challenges: ["Balancing seriousness with comfort", "Providing meeting privacy", "Using a limited area efficiently"],
      solutions: ["Adopted a flexible layout", "Made reception the visual anchor", "Used wood and metal details in a restrained way"],
      results: ["Clearer office organization", "Better visitor experience", "Professional place identity"],
      gallery: galleries["administrative-engineering-office"],
      ...mapFor("Hama, Syria"),
    },
    "existing-building-rehabilitation": {
      overview: "A rehabilitation project for an existing building through facade treatment, entrance upgrades, crack handling, and improved finishing details while preserving the original character.",
      clientType: "Existing building owner",
      duration: "10 weeks of study and execution",
      siteCondition: "Existing building requiring crack treatment, entrance update, and facade improvement",
      deliverables: ["Condition assessment", "Facade treatment design", "Renovation plan", "Engineering supervision", "Item handover"],
      challenges: ["Working on an active building", "Treating older defects", "Improving appearance without major structural changes"],
      solutions: ["Defined intervention zones precisely", "Selected materials that bridge old and new", "Used staged execution to keep the place usable"],
      results: ["Cleaner and more stable facade", "Clearer entrance", "Better operating life for the building"],
      gallery: galleries["existing-building-rehabilitation"],
      ...mapFor("Hama, Syria"),
    },
  },
};

export function getProjectIndexBySlug(slug: string) {
  return projectSlugs.findIndex((item) => item === slug);
}

export function getProjectBySlug(projects: ProjectItem[], slug: string) {
  const index = getProjectIndexBySlug(slug);
  return index >= 0 ? projects[index] : undefined;
}

export function getProjectDetails(locale: Locale, slug: string) {
  if (!projectSlugs.includes(slug as ProjectSlug)) return undefined;
  return localizedProjectDetails[locale][slug as ProjectSlug];
}
