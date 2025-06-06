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
    date: "6 juin 2025",
    recipientName: "Nathan Bouldoires",
    recipientCompany: "Jane",
    recipientAddress: "6-8 Boulevard Haussmann, 75009 Paris, France",
  },
  salutation: "Madame, Monsieur,",
  body: {
    introduction:
      "Actuellement apprenti développeur full-stack à ADA Tech School, je vous adresse ma candidature pour le poste de Développeur·se Front-End (React / TypeScript) en alternance au sein de Jane. Je vous soumets ma candidature car je pense que votre mission qui consiste à accompagner l’autoconsommation collective est très intéressante et pouvoir construire des solutions digitales représente un challenge que je souhaite relever.",

    mainContent:
      "Au cours de ma formation, j'ai conçu et développé plusieurs applications en TypeScript et React. L'un des projets les plus remarquables, DAF, consistait à créer une interface permettant de visualiser les données d'enquête du FBI à l'aide de React, PrimeReact et Chart.js avec des appels API REST. J'ai également créé Streamia, une plateforme de streaming sur Next.js, en utilisant TailwindCSS et Prisma pour l'authentification et la gestion des médias. Ce travail m'a permis de renforcer mes compétences en React.js, TypeScript et les meilleures pratiques en matière d'UX/UI. En outre, j'ai développé un projet personnel, VoidNull, à l'aide d'Angular et de NestJS, qui comprenait la pagination REST API et la modélisation de bases de données MySQL. Je maîtrise GitHub et l'optimisation des performances front-end, ce qui correspond aux besoins de Jane en matière d'intégration d'un simulateur d'énergie et de gestion des rôles.",

    conclusion:
      "Rejoindre Jane, c’est pour moi l’opportunité de mettre à profit mes compétences front-end dans un contexte à fort impact environnemental. Motivé et proactif, je souhaite m’investir dans le développement de votre application et contribuer à la structuration de votre produit. Je serais ravi de pouvoir échanger avec vous sur ma candidature et d’expliquer plus en détail la valeur que je peux apporter à votre équipe.",
  },
  closing: {
    regards: "Respectueusement,",
    signature: "Ange KOUAKOU",
  },
};

export default coverLetterData;
