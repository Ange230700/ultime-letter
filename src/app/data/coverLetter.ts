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
    date: "23 juin 2025",
    recipientName: "Service des Ressources Humaines",
    recipientCompany: "LegalPlace",
    recipientAddress: "Paris, France",
  },
  subject:
    "Candidature – Junior Développeur Fullstack (alternance) chez LegalPlace",
  salutation: "Madame, Monsieur,",
  body: {
    introduction: `
Actuellement apprenant à ADA Tech School, je souhaite vivement rejoindre LegalPlace en tant que Junior Développeur Fullstack afin de contribuer à rendre le droit plus accessible grâce à la technologie. Votre mission résonne particulièrement avec mon parcours et mon engagement à résoudre des problématiques complexes en équipe, tout en développant des produits utiles et innovants.
    `.trim(),
    mainContent: `
Formé à la fois en développement frontend et backend, j’ai acquis une solide maîtrise de TypeScript, React, Node.js, et ai pu mettre en œuvre ces compétences lors de projets concrets, notamment sur une plateforme de streaming (Next.js, React, Prisma, MySQL) et une application de data visualisation utilisant React, TypeScript et Chart.js. Ces expériences m'ont permis de travailler en méthode Agile, de collaborer efficacement au sein d’équipes pluridisciplinaires, et de déployer des solutions robustes dans des délais courts.

J’ai également eu l’opportunité de travailler avec NestJS et l'ORM Prisma pour développer des APIs REST évolutives, ainsi que d’intégrer des pratiques DevOps (CI/CD avec Vercel et Render), ce qui me permet d’appréhender l’ensemble du cycle de vie d’une application web moderne.

Curieux et force de proposition, j’aime challenger les choix techniques pour garantir la qualité des livrables, tout en restant attentif au partage de connaissances et à la progression collective de l’équipe. Mon goût pour l’innovation et la transmission me pousse aussi à accompagner et mentorer mes pairs lorsque l’occasion se présente.
    `.trim(),
    conclusion: `
Intégrer LegalPlace serait l’opportunité d’évoluer dans un environnement stimulant, d’apporter ma rigueur et ma créativité au service d’une mission à impact, et de continuer à grandir professionnellement. Je me tiens à votre disposition pour tout échange, entretien ou test technique afin de détailler mon parcours et ma motivation.

Je vous remercie pour votre attention et l’opportunité offerte.
    `.trim(),
  },
  closing: {
    regards: "Respectueusement,",
    signature: "Ange KOUAKOU",
  },
};

export default coverLetterData;
