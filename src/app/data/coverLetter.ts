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
    date: "13 août 2025",
    recipientName: "À l’attention de l’équipe Recrutement",
    recipientCompany: "Monsieur TSHIRT",
    recipientAddress: "Paris, France",
  },
  subject:
    "Candidature spontanée – Stage / Alternance Développeur JS Full Stack",
  salutation: "Bonjour Madame, Monsieur,",
  body: {
    introduction: `
Séduit par la culture d’innovation et l’approche “circuit court” qui font la singularité de Monsieur TSHIRT, je souhaite vous proposer ma candidature spontanée pour un stage ou une alternance à partir de septembre 2025.
    `.trim(),
    mainContent: `
Actuellement en formation de Concepteur-Développeur d’Applications Web & Mobile, je prépare un diplôme de niveau Master avec une spécialisation JavaScript/TypeScript. Mes expériences m’ont permis de développer des applications complètes en React côté front-end et Node.js côté back-end, avec une maîtrise de PostgreSQL/MySQL, de Git et des environnements Unix. J’ai également travaillé sur des intégrations API, des optimisations de performance, ainsi que des automatisations, ce qui rejoint parfaitement vos enjeux e-commerce et atelier.

Curieux et autonome, j’apprécie particulièrement de contribuer à des projets à fort impact, en prenant part à toutes les étapes : conception, développement, tests et déploiement. Votre environnement technique et vos valeurs – créativité, convivialité et exigence – sont en parfaite adéquation avec mon approche du métier.
    `.trim(),
    conclusion: `
Je serais ravi d’échanger avec vous afin de discuter de la manière dont je pourrais contribuer aux projets techniques et à l’innovation au sein de votre équipe. Vous trouverez mon CV en pièce jointe, et mes projets sont visibles sur mon portfolio (ultime-portfolio.vercel.app) ainsi que sur GitHub (github.com/Ange230700).
    `.trim(),
  },
  closing: {
    regards: "Respectueusement,",
    signature: "Ange KOUAKOU",
  },
};

export default coverLetterData;
