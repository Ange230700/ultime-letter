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
    senderPhone: "+33 7 59 80 23 43",
    date: "4 juin 2025",
    recipientName: "Équipe Recrutement",
    recipientCompany: "Start‑up – Founding Engineer",
    recipientAddress: "59000 Lille, France",
  },
  salutation: "Madame, Monsieur,",
  body: {
    introduction:
      "C’est avec enthousiasme que je vous propose ma candidature au poste de Founding Engineer. Votre ambition de bâtir une solution mêlant front‑end Angular, back‑end NestJS, IA en Python et une infrastructure cloud moderne résonne pleinement avec mon parcours et mes aspirations professionnelles. Rejoindre votre équipe fondatrice représente pour moi l’opportunité de mettre au service de votre vision mon goût prononcé pour l’innovation, la résolution de problèmes complexes et le delivery rapide de fonctionnalités à forte valeur ajoutée.",

    mainContent:
      "Actuellement étudiant à l'ADA Tech School, j'ai développé plusieurs applications full-stack axées sur les performances et l'expérience utilisateur. L'un de mes projets les plus remarquables est VoidNull, une plateforme utilisant Angular et NestJS avec une API REST paginée. J'ai également créé Streamia, un service de streaming dans Next.js. De plus, j'ai travaillé sur DAF, un outil permettant de visualiser les données d'enquête du FBI à l'aide de React et Chart.js, démontrant ainsi ma capacité à transformer de grands ensembles de données en informations exploitables. Ces projets ont mis en évidence l'importance de la collaboration agile. J'ai également de l'expérience avec Postgres, Prisma et la modélisation de schémas relationnels.",

    conclusion:
      "Intégrer votre start‑up en tant que Founding Engineer serait l’occasion de co‑construire une architecture robuste tout en façonnant la culture technique et humaine de l’entreprise. Je suis prêt à assumer de larges responsabilités et à affronter la transversalité de votre sujet. Je serais ravi d’échanger avec vous afin de vous exposer plus en détail la valeur que je peux apporter à votre aventure.",
  },
  closing: {
    regards: "Respectueusement,",
    signature: "Ange",
  },
};

export default coverLetterData;
