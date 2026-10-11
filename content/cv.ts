import {
  availability,
  contactLinks,
  experience,
  focusAreas,
  proofPoints,
  site,
  stackGroups,
} from '@/content/site'

export type CvLocale = 'en' | 'ru'

export type CvContent = {
  path: '/cv' | '/ru/cv'
  title: string
  eyebrow: string
  description: string
  metadataTitle: string
  metadataDescription: string
  backLabel: string
  downloadLabel: string
  languageLabel: string
  pdf: { href: `/cv/${string}.pdf`; filename: string }
  headings: {
    profile: string
    focus: string
    contact: string
    availability: string
    stack: string
    experience: string
    proof: string
  }
  summary: string
  focusAreas: readonly string[]
  contacts: readonly { label: string; value: string; href: string }[]
  availability: { status: string; detail: string }
  stackGroups: readonly { title: string; items: readonly string[] }[]
  experience: readonly {
    company: string
    role: string
    period: string
    description: string
  }[]
  proofPoints: readonly { title: string; signal: string; detail: string }[]
}

export const cvLanguages: readonly { locale: CvLocale; label: string }[] = [
  { locale: 'en', label: 'English' },
  { locale: 'ru', label: 'Русский' },
]

export const cvLanguageAlternates = {
  en: '/cv',
  ru: '/ru/cv',
  'x-default': '/cv',
} as const

const russianContactLabels: Record<string, string> = {
  Career: 'Карьера',
  Hello: 'Связаться',
  Domain: 'Сайт',
}

export const cvContent: Record<CvLocale, CvContent> = {
  en: {
    path: '/cv',
    title: 'CV',
    eyebrow: 'Resume',
    description:
      'A compact professional profile for frontend, full-stack, data interfaces and product engineering.',
    metadataTitle: 'CV',
    metadataDescription: `CV and engineering profile for ${site.ownerName}.`,
    backLabel: 'Home',
    downloadLabel: 'Download PDF',
    languageLabel: 'CV language',
    pdf: {
      href: '/cv/alex-dakhno-software-engineer-en.pdf',
      filename: 'alex-dakhno-software-engineer-en.pdf',
    },
    headings: {
      profile: 'Profile',
      focus: 'Core focus',
      contact: 'Contact',
      availability: 'Availability',
      stack: 'Stack',
      experience: 'Experience',
      proof: 'Proof points',
    },
    summary: site.summary,
    focusAreas,
    contacts: contactLinks,
    availability,
    stackGroups,
    experience,
    proofPoints,
  },
  ru: {
    path: '/ru/cv',
    title: 'CV',
    eyebrow: 'Резюме',
    description:
      'Краткий профессиональный профиль: фронтенд, фулстек, интерфейсы для работы с данными и продуктовая разработка.',
    metadataTitle: 'Резюме',
    metadataDescription: `Резюме и инженерный профиль ${site.ownerName}.`,
    backLabel: 'На главную',
    downloadLabel: 'Скачать PDF',
    languageLabel: 'Язык резюме',
    pdf: {
      href: '/cv/alexander-dakhno-software-engineer-ru.pdf',
      filename: 'alexander-dakhno-software-engineer-ru.pdf',
    },
    headings: {
      profile: 'Профиль',
      focus: 'Основные направления',
      contact: 'Контакты',
      availability: 'Доступность',
      stack: 'Стек',
      experience: 'Опыт',
      proof: 'Подтверждение компетенций',
    },
    summary:
      'Проектирую и создаю живые веб-системы: быстрые интерфейсы, продуманные продуктовые решения, инструменты для работы с данными, автоматизацию и игровые эксперименты.',
    focusAreas: [
      'Живые продуктовые интерфейсы',
      'Архитектура Next.js и React',
      'Дашборды для работы с большими объёмами данных',
      'Автоматизация и приватные инструменты',
      'Игры и проектирование взаимодействий',
    ],
    contacts: contactLinks.map((contact) => ({
      ...contact,
      label: russianContactLabels[contact.label] ?? contact.label,
    })),
    availability: {
      status: 'Выборочная работа над проектами',
      detail:
        'Открыт к сильным проектам в области продуктов и интерфейсов, фронтенд-платформ и веб-приложений для работы с данными.',
    },
    stackGroups: [
      {
        title: 'Фронтенд',
        items: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Системы анимации'],
      },
      {
        title: 'Бэкенд и данные',
        items: ['Node.js', 'API-контракты', 'PostgreSQL', 'Визуализация данных', 'Автоматизация'],
      },
      {
        title: 'Инфраструктура',
        items: ['GitHub', 'Vercel', 'Cloudflare', 'Docker', 'Приватные инструменты'],
      },
    ],
    experience: [
      {
        company: 'Royal House',
        role: 'Фронтенд-разработчик',
        period: 'Работа над продуктом в эксплуатации',
        description:
          'Оптимизировал загрузку, улучшал состояния интерфейса и выпускал пользовательские сценарии с упором на скорость и ясность.',
      },
      {
        company: 'Kelsoft',
        role: 'Фулстек-разработчик',
        period: 'Продуктовая разработка',
        description:
          'Создавал функции приложения для работы с большими наборами данных, визуальными состояниями и надёжными контрактами между фронтендом и бэкендом.',
      },
      {
        company: 'School 21',
        role: 'Разработка программного обеспечения',
        period: 'Основа системного программирования',
        description:
          'Изучал низкоуровневое программирование, алгоритмы, дисциплину совместной работы и тщательное ревью кода.',
      },
    ],
    proofPoints: [
      {
        title: 'Фронтенд в эксплуатации',
        signal: 'Коммерческая работа над SPA',
        detail:
          'Работа с React и TypeScript с упором на загрузку, состояния пользовательского интерфейса и поддерживаемую разработку.',
      },
      {
        title: 'Продукты для работы с данными',
        signal: 'Фулстек и интерфейсы данных',
        detail:
          'Опыт создания функций приложений для работы с наборами данных, бэкенд-контрактами и понятными рабочими экранами.',
      },
      {
        title: 'Системный подход',
        signal: 'Продуктовая работа с учётом инфраструктуры',
        detail:
          'Сайт устроен как платформа с публичными разделами и приватной инфраструктурой, а не просто статичная страница резюме.',
      },
      {
        title: 'Дизайн-инженерия',
        signal: 'Направление Nature x Tech',
        detail:
          'Визуальная система, анимация, атмосфера с учётом темы и детали взаимодействия рассматриваются как составляющие качества продукта.',
      },
    ],
  },
}
