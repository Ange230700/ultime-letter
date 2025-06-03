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
    date: "3 juin 2025",
    recipientName: "Responsable Recrutement",
    recipientCompany: "Amadeus",
    recipientAddress: "Nice, France",
  },
  salutation: "Madame, Monsieur,",
  body: {
    introduction:
      "C’est avec un grand enthousiasme que je vous adresse ma candidature pour le poste d’Apprenti Développeur Frontend RefX Nevio (JavaScript/TypeScript/Angular) au sein d’Amadeus à Nice, en alternance de 12 ou 36 mois. Interessé par l’innovation digitale et motivé par la perspective de contribuer au futur de la distribution aérienne, je souhaite mettre mes compétences au service de votre équipe RefX Nevio.",

    mainContent:
      "Actuellement apprenant à ADA Tech School, j’ai consolidé une solide maîtrise de l’écosystème TypeScript et des frameworks modernes tels qu’Angular, React et NodeJS. Mes projets — de la plateforme de streaming *Streamia* à l’application de data-visualisation des enquêtes du FBI — m’ont permis de concevoir des interfaces performantes, d’intégrer des API REST et d’appliquer les bonnes pratiques Git Flow, CI/CD et Scrum. Curieux et rigoureux, je mène une veille active sur l’IA générative que j’utilise déjà pour accélérer la création d’UI et la génération de tests, démarche en phase avec votre volonté d’intégrer l’IA dans RefX pour livrer rapidement des démonstrations percutantes. Fort de l'expérience acquise lors de mes projets, je saurai maintenir la plateforme de démo, contourner les limitations techniques au besoin et développer des fonctionnalités innovantes basées sur Nevio en travaillant avec des données réelles ou simulées.",

    conclusion:
      "Intégrer Amadeus représente pour moi l’opportunité de contribuer à une solution utilisée par des millions de voyageurs, de progresser au sein d’une équipe d’excellence et de poursuivre mon parcours vers la certification RNCP niveau 7 en architecture logicielle. Je serais ravi d’échanger avec vous afin de détailler ma motivation et la valeur que je peux apporter à RefX Nevio.",
  },
  closing: {
    regards: "Respectueusement,",
    signature: "Ange KOUAKOU",
  },
};

export default coverLetterData;
