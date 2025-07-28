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
    date: "28 juillet 2025",
    recipientName: "Équipe Tech & RH",
    recipientCompany: "Stimcar",
    recipientAddress: "Couëron, Nantes, France",
  },
  subject: "Candidature spontanée – Développeur Fullstack TypeScript",
  salutation: "Bonjour Madame, Monsieur,",
  body: {
    introduction: `
Actuellement en formation de Concepteur-Développeur d'Applications web et mobile à ADA Tech School, je suis à la recherche d’un contrat d’apprentissage de 12 à 36 mois dès septembre 2025. Passionné par les projets concrets et le code utile sur le terrain, j’ai été immédiatement séduit par la vision de Stimcar et votre manière d’allier technologie, industrie, et impact réel.
    `.trim(),
    mainContent: `
Formé en développement fullstack, j’ai travaillé sur plusieurs projets personnels que j’ai conçus de bout en bout, comme Streamia (Next.js, Prisma, MySQL) ou Abyss (Angular, NestJS), et toujours dans une approche clean code, sécurité et déploiement CI/CD. Votre stack technique – TypeScript, React, Node.js, MariaDB, Docker – correspond à mon environnement de travail quotidien. J’utilise également Git, Linux, Prisma, et j’ai eu l’occasion d’explorer l’écosystème DevOps (Vercel, Render, AlwaysData).

J’accorde une attention particulière à l’autonomie, la rigueur et la capacité à livrer vite et bien en mode agile. Le fait de développer dans un environnement connecté à l’univers automobile et à l’atelier me motive particulièrement : donner du sens à chaque ligne de code.
    `.trim(),
    conclusion: `
Je serais ravi de pouvoir contribuer aux projets tech de Stimcar, et d’échanger avec vous pour en savoir plus sur vos défis actuels. Vous trouverez en pièce jointe mon CV, et mes projets sont consultables sur mon GitHub ou mon portfolio.

Au plaisir d’échanger prochainement !
    `.trim(),
  },
  closing: {
    regards: "Bien à vous,",
    signature: "Ange KOUAKOU",
  },
};

export default coverLetterData;
