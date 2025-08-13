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
    recipientCompany: "Astek",
    recipientAddress: "Lille, France",
  },
  subject:
    "Candidature spontanée – Stage / Alternance Développeur Fullstack (Node.js / React / Vue.js)",
  salutation: "Bonjour Madame, Monsieur,",
  body: {
    introduction: `
Votre équipe BUILD et votre approche agile, alliant innovation technologique, qualité logicielle et collaboration étroite, correspondent parfaitement à l’environnement dans lequel je souhaite évoluer. Je me permets de vous adresser ma candidature spontanée pour un stage ou une alternance à partir de septembre 2025, convaincu que mon profil technique et ma motivation peuvent également contribuer à vos projets.
    `.trim(),
    mainContent: `
Actuellement en formation de Concepteur-Développeur d’Applications Web & Mobile à ADA Tech School, je prépare un titre RNCP 6. Je maîtrise JavaScript/TypeScript et ai travaillé sur des projets complets avec Node.js, React et Vue.js, ainsi qu’avec des bases SQL et des APIs REST. Mon expérience m’a permis de développer des fonctionnalités de bout en bout, de mettre en place des tests unitaires, et d’appliquer les bonnes pratiques de clean code et d’architecture.

Je suis également familier avec la méthode Scrum et les cycles courts, et j’apprécie particulièrement la dynamique des peer reviews et le partage de connaissances. Curieux et force de proposition, je m’implique volontiers dans l’amélioration continue des produits et des processus, avec un souci constant de performance et de maintenabilité.
    `.trim(),
    conclusion: `
Intégrer Astek en stage ou alternance serait pour moi l’opportunité de contribuer activement à des projets techniquement ambitieux, tout en continuant à progresser aux côtés d’experts passionnés. Je serais ravi d’échanger avec vous afin de discuter de la manière dont je pourrais m’impliquer dans vos missions et participer à l’atteinte de vos objectifs.

Vous trouverez mon CV en pièce jointe, et mes réalisations sont disponibles sur mon portfolio (ultime-portfolio.vercel.app) ainsi que sur mon GitHub (github.com/Ange230700).
    `.trim(),
  },
  closing: {
    regards: "Respectueusement,",
    signature: "Ange KOUAKOU",
  },
};

export default coverLetterData;
