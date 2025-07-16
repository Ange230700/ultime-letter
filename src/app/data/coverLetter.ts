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
    date: "16 juillet 2025",
    recipientName: "Malik Amghar",
    recipientCompany: "TheGiftsClub",
    recipientAddress: "Télétravail / Paris",
  },
  subject: "Candidature – Alternant Développeur Front-end React/TypeScript",
  salutation: "Bonjour Malik,",
  body: {
    introduction: `
Actuellement apprenant développeur full-stack à ADA Tech School, je souhaite rejoindre TheGiftsClub en tant qu’alternant Développeur Front-end. Votre mission d’engager les clients via des jeux personnalisés m’inspire particulièrement et je suis motivé à contribuer à vos projets dès la rentrée 2025.
    `.trim(),
    mainContent: `
Durant mes formations à ADA Tech School et Wild Code School, j’ai acquis une solide expertise en React, TypeScript, Next.js et Node.js, tout en perfectionnant mes compétences à travers des projets en équipe et personnels, dont la plateforme de streaming “Streamia” développée en Next.js/TypeScript, ainsi qu’une interface de data visualisation en React/Chart.js. J’ai aussi mis en pratique les méthodes Agile/SCRUM, le Git Flow, la CI/CD et la collaboration en environnement remote.

Curieux et passionné par l’innovation, j’aime explorer les concepts back-end. Mon autonomie, ma capacité à apprendre vite et à travailler en équipe font de moi un candidat engagé pour relever les défis techniques de TheGiftsClub.
    `.trim(),
    conclusion: `
Intégrer TheGiftsClub serait pour moi l’opportunité de participer à l’évolution de solutions ludiques et innovantes, tout en poursuivant ma formation vers le titre RNCP de Concepteur-Développeur d’Applications Web & Mobile. Je suis disponible pour Septembre 2025, y compris en full remote.

Je reste à votre disposition pour un échange, et vous remercie pour l’attention portée à ma candidature.
    `.trim(),
  },
  closing: {
    regards: "Bien cordialement,",
    signature: "Ange KOUAKOU",
  },
};

export default coverLetterData;
