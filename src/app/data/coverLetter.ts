// src\app\data\coverLetter.ts

export interface CoverLetterHeader {
  senderName: string;
  senderAddress: string;
  senderEmail: string;
  senderPhone: string;
  date: string;
  recipientName: string;
  recipientCompany: string;
  recipientAddress: string;
}

export interface CoverLetterBody {
  introduction: string;
  mainContent: string;
  conclusion: string;
}

export interface CoverLetterClosing {
  regards: string;
  signature: string;
}

export interface CoverLetterData {
  header: CoverLetterHeader;
  subject: string;
  salutation: string;
  body: CoverLetterBody;
  closing: CoverLetterClosing;
}

const coverLetterData: CoverLetterData = {
  header: {
    senderName: "Ange KOUAKOU",
    senderAddress: "44000 Nantes, France",
    senderEmail: "kouakouangeericstephane@gmail.com",
    senderPhone: "+33 7 59 80 23 43",
    date: "17 juillet 2025",
    recipientName: "Marion JOUIN",
    recipientCompany: "Orisha Retail Shops",
    recipientAddress: "La Roche-sur-Yon, 85000 La Roche-sur-Yon, France",
  },
  subject: "Candidature – Alternant Développeur Fullstack Junior (F/H)",
  salutation: "Bonjour Madame JOUIN,",
  body: {
    introduction: `
Actuellement apprenant développeur fullstack à ADA Tech School, je suis à la recherche d'un contrat d’alternance de 12 à 36 mois à compter de septembre 2025. Je souhaite rejoindre l’équipe Orisha Retail Shops pour contribuer concrètement à la transformation digitale des commerces de proximité.
    `.trim(),
    mainContent: `
Au fil de mes expériences à ADA Tech School et à la Wild Code School, j’ai consolidé mes compétences sur toute la stack JavaScript/TypeScript, aussi bien en frontend (VueJS, React, Angular) qu’en backend (NodeJS, Express, NestJS) et bases de données (PostgreSQL, MySQL). J’ai mis en pratique ces compétences lors de projets personnels comme “Streamia” (Next.js/TypeScript), “Abyss” (Angular/NestJS) ou “Vacuum” (Vue/Express) où j'ai participé à la conception technique, au développement, à la documentation et aux tests. Ces expériences m’ont permis d’intégrer les méthodes Agile (daily, rétro, Git Flow), le travail en équipe, la planification avec GitHub Projects/Jira, et la CI/CD.

Curieux et rigoureux, j’aime partager, tester, et toujours apprendre de nouvelles pratiques. J’attache beaucoup d’importance à la qualité du code et à la simplicité des solutions, en lien avec les équipes produit. Le domaine de la sécurité applicative m’attire particulièrement : j’ai à cœur d’approfondir mes compétences en bonnes pratiques de sécurisation des API et tests de robustesse, pour accompagner la fiabilité des solutions Orisha.

Mon autonomie, ma capacité d’adaptation et ma motivation à apprendre rapidement feront de moi un alternant investi et force de proposition au sein de votre équipe.
    `.trim(),
    conclusion: `
Rejoindre Orisha Retail Shops serait pour moi l’opportunité de monter en compétences sur des projets à impact réel et d’évoluer dans un environnement stimulant, tout en poursuivant ma formation vers le titre RNCP Concepteur-Développeur d’Applications Web & Mobile. Je me tiens à votre disposition pour un entretien et vous remercie vivement pour l’attention portée à ma candidature.
    `.trim(),
  },
  closing: {
    regards: "Bien cordialement,",
    signature: "Ange KOUAKOU",
  },
};

export default coverLetterData;
