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
    date: "16 juin 2025",
    recipientName: "Équipe Recrutement",
    recipientCompany: "CLIKING",
    recipientAddress: "Montreuil, Île-de-France, France",
  },
  subject:
    "Candidature alternance – Apprenti Développeur Full Stack NodeJS / Angular H/F",
  salutation: "Madame, Monsieur,",
  body: {
    introduction: `
Actuellement apprenant développeur full stack à ADA Tech School, je suis à la recherche d’une alternance de 12 à 36 mois à partir de septembre 2025, dans le cadre de la préparation au titre RNCP de Concepteur-Développeur d’Applications Web & Mobile. C’est avec un vif intérêt que je candidate chez CLIKING pour contribuer au développement de vos solutions innovantes en tant qu’apprenti développeur NodeJS/Angular.
    `.trim(),
    mainContent: `
Mon parcours m’a permis de développer une expertise en front-end (Angular, TypeScript, React) et en back-end (Node.js, Express, NestJS, API REST, MySQL/PostgreSQL), avec un goût prononcé pour l’agilité et la qualité logicielle. J’ai co-développé une application de data visualisation avec React et TypeScript, réalisé une plateforme de streaming sécurisée (Next.js), et participé au développement d’outils métiers et de quiz avec Angular et NestJS, en intégrant CI/CD et documentation technique.
Je maîtrise ainsi les fondamentaux attendus chez CLIKING : développement de nouvelles fonctionnalités, intégration d’APIs tierces, sécurité, tests et documentation. Sensibilisé à l’amélioration continue, je saurai apporter rigueur, curiosité et force de proposition au sein de votre équipe agile.
    `.trim(),
    conclusion: `
Rejoindre CLIKING, c’est l’opportunité de m’investir au cœur d’une équipe jeune et dynamique, sur un produit SaaS à fort potentiel et avec des responsabilités concrètes. Je serais ravi d’échanger de vive voix pour discuter de ma motivation et de la valeur que je peux apporter à votre équipe. Je vous remercie par avance pour votre attention et reste à votre disposition pour toute information complémentaire.
    `.trim(),
  },
  closing: {
    regards: "Respectueusement,",
    signature: "Ange KOUAKOU",
  },
};

export default coverLetterData;
