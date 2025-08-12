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
    recipientCompany: "Davidson Consulting",
    recipientAddress: "Boulogne-Billancourt, France",
  },
  subject: "Candidature – Alternance Développeur Javascript (Front)",
  salutation: "Bonjour Madame, Monsieur,",
  body: {
    introduction: `
Davidson, par son engagement en faveur de l’innovation technologique, de l’éco-conception et de la qualité de vie au travail, représente pour moi l’environnement idéal pour évoluer en tant que développeur Javascript en alternance. L’opportunité de rejoindre une entreprise certifiée B Corp, reconnue Great Place To Work, et de contribuer à des outils internes utilisés par plus de 3 000 collaborateurs est à la fois motivante et alignée avec mes valeurs professionnelles.
    `.trim(),
    mainContent: `
Actuellement en formation de Concepteur-Développeur d’Applications Web & Mobile à ADA Tech School, je recherche une alternance de deux ans à partir de septembre 2025. Je maîtrise JavaScript/TypeScript ainsi que React.js et Node.js, et j’ai également travaillé avec Vue.js sur des projets d’intégration et de développement d’interfaces dynamiques. Mon expérience inclut la mise en place de composants réutilisables, l’intégration d’APIs, la gestion de versions avec Git, et le déploiement via Docker dans un contexte CI/CD.

Au fil de mes projets, j’ai appris à analyser les besoins utilisateurs, proposer des solutions techniques adaptées et assurer la qualité du code via tests et revues. Je suis motivé par la perspective de travailler sur le parc applicatif de Davidson, d’optimiser les outils internes et de contribuer à la recette, la mise en production et l’amélioration continue dans un environnement agile et collaboratif.
    `.trim(),
    conclusion: `
Rejoindre l’équipe Twister au sein du pôle Web serait pour moi l’occasion d’évoluer aux côtés de développeurs expérimentés, de monter en compétences sur Vue.js, React.js, Node.js et Docker, et de contribuer à des projets concrets ayant un impact direct sur les utilisateurs finaux. Je serais heureux d’échanger avec vous afin de détailler ma motivation et mes réalisations.

Vous trouverez mon CV en pièce jointe et mes projets sont disponibles sur mon portfolio (ultime-portfolio.vercel.app) et mon GitHub (github.com/Ange230700).
    `.trim(),
  },
  closing: {
    regards: "Respectueusement,",
    signature: "Ange KOUAKOU",
  },
};

export default coverLetterData;
