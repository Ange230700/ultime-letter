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
    date: "20 juin 2025",
    recipientName: "Stéphane Le Rouzès",
    recipientCompany: "Priveeo",
    recipientAddress: "35770 Vern-sur-Seiche, France",
  },
  subject:
    "Relance – Candidature au poste de Développeur Full stack en alternance F/H",
  salutation: "Monsieur Le Rouzès,",
  body: {
    introduction: `
Je me permets de vous recontacter concernant ma candidature au poste de Développeur Full Stack en alternance au sein de Priveeo, pour lequel je vous ai transmis mon dossier le 6 juin dernier.
Sincèrement motivé par votre concept de plateforme innovante, je reste convaincu que mon parcours et mes compétences en Angular, NestJS, TypeScript et bases de données relationnelles seraient des atouts pour contribuer activement au développement de vos nouvelles fonctionnalités, aussi bien sur la partie Front que Back Office.
    `.trim(),
    mainContent: `
Au cours de mes formations à ADA Tech School et à la Wild Code School, ainsi que lors de mes projets personnels tels que “VoidNull” (Angular, NestJS, MySQL) et “Streamia” (Next.js, Prisma, MySQL), j’ai pu acquérir une solide expérience en développement full stack, en gestion de bases de données et en déploiement d’applications. Ces expériences m’ont permis d’être rapidement opérationnel sur des environnements techniques proches des vôtres et de m’intégrer efficacement à une équipe Agile, tout en respectant les objectifs fixés.
Toujours désireux de progresser, je souhaite vivement rejoindre Priveeo pour mettre mes compétences au service de votre croissance et continuer à me former dans le cadre d’une alternance, tout en préparant la certification RNCP de niveau 6.
    `.trim(),
    conclusion: `
Je reste à votre disposition pour un entretien à votre convenance afin d’échanger sur mes motivations et la valeur que je pourrais apporter à votre équipe.
Dans l’attente de votre retour, je vous remercie de l’attention portée à ma candidature.
    `.trim(),
  },
  closing: {
    regards: "Respectueusement,",
    signature: "Ange KOUAKOU",
  },
};

export default coverLetterData;
