"use strict";

/* ==================================================
   I.P. IRONPIXEL NETWORK
   Official Company Newsroom
   ================================================== */

/* زبان و قالب نمایش */

const LANGUAGES = {
  en: "English",
  fa: "فارسی",
  fr: "Français",
  es: "Español",
  ko: "한국어",
  ja: "日本語",
  ar: "العربية"
};

/* ==================================================
   اخبار اختصاصی شرکت
   برای تغییر خبرها فقط آرایه NEWS را ویرایش کن.
   ================================================== */

const NEWS = [
  {
    id: 1,
    category: "Company",
    date: "2026",
    featured: true,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80",

    title: {
      en: "I.P. IronPixel: Building an Independent Technology Ecosystem",
      fa: "I.P. IronPixel؛ تلاش برای ساخت یک اکوسیستم مستقل فناوری",
      fr: "I.P. IronPixel : construire un écosystème technologique indépendant",
      es: "I.P. IronPixel: construyendo un ecosistema tecnológico independiente",
      ko: "I.P. IronPixel: 독립적인 기술 생태계 구축",
      ja: "I.P. IronPixel：独立したテクノロジー・エコシステムの構築",
      ar: "I.P. IronPixel: بناء منظومة تقنية مستقلة"
    },

    summary: {
      en: "I.P. IronPixel is developing a portfolio of digital projects spanning artificial intelligence, search, mapping and interactive entertainment. Its long-term ambition is to connect these projects through a unified technology ecosystem.",
      fa: "I.P. IronPixel در حال توسعه مجموعه‌ای از پروژه‌های دیجیتال در حوزه هوش مصنوعی، جست‌وجو، نقشه و سرگرمی تعاملی است. هدف بلندمدت شرکت، ایجاد ارتباط میان این پروژه‌ها در قالب یک اکوسیستم فناوری یکپارچه است.",
      fr: "I.P. IronPixel développe plusieurs projets numériques dans l’intelligence artificielle, la recherche, la cartographie et le divertissement interactif.",
      es: "I.P. IronPixel desarrolla proyectos digitales de inteligencia artificial, búsqueda, mapas y entretenimiento interactivo.",
      ko: "I.P. IronPixel은 인공지능, 검색, 지도 및 인터랙티브 엔터테인먼트 분야의 디지털 프로젝트를 개발하고 있습니다.",
      ja: "I.P. IronPixelは、AI、検索、地図、インタラクティブ・エンターテインメント分野のデジタルプロジェクトを開発しています。",
      ar: "تطوّر I.P. IronPixel مشاريع رقمية في مجالات الذكاء الاصطناعي والبحث والخرائط والترفيه التفاعلي."
    },

    url: "#technology"
  },

  {
    id: 2,
    category: "Artificial Intelligence",
    date: "2026",
    featured: true,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1000&q=80",

    title: {
      en: "IPAI: An Ambitious Vision for AI-Powered Work",
      fa: "IPAI؛ چشم‌اندازی بلندپروازانه برای کار با هوش مصنوعی",
      fr: "IPAI : une vision ambitieuse du travail assisté par l’IA",
      es: "IPAI: una visión ambiciosa del trabajo con inteligencia artificial",
      ko: "IPAI: AI 기반 작업을 위한 대담한 비전",
      ja: "IPAI：AIを活用した仕事への意欲的なビジョン",
      ar: "IPAI: رؤية طموحة للعمل المدعوم بالذكاء الاصطناعي"
    },

    summary: {
      en: "The IPAI project aims to bring conversational AI and developer-focused tools into one workspace. Its roadmap explores how people could move from an idea to a working prototype with AI assistance.",
      fa: "پروژه IPAI با هدف گردآوری گفت‌وگوی هوشمند و ابزارهای ویژه توسعه‌دهندگان در یک محیط کاری طراحی شده است. مسیر توسعه آن بررسی می‌کند که چگونه می‌توان با کمک هوش مصنوعی، از یک ایده به نمونه اولیه رسید.",
      fr: "Le projet IPAI vise à réunir l’IA conversationnelle et des outils pour développeurs dans un même espace de travail.",
      es: "El proyecto IPAI busca reunir la IA conversacional y herramientas para desarrolladores en un solo espacio de trabajo.",
      ko: "IPAI 프로젝트는 대화형 AI와 개발자 도구를 하나의 작업 공간에 통합하는 것을 목표로 합니다.",
      ja: "IPAIプロジェクトは、会話型AIと開発者向けツールを一つの作業環境に統合することを目指しています。",
      ar: "يهدف مشروع IPAI إلى جمع الذكاء الاصطناعي الحواري وأدوات المطورين في مساحة عمل واحدة."
    },

    url: "#technology"
  },

  {
    id: 3,
    category: "Search Technology",
    date: "2026",
    featured: false,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80",

    title: {
      en: "IP Search: Exploring a Different Approach to Finding Information",
      fa: "IP Search؛ تلاشی برای رویکردی متفاوت به جست‌وجوی اطلاعات",
      fr: "IP Search : une autre approche de la recherche d’informations",
      es: "IP Search: otra forma de buscar información",
      ko: "IP Search: 새로운 정보 검색 방식 탐구",
      ja: "IP Search：情報検索への新しいアプローチ",
      ar: "IP Search: استكشاف نهج مختلف للبحث عن المعلومات"
    },

    summary: {
      en: "IP Search is an IronPixel project focused on discovering and organizing online information. Its broader vision is to improve access to useful sources through search tools and structured results.",
      fa: "IP Search پروژه‌ای از IronPixel برای یافتن و سازمان‌دهی اطلاعات آنلاین است. چشم‌انداز آن، بهبود دسترسی به منابع مفید از طریق ابزارهای جست‌وجو و نمایش ساختاریافته نتایج است.",
      fr: "IP Search est un projet consacré à la découverte et à l’organisation des informations en ligne.",
      es: "IP Search es un proyecto centrado en descubrir y organizar información en línea.",
      ko: "IP Search는 온라인 정보를 찾고 정리하는 데 초점을 맞춘 프로젝트입니다.",
      ja: "IP Searchは、オンライン情報の発見と整理に焦点を当てたプロジェクトです。",
      ar: "IP Search مشروع يركز على اكتشاف المعلومات المتاحة عبر الإنترنت وتنظيمها."
    },

    url: "#technology"
  },

  {
    id: 4,
    category: "Mapping",
    date: "2026",
    featured: false,
    image: "https://images.unsplash.com/photo-1524666041070-9e8767c4e7e5?auto=format&fit=crop&w=1000&q=80",

    title: {
      en: "IP Map: Rethinking the Digital Mapping Experience",
      fa: "IP Map؛ بازنگری در تجربه نقشه‌های دیجیتال",
      fr: "IP Map : repenser l’expérience de la cartographie numérique",
      es: "IP Map: repensar la experiencia de los mapas digitales",
      ko: "IP Map: 디지털 지도 경험의 재구상",
      ja: "IP Map：デジタル地図体験を再考する",
      ar: "IP Map: إعادة التفكير في تجربة الخرائط الرقمية"
    },

    summary: {
      en: "IP Map is designed as a navigation and mapping project. Planned features include location discovery and route exploration, with the final experience depending on development and available data sources.",
      fa: "IP Map پروژه‌ای در زمینه نقشه و مسیریابی است. قابلیت‌های موردنظر شامل یافتن مکان‌ها و بررسی مسیرهاست؛ تجربه نهایی به پیشرفت توسعه و منابع داده موجود بستگی دارد.",
      fr: "IP Map est un projet de cartographie et de navigation dont les fonctionnalités dépendent du développement et des données disponibles.",
      es: "IP Map es un proyecto de mapas y navegación cuyas funciones dependerán del desarrollo y de los datos disponibles.",
      ko: "IP Map은 지도와 내비게이션 프로젝트이며, 기능은 개발 진행 상황과 이용 가능한 데이터에 따라 달라집니다.",
      ja: "IP Mapは地図とナビゲーションのプロジェクトです。機能は開発状況と利用可能なデータに左右されます。",
      ar: "IP Map مشروع للخرائط والملاحة، وتعتمد ميزاته على تقدم التطوير ومصادر البيانات المتاحة."
    },

    url: "#technology"
  },

  {
    id: 5,
    category: "Gaming",
    date: "2026",
    featured: false,
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1000&q=80",

    title: {
      en: "IronLoreScring: A Dark Interactive World in Development",
      fa: "IronLoreScring؛ جهانی تاریک و تعاملی در حال توسعه",
      fr: "IronLoreScring : un univers interactif sombre en développement",
      es: "IronLoreScring: un mundo interactivo oscuro en desarrollo",
      ko: "IronLoreScring: 개발 중인 어두운 인터랙티브 세계",
      ja: "IronLoreScring：開発中のダークなインタラクティブ世界",
      ar: "IronLoreScring: عالم تفاعلي مظلم قيد التطوير"
    },

    summary: {
      en: "IronLoreScring is an ambitious game concept from IronPixel, envisioned around horror, exploration and interconnected storytelling. Its release plans and final features will depend on development progress.",
      fa: "IronLoreScring ایده‌ای بلندپروازانه برای یک بازی از IronPixel است که بر وحشت، اکتشاف و داستان‌های به‌هم‌پیوسته تمرکز دارد. زمان انتشار و قابلیت‌های نهایی به روند توسعه بستگی خواهد داشت.",
      fr: "IronLoreScring est un concept de jeu mêlant horreur, exploration et récits interconnectés.",
      es: "IronLoreScring es un concepto de videojuego que combina terror, exploración e historias conectadas.",
      ko: "IronLoreScring은 공포, 탐험, 연결된 스토리를 중심으로 구상된 게임 프로젝트입니다.",
      ja: "IronLoreScringは、ホラー、探索、相互につながる物語を軸に構想されたゲームプロジェクトです。",
      ar: "IronLoreScring فكرة لعبة من IronPixel تجمع بين الرعب والاستكشاف والقصص المترابطة."
    },

    url: "#videos"
  },

  {
    id: 6,
    category: "Digital Innovation",
    date: "2026",
    featured: false,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=80",

    title: {
      en: "The IronPixel Vision: Connecting Projects, Not Just Products",
      fa: "چشم‌انداز IronPixel؛ پیوند پروژه‌ها، نه فقط محصولات",
      fr: "La vision IronPixel : connecter les projets, pas seulement les produits",
      es: "La visión de IronPixel: conectar proyectos, no solo productos",
      ko: "IronPixel의 비전: 제품을 넘어 프로젝트를 연결하다",
      ja: "IronPixelのビジョン：製品だけでなくプロジェクトをつなぐ",
      ar: "رؤية IronPixel: ربط المشاريع، وليس المنتجات فقط"
    },

    summary: {
      en: "The company’s broader vision is to connect AI, information discovery, mapping and digital entertainment into a coherent portfolio. Turning that vision into a reliable ecosystem will require continued engineering, testing and user feedback.",
      fa: "چشم‌انداز گسترده‌تر شرکت، ایجاد ارتباط میان هوش مصنوعی، کشف اطلاعات، نقشه و سرگرمی دیجیتال است. تبدیل این چشم‌انداز به اکوسیستمی قابل‌اعتماد به توسعه مستمر، آزمایش و بازخورد کاربران نیاز دارد.",
      fr: "L’entreprise souhaite relier l’IA, la recherche d’informations, les cartes et le divertissement numérique dans un ensemble cohérent.",
      es: "La empresa quiere conectar la IA, la búsqueda de información, los mapas y el entretenimiento digital en un conjunto coherente.",
      ko: "회사는 AI, 정보 검색, 지도, 디지털 엔터테인먼트를 하나의 일관된 생태계로 연결하고자 합니다.",
      ja: "同社はAI、情報検索、地図、デジタルエンターテインメントを一つの体系に結び付けることを目指しています。",
      ar: "تسعى الشركة إلى ربط الذكاء الاصطناعي والبحث عن المعلومات والخرائط والترفيه الرقمي ضمن منظومة متكاملة."
    },

    url: "#analysis"
  }
];

/* ==================================================
   ویدئوها
   لینک‌ها را با ویدئوهای رسمی خودتان جایگزین کنید.
   ================================================== */

const VIDEOS = [
  {
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80",
    title: {
      en: "Inside the IPAI Vision",
      fa: "نگاهی به چشم‌انداز IPAI",
      fr: "Dans l’univers d’IPAI",
      es: "Dentro de la visión de IPAI",
      ko: "IPAI 비전 살펴보기",
      ja: "IPAIのビジョン",
      ar: "داخل رؤية IPAI"
    },
    url: "https://www.youtube.com/"
  },
  {
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=900&q=80",
    title: {
      en: "IronLoreScring: The Project Concept",
      fa: "IronLoreScring؛ معرفی ایده بازی",
      fr: "IronLoreScring : le concept du jeu",
      es: "IronLoreScring: concepto del juego",
      ko: "IronLoreScring 게임 콘셉트",
      ja: "IronLoreScring：ゲーム構想",
      ar: "IronLoreScring: فكرة اللعبة"
    },
    url: "https://www.youtube.com/"
  }
];

/* ==================================================
   ترجمه رابط کاربری
   ================================================== */

const TRANSLATIONS = {
  en: {
    navHome: "Home", navNews: "News", navVideos: "Videos",
    navTechnology: "Technology", navAnalysis: "Analysis",
    heroEyebrow: "INDEPENDENT GLOBAL MEDIA",
    heroTitle: "The world moves.<br>We bring it into focus.",
    heroDescription: "News, technology, science and ideas shaping tomorrow.",
    exploreNews: "Explore news", watchVideos: "Watch videos",
    latest: "LATEST", breakingPlaceholder: "Stories that matter, from around the world.",
    newsEyebrow: "STAY INFORMED", newsTitle: "Latest stories",
    newsDescription: "Explore the ideas and developments shaping our world.",
    viewAll: "Explore all", videoEyebrow: "WATCH & DISCOVER",
    videoTitle: "Video desk",
    videoDescription: "Visual stories, explainers and ideas worth exploring.",
    technologyEyebrow: "THE DIGITAL FRONTIER",
    technologyTitle: "Technology & discovery",
    technologyDescription: "Explore the forces transforming how we live and work.",
    topicAI: "Artificial Intelligence",
    topicAIDesc: "Models, automation and the future of intelligent systems.",
    topicScience: "Science & Space",
    topicScienceDesc: "Discoveries, research and the mysteries of the universe.",
    topicConflict: "World Affairs",
    topicConflictDesc: "Understand global developments through context and analysis.",
    analysisEyebrow: "BEYOND THE HEADLINES",
    analysisTitle: "Context matters.",
    analysisDescription: "Good journalism goes beyond what happened. It explores why it matters.",
    readAnalysis: "Explore analysis", footerDescription: "Independent perspective. A connected world.",
    rights: "All rights reserved.", readMore: "Read more", watchNow: "Watch now"
  },

  fa: {
    navHome: "خانه", navNews: "اخبار", navVideos: "ویدئوها",
    navTechnology: "فناوری", navAnalysis: "تحلیل",
    heroEyebrow: "رسانه مستقل جهانی",
    heroTitle: "جهان در حرکت است.<br>ما آن را روشن‌تر می‌بینیم.",
    heroDescription: "اخبار، فناوری، علم و ایده‌هایی که آینده را شکل می‌دهند.",
    exploreNews: "مشاهده اخبار", watchVideos: "تماشای ویدئوها",
    latest: "آخرین", breakingPlaceholder: "رویدادهای مهم از سراسر جهان.",
    newsEyebrow: "به‌روز بمانید", newsTitle: "آخرین مطالب",
    newsDescription: "ایده‌ها و تحولاتی را بررسی کنید که جهان ما را شکل می‌دهند.",
    viewAll: "مشاهده همه", videoEyebrow: "تماشا و کشف",
    videoTitle: "بخش ویدئو",
    videoDescription: "روایت‌های تصویری، توضیحات و ایده‌های دیدنی.",
    technologyEyebrow: "مرزهای دنیای دیجیتال",
    technologyTitle: "فناوری و اکتشاف",
    technologyDescription: "نیروهایی را بشناسید که شیوه زندگی و کار ما را تغییر می‌دهند.",
    topicAI: "هوش مصنوعی",
    topicAIDesc: "مدل‌ها، خودکارسازی و آینده سامانه‌های هوشمند.",
    topicScience: "علم و فضا",
    topicScienceDesc: "اکتشافات، پژوهش‌ها و رازهای جهان هستی.",
    topicConflict: "رویدادهای جهان",
    topicConflictDesc: "تحولات جهانی را با زمینه و تحلیل بهتر درک کنید.",
    analysisEyebrow: "فراتر از تیترها",
    analysisTitle: "زمینه اهمیت دارد.",
    analysisDescription: "روزنامه‌نگاری خوب فقط نمی‌گوید چه اتفاقی افتاده؛ بلکه اهمیت آن را بررسی می‌کند.",
    readAnalysis: "مشاهده تحلیل", footerDescription: "نگاهی مستقل به جهانی به‌هم‌پیوسته.",
    rights: "تمامی حقوق محفوظ است.", readMore: "ادامه مطلب", watchNow: "تماشا"
  },

  fr: {
    navHome: "Accueil", navNews: "Actualités", navVideos: "Vidéos",
    navTechnology: "Technologie", navAnalysis: "Analyse",
    heroEyebrow: "MÉDIA MONDIAL INDÉPENDANT",
    heroTitle: "Le monde avance.<br>Nous le mettons en perspective.",
    heroDescription: "Actualités, technologie, science et idées qui façonnent demain.",
    exploreNews: "Voir les actualités", watchVideos: "Voir les vidéos",
    latest: "À LA UNE", breakingPlaceholder: "Les événements importants du monde.",
    newsEyebrow: "RESTEZ INFORMÉ", newsTitle: "Dernières actualités",
    newsDescription: "Découvrez les idées et évolutions qui façonnent notre monde.",
    viewAll: "Tout explorer", videoEyebrow: "REGARDER ET DÉCOUVRIR",
    videoTitle: "Espace vidéo", videoDescription: "Des récits visuels et des idées à découvrir.",
    technologyEyebrow: "FRONTIÈRE NUMÉRIQUE",
    technologyTitle: "Technologie et découverte",
    technologyDescription: "Explorez les forces qui transforment notre quotidien.",
    topicAI: "Intelligence artificielle", topicAIDesc: "Modèles, automatisation et systèmes intelligents.",
    topicScience: "Science et espace", topicScienceDesc: "Découvertes, recherches et mystères de l’univers.",
    topicConflict: "Affaires mondiales", topicConflictDesc: "Comprendre les évolutions mondiales avec du contexte.",
    analysisEyebrow: "AU-DELÀ DES TITRES", analysisTitle: "Le contexte compte.",
    analysisDescription: "Le journalisme explore les faits et leur importance.",
    readAnalysis: "Voir l’analyse", footerDescription: "Une perspective indépendante sur un monde connecté.",
    rights: "Tous droits réservés.", readMore: "Lire la suite", watchNow: "Regarder"
  },

  es: {
    navHome: "Inicio", navNews: "Noticias", navVideos: "Vídeos",
    navTechnology: "Tecnología", navAnalysis: "Análisis",
    heroEyebrow: "MEDIOS GLOBALES INDEPENDIENTES",
    heroTitle: "El mundo avanza.<br>Te ayudamos a comprenderlo.",
    heroDescription: "Noticias, tecnología, ciencia e ideas que dan forma al mañana.",
    exploreNews: "Ver noticias", watchVideos: "Ver vídeos",
    latest: "ÚLTIMA HORA", breakingPlaceholder: "Historias importantes de todo el mundo.",
    newsEyebrow: "MANTENTE INFORMADO", newsTitle: "Últimas noticias",
    newsDescription: "Explora las ideas y novedades que transforman nuestro mundo.",
    viewAll: "Explorar todo", videoEyebrow: "MIRA Y DESCUBRE",
    videoTitle: "Sección de vídeo", videoDescription: "Historias visuales e ideas interesantes.",
    technologyEyebrow: "FRONTERA DIGITAL", technologyTitle: "Tecnología y descubrimiento",
    technologyDescription: "Explora las fuerzas que transforman nuestra vida y trabajo.",
    topicAI: "Inteligencia artificial", topicAIDesc: "Modelos, automatización y sistemas inteligentes.",
    topicScience: "Ciencia y espacio", topicScienceDesc: "Descubrimientos, investigaciones y misterios del universo.",
    topicConflict: "Asuntos mundiales", topicConflictDesc: "Comprende los acontecimientos globales con contexto.",
    analysisEyebrow: "MÁS ALLÁ DE LOS TITULARES", analysisTitle: "El contexto importa.",
    analysisDescription: "El buen periodismo explica los hechos y por qué son importantes.",
    readAnalysis: "Ver análisis", footerDescription: "Una perspectiva independiente de un mundo conectado.",
    rights: "Todos los derechos reservados.", readMore: "Leer más", watchNow: "Ver ahora"
  },

  ko: {
    navHome: "홈", navNews: "뉴스", navVideos: "동영상",
    navTechnology: "기술", navAnalysis: "분석",
    heroEyebrow: "독립 글로벌 미디어",
    heroTitle: "세상은 움직입니다.<br>우리는 그 흐름을 전합니다.",
    heroDescription: "미래를 바꾸는 뉴스, 기술, 과학과 아이디어.",
    exploreNews: "뉴스 보기", watchVideos: "동영상 보기",
    latest: "최신", breakingPlaceholder: "전 세계의 중요한 이야기.",
    newsEyebrow: "정보를 확인하세요", newsTitle: "최신 이야기",
    newsDescription: "세상을 바꾸는 아이디어와 발전을 살펴보세요.",
    viewAll: "모두 보기", videoEyebrow: "보고 발견하기",
    videoTitle: "영상 섹션", videoDescription: "시각적 이야기와 흥미로운 아이디어.",
    technologyEyebrow: "디지털의 최전선", technologyTitle: "기술과 발견",
    technologyDescription: "우리의 삶과 일을 변화시키는 기술을 살펴보세요.",
    topicAI: "인공지능", topicAIDesc: "모델, 자동화와 지능형 시스템의 미래.",
    topicScience: "과학과 우주", topicScienceDesc: "발견, 연구와 우주의 신비.",
    topicConflict: "세계 정세", topicConflictDesc: "맥락과 분석으로 세계의 변화를 이해하세요.",
    analysisEyebrow: "헤드라인 너머", analysisTitle: "맥락이 중요합니다.",
    analysisDescription: "좋은 저널리즘은 사건과 그 의미를 살펴봅니다.",
    readAnalysis: "분석 보기", footerDescription: "연결된 세계를 바라보는 독립적인 시각.",
    rights: "모든 권리 보유.", readMore: "더 읽기", watchNow: "지금 보기"
  },

  ja: {
    navHome: "ホーム", navNews: "ニュース", navVideos: "動画",
    navTechnology: "テクノロジー", navAnalysis: "分析",
    heroEyebrow: "独立系グローバルメディア",
    heroTitle: "世界は動いている。<br>その動きを伝えます。",
    heroDescription: "未来を形作るニュース、技術、科学、アイデア。",
    exploreNews: "ニュースを見る", watchVideos: "動画を見る",
    latest: "最新", breakingPlaceholder: "世界の重要な話題。",
    newsEyebrow: "最新情報をチェック", newsTitle: "最新の記事",
    newsDescription: "世界を形作るアイデアと変化を探ります。",
    viewAll: "すべて見る", videoEyebrow: "見て発見する",
    videoTitle: "動画セクション", videoDescription: "映像で伝える物語とアイデア。",
    technologyEyebrow: "デジタルの最前線", technologyTitle: "技術と発見",
    technologyDescription: "生活や仕事を変える技術を探ります。",
    topicAI: "人工知能", topicAIDesc: "モデル、自動化、知能システムの未来。",
    topicScience: "科学と宇宙", topicScienceDesc: "発見、研究、宇宙の謎。",
    topicConflict: "世界情勢", topicConflictDesc: "背景と分析から世界の動きを理解します。",
    analysisEyebrow: "見出しのその先へ", analysisTitle: "背景が大切です。",
    analysisDescription: "優れた報道は、出来事だけでなく、その意味も伝えます。",
    readAnalysis: "分析を見る", footerDescription: "つながる世界を独立した視点で見つめます。",
    rights: "全著作権所有。", readMore: "続きを読む", watchNow: "今すぐ見る"
  },

  ar: {
    navHome: "الرئيسية", navNews: "الأخبار", navVideos: "الفيديو",
    navTechnology: "التكنولوجيا", navAnalysis: "التحليل",
    heroEyebrow: "إعلام عالمي مستقل",
    heroTitle: "العالم يتغير.<br>ونحن نوضح الصورة.",
    heroDescription: "أخبار وتقنية وعلوم وأفكار تشكل المستقبل.",
    exploreNews: "استكشف الأخبار", watchVideos: "شاهد الفيديوهات",
    latest: "الأحدث", breakingPlaceholder: "أهم القصص من جميع أنحاء العالم.",
    newsEyebrow: "ابقَ على اطلاع", newsTitle: "أحدث القصص",
    newsDescription: "اكتشف الأفكار والتطورات التي تشكل عالمنا.",
    viewAll: "استكشف الكل", videoEyebrow: "شاهد واكتشف",
    videoTitle: "قسم الفيديو", videoDescription: "قصص مرئية وأفكار تستحق الاستكشاف.",
    technologyEyebrow: "آفاق العالم الرقمي", technologyTitle: "التكنولوجيا والاكتشاف",
    technologyDescription: "استكشف التقنيات التي تغير حياتنا وعملنا.",
    topicAI: "الذكاء الاصطناعي", topicAIDesc: "النماذج والأتمتة ومستقبل الأنظمة الذكية.",
    topicScience: "العلوم والفضاء", topicScienceDesc: "الاكتشافات والأبحاث وأسرار الكون.",
    topicConflict: "الشؤون العالمية", topicConflictDesc: "افهم التطورات العالمية من خلال السياق والتحليل.",
    analysisEyebrow: "ما وراء العناوين", analysisTitle: "السياق مهم.",
    analysisDescription: "الصحافة الجيدة تشرح الأحداث وأهميتها.",
    readAnalysis: "استكشف التحليل", footerDescription: "رؤية مستقلة لعالم مترابط.",
    rights: "جميع الحقوق محفوظة.", readMore: "اقرأ المزيد", watchNow: "شاهد الآن"
  }
};

/* ==================================================
   توابع اصلی سایت
   ================================================== */

let currentLanguage = localStorage.getItem("ipn-language") || "en";
let currentTheme = localStorage.getItem("ipn-theme") || "light";

function translate(key) {
  return TRANSLATIONS[currentLanguage]?.[key]
    || TRANSLATIONS.en[key]
    || key;
}

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

function applyLanguage(language) {
  if (!TRANSLATIONS[language]) language = "en";

  currentLanguage = language;

  document.documentElement.lang = language;
  document.documentElement.dir =
    ["fa", "ar"].includes(language) ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;

    if (TRANSLATIONS[language][key]) {
      element.innerHTML = TRANSLATIONS[language][key];
    }
  });

  const selector = document.querySelector("#languageSelect");
  if (selector) selector.value = language;

  localStorage.setItem("ipn-language", language);

  renderNews();
  renderVideos();
}

function applyTheme(theme) {
  currentTheme = theme === "dark" ? "dark" : "light";

  document.documentElement.dataset.theme = currentTheme;
  document.body.dataset.theme = currentTheme;

  const button = document.querySelector("#themeToggle");

  if (button) {
    button.textContent = currentTheme === "dark" ? "☀️" : "🌙";
  }

  localStorage.setItem("ipn-theme", currentTheme);
}

function renderNews() {
  const container = document.querySelector("#newsGrid");
  if (!container) return;

  container.innerHTML = NEWS.map((item) => {
    const title = item.title[currentLanguage] || item.title.en;
    const summary = item.summary[currentLanguage] || item.summary.en;

    return `
      <article class="news-card">
        <a class="news-image-link"
           href="${escapeHTML(item.url)}"
           aria-label="${escapeHTML(title)}">
          <img class="news-image"
               src="${escapeHTML(item.image)}"
               alt=""
               loading="lazy"
               onerror="this.style.display='none'">
        </a>

        <div class="news-card-content">
          <div class="news-meta">
            <span>${escapeHTML(item.category)}</span>
            <span>${escapeHTML(item.date)}</span>
          </div>

          <h3>
            <a href="${escapeHTML(item.url)}">
              ${escapeHTML(title)}
            </a>
          </h3>

          <p>${escapeHTML(summary)}</p>

          <a class="text-link" href="${escapeHTML(item.url)}">
            ${escapeHTML(translate("readMore"))} ↗
          </a>
        </div>
      </article>
    `;
  }).join("");
}

function renderVideos() {
  const container = document.querySelector("#videoGrid");
  if (!container) return;

  container.innerHTML = VIDEOS.map((item) => {
    const title = item.title[currentLanguage] || item.title.en;

    return `
      <article class="video-card">
        <a class="video-image-link"
           href="${escapeHTML(item.url)}"
           target="_blank"
           rel="noopener noreferrer">
          <img src="${escapeHTML(item.image)}"
               alt=""
               loading="lazy"
               onerror="this.style.display='none'">
          <span class="play-button">▶</span>
        </a>

        <div class="video-card-content">
          <h3>${escapeHTML(title)}</h3>
          <a class="text-link"
             href="${escapeHTML(item.url)}"
             target="_blank"
             rel="noopener noreferrer">
            ${escapeHTML(translate("watchNow"))} ↗
          </a>
        </div>
      </article>
    `;
  }).join("");
}

/* ==================================================
   راه‌اندازی
   ================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const languageSelect = document.querySelector("#languageSelect");
  const themeButton = document.querySelector("#themeToggle");
  const year = document.querySelector("#currentYear");

  if (languageSelect) {
    languageSelect.addEventListener("change", (event) => {
      applyLanguage(event.target.value);
    });
  }

  if (themeButton) {
    themeButton.addEventListener("click", () => {
      applyTheme(currentTheme === "light" ? "dark" : "light");
    });
  }

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  applyTheme(currentTheme);
  applyLanguage(currentLanguage);
});