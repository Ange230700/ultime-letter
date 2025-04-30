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
    date: "3 Avril 2025",
    recipientName: "",
    recipientCompany: "Edflex",
    recipientAddress: "44200 Nantes, France",
  },
  salutation: "Madame, Monsieur,",
  body: {
    introduction:
      "Actuellement en formation Développeur Web et Mobile à l’ADA Tech School, je suis très enthousiaste à l’idée de rejoindre Edflex en tant que Développeur Fullstack en alternance à partir de septembre 2025. Votre mission d’accompagner les entreprises dans leur transformation digitale et le renouvellement des compétences me motive particulièrement, tout comme votre engagement à offrir une expérience d’apprentissage innovante et performante.",
    mainContent:
      "À travers mes différentes expériences académiques et professionnelles, j’ai acquis une solide maîtrise des technologies telles que PHP, Symfony, Composer et Twig. Lors de projets comme le développement d’un back-office pour une association sous PHP-Symfony, j’ai pu appliquer concrètement les bonnes pratiques en matière d’architecture logicielle et de gestion des API. Je suis particulièrement attiré par votre environnement technique stimulant et suis déterminé à approfondir mes connaissances en Clean Architecture et Domain Driven Design au sein de vos équipes.",
    conclusion:
      "Rigoureux, autonome, et doté d’une grande capacité d’adaptation, je suis impatient de contribuer activement aux projets ambitieux d’Edflex et d’apporter mes compétences techniques et humaines à votre collectif agile. Je serais ravi d’échanger avec vous lors d’un entretien afin de vous présenter plus en détail ma motivation et les contributions que je pourrais apporter à votre équipe.",
  },
  closing: {
    regards: "Respectueusement,",
    signature: "Ange KOUAKOU",
  },
};

export default coverLetterData;
