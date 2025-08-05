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
    date: "5 août 2025",
    recipientName: "Équipe Tech & RH",
    recipientCompany: "Nanotera",
    recipientAddress: "92300 Levallois-Perret, France",
  },
  subject:
    "Candidature spontanée – Contrat d’apprentissage développeur fullstack TypeScript",
  salutation: "Bonjour Madame, Monsieur,",
  body: {
    introduction: `
Actuellement en formation de Concepteur-Développeur d'Applications Web et Mobile à ADA Tech School, je suis à la recherche d’un contrat d’apprentissage de 12 à 36 mois à partir de septembre 2025. Intéressé par les défis techniques et l'innovation, votre approche mêlant excellence opérationnelle, projets variés, et stack technique moderne m'a particulièrement interpellé.
    `.trim(),
    mainContent: `
Fort d’une solide expérience en développement fullstack, j'ai mené plusieurs projets personnels tels que Streamia (Next.js, Prisma, MySQL) et Abyss (Angular, NestJS). Ces expériences m'ont permis d'appliquer concrètement mes compétences en TypeScript, React, Node.js et Docker, tout en mettant en place des processus automatisés de CI/CD (Vercel, Render, AlwaysData). Je pratique régulièrement les principes SOLID et accorde une grande importance à la qualité du code, à l’agilité et à l'amélioration continue.

Votre environnement technique – TypeScript, React et Node.js – correspond énormément à mes aspirations et compétences actuelles. Je suis particulièrement motivé par l’opportunité d’évoluer au sein d’une équipe expérimentée comme la vôtre, d’approfondir mes connaissances en conception d’architecture logicielle et de contribuer activement à des projets à forte valeur ajoutée.
    `.trim(),
    conclusion: `
Je serais ravi d’échanger avec vous sur les défis techniques auxquels vous êtes confrontés et sur la manière dont je pourrais y contribuer. Vous trouverez en pièce jointe mon CV, et mes projets sont disponibles sur mon portfolio ainsi que sur mon GitHub.

Au plaisir d’un prochain échange,
    `.trim(),
  },
  closing: {
    regards: "Respectueusement,",
    signature: "Ange KOUAKOU",
  },
};

export default coverLetterData;
