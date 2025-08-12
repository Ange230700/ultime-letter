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
    date: "12 août 2025",
    recipientName: "À l’attention de l’équipe Recrutement",
    recipientCompany: "NeoXam",
    recipientAddress: "Paris, France",
  },
  subject: "Candidature spontanée – Stage / Alternance Développeur Front-End",
  salutation: "Bonjour Madame, Monsieur,",
  body: {
    introduction: `
Votre projet stratégique de modernisation du produit GP et de migration vers une interface web moderne m’a particulièrement interpellé. Je me permets de vous soumettre ma candidature spontanée pour un stage ou une alternance à partir de septembre 2025, convaincu que mes compétences techniques et ma motivation peuvent également contribuer à vos objectifs.
    `.trim(),
    mainContent: `
Actuellement en formation de Concepteur-Développeur d’Applications Web & Mobile à ADA Tech School, je prépare le titre RNCP de niveau 6. Je maîtrise JavaScript/TypeScript et j’ai travaillé sur des projets complexes en utilisant Vue.js, TailwindCSS, Nuxt.js. Mon expérience m’a permis de développer des interfaces dynamiques, de collaborer étroitement avec des designers pour transformer des maquettes en interfaces pixel-perfect, et d’optimiser l’UX pour des applications en production.

Rigoureux et autonome, j’apprécie le travail en équipe et la communication technique, y compris dans des environnements internationaux. Mon profil fullstack me permet également de collaborer efficacement avec les équipes backend pour assurer une intégration fluide des fonctionnalités.
    `.trim(),
    conclusion: `
Intégrer NeoXam en stage ou alternance serait pour moi l’opportunité de mettre mes compétences front-end au service d’un projet ambitieux, tout en continuant à progresser au contact de développeurs expérimentés. Je serais heureux d’échanger avec vous pour discuter de la manière dont je pourrais m’impliquer dans la modernisation de votre produit et contribuer à la qualité de votre interface utilisateur.

Vous trouverez mon CV en pièce jointe, et mes réalisations sont disponibles sur mon portfolio (ultime-portfolio.vercel.app) ainsi que sur mon GitHub (github.com/Ange230700).
    `.trim(),
  },
  closing: {
    regards: "Respectueusement,",
    signature: "Ange KOUAKOU",
  },
};

export default coverLetterData;
