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
    date: "11 août 2025",
    recipientName: "À l’attention de l’équipe Tech & RH",
    recipientCompany: "ModaResa",
    recipientAddress: "5 Parvis Alan Turing, 75013 Paris, France",
  },
  subject: "Candidature – Alternance Full Stack Developer",
  salutation: "Bonjour Madame, Monsieur,",
  body: {
    introduction: `
ModaResa m’inspire par sa mission de révolutionner la planification des showroom sales campaigns dans la mode, tout en optimisant l’efficacité opérationnelle et en réduisant l’empreinte carbone du secteur. L’opportunité de rejoindre une équipe passionnée, de travailler sur un produit à fort impact et d’intégrer l’IA comme levier central d’innovation correspond pleinement à mes aspirations techniques et à mes valeurs.
    `.trim(),
    mainContent: `
Actuellement en formation de Concepteur-Développeur d’Applications Web & Mobile à ADA Tech School, je recherche une alternance de 12 à 24 mois à partir de septembre 2025. Je maîtrise JavaScript/TypeScript et j’ai développé plusieurs projets concrets en React (frontend) et Node.js/NestJS (backend), intégrant des APIs REST et des bases de données SQL. J’ai également une forte curiosité pour l’IA et les LLMs. Mes expériences m’ont permis de concevoir des interfaces intuitives avec TailwindCSS, de mettre en place des architectures modulaires, de développer des fonctionnalités à fort impact business et de maintenir un haut niveau de qualité grâce aux tests et revues de code.
    `.trim(),
    conclusion: `
Rejoindre ModaResa serait pour moi l’occasion de contribuer activement à un projet ambitieux et durable, tout en développant mes compétences fullstack et en approfondissant mes connaissances en IA appliquée. Je serais heureux de mettre mon énergie, mon sens du détail et ma capacité d’adaptation au service de votre mission, et de grandir au contact d’une équipe expérimentée. Mes réalisations sont disponibles sur mon portfolio (ultime-portfolio.vercel.app) ainsi que sur mon GitHub (github.com/Ange230700). Je reste à votre disposition pour échanger sur ma candidature et la manière dont je pourrais contribuer à vos projets.
    `.trim(),
  },
  closing: {
    regards: "Respectueusement,",
    signature: "Ange KOUAKOU",
  },
};

export default coverLetterData;
