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
    date: "30 mai 2025",
    recipientName: "Responsable recrutement",
    recipientCompany: "SAP Labs",
    recipientAddress: "14000 Caen, France",
  },
  salutation: "Madame, Monsieur,",
  body: {
    introduction:
      "Actuellement apprenant à l’ADA Tech School, je recherche activement une alternance de 12 à 36 mois à partir de juin 2025. Votre offre d'apprentissage chez SAP Labs dans le domaine du développement logiciel et de l'IA correspond beaucoup à mes compétences et à mes aspirations professionnelles.",

    mainContent:
      "Mon parcours m'a permis de développer une solide expertise en technologies frontend et backend telles que TypeScript, Java, React, Next.js, et Angular. Lors de projets personnels et en équipe, notamment avec Streamia et Void Quiz, j'ai acquis une expérience concrète en authentification, gestion des droits utilisateurs et visualisation des données. Passionné par l'intelligence artificielle, l'opportunité d’intégrer SAP Joule dans SAP Convergent Charging représente un défi motivant, aligné avec mon souhait d’approfondir mes compétences dans l'automatisation et l'optimisation des processus métiers grâce à l’IA. Ma rigueur, mon adaptabilité et ma capacité à travailler efficacement au sein d’équipes agiles seront des atouts pour réussir cette alternance.",

    conclusion:
      "Rejoindre SAP Labs serait une excellente occasion de contribuer activement à des projets innovants dans un environnement international et stimulant. Je serais ravi d'échanger avec vous lors d’un entretien afin de vous présenter en détail ma motivation et les compétences que je pourrais apporter à votre équipe. Je suis disponible à partir de juin 2025 et prêt à m’investir pleinement dans cette aventure professionnelle.",
  },
  closing: {
    regards: "Respectueusement,",
    signature: "Ange KOUAKOU",
  },
};

export default coverLetterData;
