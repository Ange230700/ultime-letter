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
    recipientCompany: "Emil Frey France",
    recipientAddress: "France",
  },
  subject:
    "Candidature spontanée – Stage / Alternance Développeur Web Front-End React",
  salutation: "Bonjour Madame, Monsieur,",
  body: {
    introduction: `
Votre Digital Factory et ses projets innovants dans un environnement technique moderne m’ont particulièrement attiré. Je me permets de vous adresser ma candidature spontanée pour un stage ou une alternance à partir de septembre 2025, convaincu que mes compétences techniques et ma motivation peuvent également contribuer à vos objectifs.
    `.trim(),
    mainContent: `
Actuellement en formation de Concepteur-Développeur d’Applications Web & Mobile à ADA Tech School, je prépare un titre RNCP de niveau 6. Je maîtrise JavaScript/TypeScript et React, ainsi que Next.js, et j’ai travaillé sur des projets complets allant de la conception à la mise en production. Mes expériences m’ont amené à intégrer des designs responsives avec HTML5, CSS3/SCSS, à collaborer en méthodologie agile, et à utiliser des environnements Docker et Git pour assurer un développement structuré et maintenable.

Je suis également familier avec la mise en place de tests fonctionnels pour garantir la stabilité des applications, ainsi qu’avec les bonnes pratiques de performance et de sécurité. Rigoureux, curieux et force de proposition, j’apprécie particulièrement le travail en équipe et la collaboration avec les équipes fonctionnelles pour transformer des besoins en solutions concrètes.
    `.trim(),
    conclusion: `
Rejoindre Emil Frey France en stage ou alternance serait pour moi l’occasion de contribuer activement à vos projets front-end tout en développant mes compétences au contact de professionnels expérimentés. Je serais ravi d’échanger avec vous afin de discuter de la manière dont je pourrais m’impliquer dans vos missions actuelles et futures.

Vous trouverez mon CV en pièce jointe, et mes réalisations sont disponibles sur mon portfolio (ultime-portfolio.vercel.app) ainsi que sur mon GitHub (github.com/Ange230700).
    `.trim(),
  },
  closing: {
    regards: "Respectueusement,",
    signature: "Ange KOUAKOU",
  },
};

export default coverLetterData;
