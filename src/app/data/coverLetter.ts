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
    recipientCompany: "Idun-group",
    recipientAddress: "75015 Paris, France",
  },
  subject: "Candidature – Alternance Développeur Front-End (React / Next.js)",
  salutation: "Bonjour Madame, Monsieur,",
  body: {
    introduction: `
Votre vision d’associer le développement front-end à l’intégration d’agents IA pour créer des applications métier performantes et innovantes m’enthousiasme particulièrement. Contribuer à des projets concrets dans un environnement où l’UX et l’innovation technologique sont au cœur des priorités correspond pleinement à mes aspirations professionnelles et à ma volonté d’évoluer sur des technologies modernes comme React, Next.js et TypeScript.
    `.trim(),
    mainContent: `
Actuellement en formation de Concepteur-Développeur d’Applications Web & Mobile à ADA Tech School, je recherche une alternance à partir de septembre 2025. Je possède de solides bases en JavaScript et TypeScript, et j’ai déjà développé des interfaces dynamiques avec React et Next.js dans le cadre de projets académiques et personnels. Mes expériences m’ont permis d’intégrer des APIs REST, de créer des composants réutilisables, et d’optimiser les performances pour offrir une expérience utilisateur fluide.

Je maîtrise l’utilisation de Git pour la gestion de version, je suis à l’aise avec les principes de responsive design et je m’intéresse particulièrement à l’accessibilité et à l’ergonomie des interfaces. Mon profil est également marqué par une curiosité constante pour les technologies émergentes, notamment autour de l’IA générative, et une envie de contribuer à des solutions concrètes qui améliorent la productivité et l’efficacité des utilisateurs finaux.
    `.trim(),
    conclusion: `
Rejoindre votre équipe me permettrait de mettre mes compétences techniques au service de projets à forte valeur ajoutée, tout en approfondissant mes connaissances sur le développement front-end et l’intégration d’outils d’IA. Je serais ravi d’échanger avec vous afin de discuter de la manière dont je pourrais contribuer à vos ambitions et m’investir pleinement dans cette mission.

Vous trouverez mon CV en pièce jointe, et mes réalisations sont disponibles sur mon portfolio (ultime-portfolio.vercel.app) ainsi que sur mon GitHub (github.com/Ange230700).
    `.trim(),
  },
  closing: {
    regards: "Respectueusement,",
    signature: "Ange KOUAKOU",
  },
};

export default coverLetterData;
