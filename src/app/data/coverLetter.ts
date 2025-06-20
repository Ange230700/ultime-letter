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
    recipientName: "Nathan Bouldoires",
    recipientCompany: "Co-fondateur de Jane",
    recipientAddress: "6-8, Boulevard Haussmann, Paris, Île-de-France FR",
  },
  subject:
    "Relance – Stage / Alternance Développeur·se Front-End (React / TypeScript) chez Jane",
  salutation: "Monsieur Bouldoires,",
  body: {
    introduction: `
Je me permets de revenir vers vous concernant ma candidature au poste de Développeur·se Front-End (React / TypeScript) chez Jane, envoyée le 6 juin dernier. Je reste très enthousiaste à l’idée de rejoindre votre équipe et de contribuer au développement d’outils innovants pour l’autoconsommation collective.
    `.trim(),
    mainContent: `
Mon parcours à ADA Tech School ainsi que mes projets personnels (notamment la plateforme Streamia développée en Next.js, ou l’outil de data visualisation DAF réalisé avec React et Chart.js) m’ont permis de maîtriser React, TypeScript, l’intégration de maquettes Figma et la consommation d’API REST, compétences essentielles pour répondre aux missions de Jane. Je me reconnais totalement dans l’esprit entrepreneurial et proactif que vous recherchez.
    `.trim(),
    conclusion: `
Je suis convaincu que mon engagement, mon sens de l’initiative et ma capacité à travailler en équipe peuvent être de réels atouts pour accompagner la croissance de Jane et relever les défis techniques liés à vos projets. Je serais ravi de pouvoir échanger avec vous sur ma candidature et sur la manière dont je pourrais contribuer à vos ambitions.
Dans l’attente de votre retour, je reste à votre disposition pour tout complément d’information ou entretien.
    `.trim(),
  },
  closing: {
    regards: "Respectueusement,",
    signature: "Ange KOUAKOU",
  },
};

export default coverLetterData;
