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
    recipientName: "Angélique Rosbif",
    recipientCompany: "Responsable recrutement chez Hellio",
    recipientAddress: "92110 Clichy, France",
  },
  subject: "Relance – Candidature Alternance Développeur Full Stack H/F",
  salutation: "Madame Rosbif,",
  body: {
    introduction: `
Je me permets de vous relancer concernant ma candidature au poste d’Alternant Développeur Full Stack, transmise le 6 juin dernier. Très motivé par l’idée de rejoindre Hellio et de contribuer à la transition énergétique à travers des solutions numériques innovantes, je reste particulièrement attentif à votre retour.
    `.trim(),
    mainContent: `
Ma formation à ADA Tech School, mes projets menés en Next.js, React, Node.js, Angular et NestJS, ainsi que ma maîtrise de Git, des bases de MySQL et des notions de Docker, font écho aux compétences recherchées dans votre annonce. J’ai l’habitude de travailler dans des environnements collaboratifs et agiles, en m’adaptant rapidement aux nouveaux outils et en valorisant la performance des applications développées.
    `.trim(),
    conclusion: `
Rejoindre vos équipes serait l’opportunité de mettre mes compétences techniques et mon engagement au service d’une mission porteuse de sens. Je suis disponible pour un entretien à votre convenance afin de vous exposer plus concrètement ma motivation et la valeur que je peux apporter à Hellio.
Dans l’attente de votre retour, je vous prie d’agréer, Madame, Monsieur, l’expression de mes salutations distinguées.
    `.trim(),
  },
  closing: {
    regards: "Respectueusement,",
    signature: "Ange KOUAKOU",
  },
};

export default coverLetterData;
