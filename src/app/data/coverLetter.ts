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
    date: "8 août 2025",
    recipientName: "Responsable du recrutement",
    recipientCompany: "Pappers",
    recipientAddress: "Rue d'Aboukir, 75002 Paris, France",
  },
  subject: "Candidature – Stage développeur Javascript",
  salutation: "Bonjour Madame, Monsieur,",
  body: {
    introduction: `
Pappers me séduit par sa mission d’accessibilité et de transparence : rendre disponibles et fiables les données des entreprises françaises grâce à l’Open Data. Contribuer à l’amélioration d’une plateforme visitée par des millions de personnes et à l’API qui alimente de nombreux acteurs économiques représente pour moi un défi technique et un engagement concret en faveur de l’information libre et de qualité.
    `.trim(),
    mainContent: `
Actuellement en formation de Concepteur-Développeur d’Applications Web & Mobile à ADA Tech School, je recherche un stage de fin d’études à partir de septembre 2025. Je maîtrise JavaScript et TypeScript, avec une expérience significative en Node.js pour le développement back-end et l’intégration d’APIs. J’ai travaillé sur divers projets manipulant MySQL, Prisma, et Express, et je suis à l’aise avec la gestion de données et leur optimisation. Mes projets m’ont également permis d’explorer le front-end avec Vue.js, Nuxt.js et TailwindCSS, ainsi que l’intégration responsive de maquettes Figma. Je suis rigoureux dans la qualité du code, attentif à la performance et à la maintenabilité, et j’aime collaborer sur des projets en équipe agile, avec revue de code et documentation claire. Je suis particulièrement motivé par l’opportunité de travailler sur l’intégration de nouvelles bases Open Data, la fiabilisation des données, et le développement de nouvelles fonctionnalités qui bénéficieront à un large public.
    `.trim(),
    conclusion: `
Rejoindre Pappers serait pour moi l’occasion de mettre mes compétences fullstack au service d’un produit à fort impact, tout en apprenant aux côtés d’experts sur des problématiques techniques variées : Node.js, gestion de bases multiples, enrichissement et fiabilisation de données. Je serais ravi d’échanger avec vous pour discuter plus en détail de ma candidature. Vous trouverez mon CV en pièce jointe, et mes réalisations sont disponibles sur mon portfolio (ultime-portfolio.vercel.app) et mon GitHub (github.com/Ange230700).
    `.trim(),
  },
  closing: {
    regards: "Respectueusement,",
    signature: "Ange KOUAKOU",
  },
};

export default coverLetterData;
