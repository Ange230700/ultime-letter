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
    recipientCompany: "Karmen",
    recipientAddress: "17 Rue du Faubourg Montmartre, 75009 Paris, France",
  },
  subject: "Candidature – Stage développeur fullstack TypeScript",
  salutation: "Bonjour Madame, Monsieur,",
  body: {
    introduction: `
Karmen incarne pour moi l’exemple d’une fintech innovante et ambitieuse, capable de transformer l’accès au financement grâce à la technologie. Votre approche, alliant fiabilité et simplicité pour vos clients, et votre exigence de qualité dans chaque ligne de code, correspondent à mes aspirations professionnelles. Participer à l’évolution d’une plateforme à fort impact business, au sein d’une équipe où chaque contribution compte, représente pour moi une opportunité stimulante.
    `.trim(),
    mainContent: `
Actuellement en formation de Concepteur-Développeur d’Applications Web & Mobile à ADA Tech School, je recherche un stage à partir de septembre 2025. Je maîtrise TypeScript et React, et j’ai une expérience significative avec Node.js et NestJS pour la conception d’APIs robustes. Mes projets m’ont amené à intégrer des APIs tierces, gérer des transactions, et mettre en place des fonctionnalités back-end à forte valeur ajoutée. J’ai également travaillé sur la conception d’interfaces utilisateurs responsives et performantes, intégrant TailwindCSS et Prisma pour optimiser la gestion et la présentation des données. Rigoureux et soucieux de la qualité, je pratique la revue de code et l’écriture de tests afin d’assurer maintenabilité et performance.
    `.trim(),
    conclusion: `
Rejoindre Karmen serait pour moi l’occasion de mettre mes compétences fullstack au service d’une plateforme financière innovante, tout en évoluant dans un environnement exigeant et formateur. Je serais ravi de contribuer à la conception, au développement et à l’optimisation de vos fonctionnalités, tout en apprenant auprès de vos experts pour répondre aux défis techniques et métier d’une fintech en pleine expansion. Vous trouverez mon CV en pièce jointe, et mes réalisations sont disponibles sur mon portfolio (ultime-portfolio.vercel.app) ainsi que sur mon GitHub (github.com/Ange230700). Je serais ravi d’échanger avec vous pour discuter plus en détail de ma candidature.
    `.trim(),
  },
  closing: {
    regards: "Respectueusement,",
    signature: "Ange KOUAKOU",
  },
};

export default coverLetterData;
