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
    date: "16 juin 2025",
    recipientName: "Sébastien Joffre",
    recipientCompany: "Infinite Studio",
    recipientAddress: "Toulouse, France",
  },
  salutation: "Monsieur Joffre,",
  body: {
    introduction:
      "Actuellement apprenant développeur full-stack à ADA Tech School, je vous adresse ma candidature pour le stage de développeur web au sein d’Infinite Studio. Passionné par le développement web et motivé par l’idée de rejoindre une équipe à taille humaine pour contribuer à des projets innovants, je souhaite approfondir mes compétences sur Angular, NestJS et les technologies modernes de votre stack.",
    mainContent:
      "Au fil de mes expériences en formation et en projets personnels, j’ai développé des applications avec Angular, NestJS et MySQL, et j’ai acquis une maîtrise concrète de TypeScript, de la conception à la mise en production. J’ai notamment conçu 'VoidNull', un gestionnaire d’items en Angular et NestJS avec pagination, API REST et gestion de base de données. En équipe, j’ai aussi travaillé sur 'Void Trivia', un quiz multi-thèmes en Angular, PrimeNG et Tailwind, avec la mise en place de rituels agiles (daily meetings, rétrospectives). Ma rigueur, mon autonomie et ma curiosité m’incitent à aller plus loin, à apprendre et à partager, tout en gardant à cœur la qualité du code et la collaboration.",
    conclusion:
      "Intégrer Infinite Studio représente pour moi l’opportunité de progresser auprès de développeurs expérimentés, de contribuer à des projets sur-mesure et de renforcer mes compétences dans un environnement stimulant. Enthousiaste à l’idée de rejoindre votre équipe, je serais ravi d’échanger lors d’un entretien pour discuter plus en détail de ma motivation et de la valeur que je pourrais apporter à vos projets.",
  },
  closing: {
    regards: "Cordialement,",
    signature: "Ange KOUAKOU",
  },
};

export default coverLetterData;
