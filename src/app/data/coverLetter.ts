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
    date: "2 juin 2025",
    recipientName: "Responsable Recrutement",
    recipientCompany: "Alobees",
    recipientAddress: "142 Boulevard Diderot, 75012 Paris, France",
  },
  salutation: "Madame, Monsieur,",
  body: {
    introduction:
      "Inspiré par la mission d'Alobees qui est de proposer des solutions digitales permettant d'améliorer les processus dans le domaine du BTP et par votre stack TypeScript full JS, je souhaite intégrer votre équipe en alternance de 12 ou 36 mois pour participer à leurs développements.",

    mainContent:
      "Mon parcours académique m'a permis de construire une solide maîtrise de l’écosystème JavaScript / TypeScript. Mes projets – de la plateforme vidéo *Streamia* à l’application React de visualisation des données du FBI – m’ont permis de développer des interfaces en React / Next.js, d’implémenter des API REST. Au fil de ces expériences, j’ai adopté les bonnes pratiques Git Flow, l’intégration continue et les rituels Scrum. Je suis particulièrement motivé par votre stack (ReactJS, React-Native, NodeJS / SailsJS) et par les défis de packaging, de déploiement et de performance qu’implique une solution SaaS temps réel. Rigoureux et force de proposition, je saurai collaborer via Github, Linear et Slack pour livrer des fonctionnalités fiables et scalables.",

    conclusion:
      "Rejoindre Alobees représente pour moi l’opportunité de contribuer au développement de services ayant un impact concret sur le terrain, progresser aux côtés d’une équipe passionnée et participer activement à la réussite d’une startup en pleine croissance. Je serais ravi d’échanger avec vous afin de détailler de vive voix ma motivation et la valeur que je peux apporter à votre équipe.",
  },
  closing: {
    regards: "Respectueusement,",
    signature: "Ange KOUAKOU",
  },
};

export default coverLetterData;
